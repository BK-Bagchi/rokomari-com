import React from 'react'

const Dropdown = ({ name, menu }) => {
    return (
        <li className="nav-item dropdown m-2">
            <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{name}</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {menu.map(menuItem => <a key={menuItem} className="dropdown-item" href="#">{menuItem}</a>)}
            </div>
        </li>
    )
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <Dropdown name={"Books"} menu={['One', 'Two', 'Three', 'Four']} />
                    <Dropdown name={"Electronics"} menu={['One']} />
                    <Dropdown name={"Gift Finder"} menu={['One', 'Two', 'Three', 'Four']} />
                    <Dropdown name={"Corporate Sales"} menu={['One', 'Two']} />
                    <Dropdown name={"Others"} menu={['One', 'Two', 'Three', 'Four', 'Five']} />
                    <li className="nav-item m-2">
                        <a className="nav-link text-uppercase" href="#">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;