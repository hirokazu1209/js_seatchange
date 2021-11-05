const studentNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

const shuffleArray = function(){
  for(let i = studentNumbers.length - 1;i > 0; i--){
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumbers[i-1];
    studentNumbers[i-1] = studentNumbers[randomNum];
    studentNumbers[randomNum] = tmp;
  }
}

const showSeatBoxes = function(){
  let insertHTML = '';
    studentNumbers.forEach(function(num){
    insertHTML += '<div class="seat__item">' + num + '</div>';
  })

  document.querySelector('#seat').innerHTML = insertHTML;
}

const soundPlay = function(){
  const audioElement = new Audio();
  audioElement.src = 'assets/audio/drum.mp3';
  audioElement.play();

  audioElement.addEventListener('ended', function(){
    clearInterval(timer);
  })
}



document.querySelector('#btn-start').addEventListener('click', function(){
  timer = setInterval(function(){
    shuffleArray();
    showSeatBoxes();
  }, 50);
  soundPlay();
});

// = は、JavaScriptにおいて = の右側にあるものを左側へ代入・保存・設定するという意味
// forは繰り返し処理を行う回数を具体的にfor文に教える必要がある
// Math.ceil()は()の中に指定した数値データの小数点以下部分を無条件で切り上げすることができる
// Math.floor()は小数点以下を切り捨てする命令
// 関数とは「複数の処理・命令を1つにまとめたもの」
// setInterval()の基本コード setInterval('繰り返す命令の内容','タイマー処理を行う時間の間隔')