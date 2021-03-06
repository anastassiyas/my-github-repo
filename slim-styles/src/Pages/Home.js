import React,{ Component } from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import List from '../components/List';

const blog = [
    {
        id: 1,
        question: "For those who aren't familiar with Texture Management, can you explain a little about the company and how you fit into that?",
        answer: "Texture Management was formed to fill the need for elite hair and makeup services tailored to performers' unique needs of color. I am one of their hair artists, specializing in hair color (certified through Redken). This allows me to provide whatever hairstyle (such as braids, cut, wigs, or smoothing) the client needs to complete the look from head to toe. Through Texture Management, I have styled hair for spec shoots, beauty shoots, red carpets, award shows, and more."
    },
    {
        id: 2,
        question: "Most people outside of the Black community have little to no education about Black hair. What do you think is one of the biggest misconceptions and implicit biases held by wider society?",
        answer: "Honestly, I think most people have little to no education about hair outside of their own community. The bigger issue is that people do not understand curly hair and just how fragile some textures are within the curl community, regardless of race. Generally speaking, curly hair is the driest of any hair texture and needs constant love and nourishment. "
    },
    {
        id: 3,
        question: "What do you think are the biggest misconceptions that Black people themselves have about their own hair?",
        answer: "People of all races need to evaluate their hair and learn what products work best. For example, a volumizing shampoo is something that is not commonly used in the Black community. However, if you have oily hair that needs to be shampooed twice a week because your hair loses style and falls flat, a volumizing shampoo could do the trick. "
    },
    {
        id: 4,
        question: "How would you say the industry has evolved in the past 10 years when it comes to natural hair? Do you think Hollywood and the fashion industry have become more accepting of it?",
        answer: "Over the past 10 years, relaxers have been deprioritized in the Black community. Other presumed less-harmful chemicals began to take their place, such as the keratin treatments. It was not until we learned about formaldehyde that clients and stylists began to back off from the keratin treatments. That signaled the start of the chemical-free craze. Everybody wanted to be natural but still get their hair straightened. The problem was that most people???s hair would not last through humidity or exercising. When they had to shampoo it naturally, they did not know what to do in terms of styling. Their hair had uneven textures and was just difficult to manage. From there began the big chop phase, removing all compromised ends that were not natural in texture."
    },
    {
        id: 5,
        question: "Can you explain the difference between the various porosities when it comes to haircare?",
        answer: "Porosity, as it relates to hair, refers to how well your hair is able to absorb and hold moisture. There are three categories: low, normal, and high."
    },
    

]



class Home extends Component {
    render() {
        return(
            <>
            <Header />
            <Navbar />
            <List 
             blog ={blog} />

            <h1> This is my Home Page</h1>
            </>
        )
    }
}

export default Home;


