import * as React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";

// Add any custom prop here
interface DocumentCustomInitialProps extends DocumentInitialProps {
  segmentApiKey: string;
}

/**
 * @description - Document component
 * @param {Object} props - Component props
 * @return {Object} - Document component
 */
export default class MyDocument extends Document<DocumentCustomInitialProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/images/heart.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
