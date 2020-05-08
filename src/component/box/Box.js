import React, { Component } from 'react';
import './box.scss';
import Fade from 'react-reveal/Fade';
import { Tabs } from 'antd';
import { FaSearch } from "react-icons/fa";
import { MdCardTravel, MdLightbulbOutline } from "react-icons/md";
const { TabPane } = Tabs;
// const { Option } = Select;


class Box extends Component {
    state = {}


    render() {
        return (
            <div className='box'>
                <Fade bottom>
                    <h2 className='slogan'>All your travel needs in one place</h2>
                </Fade>
                <div>
                    <div className="wrapper">
                        <div className="search">
                            <input
                                id="search"
                                type="search"
                                placeholder="Search a country..."
                                autocomplete="off"
                            />
                            <FaSearch className='icon' />
                        </div>
                    </div>
                </div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Accommodation" key="1">
                        <div className='row d-flex justify-content-center'>
                            <Service img='https://cdn.travelisimo.com/vacationrentals/5dc336bc45757d3cfc31476b/casa-cielo-bedroom.webp' name='Vacation Renatls' />
                            <Service img='https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' name='Hotels & Resorts' />
                            <Service img='https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' name='Hostels & Rooms' />
                            <Service img='https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' name='Unique Stays' />
                        </div>
                    </TabPane>
                    <TabPane tab="Things to Do" key="3">
                        <div className='row d-flex justify-content-center'>
                            <Service img='https://images.unsplash.com/photo-1510662145379-13537db782dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' name='Tour & Excursions' />
                            <Service img='https://images.unsplash.com/photo-1518231365576-99dafdedcd69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' name='Book a Guide' />
                            <Service img='https://cdn.travelisimo.com/tours/5de03025e1e6c80071f6d14e/cerro-tzankujil-2.jpg' name='Local Expirences' />
                            <Service img='https://cdn.travelisimo.com/tours/5dfaa0bb3c81df007300e536/guatemalan-cooking-class-2.jpg' name='Community Tourism' />
                        </div>
                    </TabPane>
                    <TabPane tab="Transportation" key="2">
                        <div className='row d-flex justify-content-center'>
                            <Service img='' name='' />
                            <Service img='' name='' />
                            <Service img='' name='' />
                            <Service img='' name='' />
                        </div>
                    </TabPane>

                </Tabs>
            </div>
        );
    }
}


const Service = (props) => (
    <div className='col-5 pl-2 pr-2'>
        <div className='services'>
            <div className='img' style={{ backgroundImage: `url(${props.img})` }}>
                <div className='overlay'>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    </div>
)



export const MinCard = () => (
    <div className='minCard'>
        <div className='d-flex justify-content-around'>
            <div className='card'>
                <MdCardTravel className='icon' />
                <p>Plan Your Trip</p>
            </div>
            <div className='card'>
                <MdLightbulbOutline className='icon' />
                <p>Tourist Info</p>
            </div>
        </div>
    </div>
)

export default Box;