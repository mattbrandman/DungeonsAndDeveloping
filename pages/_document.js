import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import styled from 'styled-components';
import { ServerStyleSheet } from 'styled-components';
import Header from '../components/Header'
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html style={{backgroundColor: '#FFFAFB'}}>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
          <link href= "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap" rel="stylesheet"></link>

        </Head>
        <body>
            <Main/>
            <NextScript />
        </body>
      </html>
    );
  }
}

