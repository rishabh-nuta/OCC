
import React, { useState } from 'react';

import {
  FlexLayout,
  DateIcon,
  StackingLayout,
  TextLabel,
  Link,
  Divider,
  Button,
  Loader,
} from '@nutanix-ui/prism-reactjs';

const ChatPage = ({ data }) => {
  const [showLink, setShowLink] = useState(false);
  const [showAddLoader, setShowAddLoader] = useState(false);

  const generateLink = () => {
    setShowAddLoader(true);
    setTimeout(() => {
      setShowAddLoader(false);
      setShowLink(true);
    }, 5000);
  };

  const openLink = () => {
    window.open(data.link, '_blank');
  };

  const chatWithLogs = () => {
    // Todo: show chat page
  };

  return (
    <div>
      <StackingLayout
        key={data.id}
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          padding: '30px',
          borderRadius: '0px',
          margin: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemSpacing="30px"
      >
        <TextLabel>
          What can I help with?
        </TextLabel>
      </StackingLayout>
    </div>
  );
};

export default ChatPage;
