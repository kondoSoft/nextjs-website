import '../styles/skeleton/skeleton.scss'
import '../styles/globals.sass'
import Router from "next/router";

import withGA from "next-ga";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withGA("UA-89409450-1", Router)(MyApp);