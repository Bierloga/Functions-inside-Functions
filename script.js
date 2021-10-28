// Hey Kiddo

const ageChecker = function (age) {
    if (age >= 18) {
        return true
    }
    else {
        return false
    }
};

const adult = function () {
    const check = ageChecker(19);
    if (check == true) {
        return "Hey There"
    } else {
        return "Hey Kiddo!"
    }
}

console.log(adult());

// VAT Exercise 1

const baseprice = 2;

const vatCalc = function (tariff) {
    return (baseprice * (tariff / 100))
};

const totalPrice = function () {
    return (baseprice + vatCalc(9))
};

console.log(totalPrice())

