/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

const PaymentCalculator = ({ friend, bill, billValue, user1Payment, user1Value, selectedValue, handleSelectChange, handleSubmit }) => {



    return (
        <>
            <h3 className="headers">Split A Bill</h3>
            <div className="" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>
                </div>
                <div className="">
                    <form className="" onSubmit={handleSubmit}>
                        <h1>SPLIT A BILL WITH {friend.name}</h1>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ padding: '10px' }}>🙋🏻‍♂️</span>
                            <div>
                                <span style={{ padding: '10px', paddingRight: '35px' }}>Bill value</span>
                                <input value={bill} type="number" placeholder="Enter Total Bill" onChange={billValue} />
                            </div>
                        </div>
                        <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ padding: '10px' }}>🌆</span>
                            <div>
                                <span style={{ padding: '10px' }}>Your expense</span>
                                <input value={user1Payment} type="number" placeholder="Enter Your Expense" onChange={user1Value} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ padding: '10px' }}>💰</span>
                            <div className="formElement">
                                <span style={{ padding: '10px' }}>{friend.name}'s expense</span>
                                <input value={bill - user1Payment} type="text" disabled placeholder="Enter Sara's Expense" />
                            </div>
                        </div>
                        <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ padding: '10px' }}>💰</span>
                            <div>
                                <span style={{ padding: '10px' }}>Who is paying the bill</span>
                                <select name="" id="" value={selectedValue} onChange={handleSelectChange}>
                                    <option value="you" selected>You</option>
                                    <option value={friend.name}>{friend.name}</option>
                                </select>
                            </div>
                        </div>
                        <div className="buttonDiv">
                            <button type="submit" className="button">Split bill</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PaymentCalculator
