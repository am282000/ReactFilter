import React from 'react'

const MenuItems = ({items}) => {
    return (
        <>
            <div className="menu-items container-fluid mx-auto">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                        {
                            items.map((element)=>{
                                const {id,name,image,description,price}= element;

                                return (
                                    <div className="item1 col-12 col-md-6 col-lg-6  my-3 px-4" key={id}>
                                        <div className="row Item-inside">
                                            {/* adding images */}
                                            <div className="img-div col-4 col-md-12 col-lg-4">
                                                <img src={image} alt={name} className="img-fluid"/>
                                            </div>
                                            {/* menu item description */}
                                            <div className=" col-12 col-md-12 col-lg-8">
                                                <div className="main-title pt-4 pb-3">
                                                    <h1>{name}</h1>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="menu-price-book">
                                                    <div className="price-book-divide d-flex justify-content-between">
                                                        <h2>Price :{price}</h2>
                                                        <a href="#">
                                                            <button className="btn btn-primary">Order Now</button>
                                                        </a>
                                                    </div>
                                                    <p>*Prices may vary.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItems
