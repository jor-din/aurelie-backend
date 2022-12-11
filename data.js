import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Jordin',
            email: 'jordin@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,

        },
        {
            name: 'Aurelie',
            email: 'aureliejewlery@gmail.com',
            password: bcrypt.hashSync('789012'),
            isAdmin: false,

        },

    ],
    products: [
        {
            name: 'Anastasia',
            slug: 'gold-hoops-anastasia',
            category: 'Earrings',
            image:'/earrings/gold-hoop-anastasia.jpg',
            price: 60,
            countInStock: 100,
            rating: 4.5,
            numReviews: 15,
            description: 'Gold Earrings'
        },
        {
            name: 'Daihana',
            slug: 'gold-hoops-daihana',
            category: 'Earrings',
            image:'/earrings/gold-hoop-daihana.jpg',
            price: 55,
            countInStock: 60,
            rating: 4.0,
            numReviews: 10,
            description: 'Gold Earrings'
        },
        {
           
            name: 'Julia',
            slug: 'gold-hoops-julia',
            category: 'Earrings',
            image:'/earrings/gold-hoop-julia.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.6,
            numReviews: 13,
            description: 'Gold Earrings'
        },
        
        {
            
            name: 'Leslie',
            slug: 'gold-bracelet-leslie',
            category: 'Bracelets',
            image:'/bracelets/gold-bracelet-leslie.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Bracelet'
        },
        {
            
            name: 'Marie',
            slug: 'gold-bracelet-marie',
            category: 'Bracelets',
            image:'/bracelets/gold-bracelet-marie.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Bracelet'
        },
        {
            
            name: 'Sandi',
            slug: 'gold-bracelet-sandi',
            category: 'Bracelets',
            image:'/bracelets/gold-bracelet-sandi.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Bracelet'
        },
        
       
        {
            
            name: 'Eliza',
            slug: 'gold-bracelet-eliza',
            category: 'Necklaces',
            image:'/necklaces/gold-necklace-eliza.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Necklace'
        },
        {
          
            name: 'Grace',
            slug: 'gold-bracelet-Grace',
            category: 'Necklaces',
            image:'/necklaces/gold-necklace-grace.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Necklace'
        },
        {
           
            name: 'Harper',
            slug: 'gold-bracelet-harper',
            category: 'Necklaces',
            image:'/necklaces/gold-necklace-harper.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Necklace'
        },
       
        {
          
            name: 'Cassie',
            slug: 'gold-ring-cassie',
            category: 'Necklaces',
            image:'/rings/gold-ring-cassie.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Ring'
        },
        {
           
            name: 'Leilani',
            slug: 'gold-ring-leilani',
            category: 'Necklaces',
            image:'/rings/gold-ring-leilani.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Ring'
        },
        {
             
            name: 'Melanie',
            slug: 'gold-ring-melanie',
            category: 'Necklaces',
            image:'/rings/gold-ring-melanie.jpg',
            price: 55,
            countInStock: 100,
            rating: 4.1,
            numReviews: 10,
            description: 'Gold Ring'
        },
    ]
}
export default data