import React from 'react';

const App = () => {
  const onClickButton = () => alert("aaa");
    const contentLadyStyle = {
    color: 'blue',
    fontSize: '18px'
    };

  return (
   <>
    <h1 style={{ color: 'red' }}>こんちくす！</h1>
    <p style={contentLadyStyle}>元気です</p>
    <button onClick={onClickButton}>ボタン</button>
   </>
  );
};

export default App;