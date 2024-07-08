/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"

const AddFriendForm = ({ addFriend }) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [balance, setBalance] = useState(0)



    const submit = (e) => {
        e.preventDefault()
        const newFriend1 = {
            id: new Date().getTime(),
            name,
            image,
            balance
        }
        addFriend(newFriend1)
        setName('')
        setImage('')
        setBalance(0)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(name);
    }

    const handleImageChange = (e) => {
        setImage(e.target.value)
        console.log(image);
    }

    const handleBalanceChange = (e) => {
        setBalance(e.target.value)
        console.log(balance);
    }

    return (
        <div >
            <form className="addFriendForm" onSubmit={submit}>
                <div className="formElements">
                    🙋🏻‍♂️<span>Friend Name</span>
                    <input type="text" placeholder="Enter friend's name" value={name} onChange={handleNameChange} />
                </div>
                <div className="formElements">
                    🌆<span>Image URL</span>
                    <input type="text" placeholder="Enter image URL" value={image} onChange={handleImageChange} />
                </div>
                <div className="formElements">
                    💰<span>Balance</span>
                    <input type="text" placeholder="Enter balance" value={balance} onChange={handleBalanceChange} />
                </div>
                <div className="buttonDiv">
                    <button type="submit" className="button">Add Friend</button>
                </div>
            </form>
        </div>
    )
}

export default AddFriendForm
