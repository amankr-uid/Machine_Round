import React, {useState, useEffect} from 'react'

const ListView = () => {

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
            })
                
    }

    useEffect(() => {
    getgridData();
    }, [pagination])
    
  return (
    <>
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
                                        {griddata.map(product=>{
                                            return(
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
                                                                <h5 className="inactive-title">{product.title}</h5>
                                                                <p>{product.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="members-list">
                                                        <ul>
                                                        {product.images.map((image, i)=>{
                                                            if(i<3) {
                                                                return (
                                                                <li>
                                                                <a href="javascript:void(0)"><img width={"50px"} src={image} alt="" />
                                                                </a>
                                                            </li>
                                                            )
                                                            }
                                                            
                                                        })}
                                                        {product.images.length > 3 &&
                                                            <li>
                                                                <a href="javascript:void(0)"> <span>+{product.images.length - 3}</span>
                                                                </a>
                                                            </li>
                                                        }
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="task-count">
                                                        <span> {product.stock}</span>
                                                        <p>stock</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="date-badges">
                                                        <span className="badge-sm badge-primary">brand</span>
                                                        <span className="badge-sm badge-muted">{product.brand}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-check form-switch form-switch-md" dir="ltr">
                                                        <input className="form-check-input" type="checkbox" id="SwitchCheckSizemd" />
                                                    </div>
                                                </td>
                                            </tr> 
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="listview-pagination d-none d-sm-flex">
                                    <div className="prev-block">
                                        <button>
                                            <ion-icon name="chevron-back-outline"></ion-icon>
                                        </button>
                                        <span>Prev</span>
                                    </div>
                                    <ul>
                                    <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:0})} className={pagination.skip + 1 ==1 ? "active":""}>1</a></li>
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:1})} className={pagination.skip + 1 ==2 ? "active":""}>2</a></li>
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:2})} className={pagination.skip + 1 ==3 ? "active":""}>3</a></li>
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:3})} className={pagination.skip + 1 ==4 ? "active":""}>4</a></li>
                                            <li><a href="javascript:void(0)" onClick={()=>setPagination({...pagination, skip:4})} className={pagination.skip + 1 ==5 ? "active":""}>5</a></li>
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


    </>
  )
}

export default ListView