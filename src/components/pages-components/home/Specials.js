import React, { useCallback, useRef } from "react";
import SpecialsCard from "./cards/SpecialsCard";
import Container from "../../grid-system/Container";
import Button from "../../ui/buttons/Button";
import styles from "./Specials.module.css";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";

const specialItems = [
  {
    img: require("../../../assets/images/greek salad.jpg"),
    title: "Greek Salad",
    price: "$12.99",
    details:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    href: "#",
  },
  {
    img: require("../../../assets/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg"),
    title: "Bruchetta",
    price: "$5.99",
    details:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    href: "#",
  },
  {
    img: require("../../../assets/images/lemon dessert.jpg"),
    title: "Lemon Dessert",
    price: "$5.00",
    details:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    href: "#",
  },
  {
    img: require("../../../assets/images/greek salad.jpg"),
    title: "Greek Salad",
    price: "$12.99",
    details:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    href: "#",
  },
  {
    img: require("../../../assets/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg"),
    title: "Bruchetta",
    price: "$5.99",
    details:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    href: "#",
  },
  {
    img: require("../../../assets/images/lemon dessert.jpg"),
    title: "Lemon Dessert",
    price: "$5.00",
    details:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    href: "#",
  },
];

const Specials = () => {
  const cardsContainerRef = useRef(null);

  const handleLeftArrow = useCallback(() => {
    const leftScrolled = cardsContainerRef.current.scrollLeft;
    if (leftScrolled > 0) {
      cardsContainerRef.current.scrollLeft -= 279;
    }
  }, []);

  const handleRightArrow = useCallback(() => {
    const rightScrolled =
      cardsContainerRef.current.scrollWidth -
      cardsContainerRef.current.clientWidth -
      cardsContainerRef.current.scrollLeft;

    if (rightScrolled > 0) {
      cardsContainerRef.current.scrollLeft += 279;
    }
  }, []);

  return (
    <section className={styles["specials-section"]}>
      <Container>
        <div className={styles["specials-header"]}>
          <h2>Specials!</h2>
          <Button href="#">Online Menu</Button>
        </div>
        <div className={styles["specials-body"]}>
          <span
            className={`${styles["arrow-right"]} ${styles["arrow"]}`}
            onClick={handleRightArrow}
          >
            <CaretCircleRight size={50} weight="thin" />
          </span>

          <span
            className={`${styles["arrow-left"]} ${styles["arrow"]}`}
            onClick={handleLeftArrow}
          >
            <CaretCircleLeft size={50} weight="thin" />
          </span>

          <div
            className={styles["specials-cards-container"]}
            ref={cardsContainerRef}
          >
            {specialItems.map((item, index) => (
              <SpecialsCard
                key={index}
                dishSrc={item.img}
                dishAlt={item.title}
                title={item.title}
                price={item.price}
                details={item.details}
                orderHref={item.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Specials;
