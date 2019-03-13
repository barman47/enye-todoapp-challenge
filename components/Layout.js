import Header from './Header';

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <style global jsx>{`
            body {
                margin: 0;
                padding: 0;
            }
        `}</style>
    </div>
);

export default Layout;