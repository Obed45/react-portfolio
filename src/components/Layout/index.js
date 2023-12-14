import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <outlet />

            <span className='tags bottom-tafgs'>
            &lt;body&gt;
            <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
        </div>
        </div>
    )
}

export default Layout
