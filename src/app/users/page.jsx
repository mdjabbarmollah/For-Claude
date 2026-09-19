import React from 'react';
import Designers from '../designers/page';

const Userspage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json()
  return (
    <div>
      <h2>check is it works:{users.length}</h2>      
      <div>
        {
          users.map((item) => {
            return <Designers key= {item.id} spu = {item} />
          })
        }
      </div>
    </div>
    
  );
};

export default Userspage;