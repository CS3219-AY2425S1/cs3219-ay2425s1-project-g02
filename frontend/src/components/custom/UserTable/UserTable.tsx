import React from 'react';
import { User } from '@/models/User';
import GenericDropdownMenu from './GenericDropdownMenu';

interface UserTableProps {
  users: User[];
  onView: (user: User) => void;  // Modified return types
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>UID</th>
          <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Email</th>
          <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Display Name</th>
          <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const actions = [
            { label: 'View Profile', onClick: () => console.log(`Viewing ${user.uid}`) },
            { label: 'Delete User', onClick: () => console.log(`Deleting ${user.uid}`), isDanger: true },
            { label: 'Reset User Password', onClick: () => console.log(`Reset ${user.uid} Password`), isDanger: true },
          ];

          return (
            <tr
              key={user.uid}
              style={{
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff', // Alternating colors
              }}
            >
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{user.uid}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{user.email}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{user.displayName}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                <GenericDropdownMenu items={actions} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
