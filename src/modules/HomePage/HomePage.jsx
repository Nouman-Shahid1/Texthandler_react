import React from 'react';
import { MainSection } from './MainSection';
import { AboutShop } from './AboutShop';
import { Rings } from './Rings';
import { Reviews } from './comments'; // Correct the import path
import { ContactForm } from './contact';
import Footer from '../../Components/Footer';
export const HomePage = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      position:"Art Collector",
      text: "Absolutely in love with the exquisite pieces from this jewelry shop! The craftsmanship and attention to detail are second to none. Each piece tells its own story, and I feel truly special wearing them"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position:"Fashion Blogge",
      text: "A hidden gem of a jewelry shop! The combination of unique designs and top-quality materials is outstanding. I've received numerous compliments on the necklace I purchased, and I'm already planning my next visit"},
    {
      id: 3,
      name: "David Martinez",
      position:"CEO, Design Studio",
      text: "Shopping at this jewelry store is like stepping into a treasure trove of beauty. The collection is diverse, catering to both classic and contemporary tastes. The quality and design shine through, making each purchase a cherished possession",
    },
    {
      id: 4,
      name: "Emily Parker",
      position: "Bride-to-be",
      text: "I'm impressed not only by the stunning jewelry but also by the personalized service. The staff took the time to understand my preferences and helped me find pieces that match my style perfectly. The result? A collection of jewelry that truly feels like 'me"
    }
    ];

  return (
    <div>
      <MainSection />
      <AboutShop />
      <Rings />
      <Reviews reviews={reviews} />
      <ContactForm />
      <Footer/>
    </div>
  );
};
