import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface MenuItem {
  label: string;
  onClick: () => void;
  isDanger?: boolean;
}

interface DropdownMenuProps {
  items: MenuItem[];
}

const GenericDropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Actions</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        sideOffset={5}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light background with opacity
          padding: '8px',
          borderRadius: '4px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {items.map((item, index) => (
          <DropdownMenu.Item
            key={index}
            onSelect={item.onClick}
            style={{
              color: item.isDanger ? 'red' : 'black', // Red color for delete items
              padding: '8px 12px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default GenericDropdownMenu;
