import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, MessageCircleCode, Watch } from 'lucide-react';
export default function View() {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleShowSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  // const { allRestaurants, loading } = useSelector((state) => state.restauReducer);

  // useEffect(() => {
  //   if (allRestaurants) {
  //     localStorage.setItem('allRestaurants', JSON.stringify(allRestaurants));
  //   }
  // }, [allRestaurants]);
  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    if (localStorage.getItem('allRestaurants')) {
      const storedRestaurants = JSON.parse(localStorage.getItem('allRestaurants'));
      setRestaurant(storedRestaurants.find((item) => item.id == id));
    }
  }, [id]);

  // if (loading) {
  //   return <Spinner animation="border" variant="primary" />;
  // }

  // if (!allRestaurants) {
  //   return <div>Restaurant not found</div>;
  // }
  const renderTooltipReviews = (props) => (
    <Tooltip id="button-tooltip" {...props}>
   Reviews
    </Tooltip>
  );
  const renderTooltipTiming = (props) => (
    <Tooltip id="button-tooltip" {...props}>
   Timings
    </Tooltip>
  );
  const renderTooltipMap = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    View On Map
    </Tooltip>
  );

  return (
    <>
      <div
        className="container container-fluid d-flex justify-content-center align-items-top text-white"
        style={{ marginTop: '100px' }}
      >
        <div className="row align-items-center" sm={12} lg={6}>
          <div className="col-lg-5 pt-5" style={{overflow:'hidden'}}>
            <div className="container"data-aos="flip-left"  >
              <img
                className="w-100 rounded-3"
                src={restaurant?.photograph}
                alt="product image"
              />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 pt-5 d-flex flex-column detailsdiv">
            <div className="container detailsdiv pt-5">
              <h3>Restaurant no : {restaurant?.id}</h3>
              <h1 style={{ overflow: 'hidden' }}>Name : {restaurant?.name}</h1>
              <h3>Type : {restaurant?.cuisine_type}</h3>
              <h3>City : {restaurant?.neighborhood}</h3>
              <h3>Address: {restaurant?.address}</h3>
            </div>
            <div className="pt-5 ">
              <ButtonGroup size="lg" className="mb-2 rounded" variant="secondary">
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipReviews} >
                <Button onClick={() => handleShowSection('reviews')} variant="success"> <MessageCircleCode /> </Button>
              </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltipTiming}>
                      <Button onClick={() => handleShowSection('timings')} variant="success"> <Watch /> </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltipMap}>
                    <Button onClick={() => handleShowSection('map')} variant="success"> <MapPin /> </Button>
                  </OverlayTrigger>
              </ButtonGroup>
            </div>
            
            <div>
              {visibleSection === 'timings' && (
                <div className="timing w-75 pt-3 mt-4 border rounded-3">
                  <h1 className='text-center' style={{ overflow: 'hidden' }}>Timings</h1>
                  {restaurant?.operating_hours &&
                    Object.entries(restaurant.operating_hours).map(([day, hours]) => (
                      <p className='text-center' key={day}>
                        {day}: {hours}
                      </p>
                    ))}
                </div>
              )}
              {visibleSection === 'reviews' && (
                <div className="timing w-75 pt-3 mt-4 border rounded-3" style={{height:'350px',overflowY:'auto'}}>
                  <h1 className='text-center' style={{ overflow: 'hidden' }}>Reviews</h1>
                  {restaurant.reviews?.length ? (
                    restaurant.reviews.map((review, index) => (
                      <div key={index} className=" text-white p-2 mb-2">
                        <p className="text-justify">
                          <strong>{review.name}:</strong> {review.comments}
                        </p>
                        <p>
                          <strong>Rating:</strong> {review.rating}
                        </p>
                        <p>
                          <strong>Dated:</strong> {review.date}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No reviews available.</p>
                  )}
                </div>
              )}
              {visibleSection === 'map' && (
                <div className="timing w-75  mt-4 border rounded-3" >
                  {
                      restaurant &&
                      (
                        <iframe
                          className="rounded text-center"
                          title="Restaurant Location"
                          src={`https://maps.google.com/maps?q=${restaurant.latlng.lat},${restaurant.latlng.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                          width="100%"
                          height="350"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                      )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
