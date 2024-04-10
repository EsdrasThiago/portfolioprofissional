import { Link } from 'react-router-dom';
import '../styles/HeaderStyle.css'

function Header(props) {
    
    const { page } = props;

    return (
        <header>
            <section><p className='header-name'>Esdras</p></section>
            <section className='header-links'>
                <Link className='header-link' to="/">
                    <b>#</b>
                    <p className={`header-${page === "home" ? "selected" : "unselected"}-link`}>página-inicial</p>
                </Link>
                <Link className='header-link' to="/projetos">
                    <b id='projects'>#</b>
                    <p className={`header-${page === "projects" ? "selected" : "unselected"}-link`}>projetos</p>
                </Link>
                <Link className='header-link' to="/sobre-mim">
                    <b id='about-me'>#</b>
                    <p className={`header-${page === "about-me" ? "selected" : "unselected"}-link`}>sobre-mim</p>
                </Link>
                <Link className='header-link' to="/contatos">
                    <b id='contacts'>#</b>
                    <p className={`header-${page === "contacts" ? "selected" : "unselected"}-link`}>contatos</p>
                </Link>
            </section>
        </header>
    );
}

export default Header;