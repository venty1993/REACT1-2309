import { useState } from 'react';
import './App.css';
import CellContainer from './CellContainer';
import LineContainer from './LineContainer';


function App() {

  const 칸수 = 19;
  const [게임판,set게임판] = useState(initBoard());
  const [누구차례,set누구차례] = useState('black');

  function initBoard(){
    const board = []
    for(let i = 0 ; i < 칸수 ; i ++) {
      board[i] = [];
      for(let j = 0 ; j < 칸수 ; j ++) {
        board[i][j] = null;
      }
    }
    return board;
  }

  function 차례변경() {
    if(누구차례 === 'black') {
      set누구차례('white');
    }else {
      set누구차례('black');
    }
  }

  function handleDropStone(row,col) {
    const 임시복사 = [...게임판];
    
    임시복사[row][col] = 누구차례;
    차례변경();
    set게임판(임시복사);
    console.log(게임판);
  }



  return (
    <div className="App">
      <button onClick={()=>{
        handleDropStone(2,4,'black');
      }}>테스트</button>
      <div className="board">
        <LineContainer 칸수={칸수}></LineContainer>
        <CellContainer 전달={게임판} 착수함수={handleDropStone}></CellContainer>
       
    </div>
    </div>
  );
}

export default App;
