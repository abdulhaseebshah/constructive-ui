import styles from "./MainHeader.module.css";

interface MenuItem {
  id: number;
  linkName: string;
  path: string;
}

function MainHeader() {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      linkName: "Components",
      path: "#",
    },
    {
      id: 2,
      linkName: "Components",
      path: "#",
    },
  ];

  return (
    <div className={styles.mainHeader}>
      <header>
        <div className={styles.logo}>
          <h2>Logo</h2>
        </div>
        <ul className={styles.navLinks}>
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.path}>{item.linkName}</a>
              </li>
            );
          })}
        </ul>
        <div className="btns"></div>
      </header>
    </div>
  );
}

export default MainHeader;
