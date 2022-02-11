
import React,{ Component } from 'react';
import Wrapper from "../components/Wrapper"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import products from "../products.json";
import ProductCard from '../components/ProductCard';
import Title from '../components/Title';

class Profile extends Component {

    state = {
        products
    };
    removeFriend = id => {

        const product =this.state.product.filter(products=> products.id !=id);
    this.setState({ product });
    };

    render() {
        return(
            <>
            <Header />
            <Navbar />
            <h1> This is my Profile Page</h1>
          
<Wrapper>
    {/* <Title>Products List</Title> */}
{this.state.products.map(product => (
<ProductCard
removeFriend={this.removeFriend}
id={product.id}
key={products.id}
name={product.name}
image={product.image}
price={product.price}
rating={product.rating}
/>



))}
</Wrapper>

            </>
        )
    }
}

export default Profile;
