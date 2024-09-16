import '../../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar-wrapper">
            <div className='navbar-company-container'>
                <span>SwiftCart</span>
                <span>Seller Hub</span>
            </div>
            <div className='navbar-menu-container'>
                <ul>
                    <li>Sell Online</li>
                    <li>Fees and Commission</li>
                    <li>Grow</li>
                    <li>Learn</li>
                </ul>
            </div>
            <div className='Profile-Profile'>
                <button className='navbar-login-button'>Login</button>
                <button className='navbar-selling-button'>Start Selling</button>
            </div>
        </nav>
    )
}