import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import Button from '../Button'

export default function Step() {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        image: "edit.svg",
        image_active: "edit-active.svg",
        text: "Design your dream",
      },
      {
        id: 2,
        image: "stack.svg",
        image_active: "stack-active.svg",
        text: "Build and release",
      },
      {
        id: 3,
        image: "home.svg",
        image_active: "home-active.svg",
        text: "Ready to be occupied",
      },
    ],
  });

  function toggleActive(key) {
    changeState({ ...appState, activeObject: appState.objects[key] });
  }

  const [firstItemActive, setFirstItemActive] = useState(true);

  return (
    <div className={style.step}>
      <div>
        <Image src="/img/img-step.png" width={575} height={710} />
      </div>
      <div>
        <h1 style={{margin: "0"}}>
          Simple <u>Step,</u>
          <br />
          Big <u>Move</u>
        </h1>
        <p>
          Aut autem aut. Quis molestiae porro aut tempora similique deleniti
          sint laborum eius. Repudiandae qui sint nobis ipsum voluptas eius.
          Impedit voluptas animi numquam et placeat. Neque aut alias architecto
          dolor natus corporis. Itaque in laborum blanditiis qui quo non
          numquam.
        </p>
        <div className={style.box_steps}>
          {appState.objects.map((item, key) => (
            <div
              className={` ${style.box} ${
                appState.objects[key] == appState.activeObject
                  ? style.active
                  : ""
              } ${key == 0 ? `${firstItemActive ? style.active : ""}` : ""} `}
              onMouseOver={() => {
                toggleActive(key);
                setFirstItemActive(false);
              }}
              key={key}
            >
              <img
                src={`/img/${
                  appState.objects[key] == appState.activeObject
                    ? item.image_active
                    : `${
                        key == 0
                          ? `${
                              firstItemActive
                                ? item.image_active
                                : item.image
                            }`
                          : item.image
                      } `
                }`}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <Button text="Contact US" icon="Phone"/>
      </div>
    </div>
  );
}
