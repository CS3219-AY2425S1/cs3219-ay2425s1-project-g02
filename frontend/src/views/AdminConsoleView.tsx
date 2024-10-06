import React, { useState, useEffect } from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import * as Tooltip from '@radix-ui/react-tooltip';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'; // For interactive menus
import * as Checkbox from '@radix-ui/react-checkbox'; // Optional: For selecting rows
import { CheckIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'; // Optional: For checkbox styling
import "@/css/styles.css"; // Adjust the path if necessary
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pages } from '@/components/custom/Pages/Pages';
// import { auth } from "../config/firebaseConfig";
// import { getAuth } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { getFirestore } from "firebase/firestore"; // If using Firestore



interface FirebaseIDToken {
    email?: string;
    user_id?: string;
    exp: number;
}

const decodeToken = (token: string): FirebaseIDToken | null => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(jsonPayload) as FirebaseIDToken;
    } catch (e) {
      return null;
    }
};
  


const AdminConsoleView: React.FC = () => {

    const [user, setUser] = useState<string | null>(null);
    useEffect(() => {
        const token = localStorage.getItem('authToken');  // Assuming 'id_token' is where it's stored
        if (token) {
          const decoded = decodeToken(token);
          if (decoded && decoded.email) {
            setUser(decoded.email);  // Show the user's email
          }
        }
    }, []);
    

    
    
    const users = [
        { id: 1, name: 'A', age: 30, occupation: 'None', location: 'Nowhere', },
        { id: 2, name: 'B', age: 25, occupation: 'No', location: 'Nah', },
        { id: 3, name: 'C', age: 35, occupation: 'Rice farmer', location: 'Asia', },
        { id: 4, name: 'A', age: 30, occupation: 'None', location: 'Nowhere',  },
        { id: 5, name: 'B', age: 25, occupation: 'No', location: 'Nah',  },
        { id: 6, name: 'C', age: 35, occupation: 'Rice farmer', location: 'Asia', },
        { id: 7, name: 'A', age: 30, occupation: 'None', location: 'Nowhere', },
        { id: 8, name: 'B', age: 25, occupation: 'No', location: 'Nah', },
        { id: 9, name: 'C', age: 35, occupation: 'Rice farmer', location: 'Asia', },
    ];
    
    return (
        <main className="admin-page">
        <div className="container mx-auto px-4 py-6"> {/* Adjust container padding */}
          <h1 className="text-2xl font-bold mb-4">Admin Console</h1>
          <div>
            {user ? (
                <p>Logged in as {user}</p>
            ) : (
                <p>Not logged in</p>
            )}
            </div>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse border border-gray-300">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-left">Select</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Occupation</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="border-b border-gray-300">
                    <TableCell>
                      <Checkbox.Root className="CheckboxRoot">
                        <Checkbox.Indicator className="CheckboxIndicator">
                          <CheckIcon />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell>{user.occupation}</TableCell>
                    <TableCell>{user.location}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                          <button
                            style={{
                              padding: '5px',
                              borderRadius: '4px',
                              background: '#f0f0f0',
                            }}
                          >
                            <HamburgerMenuIcon />
                          </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content
                          sideOffset={5}
                          style={{
                            backgroundColor: 'white',
                            borderRadius: '6px',
                            padding: '5px',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
                          }}
                        >
                          <DropdownMenu.Item onClick={() => alert(`Viewing ${user.name}`)}>
                            View
                          </DropdownMenu.Item>
                          <DropdownMenu.Item onClick={() => alert(`Editing ${user.name}`)}>
                            Edit
                          </DropdownMenu.Item>
                          <DropdownMenu.Item onClick={() => alert(`Resetting ${user.name}'s password`)}>
                            Reset password...
                          </DropdownMenu.Item>
                          <DropdownMenu.Item onClick={() => alert(`Deleting ${user.name}`)}>
                            Delete
                          </DropdownMenu.Item>
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pages />
          </div>
        </div>
      </main>
      
    );
};

export default AdminConsoleView;