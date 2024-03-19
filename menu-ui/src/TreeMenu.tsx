import React, { useState } from 'react';

interface TreeItem {
  id: number;
  name: string;
  children?: TreeItem[];
}

interface TreeMenuProps {
  data: TreeItem[];
}

const TreeMenu: React.FC<TreeMenuProps> = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (itemId: number) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const renderTree = (items: TreeItem[]) => {
    return items.map((item) => (
      <div key={item.id}>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => toggleItem(item.id)}
        >
          {item.name}
        </div>
        {expandedItems.includes(item.id) && item.children && (
          <div style={{ marginLeft: 20 }}>
            {renderTree(item.children)}
          </div>
        )}
      </div>
    ));
  };

  return <div>{renderTree(data)}</div>;
};

export default TreeMenu;
