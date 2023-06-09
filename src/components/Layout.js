import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import LocalHeader from '../timer/LocalHeader'

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key)) || initialValue;
    } catch (error) {
      currentValue = initialValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

function Layout({ children }) {

  return (
    <div className='d-flex flex-column vh-100'>
      <Header />
      <main className='flex-shrink-0 main'>
        <div className='container'>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
