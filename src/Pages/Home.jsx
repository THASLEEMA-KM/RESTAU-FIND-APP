import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import {  Col, Pagination, Row, Spinner } from 'react-bootstrap';
import { fetchRestaurants } from '../Redux/restauSlice';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const { allRestaurants, loading, error } = useSelector(state => state.restauReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantPerPage = 6;
 
 
   const indexOfLastRestaurant = currentPage * restaurantPerPage;
   const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  //  const currentRestaurants = allRestaurants?.slice(indexOfFirstRestaurant, indexOfLastRestaurant);
  const currentRestaurants = Array.isArray(allRestaurants) ? allRestaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant) : [];

   const paginate = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(allRestaurants?.length / restaurantPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Header insideHome={true} />
      <div style={{ marginTop: '100px' }}>
      <h1 className='pt-5 text-center animate__animated animate__flipInX text-warning' style={{overflow:'hidden'}}>All Restaurants</h1>
        {loading ? (
          <div className="text-center mt-5 fw-bolder ">
            <Spinner animation="border" variant="warning" />Loading......
          </div>
        ) : (
          <Row className='my-5 ms-3' >
            {
              currentRestaurants?.length > 0 ? (
              currentRestaurants?.map((restaurant) => (
                <Col sm={12} md={6} lg={4} xl={4} key={restaurant.id} style={{overflow:'hidden'}}
                className="  d-flex justify-content-center  align-items-center flex-column">
                    <div className="carddiv " data-aos='zoom-in-down' >
                        <Link to={`/${restaurant.id}/view`}>
                              <img
                              src={restaurant.photograph}
                              alt={restaurant.name}
                              className=" img img-responsive"/>
                        </Link>
                        <div className='cardname '><h3 className='fw-bolder p-3 '>{restaurant.name}</h3></div>
                        <div  className='carddetail'>
                          <h2 className='p-3 fw-bold '>City : {restaurant.neighborhood}</h2>
                          <h3 className='p-3 fw-bold '>Cuisine : {restaurant.cuisine_type}</h3>
                        </div>
                    </div>
                </Col>
              ))
            ) : (
              <div className="text-center text-danger">
                <h1 className='text-danger'  style={{overflow:'hidden'}}>NOTHING TO DISPLAY</h1>
              </div>
            )}
          </Row>
        )}
      </div>

      <div className="d-flex justify-content-center ">
        <Pagination className='rounded-5 ' >
        
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
      
        {Array.from(
              { length: Math.ceil(allRestaurants?.length / restaurantPerPage) },
              (_, i) => (
                <Pagination.Item
                  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => paginate(i + 1)}
                  style={{
                    backgroundColor: i + 1 === currentPage ? "violet" : "inherit",
                    color: i + 1 === currentPage ? "violet" : "inherit",
                  }}
                >
                  {i + 1}
                </Pagination.Item>
              )
            )}
        <Pagination.Next onClick={() => paginate(currentPage + 1)} />

      </Pagination>
</div>
    </>
  );
};

export default Home;
