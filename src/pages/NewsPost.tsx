import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useChangeNewsItemMutation, useGetNewsQuery } from 'store/api/products.api'
import { INews } from 'types/types'
import { Cart, Header, Footer, Loader, Breadcrumbs, Blog } from './index'

export const NewsPost: React.FC = () => {
    const { id } = useParams();
    const [post, setPost] = useState<INews[]>([]);
    const [totalPosts, setTotalPosts] = useState<INews[]>([]);
    const [, { isLoading }] = useChangeNewsItemMutation();
    const { data, error } = useGetNewsQuery({ title: id?.replaceAll('-', ' ') })
    const { data: totalPostsData, error: totalPostsError } = useGetNewsQuery({})

    useEffect(() => {
        if (data) {
            setPost(data)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        } else if (error) {
            console.error('Error:', error)
        }
        if (totalPostsData) {
            setTotalPosts(totalPostsData);
        } else if (totalPostsData) {
            console.error('Error:', totalPostsError)
        }
    }, [data, totalPostsData])



    return (
        <>
            <Header />
            <main>
                <Cart />
                {post.map(item =>
                    <Breadcrumbs
                        key={item.id}
                        previousPage="News"
                        currentPage={item.title}
                        title={item.title}
                    />
                )}
                {isLoading
                    ? <Loader />
                    : <Blog post={post} setPost={setPost} totalPosts={totalPosts}/>
                }
            </main>
            <Footer />
        </>
    )
}
