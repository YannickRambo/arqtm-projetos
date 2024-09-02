import "./Sidebar.css";
import { FaArrowRight } from "react-icons/fa";

interface SidebarProps {
    showSidebar: boolean,
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export function Sidebar({ showSidebar, setShowSidebar }: SidebarProps) {
    return (
        <aside className={showSidebar ? "sidebar active" : "sidebar"}>
            <div className="sidebarHeader">
                <h3>ARQT&M</h3>
                <button onClick={() => setShowSidebar(!showSidebar)}>
                    <FaArrowRight />
                </button>
            </div>
            <ul className="sidebarMenu">
                <li>
                    <a href="#responsabilities">Nossas Atuações</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#targets">Público Alvo</a>
                </li>
            </ul>
        </aside>
    )
}