import React from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';

function Service() {
  return (
    <div className="page service-bg">
      <Container>
        <h1 className="mb-4">Our Services</h1>
        <Carousel className="w-75 mx-auto">
          <Carousel.Item>
            <Image
              src="https://via.placeholder.com/640x500/ff9a9e/fad0c4?text=Web+Development"
              className="d-block w-100 rounded"
              alt="Web Development"
            />
            <Carousel.Caption>
              <h3>Web Development</h3>
              <p>Modern responsive websites.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://via.placeholder.com/640x500/a18cd1/fbc2eb?text=Mobile+Apps"
              className="d-block w-100 rounded"
              alt="Mobile Apps"
            />
            <Carousel.Caption>
              <h3>Mobile Apps</h3>
              <p>Android and iOS applications.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://via.placeholder.com/640x500/f6d365/fda085?text=UI%2FUX+Design"
              className="d-block w-100 rounded"
              alt="UI/UX Design"
            />
            <Carousel.Caption>
              <h3>UI/UX Design</h3>
              <p>User-friendly interfaces.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Service;
