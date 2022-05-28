import Image from 'next/image'
import style from './style.module.css'

export default function Button(props) {
  const { text, icon } = props;

  return (
    <button className={style.btn}>
      {text}
      &nbsp;
      <Image src={`/img/${icon}.svg`} width={24} height={24} />
    </button>
  );
}
