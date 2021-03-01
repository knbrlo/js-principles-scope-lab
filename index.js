var customerName = "bob"
var bestCustomer;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'Bob the Builder';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'An angry cat';
}