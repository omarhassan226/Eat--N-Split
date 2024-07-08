/* eslint-disable no-unused-vars */
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendList from "./components/FriendList";
import PaymentCalculator from "./components/PaymentCalculator";
import "./EatWithFriends.css";
import { useState } from "react";

const initialFriends = [
    {
        id: "1",
        name: "Omar.H",
        age: 25,
        gender: "male",
        image: "https://i.pravatar.cc/150?img=3",
        balance: 10
    },
    {
        id: "2",
        name: "Omar.G",
        age: 25,
        gender: "male",
        image: "https://i.pravatar.cc/150?img=8",
        balance: -7
    },
    {
        id: "3",
        name: "Ali",
        age: 25,
        gender: "male",
        image: "https://i.pravatar.cc/150?img=7",
        balance: 0
    },
    {
        id: "4",
        name: "Waleed",
        age: 25,
        gender: "male",
        image: "https://i.pravatar.cc/150?img=11",
        balance: 0
    }
];

const EatWithFriends = () => {
    const [showForm, setShowForm] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    const [selectedValue, setSelectedValue] = useState("");
    const [balance, setBalance] = useState(0);
    const [bill, setBill] = useState(0);
    const [user1Payment, setUser1Payment] = useState(0);

    const billValue = (e) => {
        const value = e.target.value;
        setBill(value);
    };

    const user1Value = (e) => {
        const value = e.target.value;
        setUser1Payment(value);
    };

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        // return balance;
    };

    const addFriend = (newFriend) => {
        setFriends((friends) => [...friends, newFriend]);
        setShowForm(false);
    };

    const deleteFriend = (id) => {
        setFriends((friends) => friends.filter((friend) => friend.id !== id));
    };

    const show = () => {
        setShowForm((showForm) => !showForm);
    };

    const handleFriendSelect = (id) => {
        const friend1 = friends.find((friend) => friend.id === id);
        setSelectedFriend(selectedFriend?.id === id ? null : friend1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        selectedValue === selectedFriend.name
        ? setBalance(bill - user1Payment)
        : setBalance(user1Payment);
        selectedFriend.balance = balance
    }

    return (
        <div className="main">
            <div>
                <FriendList
                    friends={friends}
                    deleteFriend={deleteFriend}
                    handleFriendSelect={handleFriendSelect}
                    selectedFriend={selectedFriend}
                />
                <div className="formSection">
                    <Button showForm={showForm} show={show}>
                        {showForm ? "Close" : "Add Friend"}
                    </Button>
                    {showForm && <AddFriendForm addFriend={addFriend} />}
                </div>
            </div>
            <div>
                {selectedFriend && (
                    <PaymentCalculator
                        friend={selectedFriend}
                        handleSelectChange={handleSelectChange}
                        selectedValue={selectedValue}
                        user1Payment={user1Payment}
                        bill={bill}
                        user1Value={user1Value}
                        billValue={billValue}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default EatWithFriends;
