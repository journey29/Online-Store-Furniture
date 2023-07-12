import { useState, useEffect } from "react";
import { IProduct } from "types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "styles/index.scss";
import { Navigation } from "swiper";
import { useGetProductsQuery } from "store/api/products.api";
import { Loader } from "components/Loader";

export const AsideSlider:React.FC = () => {
  const [collections, setCollections] = useState<IProduct[]>([]);
  const { data, error, isLoading } = useGetProductsQuery({});
  
  useEffect(() => {
    if (data) {
      setCollections(data);
    } else if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div className="aside-slider__items">
            {collections.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="aside-slider__item">
                  <img className="aside-slider__item-img" src={item.imageUrl} alt="img" />
                  <div className="aside-slider__item-content">
                    <h6 className="aside-slider__item-title">{item.title}</h6>
                    <p className="aside-slider__item-price">${item.price}.00</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      )}
    </>
  );
};