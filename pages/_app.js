import "../styles/globals.css";
import Head from "next/head";
import PropTypes from "prop-types";
import DarkMode from "../components/DarkMode";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Eco</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
            </Head>
            <DarkMode />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </>
    );
}
MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
