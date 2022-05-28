import style from './style.module.css'

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_item}>
        <div>
          <div>
            <img src="/img/logo.svg"/>
            <h2>Arx</h2>
          </div>
          <p>Reiciendis et at rerum alias qui. Dolores sit quisquam qui debitis eum sint sapiente corporis labore. Error itaque fugit laudantium molestias voluptas debitis consequatur ad.</p>
        </div>
        <div>
          <div>
            <h4><u>Support</u></h4>
            <p>Help center</p>
            <p>Account information</p>
            <p>About</p>
            <p>Contact US</p>
          </div>
          <div>
            <h4><u>Product</u></h4>
            <p>Updates</p>
            <p>Design</p>
            <p>Location</p>
            <p>Pricing product</p>
          </div>
          <div>
            <h4><u>Help & Solutions</u></h4>
            <p>Talk to support</p>
            <p>System status</p>
            <p>Support docs</p>
            <p>Consultation</p>
          </div>
          <div>
            <h4><u>Social Media</u></h4>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <div className={style.footer_terms}>
        <p>Copyright &copy; 2022 Arx</p>
        <p>Terms and Conditions  -  Privacy Policy</p>
      </div>
    </div>
  )
}
