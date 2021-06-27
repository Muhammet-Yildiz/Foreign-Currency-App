const amount = document.querySelector(".AmountInput")

const changeCurrencySvg = document.querySelector(".changeCurrency svg")

const select1 = document.querySelector("#FromCurrency .dropdown-select ") //.selected

const select2 = document.querySelector("#ToCurrency .dropdown-select ")

const convertBtn = document.querySelector(".convertBtn")
const currency = new Currency("EUR", "CAD")

const uı = new UI(select1, select2);

addEventListeners()

function addEventListeners() {
    changeCurrencySvg.addEventListener("click", changeCurrencies)

    amount.addEventListener("input", exchangeCurrency)
    convertBtn.addEventListener("click", exchangeCurrency)

    function exchangeCurrency() {

        currency.changeAmount(amount.value)
        currency.exchange()
            .then(function(result) {

                uı.seeResult(result)
                uı.seeNewAmount(amount.value)
                uı.changeRates()

            }).catch(err => console.error(err))
    }

    $('#FromCurrency .dropdown-list_item ,#FromCurrency .dropdown-list_item small').on('click', function(e) {
        exchangeCurrency()

        let new_value = e.target.textContent.trim()

        currency.changefirstCurrency(`${new_value}`)


    });


    $('#ToCurrency .dropdown-list_item ,#ToCurrency .dropdown-list_item small').on('click', function(e) {
        exchangeCurrency()


        let new_value = e.target.textContent.trim()

        currency.changesecondCurrency(`${new_value}`)


    });



    function changeCurrencies() {

        currency1Val = select1.firstElementChild.nextElementSibling.textContent
        currency2Val = select2.firstElementChild.nextElementSibling.textContent


        currency.changefirstCurrency(`${currency2Val.substring(0, 3)}`)
        currency.changesecondCurrency(`${currency1Val.substring(0, 3)}`)
        new Currency(`${currency2Val.substring(0, 3)}`, `${currency1Val.substring(0, 3)}`)
        exchangeCurrency()

        uı.change(currency1Val, currency2Val)

    }




}