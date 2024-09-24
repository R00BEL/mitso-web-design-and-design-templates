import Menu from "@/components/pages/home/components/Menu";
import styles from "./HomePage.module.css";
import * as React from "react";
import Input from "@/components/commonComponents/Input";
import Select from "@/components/commonComponents/Select";
import Button from "@/components/commonComponents/Button";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.secondBackground}>
        <Menu />

        <div className={styles.content}>
          <div className={styles.colMd8}>
            <div className={styles.h1}>Business Advisory Services Provider</div>
            <div className={styles.h4}>
              We know how large objects will act, but things on a <br />
              small scale.
            </div>
            <div className={styles.cta}>
              <div className={styles.buttonBtnPrimaryColorBtnRound}>
                Get Quote Now
              </div>
              <div className={styles.buttonBtnPrimaryColorBtnOutlineBtnRound}>
                Learn More
              </div>
            </div>
          </div>

          <div className={styles.cardItem}>
            <div className={styles.h3}>Book Appointment</div>
            <div className={styles.cardContent}>
              <Input label={"Name*"} placeholder={"Full Name"} />
              <Input label={"Email*"} placeholder={"example@gmail.com"} />
              <Select label={"Department*"} placeholder={"Please Select"} />
              <Select label={"Time*"} placeholder={"4:00 Available"} />
            </div>
            <Button label={'Book Appointment'} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
