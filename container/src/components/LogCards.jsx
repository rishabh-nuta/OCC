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

import './PlaygroundView.css';

const LogCardView = ({ data }) => {

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
    window.open(data.link, "_blank");
  }

  const chatWithLogs = () => {
    // Todo: show chat page
  };

  return (
    <div>
      <Loader loading={ showAddLoader } tip="Generating dashboard link...">
        <StackingLayout
          key={data.id}
          style={{
            width: '400px',
            border: '1px solid lightGrey',
            padding: '30px',
            borderRadius: '2px',
            marginRight: '50px',
          }}
          itemSpacing="30px"
        >
          <FlexLayout justifyContent="space-between">
            <TextLabel type={TextLabel.TEXT_LABEL_TYPE.PRIMARY}>{ data.name }</TextLabel>
            <TextLabel type={TextLabel.TEXT_LABEL_TYPE.PRIMARY}>{ data.date_created }</TextLabel>
          </FlexLayout>
          <Divider />
          <FlexLayout justifyContent="space-between">
            <DateIcon />
            <TextLabel>{ data.from_date }</TextLabel>
            <TextLabel type={TextLabel.TEXT_LABEL_TYPE.PRIMARY}>to</TextLabel>
            <DateIcon />
            <TextLabel>{ data.end_date }</TextLabel>
          </FlexLayout>
          <FlexLayout>
            <TextLabel type={TextLabel.TEXT_LABEL_TYPE.PRIMARY}>Application name: </TextLabel>
            <TextLabel type={TextLabel.TEXT_LABEL_TYPE.SECONDARY}>{ data.application_name }</TextLabel>
          </FlexLayout>
          <FlexLayout>
            <TextLabel type={TextLabel.TEXT_LABEL_TYPE.PRIMARY}>Sub system name: </TextLabel>
            <TextLabel type={TextLabel.TEXT_LABEL_TYPE.SECONDARY}>{ data.subsytem_name }</TextLabel>
          </FlexLayout>
          <Divider style ={ { marginTop: '20px' } }/>
          <FlexLayout
            justifyContent="space-between"
            alignItems='center'
            style ={ { marginTop: '20px' } }>
            { !showLink &&
              <Link className="generate-link" onClick={ generateLink }>
                Generate link
              </Link>
            }
            { showLink &&
              <Button onClick={ openLink }>
                Go to Dashboard
              </Button>
            }
            <Link className="chat-with-log" onClick={ chatWithLogs }>
              Chat with logs
            </Link>
          </FlexLayout>
        </StackingLayout>
      </Loader>
    </div>
  );
};

export default LogCardView;
