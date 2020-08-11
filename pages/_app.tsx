import React from 'react';
import { AppProps } from 'next/app';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
        <Component {...pageProps} />
    </React.Fragment>
  );
}
