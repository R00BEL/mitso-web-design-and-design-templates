import Menu from "@/components/pages/home/components/Menu";
import styles from "./HomePage.module.css";
import * as React from "react";

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
              <div className={styles.formGroup}>
                <div className={styles.formControl}>Name*</div>
                <div className={styles.inputFormControl}>Full Name</div>
              </div>
              <div className={styles.formGroup2}>
                <div className={styles.formControl}>Email*</div>
                <div className={styles.inputFormControl}>example@gmail.com</div>
              </div>
              <div className={styles.formGroupCustomSelect}>
                <div className={styles.formControl}>Department *</div>
                <div className={styles.select}>
                  <div className={styles.option}>
                    <div>Please Select</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f894aa15aada348fa1375e9fcbe01887c3c6690e98e4634bdcbc21b80252c2?placeholderIfAbsent=true&apiKey=4503341e42e942deab3a0c84e55dc7f4"
                      className={styles.img}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formGroupCustomSelect}>
                <div className={styles.formControl}>Time *</div>
                <div className={styles.select}>
                  <div className={styles.option2}>
                    <div>4:00 Available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f894aa15aada348fa1375e9fcbe01887c3c6690e98e4634bdcbc21b80252c2?placeholderIfAbsent=true&apiKey=4503341e42e942deab3a0c84e55dc7f4"
                      className={styles.img}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonBtnPrimaryColor}>Book Appointment</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
