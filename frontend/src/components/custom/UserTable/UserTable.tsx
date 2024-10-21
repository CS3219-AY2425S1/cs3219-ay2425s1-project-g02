// import React, { useEffect, useState } from 'react';
import { User } from '@/models/User';
import React from 'react';
// import * as Primitive from '@radix-ui/react-primitive';

// Define the User interface

interface UserTableProps {
  users: User[];  // Accepts an array of users
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>UID</th>
          <th>Email</th>
          <th>Display Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.uid}>
            <td>{user.uid}</td>
            <td>{user.email}</td>
            <td>{user.displayName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Custom styles
// const tableStyle: React.CSSProperties = {
//   width: '100%',
//   borderCollapse: 'collapse',
//   margin: '20px 0',
// };

// const theadStyle: React.CSSProperties = {
//   backgroundColor: '#f0f0f0',
// };

// const thStyle: React.CSSProperties = {
//   padding: '10px',
//   borderBottom: '2px solid #ddd',
//   textAlign: 'left',
// };

// const trStyle: React.CSSProperties = {
//   borderBottom: '1px solid #ddd',
// };

// const tdStyle: React.CSSProperties = {
//   padding: '10px',
//   textAlign: 'left',
// };

export default UserTable;