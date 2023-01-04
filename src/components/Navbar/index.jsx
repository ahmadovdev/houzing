import React from 'react'
import logoImg from "../../assets/img/logo.png";
import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar'
import { Container, Logo, Link, Section, Wrapper } from './style';

export const Home = () => {
  const navigate = useNavigate();
  return (
  <Container>
    <Wrapper>
      <Section onClick={() => navigate('/home')} logo>
        <Logo src={logoImg}/><h3>Houzing</h3>
      </Section>
      <Section>
        {navbar.map(({title, path}, index) => {
            return(
              <Link 
                className={({isActive}) => isActive && 'active'} 
                key={index} 
                to={path}>
                {title}
              </Link>
            );
          })}
      </Section>
      <Section>
        <button>Sign in</button>
      </Section>
    </Wrapper>
    <Outlet />
  </Container>
  )
}

export default Home