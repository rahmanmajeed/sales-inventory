import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
	return (
		<React.Fragment>
			<Container className='py-5'>
				<h3 className='fw-normal'>Welcome Home.</h3>
				<Button href="/profile">Update Profile</Button>

			</Container>
		</React.Fragment>
	)
}

export default Home;