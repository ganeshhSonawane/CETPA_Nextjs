import { Html, Head, Main, NextScript } from "next/document";

export default function document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="nextjs" />
      </Head>
      <body className="bg-success bg-opacity-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
