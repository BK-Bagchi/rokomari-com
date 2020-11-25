import React from 'react'

const Dropdown = ({ name, menu, setItem }) => {
    const menuName = name
    return (
        <li className="nav-item dropdown m-2" onClick={() => setItem(menuName)}>
            <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{name}</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {menu.map(menuItem => <a key={menuItem} className="dropdown-item" href="#">{menuItem}</a>)}
            </div>
        </li>
    )
}

const Navbar = ({ setItem }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <Dropdown setItem={setItem} name={"Books"} menu={['One', 'Two', 'Three', 'Four']} />
                    <Dropdown setItem={setItem} name={"Electronics"} menu={['One']} />
                    <Dropdown setItem={setItem} name={"Gift Finder"} menu={['One', 'Two', 'Three', 'Four']} />
                    <Dropdown setItem={setItem} name={"Corporate Sales"} menu={['One', 'Two']} />
                    <Dropdown setItem={setItem} name={"Others"} menu={['One', 'Two', 'Three', 'Four', 'Five']} />
                    <li className="nav-item m-2">
                        <a className="nav-link text-uppercase" href="#">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;