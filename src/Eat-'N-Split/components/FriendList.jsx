/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "./Button";

const FriendList = ({ friends, deleteFriend, handleFriendSelect, selectedFriend }) => {

    const getBalanceClass = (balance) => {
        if (balance < 0) return "red";
        if (balance > 0) return "green";
        return "black";
    };

    return (
        <div>
            <h4 className="headers">Friend List</h4>
            {friends?.map((friend) => (
                <div key={friend.id} className="friendList">
                    <img className="img" src={friend.image} alt={friend.name} />
                    <div className="nameBalance">
                        <span>{friend.name}</span>
                        <span className={getBalanceClass(friend.balance)}> you have {Math.abs(friend.balance)}$</span>
                    </div>
                    <button className="button" onClick={() => handleFriendSelect(friend.id)}>
                        <span>{friend.id === selectedFriend?.id ? "Close" : "Select"} </span>
                    </button>
                    <button className="button" onClick={() => deleteFriend(friend.id)}>
                        <span>Remove</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FriendList;
