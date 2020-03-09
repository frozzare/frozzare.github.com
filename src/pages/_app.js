import React from 'react';
import App from 'next/app';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/index.css';

const menus = [
  {
    title: 'Home',
    path: '/#home'
  },
  {
    title: 'Projects',
    path: '/#projects'
  },
  {
    title: 'Uses',
    path: '/uses'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
];

export default class Application extends App {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Navbar menus={menus} />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
