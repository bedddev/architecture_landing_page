import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <nav className={style.nav}>
        <a href="">Arx</a>
        <Image src="/img/logo.svg" width={32} height={32} />
        <OutsideClickHandler onOutsideClick={() => setOffCanvas(false)}>
          <Image
            src="/img/menu.svg"
            width={32}
            height={32}
            style={{ cursor: "pointer" }}
            onClick={() => setOffCanvas(true)}
          />
        </OutsideClickHandler>
      </nav>
      <div className={`${style.canvas_menu} ${offCanvas ? style.active : ""} `}>
        <div className={style.close_icon}>
          <Image
            src="/img/close.svg"
            width={32}
            height={32}
            onClick={() => setOffCanvas(false)}
          />
        </div>
        <div className={style.canvas_content}>
          <div className={style.social}>
            <h4>Social</h4>
            <div>
              <p>
                <img src="/img/Instagram.svg" />
                <span>&nbsp; Instagram</span>
              </p>
              <p>
                <img src="/img/Twitter.svg" />
                <span>&nbsp; Twitter</span>
              </p>
              <p>
                <img src="/img/Youtube.svg" />
                <span>&nbsp; Youtube</span>
              </p>
              <p>
                <img src="/img/Facebook.svg" />
                <span>&nbsp; Facebook</span>
              </p>
              <p>
                <img src="/img/Dribbble.svg" />
                <span>&nbsp; Dribbble</span>
              </p>
              <p>
                <img src="/img/Linkedin.svg" />
                <span>&nbsp; Linkedin</span>
              </p>
            </div>
          </div>
          <div className={style.menu}>
            <h4>Menu</h4>
            <p style={{ marginTop: 0 }}>
              <a href="#home" onClick={() => setOffCanvas(false)}>
                Home
              </a>
            </p>
            <p>
              <a href="#featured" onClick={() => setOffCanvas(false)}>
                Featured
              </a>
            </p>
            <p>
              <a href="#projects" onClick={() => setOffCanvas(false)}>
                Projects
              </a>
            </p>
            <p>
              <a href="#testimoni" onClick={() => setOffCanvas(false)}>
                Testimoni
              </a>
            </p>
          </div>
        </div>
        <div className={style.email}>
          <p>Get in touch</p>
          <h2>
            <u>info@arx.com</u>
          </h2>
        </div>
      </div>
    </>
  );
}
