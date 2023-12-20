import React from 'react';
import { useAppStore } from './store/store';

const Username = () => {
  // const username = useAppStore((state) => state.username);
  const updateUsername = useAppStore((state) => state.updateUsername);

  console.log('render username');

  return (
    <div>
      {/* <p>Username: {username}</p> */}
      <input
        type="text"
        placeholder="Masukkan nama"
        onChange={(e) => {
          const newUsername = e.target.value;
          updateUsername(newUsername);
        }}
      />
    </div>
  );
};

export default Username;
