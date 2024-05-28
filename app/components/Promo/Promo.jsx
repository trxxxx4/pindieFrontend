"use client";
import { useState, useEffect } from "react";
import Styles from './Promo.module.css'

export const Promo = () => {
  const [codeIsVisible, setCodeIsVisible] = useState(false);
  const handleButtonClick = () => {
    codeIsVisible == false && setCodeIsVisible(true)
  }

  useEffect(() => {
    let timeout;
  if (codeIsVisible) {
    timeout = setTimeout(() => {
      setCodeIsVisible(false);
    }, 5000);
  }
  return () => {
    clearTimeout(timeout);
};
  }, [codeIsVisible])
  
  return (
    <section className={Styles["promo"]}>
      <div className={Styles["promo__description-block"]}>
        <h2 className={Styles["promo__title"]}>Твой промо-код</h2>
        <p className={Styles["promo__description"]}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
        <button onClick={handleButtonClick} className={`button ${Styles["promo__button"]}`}>{codeIsVisible == true ? <span className={Styles["promo-code"]}>WEBTEENS10</span> : <span>Получить код</span>}</button>
      </div>
      <img src="../images/promo-illustration.svg" alt="Собака" className={Styles["promo__image"]} />
    </section>
  )
}