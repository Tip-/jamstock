import React from 'react';
import Link from 'gatsby-link';

const SecondPage = () => (
  <div style={{ position: 'relative', zIndex: 10000000, minHeight: 600 }}>
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html: `html{ margin: 0; height: 100%; overflow: hidden; } iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; }`,
      }}
    />
    <iframe
      id="typeform-full"
      width="100%"
      height="600px"
      frameborder="0"
      src="https://henrimichel.typeform.com/to/zvwKhL"
    />
    <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
  </div>
);

export default SecondPage;
