import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { useState } from 'react';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
  align-items: center;
  display: flex;
`;

const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
  margin-right: 20px;
`;

const FilterColor = styled.div`
  margin-right: 10px;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const ButtonRemove = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const ButtonAdd = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: solid 2px teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;

  &:hover {
    background-color: teal;
    color: white;
    //background-color: #f8f4f4;
  }
`;

const Product = () => {
  const [counter, setCounter] = useState(0);
  function count(num) {
    if (num === 'add') {
      setCounter(counter + 1);
    } else {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?cs=srgb&dl=pexels-godisable-jacob-914668.jpg&fm=jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Product</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            atque harum dignissimos totam iusto, nemo similique, illum sed
            ducimus dolore modi ipsum fugit labore quo. Pariatur officiis quod
            omnis natus? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt animi, maiores voluptatem quidem possimus molestiae
            repudiandae error dolore laudantium deserunt illo quis quas? Nisi,
            sint. Velit odit repellat omnis eaque. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Facilis reprehenderit, necessitatibus
            id odit culpa, neque iste deleniti temporibus consequatur eos saepe
            ex, dolorum officiis expedita eligendi! Quae dolorum iusto autem?
          </Desc>
          <Price>$ 50,00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <ButtonRemove onClick={() => count('rem')}>
                <Remove />
              </ButtonRemove>
              <Amount>{counter}</Amount>
              <ButtonAdd onClick={() => count('add')}>
                <Add />
              </ButtonAdd>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
