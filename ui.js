class UI {

    constructor(firstSelect, secondSelect) {

        this.amount = document.querySelector(".AmountInput")
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;
        this.convertBtn = document.querySelector(".convertBtn")
        this.responseEmp = document.querySelector(".responseEmp")
        this.amountValue = document.querySelector(".responseEmp .Convert_Amount")
        this.output = document.querySelector(".responseEmp .result_amount")
        this.unit_rates_rate1 = document.querySelector(".rate1")
        this.unit_rates_rate2 = document.querySelector(".rate2")
        this.alertMessage = document.querySelector(".alertMessage")

        this.FromCurrency = document.querySelector("#FromCurrency .dropdown-select")
        this.ToCurrency = document.querySelector("#ToCurrency .dropdown-select")

    }
    seeResult(result) {
        let secondCurrencyValue = select2.firstElementChild.nextElementSibling.textContent.substring(5, )

        this.output.textContent = result + secondCurrencyValue;

    }

    seeNewAmount(amount) {
        let firstCurrencyValue = select1.firstElementChild.nextElementSibling.textContent.substring(5, )
        this.amountValue.textContent = amount + firstCurrencyValue

    }

    alertMessageEdit(amount) {

        if (amount.length == 0 || amount == 0) {
            this.alertMessage.style.display = "block"
            this.responseEmp.style.display = "none"

        } else {
            this.alertMessage.style.display = "none"
            this.responseEmp.style.height = "130px"
            this.responseEmp.style.display = "flex"
            this.convertBtn.style.display = "none"
        }
    }


    changeRates() {

        let firstCurrency = this.firstSelect.firstElementChild.nextElementSibling.textContent
        let secondCurrency = this.secondSelect.firstElementChild.nextElementSibling.textContent

        let amount = this.amount.value

        let firstTotal = this.output.textContent.substring(0, this.output.textContent.indexOf(" ")) / amount

        this.unit_rates_rate1.innerHTML = `
            1 ${firstCurrency.substring(0,3)} =  ${firstTotal} ${secondCurrency.substring(0,3)}`;

        this.unit_rates_rate2.innerHTML = `
        1 ${secondCurrency.substring(0,3)} =  ${1/ firstTotal} ${firstCurrency.substring(0,3)}`;
    }





    change(currency1Val, currency2Val) {

        let Svg1 = this.FromCurrency.firstElementChild
        let Svg2 = this.ToCurrency.firstElementChild
        let p_prime = Svg1.cloneNode(true)
        let s_prime = Svg2.cloneNode(true)

        this.FromCurrency.replaceChild(s_prime, this.FromCurrency.firstElementChild)
        this.ToCurrency.replaceChild(p_prime, this.ToCurrency.firstElementChild)


        this.FromCurrency.firstElementChild.nextElementSibling.textContent = currency2Val
        this.ToCurrency.firstElementChild.nextElementSibling.textContent = currency1Val


    }

}