import style from "./style.module.css";

export default function Featured() {
  const itemFeatured = [
    {
      id: 1,
      image: "Diamond.svg",
      title: "Assumenda totam culpa",
      text: "Qui ipsa odio provident sit similique fuga doloremque. Repellendus cumque suscipit consequuntur provident et asperiores ut. Et ut omnis nihil harum et eveniet ex nostrum.",
    },
    {
      id: 2,
      image: "Fire.svg",
      title: "Quasi culpa repudiandae",
      text: "Praesentium dolorem maxime nostrum eius blanditiis autem ducimus est. Aut laborum cumque sunt consequatur aut. Quod voluptatum nobis est. Ipsam sit libero tempora fugit sint aut fugit.",
    },
    {
      id: 3,
      image: "Lightning.svg",
      title: "Repellat excepturi sunt",
      text: "Vel velit voluptatibus aut exercitationem rerum officia ex laborum totam. Atque architecto qui ullam non ea praesentium necessitatibus velit sit. Sequi ut nesciunt non.",
    },
    {
      id: 4,
      image: "Layout.svg",
      title: "Modi et earum",
      text: "At error sequi minima modi est quaerat. Aliquid dolor et. Vel tenetur voluptatum. Quod minima nobis et enim quam et incidunt. Rerum omnis iure omnis.",
    },
    {
      id: 5,
      image: "Settings.svg",
      title: "Earum porro qui",
      text: "Vel officia dolores ut iusto mollitia velit quis. Ex repudiandae nemo. Omnis ut fuga recusandae. Natus eos inventore. Nesciunt quo asperiores ut quas non molestias vero. Autem ab ducimus.",
    },
    {
      id: 6,
      image: "Power-button.svg",
      title: "Et placeat amet",
      text: "Sint et nihil blanditiis dolorem quod. Quo nostrum cum sequi non consequatur dolores sit. Dolorum optio minus voluptatem dolores et placeat voluptatem necessitatibus est.",
    },
  ];

  return (
    <div className={style.featured} id="featured">
      {itemFeatured.map((item) => (
        <div className={style.box_featured} key={item.id}>
          <img src={`/img/${item.image}`} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
