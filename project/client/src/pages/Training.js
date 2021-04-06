/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */

// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import Card from '../components/Card';
import Cards from '../components/Cards';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { Container } from '../styles/Styles';

const dummyCards = [
  {
    _key: 1,
    img: {
      asset: {
        url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80',
      },
      alt: 'Bilde av trening',
    },
    title: 'Online trening',
    text: 'SATS vet hvor viktig trening er for både kropp og sinn.',
    link: [
      {
        _key: 1,
        href: 'online training',
        name: 'Se timene'
      },
      {
        _key: 2,
        href: 'online training',
        name: 'Se alt'
      },

    ],

  },
  {
    _key: 2,
    img: {
      asset: {
        url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhaW5pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      alt: 'Bilde av trening',
    },
    title: 'Tren ute!',
    text: 'Vi tilbyr trening utendørs - alle årstider',
    link: [
      {
        _key: 1,
        href: 'Gruppetrening',
        name: 'Se utvalget'
      },
      {
        _key: 2,
        href: 'PT-timer',
        name: 'Se ledige timer'
      },

    ],

  },


]

const Training = () => (
  <Container>
  <Title title = "Trening"/>
  <Lead lead='Velkommen til nordens største utvalg av trening. Vi har et stort utvalg av gruppetreningstimer, erfarne personlige trenere og hundrevis av økter som du kan trene online – hvor og når du vil. Vi har garantert noe som passer for deg!'/>
  <Cards>{dummyCards.length > 0 &&  dummyCards.map(card => <Card key={card._key}{...card}/>)}
  </Cards>
  </Container>
);

export default Training;
