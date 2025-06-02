import Link from "next/link";
import FooterIdentityBlock from "../ui/FooterIdentityBlock/FooterIdentityBlock";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <nav>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div>
              <h3>Memorial</h3>
              <ul role="group">
                <li>
                  <Link href="/johnrofranosr">John Rofrano Sr</Link>
                </li>
                <li>
                  <Link href="/bobby">Bobby</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Guide</h3>
              <ul role="group">
                <li>
                  <Link href="/guide/music/welcome">ACID PRO</Link>
                </li>
                <li>
                  <Link href="/guide/video/welcome">VEGAS PRO</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>DevOps</h3>
              <ul role="group">
                <li>
                  <a
                    href="https://www.coursera.org/instructor/johnrofrano"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coursera
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Boris FX</h3>
              <ul role="group">
                <li>
                  <a
                    href="https://www.youtube.com/playlist?list=PLjM_40wLTZwpKjYMvk2nrwqjoVtveefCY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BorisFX Continuum Vegas
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/playlist?list=PLjM_40wLTZwp7is6sp1R1LtqxfblHzKWY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Boris FX Continuum FCP
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3>Books</h3>
              <ul role="group">
                <li>
                  <a
                    href="https://www.amazon.com/Instant-ACID-VASST-John-Rofrano-ebook/dp/B0C5S861TS?ref_=ast_author_dp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instant ACID"
                  >
                    Instant ACID
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.amazon.com/Instant-Vegas-Movie-Studio-DVD-ebook/dp/B0B36NPGFB?ref_=ast_author_dp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instant VMS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <FooterIdentityBlock />
    </footer>
  );
}
