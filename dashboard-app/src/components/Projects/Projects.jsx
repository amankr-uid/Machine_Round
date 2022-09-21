import React, { useState } from 'react'
import SideBarContent from '../SideBarContent'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import GridView from '../Panel/GridView'
import ListView from '../Panel/ListView'

const Projects = () => {
    const [showGridOrList, setShowGridOrList] =  useState("grid");
    return (
        <>
            <SideBarContent />


            <div className="project-page-chart">

                <div className="chart-title">
                    <div className="chart-title-text">
                        <img src="img/logo-11.png" alt="logo" />
                        <div>
                            <h5>whiteui.store llc</h5>
                            <p>8484 ross wells</p>
                        </div>
                    </div>
                    <div className="chart-dropdown">
                        <div className="dropdown">
                            <button className="dropdown-btn" type="button">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="progress-wrapper">

                    <h5>Overview</h5>


                    <div className="progress-block">
                        <div className="progress-text">
                            <div>
                                <h6>Sales</h6>
                                <p>Week Comparison</p>
                            </div>
                            <div className="progress-value">
                                <span>1.345
                                    <ion-icon name="arrow-up-outline" className="green-up-arrow"></ion-icon>
                                </span>
                            </div>
                        </div>
                        <div className="progress animated-progess">
                            <div className="progress-bar progress-sm progress-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                </div>

                <div className="chart-block">
                    <div className="chart">
                        <div id="column-chart" className="apex-charts" dir="ltr"></div>
                    </div>
                    <div className="bottom-block">
                        <div className="task">
                            <span><strong>$342.000</strong></span>
                            <p>total sales</p>
                        </div>

                        <div className="budget">
                            <span><strong>$200.000</strong></span>
                            <p>Spendings</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="main">
                <div className="topbar">

                    <div className="toggle-block">
                        <div className="toggle">
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                        <h6>Projects</h6>
                    </div>

                    <div className="search">
                        <a href="javascript:void(0)">
                            <ion-icon name="search-outline"></ion-icon>
                        </a>
                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </a>
                    </div>
                </div>
                <div className="project-wrapper" style={{"marginLeft":"620px"}}>
                    <div className="container-fluid p-0">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="project-header">
                                    <div className="button-block d-none d-sm-block" >
                                        <button className="icon-btn" onClick={()=>{setShowGridOrList("list")}}>
                                            <ion-icon name="list-outline"></ion-icon> List
                                        </button>
                                        <button className="icon-btn" onClick={()=>{setShowGridOrList("grid")}}>
                                            <ion-icon name="grid-outline"></ion-icon> Grid
                                        </button>
                                    </div>
                                    <div className="button-block d-flex d-sm-none">
                                        <button className="btn list-btn">
                                            <ion-icon name="list-outline" className="me-0"></ion-icon>
                                        </button>
                                        <button className="btn list-btn ms-2">
                                            <ion-icon name="grid-outline" className="me-0"></ion-icon>
                                        </button>
                                    </div>
                                    <div className="filter-drop">
                                        <label>
                                            <ion-icon name="funnel-outline"></ion-icon> Sort:
                                        </label>
                                        <form>
                                            <select>
                                                <option>A-Z</option>
                                                <option>Z-A</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                {showGridOrList == "grid" && 
                                <GridView/>
                                }
                                {showGridOrList == "list" && 
                                <ListView/>
                                }
                               {/* <GridView/>
                               <ListView/> */}
                               

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projects