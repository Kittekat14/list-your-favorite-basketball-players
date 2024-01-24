import { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  players: Props["players"];
  setPlayers: React.Dispatch<React.SetStateAction<Props["players"]>>;
}

const AddToList: React.FC<IProps> = ({ players, setPlayers }) => {
  const [inputValue, setInputValue] = useState<{
    name: string;
    age: number;
    url: string;
    note?: string;
  }>({
    name: "",
    age: 0,
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!inputValue.name && !inputValue.age && !inputValue.url) {
      return;
    }

    setPlayers([...players, inputValue]);

    setInputValue({
      name: "",
      age: 0,
      url: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <h2>Create a new player</h2>
      <input
        type="text"
        className="AddToList-input"
        placeholder="Name of player"
        name="name"
        value={inputValue.name}
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="Age of player"
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="Image of player"
        name="url"
        value={inputValue.url}
        onChange={handleChange}
      />
      <textarea
        className="AddToList-input"
        placeholder="Notes for that player"
        name="note"
        value={inputValue.note}
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleSubmit}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
