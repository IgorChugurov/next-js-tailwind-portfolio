import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="sticky top-0   z-10 bg-gray-50">
      <div className={styles.navbarwrap}>
        <div className="ml-2 w-40">
          <div className={styles.button}>
            <a
              href="https://www.upwork.com/freelancers/~01bc90966a856cf74c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </div>
        </div>
        {/* <div>
          <a>Design</a>
        </div>
        <div className="flex w-96 justify-center">
          <div className="flex gap-6">
            <a>FB</a>
            <a>Tw</a>
            <a>YouTube</a>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
