import React, { Component } from 'react';
import './box.scss';
import Fade from 'react-reveal/Fade';
import { Select } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;


const menu = (
    <Menu onClick={() => { }}>
        <Menu.Item className='item' key="1">Vacation Rentals</Menu.Item>
        <Menu.Item className='item' key="2">Hotels & Resorts</Menu.Item>
        <Menu.Item className='item' key="3">Hostels & Rooms</Menu.Item>
        <Menu.Item className='item' key="4">Unique Stay</Menu.Item>
    </Menu>
);

const menu2 = (
    <Menu onClick={() => { }}>
        <Menu.Item className='item' key="5">Tours and Excursions</Menu.Item>
        <Menu.Item className='item' key="6">Book a Guide</Menu.Item>
        <Menu.Item className='item' key="7">Local Experiences </Menu.Item>
        <Menu.Item className='item' key="8">Community Tourism</Menu.Item>
    </Menu>
);

const menu3 = (
    <Menu onClick={() => { }}>
        <Menu.Item className='item' key="9">Car Rental</Menu.Item>
        <Menu.Item className='item' key="10">Private Transport</Menu.Item>
        <Menu.Item className='item' key="11">Collective Shuttle</Menu.Item>
        <Menu.Item className='item' key="12">Flights & Helicopters</Menu.Item>
    </Menu>
);

const menu4 = (
    <Menu onClick={() => { }}>
        <Menu.Item className='item' key="9">Information</Menu.Item>
        <Menu.Item className='item' key="10">Event Calendar</Menu.Item>
        <Menu.Item className='item' key="11">Directories</Menu.Item>
        <Menu.Item className='item' key="12">Blog</Menu.Item>
    </Menu>
);




class Box extends Component {

    onChange = (value) => {
        this.props.getCountry(value);
    }

    render() {
        return (
            <div className='row d-flex justify-content-center justify-content-md-end'>
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4'>
                    <div className='box'>
                        <Fade bottom>
                            <h2 className='slogan'>All your travel needs in one place</h2>
                            <div className='d-flex justify-content-center mt-2'>
                                <Select
                                    showSearch
                                    placeholder="Select a Country"
                                    optionFilterProp="children"
                                    onChange={this.onChange}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Guatemala">Guatemala</Option>
                                    <Option value="ElSalvador">El Salvador</Option>
                                    <Option value="Belice">Belice</Option>
                                </Select>
                            </div>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <div className="ant-dropdown-link d-flex justify-content-between align-items-center mt-2">
                                    <p>Accommodation</p> <DownOutlined />
                                </div>
                            </Dropdown>
                            <Dropdown overlay={menu2} trigger={['click']}>
                                <div className="ant-dropdown-link d-flex justify-content-between align-items-center mt-2">
                                    <p>Things to Do</p> <DownOutlined />
                                </div>
                            </Dropdown>
                            <Dropdown overlay={menu3} trigger={['click']}>
                                <div className="ant-dropdown-link d-flex justify-content-between align-items-center mt-2">
                                    <p>Transportation</p> <DownOutlined />
                                </div>
                            </Dropdown>
                            <Dropdown overlay={menu4} trigger={['click']}>
                                <div className="ant-dropdown-link d-flex justify-content-between align-items-center mt-2">
                                    <p>Tourist Information</p> <DownOutlined />
                                </div>
                            </Dropdown>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}

export default Box;