
import './styles/style.css';
import './styles/responsive.css'
import Footer from './footer.jsx';
import Header from './header.jsx';



export default function App({ Component, pageProps }) {
    return (
      <div className='app-main'>
        <Header />
        <Component {...pageProps} />
        <Footer />
        </div>
    )
  }