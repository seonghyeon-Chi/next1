import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyComponent extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyComponent
