class Currency {

    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "http://api.exchangeratesapi.io/v1/latest?access_key=00c41aabf41180726ab02c5ac0949f5b&format=1"
        this.amount = null

    }

    exchange() {
        return new Promise((resolve, reject) => {

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    const first_value = data.rates[this.firstCurrency.substring(0, 3)];
                    const second_value = data.rates[this.secondCurrency.substring(0, 3)];

                    let total = Number((second_value / first_value) * this.amount)

                    resolve(total)
                })
                .catch(err => reject(err))
        })


    }

    changeAmount(amount) {

        this.amount = amount;

        uı.alertMessageEdit(amount)
        uı.seeNewAmount(amount)
    }

    changefirstCurrency(newFirstCurrency) {

        this.firstCurrency = newFirstCurrency;

    }

    changesecondCurrency(newSecondCurrency) {

        this.secondCurrency = newSecondCurrency;

    }



}