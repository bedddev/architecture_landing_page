import style from "./style.module.css";
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Clients() {
  return (
    <div className={style.clients} id="testimoni">
      <div className={style.clients_section}>
        <div>
          <h1>
            Customer Say’s <br />
            About <u>Arx</u>
          </h1>
          <p>
            Aut et repellat ex qui alias asperiores eum totam. Quia maxime sunt
            cumque laudantium. Accusantium quo beatae at modi et quidem
            quibusdam dolorem saepe.{" "}
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className={style.mySwiper}
          >
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>‘’</h1>
                <p>
                  Aut et repellat ex qui alias asperiores eum totam. Quia maxime
                  sunt cumque laudantium. Accusantium quo beatae at modi et
                  quidem quibusdam dolorem saepe.{" "}
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <img src="/img/avatar-1.png" />
                </div>
                <p>Alex - Founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>‘’</h1>
                <p>
                  Aut et repellat ex qui alias asperiores eum totam. Quia maxime
                  sunt cumque laudantium. Accusantium quo beatae at modi et
                  quidem quibusdam dolorem saepe.{" "}
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <img src="/img/avatar-2.png" />
                </div>
                <p>Nadia - Designer</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
