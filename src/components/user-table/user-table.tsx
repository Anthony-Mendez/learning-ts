import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { User } from './types';

const cellStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left',
};

export const UserTable = (): ReactElement => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isAsc, setIsAsc] = useState<boolean>(true);

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      const fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: User[] = await fetchUsers.json();
      setUsers(data);
    };

    getUsers();
  }, []);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setSearch(evt.target.value);
  };
  
  const filteredUsers = users
    .filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      isAsc
        ? a.username.localeCompare(b.username)
        : b.username.localeCompare(a.username),
    );

  return (
    <>
      <input
        type='text'
        placeholder='Search by Name'
        value={search}
        onChange={handleChange}
      />
      <button onClick={(): void => setIsAsc(!isAsc)}>
        Sort by Username ({isAsc ? 'Asc' : 'Desc'})
      </button>
      <table style={{ width: '100%' }}>
        <thead>
        <tr>
          <th style={cellStyle}>Name</th>
          <th style={cellStyle}>Username</th>
          <th style={cellStyle}>Email</th>
        </tr>
        </thead>
        <tbody>
        {filteredUsers.map((user: User) => (
          <tr key={user.id}>
            <td style={cellStyle}>{user.name}</td>
            <td style={cellStyle}>{user.username}</td>
            <td style={cellStyle}>{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};
