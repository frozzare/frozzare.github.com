import React from 'react';
import App from 'next/app';
import Navbar from './components/navbar';
import Footer from './components/footer';
import '../styles/index.css';

export default class Application extends App {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
