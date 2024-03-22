import React from 'react';
import Splitter, { Item } from 'devextreme-react/splitter';

import PaneContent from './PaneContent.tsx';

const App = () => (
  <React.Fragment>
    <Splitter id="splitter">
      <Item resizable={true} minSize="70px" size="140px" render={PaneContent('Left Pane')} />
      <Item resizable={true}>
        <Splitter orientation="vertical">
          <Item resizable={true} collapsible={true} maxSize="75%" render={PaneContent('Central Pane')} /> 
          <Item resizable={true} collapsible={true}>
            <Splitter>
              <Item resizable={true} collapsible={true} size="30%" minSize="5%" render={PaneContent('Nested Left Pane')} />
              <Item resizable={true} render={PaneContent('Nested Central Pane')} />
              <Item resizable={true} collapsible={true} size="30%" minSize="5%" render={PaneContent('Nested Right Pane')} />
            </Splitter>
          </Item>
        </Splitter>
      </Item>
      <Item resizable={false} collapsible={false} size="140px" render={PaneContent('Right Pane')} />
    </Splitter>
  </React.Fragment>
);

export default App;
