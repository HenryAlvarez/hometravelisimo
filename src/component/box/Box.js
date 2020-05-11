import React, { Component } from 'react';
import './box.scss';
import Fade from 'react-reveal/Fade';
import Selectm from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { MdCardTravel, MdLightbulbOutline } from "react-icons/md";
import { Select, Button } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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




class Box extends Component {
    state = { value: 'ES-es' };

    handleChange = (value) => {
        this.setState({ value: value });
    };

    render() {
        return (
            <div className='row d-flex justify-content-md-end'>
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4'>
                    <div className='box'>
                        <Fade bottom>
                            <h2 className='slogan'>All your travel needs in one place</h2>
                            <div className='d-flex justify-content-center mt-2'>
                                <Select
                                    showSearch
                                    placeholder="Select a Country"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Guatemala</Option>
                                    <Option value="lucy">El Salvador</Option>
                                    <Option value="tom">Honduras</Option>
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
                            {/* <FormControl className={'selectMaterial '}>
                                <InputLabel className='inputMaterial' htmlFor="grouped-select">Accommodation</InputLabel>
                                <Selectm className='' defaultValue="" id="grouped-select">
                                    <MenuItem value={1}>Vacation Rentals</MenuItem>
                                    <MenuItem value={2}>Hotels & Resorts</MenuItem>
                                    <MenuItem value={3}>Hostels & Rooms</MenuItem>
                                    <MenuItem value={3}>Unique Stay</MenuItem>
                                </Selectm>
                            </FormControl>
                            <FormControl className={'selectMaterial '}>
                                <InputLabel className='inputMaterial' htmlFor="grouped-select">Things to Do</InputLabel>
                                <Selectm className='' defaultValue="" id="grouped-select">
                                    <MenuItem value={5}>Ten</MenuItem>
                                    <MenuItem value={6}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Selectm>
                            </FormControl>
                            <FormControl className={'selectMaterial '}>
                                <InputLabel className='inputMaterial' htmlFor="grouped-select">Transportation</InputLabel>
                                <Selectm className='' defaultValue="" id="grouped-select">
                                    <MenuItem className='items' value={10}>Ten</MenuItem>
                                    <MenuItem className='items' value={20}>Twenty</MenuItem>
                                    <MenuItem className='items' value={30}>Thirty</MenuItem>
                                </Selectm>
                            </FormControl> */}
                            {/* <div className='mt-2 d-flex justify-content-center'>
                                <Button className='btn-control'>Go</Button>
                            </div> */}
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}





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