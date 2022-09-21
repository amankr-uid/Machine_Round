import React from 'react'
import { Link } from 'react-router-dom'

const SideBarContent = () => {
    return (
        <>
        
            <section className="sidebar">
                <div className="sidebar-container">

                    <div className="navigation">

                        <ul>
                            <li>
                                <a href="admin-one.html">
                                    <span>
                                        <img src="img/logo-11.png" alt="logo" />
                                    </span>
                                    <span className="title">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="admin-one.html">
                                    <span className="icon">
                                        <ion-icon name="speedometer-outline"></ion-icon>
                                    </span>
                                    <span className="title">dashboard</span>
                                </a>
                            </li>
                            <li className="hovered">
                                <Link to={"/projects"}>
                                    <span className="icon">
                                        <ion-icon name="briefcase-outline"></ion-icon>
                                    </span>
                                    <span className="title">projects</span>
                                </Link>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="create-outline"></ion-icon>
                                    </span>
                                    <span className="title">tasks</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="clipboard-outline"></ion-icon>
                                    </span>
                                    <span className="title">kanban</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="calendar-outline"></ion-icon>
                                    </span>
                                    <span className="title">calendar</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="people-outline"></ion-icon>
                                    </span>
                                    <span className="title">contacts</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="chatbox-outline"></ion-icon>
                                    </span>
                                    <span className="title">messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="cube-outline"></ion-icon>
                                    </span>
                                    <span className="title">products</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="reader-outline"></ion-icon>
                                    </span>
                                    <span className="title">invoices</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="document-outline"></ion-icon>
                                    </span>
                                    <span className="title">fill browser</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="notifications-outline"></ion-icon>
                                    </span>
                                    <span className="title">notifications</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="bar-chart-outline"></ion-icon>
                                    </span>
                                    <span className="title">report</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span className="icon">
                                        <ion-icon name="help-outline"></ion-icon>
                                    </span>
                                    <span className="title">help center</span>
                                </a>
                            </li>
                        </ul>
                        <div className="toggle-mob">
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                    </div>

                </div>
{/* 
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
                                <div className="progress-bar progress-sm progress-primary" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress-block">
                            <div className="progress-text">
                                <div>
                                    <h6>Leads</h6>
                                    <p>Month Comparison</p>
                                </div>
                                <div className="progress-value">
                                    <span>3.820
                                        <ion-icon name="arrow-down-outline" className="red-down-arrow"></ion-icon>
                                    </span>
                                </div>
                            </div>
                            <div className="progress animated-progess">
                                <div className="progress-bar progress-sm progress-warning" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress-block">
                            <div className="progress-text">
                                <div>
                                    <h6>Income</h6>
                                    <p>Week Comparison</p>
                                </div>
                                <div className="progress-value">
                                    <span>$4690
                                        <ion-icon name="arrow-up-outline" className="green-up-arrow"></ion-icon>
                                    </span>
                                </div>
                            </div>
                            <div className="progress animated-progess">
                                <div className="progress-bar progress-sm progress-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress-block">
                            <div className="progress-text">
                                <div>
                                    <h6>Spendings</h6>
                                    <p>Month Comparison</p>
                                </div>
                                <div className="progress-value">
                                    <span>$3820
                                        <ion-icon name="arrow-down-outline" className="red-down-arrow"></ion-icon>
                                    </span>
                                </div>
                            </div>
                            <div className="progress animated-progess">
                                <div className="progress-bar progress-sm progress-success" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
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
                    <div className="project-wrapper">
                        <div className="container-fluid p-0">
                            <div className="row">

                                <div className="col-md-12">
                                    <div className="project-header">
                                        <div className="button-block d-none d-sm-block">
                                            <button className="icon-btn">
                                                <ion-icon name="list-outline"></ion-icon> List
                                            </button>
                                            <button className="icon-btn">
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

                                    <div className="table-responsive list-table">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div className="project-sort">
                                                            <h6>Projects</h6>
                                                            <a href="javascript:void(0)"><span><i className="bi bi-sort-alpha-down"></i></span></a>
                                                        </div>
                                                    </th>

                                                    <th>
                                                        <div className="members-sort">
                                                            <h6>Members</h6>
                                                            <a href="javascript:void(0)"><span><i className="bi bi-sort-numeric-down"></i></span></a>
                                                        </div>
                                                    </th>

                                                    <th>
                                                        <div className="task-sort">
                                                            <h6>Tasks</h6>
                                                            <a href="javascript:void(0)"><span><i className="bi bi-sort-numeric-down"></i></span></a>
                                                        </div>
                                                    </th>

                                                    <th>
                                                        <div className="due-sort">
                                                            <h6>Due Date</h6>
                                                            <a href="javascript:void(0)"><span><i className="bi bi-sort-numeric-down"></i></span></a>
                                                        </div>
                                                    </th>

                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td scope="row">
                                                        <div className="list-icon-flex">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 list-flex-icon">
                                                                    <a href="javascript:void(0)">
                                                                        <span>
                                                                            <ion-icon name="logo-dribbble"></ion-icon>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3 list-flex-text">
                                                                    <h5 className="inactive-title">Dribble Website</h5>
                                                                    <p>Development</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="members-list">
                                                            <ul>
                                                                <li>
                                                                    <a href="javascript:void(0)"><img src="img/person-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0)"><img src="img/person-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0)"><img src="img/person-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0)"> <span>+5</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="task-count">
                                                            <span> <strong>90</strong>/148</span>
                                                            <p>tasks</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="date-badges">
                                                            <span className="badge-sm badge-primary">development</span>
                                                            <span className="badge-sm badge-muted">24 feb 2019</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check form-switch form-switch-md" dir="ltr">
                                                            <input className="form-check-input" type="checkbox" id="SwitchCheckSizemd" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">
                                                        <div className="list-icon-flex">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 list-flex-icon">
                                                                    <a href="javascript:void(0)">
                                                                        <span>
                                                                            <ion-icon name="logo-dribbble"></ion-icon>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div className="flex-grow-1 ms-3 list-flex-text">
                                                                    <h5>Dribble Website</h5>
                                                                    <p>Development</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="members-list">
                                                            <ul>
                                                                <li>
                                                                    <a href="javascript:void(0)"><img src="img/person-1.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0)"><img src="img/person-2.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0)"><img src="img/person-3.png" alt="" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:void(0)"> <span>+5</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="task-count">
                                                            <span> <strong>90</strong>/148</span>
                                                            <p>tasks</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="date-badges">
                                                            <span className="badge-sm badge-primary">development</span>
                                                            <span className="badge-sm badge-muted">24 feb 2019</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-check form-switch form-switch-md" dir="ltr">
                                                            <input className="form-check-input" type="checkbox" id="SwitchCheckSizemd" />
                                                        </div>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="grid-view-header">
                                        <div className="project-sort">
                                            <h6>Projects</h6>
                                            <a href="javascript:void(0)"><span><i className="bi bi-sort-alpha-down"></i></span></a>
                                        </div>
                                        <div className="task-sort">
                                            <h6>Tasks</h6>
                                            <a href="javascript:void(0)"><span><i className="bi bi-sort-numeric-down"></i></span></a>
                                        </div>
                                        <div className="due-sort">
                                            <h6>Due Date</h6>
                                            <a href="javascript:void(0)"><span><i className="bi bi-sort-numeric-down"></i></span></a>
                                        </div>
                                        <div className="members-sort">
                                            <h6>Members</h6>
                                            <a href="javascript:void(0)"><span><i className="bi bi-sort-numeric-down"></i></span></a>
                                        </div>
                                    </div>
                                    <div className="grid-view">
                                        <div className="grid-block">

                                            <div className="title-block">
                                                <span>
                                                    <ion-icon name="logo-dribbble"></ion-icon>
                                                </span>
                                                <h5>Dribble Website</h5>
                                                <p>Development</p>
                                            </div>

                                            <div className="due-block">
                                                <span>Due to 14 mar 2019</span>
                                            </div>

                                            <div className="bottom-block">
                                                <div className="task">
                                                    <span><strong>20</strong>/45</span>
                                                    <p>tasks</p>
                                                </div>

                                                <div className="budget">
                                                    <span>$3.2k</span>
                                                    <p>budget</p>
                                                </div>
                                            </div>

                                            <div className="drop-down">
                                                <a href="javascript:void(0)">
                                                    <span>
                                                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>
                                        <div className="grid-block">
                                            <div className="drop-down">
                                                <a href="javascript:void(0)">
                                                    <span>
                                                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="title-block">
                                                <span>
                                                    <ion-icon name="logo-dribbble"></ion-icon>
                                                </span>
                                                <h5>Dribble Website</h5>
                                                <p>Development</p>
                                            </div>

                                            <div className="due-block">
                                                <span>Due to 14 mar 2019</span>
                                            </div>

                                            <div className="bottom-block">
                                                <div className="task">
                                                    <span><strong>20</strong>/45</span>
                                                    <p>tasks</p>
                                                </div>

                                                <div className="budget">
                                                    <span>$3.2k</span>
                                                    <p>budget</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="grid-block">
                                            <div className="drop-down">
                                                <a href="javascript:void(0)">
                                                    <span>
                                                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="title-block">
                                                <span>
                                                    <ion-icon name="logo-dribbble"></ion-icon>
                                                </span>
                                                <h5>Dribble Website</h5>
                                                <p>Development</p>
                                            </div>

                                            <div className="due-block">
                                                <span>Due to 14 mar 2019</span>
                                            </div>

                                            <div className="bottom-block">
                                                <div className="task">
                                                    <span><strong>20</strong>/45</span>
                                                    <p>tasks</p>
                                                </div>

                                                <div className="budget">
                                                    <span>$3.2k</span>
                                                    <p>budget</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="grid-block">
                                            <div className="drop-down">
                                                <a href="javascript:void(0)">
                                                    <span>
                                                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="title-block">
                                                <span>
                                                    <ion-icon name="logo-dribbble"></ion-icon>
                                                </span>
                                                <h5>Dribble Website</h5>
                                                <p>Development</p>
                                            </div>

                                            <div className="due-block">
                                                <span>Due to 14 mar 2019</span>
                                            </div>

                                            <div className="bottom-block">
                                                <div className="task">
                                                    <span><strong>20</strong>/45</span>
                                                    <p>tasks</p>
                                                </div>

                                                <div className="budget">
                                                    <span>$3.2k</span>
                                                    <p>budget</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="listview-pagination d-none d-sm-flex">
                                        <div className="prev-block">
                                            <button>
                                                <ion-icon name="chevron-back-outline"></ion-icon>
                                            </button>
                                            <span>Prev</span>
                                        </div>
                                        <ul>
                                            <li><a href="javascript:void(0)">1</a></li>
                                            <li><a href="javascript:void(0)">2</a></li>
                                            <li><a href="javascript:void(0)" className="active">3</a></li>
                                            <li><a href="javascript:void(0)">4</a></li>
                                            <li><a href="javascript:void(0)">5</a></li>
                                        </ul>
                                        <div className="next-block">
                                            <span>Next</span>
                                            <button>
                                                <ion-icon name="chevron-forward-outline"></ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="listview-pagination d-flex d-sm-none flex-column">

                                        <div className="d-flex mb-2">
                                            <div className="prev-block">
                                                <button>
                                                    <ion-icon name="chevron-back-outline"></ion-icon>
                                                </button>
                                                <span>Prev</span>
                                            </div>
                                            <div className="next-block ms-5">
                                                <span>Next</span>
                                                <button>
                                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                                </button>
                                            </div>
                                        </div>

                                        <ul>
                                            <li><a href="javascript:void(0)">1</a></li>
                                            <li><a href="javascript:void(0)">2</a></li>
                                            <li><a href="javascript:void(0)" className="active">3</a></li>
                                            <li><a href="javascript:void(0)">4</a></li>
                                            <li><a href="javascript:void(0)">5</a></li>
                                        </ul>

                                    </div>

                                    <div className="gridview-pagination">
                                        <div className="items-page">
                                            <form>
                                                <select id="grid-select">
                                                    <option>15</option>
                                                    <option>10</option>
                                                    <option>20</option>
                                                    <option>25</option>
                                                </select>
                                                <label>Items Per Page</label>
                                            </form>
                                        </div>
                                        <div className="grid-pagination-wrapper">
                                            <div className="prev-block">
                                                <button>
                                                    <ion-icon name="chevron-back-outline"></ion-icon>
                                                </button>
                                            </div>
                                            <ul className="grid-view-ul">
                                                <li><a href="javascript:void(0)">1</a></li>
                                                <li><a href="javascript:void(0)" className="active">2</a></li>
                                                <li><a href="javascript:void(0)">3</a></li>
                                                <li><a href="javascript:void(0)">4</a></li>
                                                <li><a href="javascript:void(0)">5</a></li>
                                            </ul>
                                            <div className="next-block">
                                                <button>
                                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </section>

        </>
    )
}

export default SideBarContent