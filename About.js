
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="warning">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p><b>
          Origin - 1929
          František Janeček started the company after working in the armament industry. Although he did not have experience with<br/> motorcycles, he was familiar with production techniques. Janeček chose between the Austrian double piston two-stroke motor of Puch, the Berlin two-stroke of Schliha,<br/> and the new Wanderer 500 cc. Janeček chose the Wanderer. Because of the collapse of the German motor industry, Wanderer had stopped production<br/>, being unable to compete with BMW. The first model was introduced on October 23, 1929. This was a 500 cc four-cycle engine with 12 <br/>kW of power (18 hp) and fuel consumption of 6 L/100 km. Although priced highly, through the first years (and several constructional fixes), <br/>this motorcycle was successful and was considered reliable.
          <br/>
          <hr/>
          1930s
          Due to the economic recession of the early 1930s, a cheaper and simpler motorcycle was needed.<br/> The year 1932 marked the introduction of JAWA 175, with its 3.6-kW engine. This light (70 kg) machine was <br/>capable of speeds up to 80 km/h and fuel consumption of 3.5 L/100 km. The first year of production was an immediate success,<br/> selling over 3000 of the JAWA 175, almost three times the number of the 500-cc model over three years of production<br/>. The production of this model ended in 1946. In 1938, JAWA was the first to offer test rides during exhibition shows.<br/> This test motorcycle was a custom JAWA 175 equipped with dual handlebars, a second pair in the back for the instructor. Over the years,<br/> 27,535 units of the JAWA 175 were built.
          <br/>
          <hr/>
          1940s
          The company founder František Janeček died. Postwar production of JAWA 250/350 motorcycles restarted, <br/>and production of the JAWA 350 Ogar motorcycle began.
          <br/>
          <hr/>
          1950s
          Motorcycles produced in the 1950s include the 250, 350/353-Kývačka, and 350/354-Kývačka, 500 OHC and the<br/> 50 Pionýr and Jawetta mopeds. A powerful two-stroke motorcycle known as the JAWA 250/350 with the compact<br/> engine, rear suspension and many other innovations was exported to more than 120 countries. It was one of the most successful <br/>models of JAWA.
<br/>
<hr/>
          1960s
          In the early 1960s, Jawa invented the first automatic clutch for motorcycles. The centrifugal clutch was designed <br/>for Jawa 250/559 and 350/360. Because the clutch has been patented worldwide by Jawa and it was copied<br/> in the Honda 50 Cub motorcycle, Honda had to retreat, pay a fine, and pay a license fee for each motorcycle sold.[6]
          <br/>
          <hr/>
          1962, Amalgamation with ESO in production of JAWA speedway motorcycles
          <br/>
          <hr/>
          
          1963, Closure of JAWA plant in Prague – Pankrác
          <br/>
          <hr/>
          
          1964, Start of production in new plant at Týnec nad Sázavou
          <br/>
          <hr/>
          
          1964, Production of millionth JAWA brand motorcycle
          <br/>
          <hr/>
          
          1965, Start of production of JAWA 350 Automatic motorcycles
          <br/>
          <hr/>
          
          1966, Start of production of JAWA 350 Californian (type 363) motorcycles
          <br/>
          <hr/>
          
          1967, Start of production of JAWA 90 (cross, trail, roadster)
          <br/>
          <hr/>
          
          1967, Start of production of JAWA 50 Mustang (type 23)
          <br/>
          <hr/>
          
          1970s
          1970, Start of production of JAWA 250/350 ÚŘ motorcycles
          <br/>
          <hr/>
          
          1972, jawa 250cc in market (Indian)
          <br/>
          <hr/>
          
          1970, Start of production of JAWA 350 Bizon motorcycles
          1974, Start of production of JAWA 350 (type 634) motorcycles
          1976, Production of two millionth JAWA brand motorcycle
          1980s
          1984, Start of production of JAWA 350 (type 638) motorcycles
          1987, Production of three millionth JAWA brand motorcycle
          1990s
          1991, Start of production of JAWA 350 (type 640) motorcycles
          1994, Start of production of JAWA 250 (type 593) motorcycles
          1994, Start of production of JAWA 50 (type 585, 586) motorcycles
          1997, Founding of the company JAWA Moto spol. s r. o.
          1998, Start of production of JAWA 125 Travel motorcycles
          1998, Joining with MOTOUNION, take-over of bike MUC 125 Dandy production
          1998, Start of production of JAWA 125 Dandy motorcycles
          1999, Start of production of JAWA 100 (type 587) motorcycles
          2000s
          2004, Start of production of JAWA 650 (type 836) and JAWA 650 Classic motorcycles
          2005, Start of production of JAWA 650 Style motorcycles
          2006, Start of production of JAWA 650 Dakar motorcycles
          2008, Start of production of JAWA 250 Travel motorcycles
          2010s
          2011, Start of production of JAWA 660 Sportard motorcycles (successor to 650 Dakar)
          2013, Start of production of JAWA 350/634 Retro motorcycles
          2017, Start of production of Jawa 350 OHC and JAWA 660 Vintage
          Developing of JAWA 1000/1200 motorcycles
          Other activities
          JAWA automobiles
          
          In 1934, Jawa introduced its first car, the Jawa 700, based on the DKW F2.[7] Overall, 1,002 vehicles were produced. The sports car special Jawa 750 was built only in six pieces for the 1000-mile Czechoslovakian race in 1933–35. It is a legend in the history of domestic motor sports. In 1937, the modified Jawa 600 Minor was introduced, which replaced JAWA 700. Production continued in limited numbers during WWII, and some were assembled in the postwar period.[8] Over 14,000 vehicles were produced and more than half were exported abroad. The successor was the Aero Minor; it was, however, manufactured by Aero and not by Jawa, from 1946 to 1952</b>
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Read about us</Button>}
      <div className='accord' >

      <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>customer care number</Accordion.Header>
        <Accordion.Body>

<p><b>8270779082 </b></p>



        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='accord-1'>
        <Accordion.Header>report</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </>
  );
}
export default AlertDismissible;

