import React from 'react';
import { useAppStore } from './store/store';
import './App.css';

const Navbar = () => {
  const username = useAppStore((state) => state.username);
  const count = useAppStore((state) => state.count);
  console.log(username);
  console.log(count);
  return (
    <>
      {/* <div>Navbar</div> */}
      <header className="topnav">
        {/* <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
        <a>Username: {username}</a>
        <a>Jumlah: {count}</a>
        {/* <input
          type="text"
          placeholder="Masukkan nama"
          onChange={(e) => {
            const newUsername = e.target.value;
            updateUsername(newUsername);
          }}
        /> */}
      </header>
    </>
  );
};

export default Navbar;
