import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');

  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>sup, insert your headline here</h1>
          </div>
          <div className="header-subtitle">
            <h2>insert your subtitle here</h2>
          </div>
          <div className="prompt-container">
            <textarea
              className="prompt-box"
              placeholder="start typing here"
              value={userInput}
              onChange={onUserChangedText}
            />
            <div className="prompt-buttons">
              <a className="generate-button" onClick={null}>
                <div className="generate">
                  <p>Generate</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
