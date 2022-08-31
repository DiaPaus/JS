import './Layout.css';
import { Link } from 'react-router-dom';

function Layout(props) {
    return (
        <div className='layout'>
            <header>
                <h1>Diana's Shop</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/cart'>Cart ({props.cartItems} items)</Link></li>
                    </ul>
                </nav>
            </header>
            <main id="app-main-content">
                {props.children}
            </main>
        </div>
    )
}

export default Layout;