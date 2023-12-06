
const HeaderCatalog = () =>{
return (
    <header>
        <div className="header_catalog">
            <nav className="header_catalog__nav">
                <div className="header_catalog__nav-logo">
                    <img src="/icons/trolleybus-icon.png" alt="header_catalog_logo" width="80" height="80" />
                </div>
                <div className="header_catalog__nav-buttons">
                    <a href="http://localhost:3000/">
                        <h2>
                        <button type="button" className="header_catalog__category">
                        <a href="http://localhost:3000/">Home</a>
                        </button>
                        </h2>
                    </a>
                    <a href="http://localhost:3000/Catalog">
                        <h2>
                        <button type="button" className="header_catalog__category1">
                        <a href="http://localhost:3000/Catalog">Catalog</a>
                        </button>
                        </h2>
                    </a>
                    <a href="http://localhost:3000/Cart">
                        <h2>
                        <button type="button" className="header_catalog__category">
                        <a href="http://localhost:3000/Cart">Cart</a>
                        </button>
                        </h2>
                    </a>
                </div>
            
            </nav>
        </div>
    </header>
);
}

export default HeaderCatalog;