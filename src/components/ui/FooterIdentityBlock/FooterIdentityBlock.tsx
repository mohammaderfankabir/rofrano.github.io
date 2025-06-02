import LogoText from "@/components/icons/LogoText";
import { social } from "@/constants";
import styles from "./FooterIdentityBlock.module.css";

const FooterIdentityBlock = () => {
  return (
    <>
      <hr aria-hidden="true" className={styles.hr} />

      <div aria-hidden="true" className={styles.position}>
        <div aria-hidden="true" className={styles.left}>
          <LogoText className={styles.footerWordmark} />
          <p className={styles.p}>
            © {new Date().getFullYear()} John Rofrano. All rights reserved.
          </p>
        </div>
        <div aria-hidden="true">
          <ul className={styles.right}>
            {social.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterIdentityBlock;
