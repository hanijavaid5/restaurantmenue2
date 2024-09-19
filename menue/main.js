
function calculateTotal(){
    const mainCourse= document.getElementById('mainCourse').value;
        const dessert= document.getElementById('dessert').value;
        const drink= document.getElementById('drink').value;
        const mainQuantity = parseInt(document.getElementById('mainQuantity').value);
        const drinkQuantity = parseInt(document.getElementById('drinkQuantity').value);
        const dessertQuantity = parseInt(document.getElementById('dessertQuantity').value);

        let dessertPrice=0, mainPrice=0, drinkPrice=0;   

       

    switch(mainCourse){
        case '1':
        mainPrice= 10; 
            break;

            case '2':
            mainPrice= 9; 
            break;

            case '3':
            mainPrice= 4; 
            break;

            case '4':
            mainPrice= 10; 
            break;
            default:
            mainPrice =0;
    }

    switch(dessert){
        case '5':
        dessertPrice= 10; 
            break;

            case '6':
            dessertPrice= 7;
            break;

            case '7':
            dessertPrice= 9;
            break;

            case '8':
            dessertPrice= 8;
            break;
            

         

            default:
            dessertPrice=0;
    }

    switch(drink){
        case '9':
        drinkPrice= 10;
            break;

            case '10':
            drinkPrice= 10;
            break;

            case '11':
            drinkPrice= 5;
            break;

            case '12':
            drinkPrice= 7;
            break;
            default:
            drinkPrice=0;
    }

    const mainTotal = mainPrice * mainQuantity;
          const dessertTotal = dessertPrice * dessertQuantity;
          const drinkTotal = drinkPrice * drinkQuantity;
   const total = mainTotal + dessertTotal + drinkTotal ;

   document.getElementById("mainTotal").innerText = "Price: $" + mainTotal.toFixed(2);
          document.getElementById("dessertTotal").innerText = "Price: $" + dessertTotal.toFixed(2);
          document.getElementById("drinkTotal").innerText = "Price: $" + drinkTotal.toFixed(2);
          document.getElementById("totalCost").innerText ="Price: $" + total.toFixed(2);

}

document.getElementById("placeOrderBtn").addEventListener("click", function() {
    // Add your logic here (e.g., submitting a form, sending data to a server)
    alert("ORDER HAS BEEN PLACED! Will deliever you in 30 mins ! THANK YOU...");
});



