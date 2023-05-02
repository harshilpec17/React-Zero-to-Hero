const Header = () => {
    return (
        <>
        <div>
            <div className="NavWrapper">
                <div className="logo">
                    <img src="https://www.freeiconspng.com/uploads/food-delivery-19.png" alt="logo" className="CompanyLogo" />
                </div>
                <div className="NavItems">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Offers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="Buttons">
                    <button className="btn">Sign Up</button>
                    <button className="btn">Login</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header