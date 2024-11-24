console.log("It is working");
const apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_FvIHNNFlFovzJw4s0GPJEHNALPi4TxCXFGcZXVHZ";
let dataList = [];
const currencyList = [];



// convert functionality 
const majorOutputContainer = document.getElementById("major-output-container")
const loading = document.getElementById("loading");
const output = document.getElementById("output");
const tBody = document.getElementById("output-table-body")
const tR = document.getElementById("table-row");
const convert = document.getElementById("button");
const inputField = document.getElementById("input-field");

//to check if the input field is empty or not
convert.addEventListener("click", () => {
    if (inputField.value.trim() == "") {
        alert("Please Enter the value!!")
    } else {

        // displayData();
    }
})

// fetching data from an api

const dataFromApi = async () => {
    loading.style.display = "block";
    let response = await fetch(apiUrl);
    let data = await response.json();

    dataList.push(data);
    // console.log(dataList);


    loading.style.display = "none";
    output.style.display = "block";
}

// displaying the data fetched from an API
const displayData = async () => {
    await dataFromApi();
    let tableContent = "";

    const items = dataList[0];
    const data = items.data;
    for (const item in data) {
        if (data.hasOwnProperty(item)) {
            const currencyItem = data[item];
            const currencyCode = currencyItem.code;
            const currencyValue = currencyItem.value;

            tableContent += `
            
            <tr>
            <td>${currencyCode}</td>
            <td>${currencyValue}</td>
            </tr>
            `

            currencyList.push(currencyCode);

        }
    }
    tBody.innerHTML = tableContent;
    majorOutputContainer.classList.remove("em30");
}

// console.log(currencyList);
displayData()

// ===============================================

// currency button functionality


const currency = document.getElementById("currency");
const currencyOptions = document.querySelector("#currency-option")
const options = document.getElementById("options");
const currencyBtn = document.getElementById("currency-btn");
const codeToBeShownAfterSelection = document.getElementById("code");
currencyBtn.addEventListener("click", (e) => {
    currencyList.forEach((item, index) => {

        options.innerHTML +=
            `
        <li class="select-hover ps-2 currency-option text-center" id="currency-option">
        <span id="code">${item}</span>
        </li>
        `
        // console.log(item);
    }
    )

    // codeToBeShownAfterSelection.addEventListener("click", () => {
    //     currency.innerHTML = currencyOptions;
    // })
}
)