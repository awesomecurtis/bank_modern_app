import React from 'react';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <h1>
        Hello World!
        <Navbar />
      </h1>
    </div>
  )
}

export default App