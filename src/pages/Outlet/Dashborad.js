import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './../../Shared/Header';

const Dashborad = () => {
    return (
        <div>
          <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">Oders</Link></li>
                        <li><Link to="/dashboard/allusers">All users</Link></li>
                        <li><Link to="/dashboard/products">Add Prouducts</Link></li>
                        {/* {
                            isAdmin && <>
                                
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        } */}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashborad;