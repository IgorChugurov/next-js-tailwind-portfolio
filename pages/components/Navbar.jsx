import styles from "../../styles/Navbar.module.css";
console.log(styles);
const Navbar = () => {
  return (
    <nav className="sticky top-0   z-10 bg-gray-50">
      <div className={styles.navbarwrap}>
        <div className="w-80">
          <a>webdeal</a>
        </div>
        <div>
          <a>Design</a>
        </div>
        <div className="flex w-96 justify-center">
          <div className="flex gap-6">
            <a>FB</a>
            <a>Tw</a>
            <a>YouTube</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
