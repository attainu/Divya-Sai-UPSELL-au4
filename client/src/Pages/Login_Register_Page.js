import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



import Login from '../Components/Login';
import Register from '../Components/Register';
import Banner from '../Components/Banner';
import Guest from '../Components/Guest';

class Login_Register_Page extends Component {

    render() {
        return (
            <React.Fragment>
                <Banner imgName="login_register_pagebanner.jpg" />
                
                <div className="navTabs">
                    <Guest/>
                    <div className="space">OR</div>
                    <Tabs>
                        <TabList>
                            <Tab id="logintab">Login</Tab>
                            <Tab>Register</Tab>
                        </TabList>

                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Register />
                            <p className="forgot-password text-right">
                                Already registered?<Tab id="switchtab">Login</Tab>
                            </p>
                        </TabPanel>
                    </Tabs>
                            
                            
                </div>
                
            </React.Fragment>
        )
    }
}

export default Login_Register_Page;