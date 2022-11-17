import { Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}

export default Layout;
/*
<nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/AddBlog'>Add Blog</Link>
                    </li>
                    <li>
                        <Link to='/Bugbounty'>Bug Bounty</Link>
                    </li>
                </ul>
            </nav>
*/