import Button from '../Button'
import style from './style.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <div>
      <div className={style.hero} id="home">
        <div className={style.col_1}>
          <div>
            <h1>
              We Help You<br/>
              Build Your Dream<br/>
              <u>House</u>
            </h1>
            <Button text="Start Now" icon="Send"/>
          </div>
        </div>
        <div className={style.col_2}>
          <div>
            <Image src="/img/img-1.png" width={280} height={170} />
            <Image src="/img/img-2.png" width={280} height={170} />
          </div>
            <Image src="/img/img-3.png" width={588} height={237} />
        </div>
      </div>
    </div>
  )
}
