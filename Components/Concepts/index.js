import style from './style.module.css'
export default function Concepts() {
  return (
    <div className={style.concept}>
      <h1>Have an amazing concept, <br/>Let’s talk</h1>
      <div className={style.email_box}>
        <input type="email" placeholder="name@mail.com"/>
        <button>Get Started</button>
      </div>
    </div>
  )
}
