import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { withEmotionCache } from "tss-react/nextJs";

import { makeMuiCache } from "§/theme/themes";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const StyledDocument = withEmotionCache({
  Document: MyDocument,
  /**
   * Every emotion cache used in the app should be provided.
   * Caches for MUI should use "prepend": true.
   * */
  getCaches: () => [makeMuiCache()],
});

export default StyledDocument;
