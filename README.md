# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


   <Card className='shadow rounded' style={{ width: '20rem' }}>
                    <Card.Img height={'180px'} variant="top" src={restaurant.photograph} className='object-cover'/>
                    <Card.Body>
                      <Card.Title>{restaurant.name}</Card.Title>
                      <Card.Title>{restaurant.address}</Card.Title>
                      <div className='mt-2 text-center'>
                        <Link to={`/${restaurant.id}/view`}>View More....</Link>
                      </div>
                    </Card.Body>
                  </Card> 