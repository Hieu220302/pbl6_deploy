import Footer from '../defaultLayout/footer/Footer';
import HeaderLogin from './headerLogin/HeaderLogin';

function layout_login({ children }) {
    return (
        <>
            <HeaderLogin />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default layout_login;
