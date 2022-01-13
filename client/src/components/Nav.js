const Nav = ({toggleFiltersMenu}) => {
    return(
        <header>
            <div id="brand"><a href="/"><b>D3.js Dashboard</b> <br/> By Joan Jeremiah</a></div>
            <nav>
                <ul>
                    <li><a href="https://github.com/joanjeremiah">My Github</a></li>
                    <li id="filters" onClick={toggleFiltersMenu}>Filters <i style={{color: 'blue'}} className="fas fa-filter"></i> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;