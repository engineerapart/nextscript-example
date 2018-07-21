[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/hello-world)

# Custom NextScript example

## How to use

### Download manually

Download the example [or clone the repo](https://github.com/engineerapart/nextscript-example):

```bash
git clone https://github.com/engineerapart/nextscript-example
cd nextscript-example
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

You can then load up the example in an older browser via Browserstack or other browser testing platform.

## The idea behind the example

This example shows you how to use the custom NextScript component to control the loading of your Next script resources, including waiting for polyfills to resolve.

Once deployed, you can load this example in an older browser, for example IE11, and you will see that the functions used in `pages/index.js` do not throw exceptions IE, demonstrating that they have been polyfilled.

Also, open up your browser's dev tools and check out the `__next_preloader` script node - there you will see the preloader script, with settings you have configured being applied to the generated script.
