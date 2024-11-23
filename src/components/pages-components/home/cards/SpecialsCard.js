import React from "react";
import { Moped } from "@phosphor-icons/react";
import styles from "./SpecialsCard.module.css";
import Button from "../../../ui/buttons/Button";

const SpecialsCard = ({
  dishSrc,
  dishAlt,
  title,
  price,
  details,
  orderHref,
}) => {
  return (
    <div className={styles["card-specials"]}>
      <img src={dishSrc} className={styles["card-img-top"]} alt={dishAlt} />

      <div className={styles["card-header"]}>
        <h5 className={styles["card-title"]}>{title}</h5>
        <span className={styles["card-price"]}>{price}</span>
      </div>

      <div className={styles["card-body"]}>
        <p className={styles["card-text"]}>{details}</p>
      </div>

      <div className={styles["card-footer"]}>
        <Button
          addStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            width: "177px",
            height: "36px",
          }}
          href={orderHref}
        >
          <span>Order a delivery</span>
          <Moped size={18} weight="fill" />
        </Button>
      </div>
    </div>
  );
};

export default SpecialsCard;
