import React from 'react'


export default class Content extends React.Component {
    state = {
        data: [{
            "id": 1,
            "first_name": "Minnaminnie",
            "last_name": "Coward",
            "email": "mcoward0@msn.com",
            "gender": "Female"
        }, {
            "id": 2,
            "first_name": "Tedra",
            "last_name": "Kepling",
            "email": "tkepling1@shutterfly.com",
            "gender": "Female"
        }, {
            "id": 3,
            "first_name": "Chantalle",
            "last_name": "Dufour",
            "email": "cdufour2@infoseek.co.jp",
            "gender": "Female"
        }, {
            "id": 4,
            "first_name": "Abran",
            "last_name": "Littrik",
            "email": "alittrik3@vk.com",
            "gender": "Male"
        }, {
            "id": 5,
            "first_name": "Maureen",
            "last_name": "Von Welldun",
            "email": "mvonwelldun4@ycombinator.com",
            "gender": "Female"
        }, {
            "id": 6,
            "first_name": "Eloisa",
            "last_name": "Birdfield",
            "email": "ebirdfield5@cnet.com",
            "gender": "Female"
        }, {
            "id": 7,
            "first_name": "Jessie",
            "last_name": "Tunnacliffe",
            "email": "jtunnacliffe6@google.nl",
            "gender": "Male"
        }, {
            "id": 8,
            "first_name": "Zollie",
            "last_name": "Bolger",
            "email": "zbolger7@1und1.de",
            "gender": "Male"
        }, {
            "id": 9,
            "first_name": "Daphne",
            "last_name": "Daye",
            "email": "ddaye8@hp.com",
            "gender": "Female"
        }, {
            "id": 10,
            "first_name": "Travus",
            "last_name": "Weldrake",
            "email": "tweldrake9@gravatar.com",
            "gender": "Male"
        }]
    }
    
    render() {
        return (
            <section className="container" style={{display: 'block'}}>
                <table style={{fontSize: '20px', border: 'solid 1px #fec00f', margin: '5% auto'}}>
                    {this.state.data.map(item => 
                        <tr key={item.id}>
                            <td  style={{border: 'solid 11px #fec00f'}}>{item.first_name}</td>
                            <td  style={{border: 'solid 11px #fec00f'}}>{item.last_name}</td>
                            <td style={item.gender === 'Male' ? {border: 'solid 11px rgb(69, 170, 182)'} : {border: 'solid 11px rgb(250, 187, 197)'}}>{item.gender}</td>
                            <td>{item.email}</td>
                        </tr>
                    )}
                </table>
            </section>
        )
    }
} 