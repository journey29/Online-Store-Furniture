import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faSliders, faClose } from '@fortawesome/free-solid-svg-icons'
import { INews } from 'types/types'
import { useGetNewsQuery } from 'store/api/products.api'
import { AsideNews } from './AsideNews'
import { NewsMainItem } from './NewsMainItem'

type Props = {
  currentPage: number,
  totalNews: INews[],
  setCurrentPage: (state: number) => void
}

export const NewsMain: React.FC<Props> = ({ setCurrentPage, currentPage, totalNews }) => {
  const { data, error } = useGetNewsQuery({})
  const [news, setNews] = useState<INews[]>([])
  const [totalPages, setTotalPages] = useState<number>(1);
  const [filterDrawerActive, setFilterDrawerActive] = useState<boolean>(false)

  useEffect(() => {
    reckonTotalPages();
    if (data) {
      setNews(data);
    } else if (error) {
      console.error('Error:', error)
    }
  }, [data]);

  const reckonTotalPages = (): void => {
    setTotalPages(Math.ceil(totalNews.length / 6))
  }
  const paginationBack = (page: number): void => {
    if (currentPage > 1) {
      setCurrentPage(page)
    }
  }
  const paginationForward = (page: number): void => {
    if (currentPage < totalPages) {
      setCurrentPage(page)
    }
  }
  return (
    <div className='news__main'>
      <div className='news-drawer'>
        <div className='news-drawer__button' onClick={() => setFilterDrawerActive(!filterDrawerActive)}>
          <FontAwesomeIcon icon={faSliders} />
          <p className='news-drawer__button-text'>Filter</p>
        </div>
        <div className={filterDrawerActive ? 'news-drawer__content active' : 'news-drawer__content'}>
          <button className='news-drawer__close' onClick={() => setFilterDrawerActive(false)}>
            <FontAwesomeIcon style={{ height: "24px" }} icon={faClose} />
          </button>
          <AsideNews />
        </div>
      </div>
      <div className='news__main-list'>
        {news.map(item =>
          <NewsMainItem item={item} />
        )}
      </div>
      {news.length > 6
        ? <div className='pagination'>
          <button onClick={() => paginationBack(currentPage - 1)} className={currentPage === 1 ? 'pagination__btn last' : 'pagination__btn'}>
            <FontAwesomeIcon icon={faChevronLeft} className='shop__pagination-left' />
          </button>
          {new Array(totalPages).fill(null).map((btn, i) =>
            <button className={currentPage === i + 1 ? 'pagination__btn active' : 'pagination__btn'} onClick={() => setCurrentPage(i + 1)} key={btn}>{i + 1}</button>
          )}
          <button onClick={() => paginationForward(currentPage + 1)} className={currentPage === totalPages ? 'pagination__btn last' : 'pagination__btn'}>
            <FontAwesomeIcon icon={faChevronRight} className='pagination__right' />
          </button>
        </div>
        : <></>
      }
    </div>
  )
}
