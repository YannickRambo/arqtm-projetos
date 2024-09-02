import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import logo from "../../../public/logo.jpeg";
import "./Header.css";

interface HeaderProps {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ showSidebar, setShowSidebar }: HeaderProps) {
  return (
    <header>
      <ul className="headerMenu">
        <li>
          <a onClick={() => setShowSidebar(!showSidebar)}>
            <FiMenu />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/arqtm_projetos?igsh=MWIxN2Q3cXhiN2thZw%3D%3D&utm_source=qr">
            <CiMail />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/arqtm_projetos?igsh=MWIxN2Q3cXhiN2thZw%3D%3D&utm_source=qr">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <figure>
        <img src={logo} alt="Logo" className="logo"/>
      </figure>
    </header>
  )
}