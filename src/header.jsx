import './style.css'; // Fix: proper relative path and semicolon

function Header() {
    return (
        <header>
            <div className="title">Shikshayalaya</div>
            <nav className="menu">
                <a href="#">Home</a>
                <a href='/courses'>Courses</a>
                <a href='/admission'>Admission</a>
                <a href="/about">About</a>
                <a href="contact">Contact</a>
            </nav>
            <div className="logout">
                <button>logout</button>

            </div>
        </header>
    );
}

export default Header;
