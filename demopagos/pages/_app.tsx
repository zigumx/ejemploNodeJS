import React, { useEffect } from 'react';
// import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ApolloProvider } from '@apollo/react-hooks'
import theme from '../src/theme'
import { useApollo } from '../lib/apolloClient'
import '../public/styles/font.css'

// export default class MyApp extends App {

//     componentDidMount() {
//         // Remove the server-side injected CSS.
//         const jssStyles = document.querySelector('#jss-server-side');
//         if (jssStyles) {
//         jssStyles.parentElement!.removeChild(jssStyles);
//         }
//     }

//   render() {
//     const { Component, pageProps } = this.props

//     const apolloClient = useApollo(this.props.pageProps.initialApolloState)

//     return (
//       <React.Fragment>
//         <Head>
//           <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//           <meta charSet="utf-8"/>
//           <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
//           <meta name="description" content="The project description"/>
//           <meta name="theme-color" content="#317EFB"/>
//           <link rel="apple-touch-icon" href="/images/icons-192.png"/>
//           <link rel="icon" sizes="192x192" href="/images/icons-192.png"/>
//           <link rel="manifest" href="/manifest.json"/>
//           <link rel="shortcut icon" href="/images/favicon.ico"/>
//           <link
//             rel="stylesheet"
//             href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//           />
//           <title>Zigu</title>
//         </Head>
//         <ThemeProvider theme={theme}>
//             <ApolloProvider client={apolloClient}>
//                 {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//                 <CssBaseline />
//                 <Component {...pageProps} />
//             </ApolloProvider>
//         </ThemeProvider>
//       </React.Fragment>
//     );
//   }
// }

export default function App ({ Component, pageProps }: any) {

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    })

    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <React.Fragment>
          <Head>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="description" content="The project description"/>
            <meta name="theme-color" content="#317EFB"/>
            <link rel="apple-touch-icon" href="/images/icons-192.png"/>
            <link rel="icon" sizes="192x192" href="/images/icons-192.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            /> 
            {/* <script
                type="text/javascript"
                src="https://tst.kaptcha.com/collect/sdk?m=820500"
                data-kountMerchantId="820500"
                data-kountHostUrl="https://tst.kaptcha.com"
                id="kountScript"
            ></script> */}
            {/* <script
                type='text/javascript'
                src="/js/kount.js"
            ></script> */}
            <script
                type="text/javascript"
                src="/js/kount2.js"
                data-kountMerchantId="820500"
                data-kountHostUrl="https://tst.kaptcha.com"
                id="kountScript"
            ></script>
            <title>Zigu</title>
          </Head>
          <ThemeProvider theme={theme}>
              <ApolloProvider client={apolloClient}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline />
                  <Component {...pageProps} />
              </ApolloProvider>
          </ThemeProvider>
        </React.Fragment>
      )
}