import './App.css';
import { useState } from 'react';

// основной компонент
function MiyagiQuiz() {
  const [answer, setAnswer] = useState('');
  const [songTest, setSongTest] = useState(false);
  const [buyTickets, setBuyTickets] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleInput = (e) => setAnswer(e.target.value);
  const checkAnswer = () => {
    if (answer.toLowerCase() === 'айджастриливонттуволкэвэй') {
      window.alert('Поздравляем! Вы - НАСТОЯЩИЙ ценитель Мияги!');
      setSongTest(true);
    } else {
      window.alert('Мияги не делает глупых треков');
    }
  };

  const handleOption = (e) => setSelectedOption(e.target.value);
  const checkSongName = () => {
    if (selectedOption === 'correct_option') {
      window.alert('Поздравляем! Теперь вы достойны концерта Miyagi!');
      setSongTest(false);
      setBuyTickets(true);
    } else {
      window.alert('Неверный вариант ответа');
    }
  };

  return (
    <div className="centered">
      <h1>Как хорошо вы знаете Мияги</h1>
      {!songTest && !buyTickets && (
        <>
          <h2>Продолжи мелодию</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQcOWKEXpVqiOO_iaq_F1XN7YRQ6ySqr5Kw&s" width={200} height={200} alt="Miyagi" />
          <h2>Лэтс донт тоук эбаут май соул</h2>
          <input type='text' onChange={handleInput} />
          <button onClick={checkAnswer}>Узнать правду!</button>
        </>
      )}
      {songTest && (
        <SongNameTest
          selectedOption={selectedOption}
          onOptionChange={handleOption}
          onCheck={checkSongName}
        />
      )}
      {buyTickets && <TicketPurchase />}
    </div>
  );
}

//компонент названия песни
function SongNameTest({ selectedOption, onOptionChange, onCheck }) {
  return (
    <div className="centered">
      <h2>Теперь угадайте название песни где поется:</h2>
      <code style={{ color: 'pink', fontSize: "50px" }}>"потерялисебянема"</code>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value="wrong_option_1"
              checked={selectedOption === 'wrong_option_1'}
              onChange={onOptionChange}
            />
            Сын
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="wrong_option_2"
              checked={selectedOption === 'wrong_option_2'}
              onChange={onOptionChange}
            />
            Brooklyn
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="correct_option"
              checked={selectedOption === 'correct_option'}
              onChange={onOptionChange}
            />
            Captain
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="wrong_option_4"
              checked={selectedOption === 'wrong_option_4'}
              onChange={onOptionChange}
            />
            I GOT LOVE
          </label>
        </div>
      </form>
      <button onClick={onCheck}>Проверить</button>
    </div>
  );
}

//компонент билетов
function TicketPurchase() {
  const [tickets, setTickets] = useState(1);
  const [legend, setLegend] = useState(false);

  const handleBuy = () => {
    if (tickets >= 10) {
      window.alert('SOLD OUT');
      setTickets('sold out');
      setLegend(true);
    } else {
      setTickets(tickets + 1);
    }
  };

  return (
    <div className="centered">
      <h1>Покупка билетов на концерт Miyagi!!!</h1>
      <img src="https://sochi.com/upload/iblock/1f9/image8.jpg" width={400} height={400} alt="Miyagi" />
      {legend ? (
        <h2>ВЫ ЛЕГЕНДА</h2>
      ) : (
        <>
          <p>Вы купили {tickets} билет(а)(ов)</p>
          <button onClick={handleBuy}>Купить билет</button>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <MiyagiQuiz />
    </div>
  );
}

export default App;
