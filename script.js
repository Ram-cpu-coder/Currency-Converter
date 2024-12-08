console.log("It is working");
// const apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_S3uLlpuLxlR6AJgY2mzjPjyKm6mX8Cox6c9UwrTe";
let dataList = {
    "ADA": {
        "code": "ADA",
        "value": 0.9268621256
    },
    "AED": {
        "code": "AED",
        "value": 3.6724106328
    },
    "AFN": {
        "code": "AFN",
        "value": 67.9569382546
    },
    "ALL": {
        "code": "ALL",
        "value": 92.5572394152
    },
    "AMD": {
        "code": "AMD",
        "value": 392.7355219814
    },
    "ANG": {
        "code": "ANG",
        "value": 1.7848002816
    }
}

const currencyList = [];
// console.log(currencyList);

const currencyBtnElm = document.querySelector("#currency-btn")
let currencyItemElm = document.querySelector("#currencyItem");
const currency_CodeElm = document.getElementById("currency_Code")
const showSelectedCurrencyCodeElm = document.getElementById("selectedCurrencyCode");
let selectedLi;

// convert functionality 
const majorOutputContainer = document.getElementById("major-output-container");
const outputAreaElm = document.getElementById("output");
const loading = document.getElementById("loading");
let tBody = document.getElementById("output-table-body")
const convert = document.getElementById("button");


// =======================================================

// displaying the data fetched from an API

let tableContent = "";
const displayData = () => {
    tBody.innerHTML = "";
    for (const item in dataList) {
        if (dataList.hasOwnProperty(item)) {
            const currencyItem = dataList[item];
            const currencyCode = currencyItem.code;
            const currencyValue = currencyItem.value;

            tableContent += `

            <tr>
            <td>${currencyCode}</td>
            <td>${currencyValue}</td>
            </tr>
            `

            currencyList.push(currencyCode);
            // console.log(currencyCode)
        }

    }
    loading.style.display = "none";
    outputAreaElm.style.display = "block";
    majorOutputContainer.classList.remove("em30");
    tBody.innerHTML += tableContent;
}
displayData();
// ===============================================


// convert functionality
convert.addEventListener("click", () => {
    // convertFunction();
    // outputAreaElm.style.display = "block";

})

//=====================================================

// currency button functionality

// showCurrencyList Function
const showCurrencyList = () => {
    // currencyItemElm.innerHTML = "";
    let currencyListContent = "";
    currencyList.map((item) => {
        currencyListContent =
            `
        <li class="select-hover" id ="currency_Code">${item}</li>
        `
        currencyItemElm.innerHTML += currencyListContent;
    })

}

currencyItemElm.addEventListener("click", (e) => {
    if (e.target && e.target.matches("li")) {
        showSelectedCurrencyCodeElm.innerHTML = e.target.innerText;
        selectedLi = showSelectedCurrencyCodeElm.innerHTML;
    }

})

// showing the currency list
showCurrencyList();


// ========================================
// search functionality



// ==============================================

// Calculation Part
const inputField = document.getElementById("input-field");
const convertFunction = () => {
    inputField.addEventListener("input", () => {
    })
    const amount = parseFloat(inputField.value);
    const currencyRate = dataList[selectedLi]?.value;

    const result = currencyRate * amount;

    outputAreaElm.innerHTML = result;
}