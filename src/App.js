import React from 'react';

import './App.css';
import { arrayMove, List } from 'react-movable'
import { buttonStyles, HandleIcon } from './Handle'


function App() {
  const [items, setItems] = React.useState(
    Array.from(Array(100).keys()).map((val) => `Item ${val}`)
  );
  return (
    <div className="App">
      <div className={'container'}>
        <div className={'header'} />
        <List
          values={items}
          onChange={({ oldIndex, newIndex }) =>
            setItems(arrayMove(items, oldIndex, newIndex))
          }
          renderList={({ children, props, isDragged }) => (
            <ul
              {...props}
              style={{
                padding: 0,
                cursor: isDragged ? 'grabbing' : undefined,
                height: 300,
                overflowY: 'scroll',
                overflowX: 'hidden',
              }}
            >
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected }) => (
            <li
              {...props}
              style={{
                ...props.style,
                padding: '0.5em',
                margin: '0.5em 0em',
                listStyleType: 'none',
                cursor: isDragged ? 'grabbing' : 'grab',
                border: '2px solid #CCC',
                color: '#333',
                borderRadius: '5px',
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF'
              }}
            >
              <button
                data-movable-handle
                style={{
                  ...buttonStyles,
                  cursor: isDragged ? 'grabbing' : 'grab',
                  marginRight: '3em'
                }}
                tabIndex={-1}
              >
                <HandleIcon />
              </button>
              {value}
            </li>
          )}
        />
        <div className={'footer'} />
      </div>
    </div>
  );
}

export default App;
