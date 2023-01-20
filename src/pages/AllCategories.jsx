import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CategoryHeader from '../components/categories/CategoryHeader';
import Category from '../components/categories/Category';

const Categories = styled.section`
  margin: 0 auto;
  padding-top: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const AllCategories = () => {

  const getCategories = async () => { 
    const response = await axios.get('https://africommerce.cyclic.app/categories');
    setCategories(response.data.categories);
    console.log(response.data.categories);

  }

  useEffect(() => {
    getCategories();
  }, []);

const [categories, setCategories] = useState([]);



  return (
    <Categories>
      <CategoryHeader />
      {categories.length > 0 && categories.map((category) => (
        <Category header={category.category_name} key={category._id} />
      ))}
    </Categories>
  );
};
