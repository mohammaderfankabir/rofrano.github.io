"use client";

import * as React from "react";
import Link from "next/link";
import { MenuToggle } from "@/components/motion/MenuToggle";
import styles from "./MainNavigation.module.css";

const options = [{ label: "Biography", href: "/biography" }];

export default function MainNavigation() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const scrollYRef = React.useRef(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!anchorEl) {
      return;
    }

    scrollYRef.current = window.scrollY;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    Object.assign(document.body.style, {
      overflowY: "hidden",
      paddingRight: `${scrollbarWidth}px`,
    });

    function onClickOutside(event: MouseEvent) {
      if (
        anchorEl &&
        !anchorEl.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("#menu")
      ) {
        setAnchorEl(null);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (!anchorEl) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setAnchorEl(null);
        anchorEl.focus();
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      Object.assign(document.body.style, {
        overflowY: "",
        paddingRight: "",
      });
      window.scrollTo(0, scrollYRef.current);
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [anchorEl]);

  React.useEffect(() => {
    if (anchorEl) {
      const menu = document.getElementById("menu");
      const items =
        menu?.querySelectorAll<HTMLAnchorElement>('a[role="menuitem"]');
      items?.[0]?.focus();
    }
  }, [anchorEl]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  return (
    <div className={styles.container}>
      <button
        aria-haspopup="true"
        aria-expanded={!!anchorEl}
        aria-controls="menu"
        aria-label="Open main navigation menu"
        title="Main navigation"
        onClick={toggleMenu}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.toggleButton}
      >
        <MenuToggle isActive={!!anchorEl || isHovered} />
      </button>

      {anchorEl && (
        <div id="menu" role="menu" className={styles.menu}>
          {options.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              role="menuitem"
              tabIndex={-1}
              onClick={() => setAnchorEl(null)}
              className={styles.menuItem}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
