import React, { useState } from 'react';
import _ from 'lodash';

import {
  FlexLayout,
  Modal,
  StackingLayout,
  Button,
  Title,
  DatePicker,
  FormItemSelect,
  Input,
  FilterIcon,
  Loader
} from '@nutanix-ui/prism-reactjs';

import LogCardView from '../components/LogCards';
import mockedList from '../../mock/configdata/probes.json';
import './LandingPage.css';


const LandingPage = ({ history }) => {

  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState('');
  const [mockedData, setMockedData] = useState(_.chunk(_.slice(mockedList, 1), 3));
  const [showLoader, setShowLoader] = useState(false);
  const [showAddLoader, setShowAddLoader] = useState(false);


  const onClickHandleAddTest = () => {
    setShowQuestionForm(true);
  };

  const onClickCancelForm = () => {
    setShowQuestionForm(false);
  };

  const logLevelData = [
    {
      key: 'debug',
      label: 'DEBUG'
    },
    {
      key: 'info',
      label: 'INFO'
    },
    {
      key: 'warning',
      label: 'WARNING'
    },
    {
      key: 'error',
      label: 'ERROR'
    },
    {
      key: 'critical',
      label: 'CRITICAL'
    }
  ];

  const appNameData = [
    {
      key: 'xray',
      label: 'X-Ray'
    },
    {
      key: 'sizer',
      label: 'Sizer'
    },
    {
      key: 'collector',
      label: 'Collector'
    },
    {
      key: 'mynutanix',
      label: 'MyNutanix'
    },
    {
      key: 'testdrive',
      label: 'TestDrive'
    }
  ];

  const subSystemNameData = [
    {
      key: 'server',
      label: 'X-Ray Server'
    },
    {
      key: 'curie',
      label: 'Curie'
    },
    {
      key: 'sails',
      label: 'Sails Server'
    },
    {
      key: 'portal',
      label: 'Community Portal'
    },
    {
      key: 'redis',
      label: 'Redis Consumer'
    }
  ];

  const onClickSaveCard = () => {
    const newLogData = _.concat(mockedList, mockedList[0]);
    const newLogData1 = _.chunk(_.slice(newLogData, 1), 3);
    setShowAddLoader(true);
    setTimeout(() => {
      setMockedData(newLogData1);
      setShowQuestionForm(false);
    }, 2000);
  };


  const questionForm = (
    <Modal
      visible={ showQuestionForm }
      title="Add new log card"
      onClose={ onClickCancelForm }
      primaryButtonOnClick={ onClickSaveCard }
    >
      <Loader loading={ showAddLoader } tip="Creating log entry...">
        <StackingLayout padding="20px">
          <FlexLayout>
            <DatePicker
              oldDatePicker={ false }
              popupProviderProps={ {
                popupClassName: 'my-datepicker',
                // getPopupContainer: () => document.querySelector('.right-panel')
              } }
              inputProps={ { name:'basic-usage', placeholder: 'Start Date' } }
              onChange={ (selectedDate) => console.log(selectedDate) }
              data-test="default"
            />
            <DatePicker
              oldDatePicker={ false }
              popupProviderProps={ {
                popupClassName: 'my-datepicker',
                // getPopupContainer: () => document.querySelector('.right-panel')
              } }
              inputProps={ { name:'basic-usage', placeholder: 'End Date' } }
              onChange={ (selectedDate) => console.log(selectedDate) }
              data-test="default"
            />
          </FlexLayout>
          <FormItemSelect
            id="id"
            label="Select log level"
            selectedRow={ logLevelData[0] }
            rowsData={ logLevelData } 
          />
          <FlexLayout justifyContent="space-between">
            <FormItemSelect
              id="id"
              label="Select application name"
              selectedRow={ appNameData[0] }
              rowsData={ appNameData } 
            />
            <FormItemSelect
              id="id"
              label="Select sub system name"
              selectedRow={ subSystemNameData[0] }
              rowsData={ subSystemNameData } 
            />
          </FlexLayout>
          <Input 
            placeholder="Enter the name of your log card"
          />
        </StackingLayout>
      </Loader>
    </Modal>
  );

  return (
    <Loader loading={ showLoader } tip="loading and running the test ...">
      <StackingLayout>
        <FlexLayout
          justifyContent="flex-end"
          alignItems="center"
          style={ { margin: '30px' }}
        >
          <Button onClick={ onClickHandleAddTest }><FilterIcon />FILTERS</Button>
        </FlexLayout>
        { showQuestionForm && questionForm }
        <StackingLayout style={ { margin: '30px' }}>
          <Title size='h2'>Logs Card</Title>
          {
            _.map(mockedData, (row, rowIndex) => {
              return (
                <FlexLayout>
                  {
                    _.map(row, (data) => {
                      return <LogCardView data={ data } />;
                    })
                  }
                </FlexLayout>
              )
            })
          }
        </StackingLayout>
      </StackingLayout>
    </Loader>
  );
};

export default LandingPage;
