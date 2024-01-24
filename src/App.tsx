import { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  players: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [players, setPlayers] = useState<IState["players"]>([
    {
      name: "LeBron James",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
      age: 36,
      note: "Is allergic to stying on the same team",
    },
    {
      name: "Kobe Bryan",
      url: "https://s.yimg.com/ny/api/res/1.2/upz4fNSKCPLkp5I_UxnSxg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxNw--/https://media.zenfs.com/en-US/time_72/76b5007e17dc20d3844046959cb778d1",
      age: 31,
      note: "He died in a helicopter crash",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Famous basketball players</h1>
        <List players={players} />
        <AddToList players={players} setPlayers={setPlayers} />
      </header>
    </div>
  );
}

export default App;
