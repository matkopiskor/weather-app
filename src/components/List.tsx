import './List.css';

const items = [1, 2, 3];

export const List = () => {
    return (
        <div className="list">
            {items.map((elem) => (
                <div className="list__item">{elem}</div>
            ))}
        </div>
    );
};
