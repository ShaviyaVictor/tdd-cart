# tdd-cart
TDD approach for implementing a shopping cart..     
Implementing the code for a checkout system that handles pricing schemes such as “apples cost 50 pence, three apples cost £1.30.”        

In a normal store, things are identified using Stock Keeping Units, or SKUs.      
Given the above instance, write up the code for a shopping cart that calculates the total price of a number of items.       

In our store, we’ll use individual letters of the alphabet (A, B, C, and so on). Our goods are priced individually. In addition, some items are multi-priced: buy ‘n’ of them, and they’ll cost you ‘y’ pence. For example, item ‘A’ might cost 50 pence individually, but this week we have a special offer: buy three ‘A’s and they’ll cost you £1.30.     

Below are the sample prices:

| Item          | Unit Price    | Special Price |
| ------------- |:-------------:| -----------:  |
| A             |  50           | 3 for 130     |
| B             |  30           | 2 for 45      |
| C             |  25           |               |
| D             |  15           |               |

Our checkout accepts items in any order, so that if we scan a B, an A, and another B, we’ll recognize the two B’s and price them at 45 (for a total price so far of 95). Because the pricing changes frequently, we need to be able to pass in a set of pricing rules each time we start handling a checkout transaction.

The solution should allow for items to input within a simple user interface, and allow for a final total to be calculated and for a running total after each item is added to the basket

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)        
* [CSS](https://developer.mozilla.org/en-US/docs/Web/css)             
* [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)         
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)              
* [Github](https://github.com/ShaviyaVictor/shaviya)

## License

This project is licensed under the [MIT License](https://github.com/ShaviyaVictor/tdd-cart/blob/main/LICENSE).           

## Resources         
- [Jest](https://jestjs.io/docs/expect)          
- [GitHub](https://github.com/mariakourtesi/shoppingCart-js-tdd) 

## To Install the app:

    npm install

## Run the tests with:

    npm test

## Acknowledgments

* @shaviyavictor      
* @mariakourtesi

### Author

* **Victor Shaviya**        
  - [BioLink](https://bio.link/shaviya)       
  - [LinkedIn](https://www.linkedin.com/in/ShaviyaVictor/)          
  - [Instagram](https://www.instagram.com/shaviyavictor/)        
  - [Twitter](https://twitter.com/ShaviyaVictor)        
  
  
**© Victor Shaviya**.