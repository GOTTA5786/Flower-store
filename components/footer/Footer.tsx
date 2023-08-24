import styles from "./footer.module.css";
import Logo from "../Logo/Logo";
import Requisites from "../Requisites/Requisites";
import FooterCatalog from "./FooterCatalog/FooterCatalog";
import FooterBouquet from "./Bouquet/FooterBouquet";
import OtherInfo from "./OtherInfo/OtherInfo";
import NavLinks from "./NavLinks/NavLinks";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <Logo/>
        <Requisites/>
      </div>
      <FooterCatalog/>
      <FooterBouquet/>
      <NavLinks/>
      <OtherInfo/>
    </footer>
  )
}