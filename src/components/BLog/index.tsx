import { ChangeEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { IComments } from 'types/types'
import { formatDate } from 'utils/formatDate'
import { useChangeNewsItemMutation, useGetNewsQuery } from 'store/api/products.api'
import { INews } from 'types/types'

type Props = {
    post: INews[],
    totalPosts: INews[],
    setPost: (post:INews[])=>void
}

export const Blog: React.FC<Props> = ({post, setPost, totalPosts}) => {
    const [success, setSuccess] = useState<boolean>(false);
    const [viewMoreActive, setViewMoreActive] = useState<boolean>(false);
    const [currentPost, setCurrentPost] = useState<number>(1);
    const [addPostComment, { isError }] = useChangeNewsItemMutation();
    const { error: postByIdError } = useGetNewsQuery({ id: currentPost.toString() });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const addComment = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        if (formData.email && formData.name) {
            setFormData({
                name: '',
                email: '',
                message: ''
            })
            const newComment: IComments = {
                id: Date.now().toString(),
                author: formData.name,
                date: formatDate(),
                text: formData.message
            };
            const updatedReviews = [...post[0].comments, newComment];
            const updatedPost = { ...post[0], comments: updatedReviews };
            await addPostComment({ body: updatedPost, id: updatedPost.id })
            setSuccess(true)
        } else if (isError) {
            console.error('Error:', isError);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const previousPost = () => {
        if (currentPost > 1) {
            setCurrentPost(prev => prev - 1);
            const previousPost = totalPosts.find(post => post.id === (currentPost - 1).toString());
            if (previousPost) {
                setPost([previousPost]);
            }
            setSuccess(false);
        } else if (postByIdError) {
            console.error('Error:', postByIdError);
        }
    };

    const nextPost = () => {
        if (currentPost < totalPosts.length) {
            setCurrentPost(prev => prev + 1);
            const nextPost = totalPosts.find(post => post.id === (currentPost + 1).toString());
            if (nextPost) {
                setPost([nextPost]);
            }
            setSuccess(false);
        } else if (postByIdError) {
            console.error('Error:', postByIdError);
        }
    };

    return (
        <section className='blog'>
            <div className="container">
                <div className="blog__content">
                    <article className='blog__article'>
                        {post.map((item: INews) =>
                            <div className='blog__article-box' key={item.id}>
                                <img className='blog__article-img' src={item.image} alt="" />
                                <h2 className='blog__article-title'>{item.title}</h2>
                                <p className={viewMoreActive ? 'blog__article-text more' : 'blog__article-text'}>{item.postText}</p>
                                {viewMoreActive
                                    ? <button className='blog__more-btn' onClick={() => setViewMoreActive(false)}>
                                        <p className='blog__more-text'>View Less</p>
                                        <FontAwesomeIcon style={{ height: "14px" }} icon={faArrowUp} />
                                    </button>
                                    : <button className='blog__more-btn' onClick={() => setViewMoreActive(true)}>
                                        <p className='blog__more-text'>View More</p>
                                        <FontAwesomeIcon style={{ height: "14px" }} icon={faArrowDown} />
                                    </button>
                                }
                                <div className='blog__article-buttons'>
                                    <button className={currentPost !== 1 ? 'blog__article-btn' : 'blog__article-btn disabled'} onClick={previousPost}>Previous Story</button>
                                    <button className={currentPost !== totalPosts.length ? 'blog__article-btn' : 'blog__article-btn disabled'} onClick={nextPost}>Next Story</button>
                                </div>
                            </div>
                        )}
                    </article>
                    <div className='blog__comments'>
                        {post.map(item =>
                            <div className='blog__comments-content' key={item.id}>
                                {item.comments.length === 0 &&
                                    <h3 className='blog__comments-title'>Not comments yet!</h3>
                                }
                                {item.comments.length === 1 &&
                                    <h3 className='blog__comments-title'>1 comment</h3>
                                }
                                {item.comments.length > 1 &&
                                    <h3 className='blog__comments-title'>{post[0]?.comments.length || 0} comments</h3>
                                }
                                <ul className='blog__comments-list'>
                                    {item.comments.map((comment: IComments) =>
                                        <li className='blog__comments-item' key={comment.id}>
                                            <p className='blog__comments-text'>{comment.text}</p>
                                            <div className='blog__comments-info'>
                                                <span className='blog__comments-author'>{comment.author}</span> ●
                                                <span className='blog__comments-data'>{comment.date}</span>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                        <div className='blog__reply'>
                            <h3 className='blog__reply-title'>Leave a Reply</h3>
                            <p className='blog__reply-text'>Nunc vehicula quam semper odio varius tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posue.</p>
                            <span className={success ? 'blog__reply-success active' : 'blog__reply-success'}>Your comment was posted successfully! Thank you!</span>
                            <form className='blog__reply-form' onSubmit={addComment}>
                                <input className='blog__reply-input' type="text" placeholder='Name' id='name' value={formData.name} onChange={handleInputChange} />
                                <input className='blog__reply-input' type="email" placeholder='Email' id='email' value={formData.email} onChange={handleInputChange} />
                                <textarea className='blog__reply-textarea' placeholder='Your message' id='message' value={formData.message} onChange={handleInputChange}></textarea>
                                <button className='blog__reply-btn' type='submit'>Submit Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
