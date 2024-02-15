import {useState, useEffect} from "react";
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "NO STYLIST",
      artist: "DestroyLonely",
      img_src: "./images/no-stylist.jpg",
      src: "./music/no-stylist.mp3"
    },
    {
      title: "Impala",
      artist: "Young Nudy",
      img_src: "./images/impala.jpg",
      src: "./music/impala.mp3"
    },
    {
      title: "Bad Habit",
      artist: "Steve Lacy",
      img_src: "./images/bad-habit.jpg",
      src: "./music/bad-habit.mp3"
    },
    {
      title: "Can't Be Us",
      artist: "Headie One x Abra Cadabra x Bandokay",
      img_src: "./images/cant-be-us.jpg",
      src: "./music/cant-be-us.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);


  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
