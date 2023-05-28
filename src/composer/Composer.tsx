import { ReactNode } from "react";
import styles from "./Composer.module.css";
import { NoContentAgent } from "../components/NoContentAgent";
import { TwoTabCarousel } from "../components/TwoTabCarousel";
import { AdvancedTable } from "../components/AdvancedTable";
import { TwoCheckboxes } from "../components/Checkboxes";
import Logo from "./logo.svg";
export interface ComposerProps {
  text?: string;
  body?: ReactNode;
}

export const Composer = ({ text }: ComposerProps) => (
  <div>
    <header>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />          
        </div>
        <h1 className={styles.logo}>{text}</h1>
      </div>
    </header>
    <NoContentAgent></NoContentAgent>
    <TwoTabCarousel></TwoTabCarousel>
    <AdvancedTable></AdvancedTable>
    <TwoCheckboxes></TwoCheckboxes>
  </div>

);
