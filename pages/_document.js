import { FeaturePolyfills, NextScript } from '@engineerapart/nextscript';
import Document, { Head, Main } from 'next/document'

// This set of polyfills will mostly make IE11 useful.
// IE11 doesn't need RAF but older IE does.
const features = [
  FeaturePolyfills.FETCH,
  FeaturePolyfills.CUSTOMEVENT,
  FeaturePolyfills.INTERSECTIONOBSERVER,
  FeaturePolyfills.OBJECT_ASSIGN,
  FeaturePolyfills.ARRAY_FIND,
  FeaturePolyfills.ARRAY_FINDINDEX,
  FeaturePolyfills.ARRAY_FILL,
  FeaturePolyfills.ARRAY_FROM,
  FeaturePolyfills.ARRAY_INCLUDES,
  FeaturePolyfills.REQUESTANIMATIONFRAME,
];

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript features={features} />
        </body>
      </html>
    )
  }
}