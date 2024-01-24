import { IState as IProps } from "../App";

const List = ({ players }: IProps): JSX.Element => {
  const renderList = (): JSX.Element[] => {
    return players.map((player) => (
      <li className="list">
        <div className="list-header">
          <img className="list-img" src={player.url} alt={player.name} />
          <h2>{player.name}</h2>
        </div>
        <p>{player.age} years old</p>
        <p className="list-note">{player.note}</p>
      </li>
    ));
  };

  return <ol>{renderList()}</ol>;
};

export default List;
