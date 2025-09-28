"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './client.css';
import {useTheme} from '@/components/ThemeProvider';

import { clientUtil } from '@/utils/client-utils';


const ClientRoute = () => {
    const {theme,toggleTheme} = useTheme();
   const settings = {
    dots: true,
  };
  const message = clientUtil();
  return (
    <div className="image-slider-container">
    <h2>
    The theme is {theme}
    {message &&
        (
            <span> - {message}</span>
        )
    }
    </h2>
    <button onClick={toggleTheme}>Toggle Theme</button>
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}

export default ClientRoute