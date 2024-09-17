import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Publist</h3>

      <div className={styles.navigationBox}>
        <div className={styles.menuList}>
          <div>Home</div>
          <div>Product</div>
          <div>Pricing</div>
          <div>Contact</div>
        </div>

        <div className={styles.menuIcon}>
          <img src="/icons/search.svg" alt="search" className={styles.icon} />
          <img src="/icons/basket.svg" alt="basket" className={styles.icon} />
        </div>
      </div>

      <div className={styles.navbarToggler}>
        <img src="/icons/navbar-toggler.svg" alt="navbar-toggler" />
      </div>
    </div>
  );
};

export default Menu;
