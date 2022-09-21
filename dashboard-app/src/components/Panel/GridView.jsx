import React, { useState, useEffect } from 'react'

const GridView = () => {
    const [griddata, setgriddata] = useState([]);
    const [pagination, setPagination] = useState({
        skip:0,
        limit:10
    });
    const [totalProducts, setProducts] = useState(0)
    const [pageNo, setpageNo] = useState([]);

    const getgridData = () => {
        let url = `https://dummyjson.com/products?skip=${pagination.skip}&limit=${pagination.limit}`;
        fetch(url)
                .then(response => response.json())
                .then(e => {setgriddata(e.products);setProducts(e.total);
                // let pages = [];
                // while(e.products/pagination.limit) {
                //     pages.push(e.products/pagination.limit)
                // }
                // console.log(pages,'pages')
                // setpageNo([...pages])
            })
                
    }

    useEffect(() => {
      getgridData()
    }, [pagination])

    const handleDelete = (id) => {

    }

    const handleUpdate = (id) => {

    }
    
  return (
    <>

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
                                <div className="grid-view" style={{maxWidth:"3000px"}} >
                                {griddata.map((product)=>{
                                  return(
                                    <div className="grid-block" style={{width:"300px", padding:"20px"}}>

                                        <div className="title-block">
                                            <span>
                                                <ion-icon name="logo-dribbble"></ion-icon>
                                            </span>
                                            <h5>{product.title}</h5>
                                            <p>{product.description}</p>
                                        </div>

                                        <div className="due-block">
                                            <span>{product.brand}</span>
                                        </div>

                                        <div className="bottom-block">
                                            <div className="task">
                                                <span>{product.stock}</span>
                                                <p>stock</p>
                                            </div>

                                            <div className="budget">
                                                <span>{`$${product.price}`}</span>
                                                <p>price</p>
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
                                  )
                                })}
                                    {/* <div className="grid-block">

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

                                    </div> */}
                                </div>
                                <div className="gridview-pagination">
                                    <div className="items-page">
                                        <form>
                                            <select id="grid-select" value={pagination.limit.toString()} onChange={(e)=>setPagination({...pagination, limit:e.target.value})}>
                                                <option value={"15"} >15</option>
                                                <option value={"10"} >10</option>
                                                <option value={"20"} >20</option>
                                                <option value={"25"} >25</option>
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
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:0})} className={pagination.skip + 1 ==1 ? "active":""}>1</a></li>
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:1})} className={pagination.skip + 1 ==2 ? "active":""}>2</a></li>
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:2})} className={pagination.skip + 1 ==3 ? "active":""}>3</a></li>
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:3})} className={pagination.skip + 1 ==4 ? "active":""}>4</a></li>
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:4})} className={pagination.skip + 1 ==5 ? "active":""}>5</a></li>
                                        </ul>
                                        <div className="next-block">
                                            <button>
                                                <ion-icon name="chevron-forward-outline"></ion-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>

    </>
  )
}

export default GridView