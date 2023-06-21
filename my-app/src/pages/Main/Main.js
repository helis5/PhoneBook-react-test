import "./Main.scss";

// function Main() {
//
//     return (
//         <div className="Main">
//             <div id="phonebook">
//                 <input id="input-number" placeholder="Введите номер телефона без +" type="number" pattern="^[0-9]+$"/>
//
//                     <button className="add" onClick={add()}>
//                         добавить номер телефона
//                     </button>
//                     <div id="phone-list">
//                     </div>
//             </div>
//         </div>
//     )
// }
//
// export default Main;



import React from 'react';

class PhoneNumberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumbers: []
        };
    }

    addPhoneNumber() {
        const newPhoneNumber = document.getElementById('input-number').value;
        if (!newPhoneNumber) {
            console.error('Введите номер телефона пожалуйста!');
            return;
        }
        if (this.checkPhoneInList(newPhoneNumber)) {
            console.error('Такой номер уже есть');
            return;
        }
        const newPhoneNumberItem = {
            id: this.state.phoneNumbers.length + 1,
            phoneNumber: newPhoneNumber
        };
        this.setState(prevState => ({
            phoneNumbers: [...prevState.phoneNumbers, newPhoneNumberItem]
        }));
    }

    checkPhoneInList(phone) {
        return this.state.phoneNumbers.some(item => item.phoneNumber === phone);
    }

    removePhoneNumber(id) {
        this.setState(prevState => ({
            phoneNumbers: prevState.phoneNumbers.filter(item => item.id !== id)
        }));
    }

    render() {
        return (
            <div className="Main">
                <div id="phonebook">
                    <input
                        id="input-number"
                        placeholder="Введите номер телефона без +"
                        type="number"
                        pattern="^[0-9]+$"
                    />
                    <button className="add" onClick={() => this.addPhoneNumber()}>
                        добавить номер телефона
                    </button>
                    <div id="phone-list">
                        {this.state.phoneNumbers.map(item => (
                            <div key={item.id} className="item">
                                <div data-id={item.id}>
                                    <p className="number">{item.phoneNumber}</p>
                                </div>
                                <button
                                    className="remove"
                                    onClick={() => this.removePhoneNumber(item.id)}
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneNumberList;