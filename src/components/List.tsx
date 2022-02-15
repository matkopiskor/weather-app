import './List.css';

const items = [1, 2, 3];

export const List = () => {
    return (
        <div className="list">
            {items.map((elem, idx) => (
                <div key={idx} className="list__item">
                    {elem}
                </div>
            ))}
        </div>
    );
};
