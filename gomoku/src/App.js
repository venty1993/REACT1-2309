import { useState } from 'react';
import './App.css';
import CellContainer from './CellContainer';
import LineContainer from './LineContainer';


function App() {

  const 칸수 = 19;
  const [게임판,set게임판] = useState(initBoard());

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

  function handleDropStone(row,col,value) {
    const 임시복사 = [...게임판];
    
    임시복사[row][col] = value;

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
        <CellContainer 전달={게임판}></CellContainer>
       
    </div>
    </div>
  );
}

export default App;
