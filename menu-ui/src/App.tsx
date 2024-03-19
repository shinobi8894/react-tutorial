import TreeMenu from './TreeMenu';
import './App.css';

const treeData = [
  {
    id: 1,
    name: 'Item 1',
    children: [
      {
        id: 2,
        name: 'Item 1.1',
      },
      {
        id: 3,
        name: 'Item 1.2',
        children: [
          {
            id: 4,
            name: 'Item 1.2.1',
          },
        ],
      },
    ],
  },
];

const App = () => {
  return <TreeMenu data={treeData} />;
};

export default App;
