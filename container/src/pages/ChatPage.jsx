
import React, { useState } from 'react';

import {
  FlexLayout,
  Scrollbar,
  StackingLayout,
  TextLabel,
  Input,
  Divider,
  Button,
  Loader,
  TextArea,
} from '@nutanix-ui/prism-reactjs';

const answers = [
  'Artificial Intelligence (AI) has rapidly evolved over the past decade, transforming industries and reshaping the way humans interact with technology. As AI becomes more sophisticated, its impact on society continues to expand, influencing various aspects of daily life, including healthcare, education, business, and even governance. One of the most significant advantages of AI lies in its ability to automate repetitive tasks, allowing humans to focus on more complex and creative work. AI-powered automation has already revolutionized industries such as manufacturing, finance, and customer service by streamlining operations and reducing human errors. However, as automation increases, concerns about job displacement and economic inequality also arise, prompting discussions about the need for reskilling programs and universal basic income to ensure a smooth transition for the workforce.',
  'In the healthcare sector, AI is making significant strides by improving diagnostics, personalized treatment plans, and drug discovery. Machine learning algorithms can analyze vast amounts of medical data to detect diseases at earlier stages, potentially saving millions of lives. For example, AI-powered imaging tools assist radiologists in identifying anomalies in X-rays and MRIs with remarkable accuracy. Additionally, AI-driven chatbots and virtual assistants are enhancing patient care by providing instant medical advice and reducing the burden on healthcare professionals. Despite these advancements, ethical concerns surrounding patient data privacy and algorithmic biases must be addressed to ensure that AI-driven healthcare remains fair and accessible to all individuals.',
  'Education is another area witnessing a transformation due to AI-powered tools. Personalized learning platforms use AI to adapt educational content based on a students learning pace and preferences, ensuring a more effective and engaging learning experience. AI tutors can provide instant feedback and assistance, allowing students to overcome learning challenges more efficiently. Moreover, AI-driven analytics help educators identify struggling students early on, enabling targeted interventions to improve academic performance. However, the increasing reliance on AI in education raises concerns about data security, student privacy, and the potential loss of human interaction, which remains essential for social and emotional development.',
  'Businesses across various sectors are leveraging AI to enhance productivity, improve customer experiences, and optimize decision-making. AI-driven analytics provide companies with valuable insights, allowing them to understand consumer behavior, predict market trends, and personalize marketing strategies. Chatbots and virtual assistants streamline customer support by providing instant responses and resolving queries efficiently. Additionally, AI-powered fraud detection systems help financial institutions prevent fraudulent transactions and ensure data security. While AI enhances business operations, ethical considerations regarding data usage, algorithmic transparency, and potential biases in decision-making algorithms must be carefully managed to maintain trust among consumers.',
  'The integration of AI in governance and policymaking presents both opportunities and challenges. Governments are increasingly using AI for public services, including traffic management, crime prediction, and social welfare distribution. AI-driven analytics assist policymakers in making data-driven decisions to address societal issues more effectively. However, concerns about surveillance, data privacy, and algorithmic biases in law enforcement and governance raise ethical questions that must be carefully addressed to prevent potential misuse of AI technology. Transparent regulations and ethical frameworks are necessary to ensure that AI applications in governance uphold democratic values and protect citizens rights.'
]


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
      <FlexLayout justifyContent="center">
        <StackingLayout
          style={{
            width: '70vw',
            height: '90vh',
            border: 'none',
            padding: '30px',
            borderRadius: '0px',
            margin: '0',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          itemSpacing="30px"
        >
          <StackingLayout
            style={{
              height: '75vh',
              border: 'none',
              padding: '30px',
              borderRadius: '0px',
              margin: '0',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
              <TextLabel>
                { answers[0] }
              </TextLabel>
              <Divider />
              <TextLabel>
                { answers[1] }
              </TextLabel>
              <Divider />
              <TextLabel>
                { answers[2] }
              </TextLabel>
              <Divider />
              <TextLabel>
                { answers[3] }
              </TextLabel>
              <Divider />
              <TextLabel>
                { answers[4] }
              </TextLabel>
              <Divider />
          </StackingLayout>

          <TextLabel
            style={ {
              fontSize: '25px',
              margin: '20px',
              color: 'grey'
            } }
          >
            What can I help with?
          </TextLabel>

          <Input 
            placeholder="Chat with you logs."
          />
        </StackingLayout>
      </FlexLayout>
    </div>
  );
};

export default ChatPage;
