console.log("It is working");
const apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_FvIHNNFlFovzJw4s0GPJEHNALPi4TxCXFGcZXVHZ";
let dataList = [];


// currency button functionality 
const currency = document.getElementById("currency");
const currencyOptions = document.querySelectorAll(".currency-option")

currencyOptions.forEach((item) => {
    item.addEventListener("click", () => {
        currency.innerText = item.innerText;
    })
})

// convert functionality 
const loading = document.getElementById("loading");
const output = document.getElementById("output");
const tBody = document.getElementById("output-table-body")
const convert = document.getElementById("button");
const inputField = document.getElementById("input-field");

//to check if the input field is empty or not
convert.addEventListener("click", () => {
    if (inputField.value.trim() !== "") {
        dataFromApi();
    }
})

// fetching data from an api

const dataFromApi = async () => {
    loading.style.display = "block";
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        dataList.push(data);

    } catch (error) {
        console.error("Error data fetching.", error)
    }

    loading.style.display = "none";
    output.style.display = "block";
}

// 
