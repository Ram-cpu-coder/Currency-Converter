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
const majorOutputContainer = document.getElementById("major-output-container")
const loading = document.getElementById("loading");
const output = document.getElementById("output");
const tBody = document.getElementById("output-table-body")
const tR = document.getElementById("table-row");
const convert = document.getElementById("button");
const inputField = document.getElementById("input-field");

//to check if the input field is empty or not
convert.addEventListener("click", () => {
    if (inputField.value.trim() !== "") {

        // dataFromApi();
        majorOutputContainer.classList.remove("em30");
        displayData();
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
    const items = dataList[0];
    const data = items.data;
    let tableContent = "";

    for (const item in data) {
        if (data.hasOwnProperty(item)) {
            const currencyItem = data[item];
            // console.log(currencyItem.code, currencyItem.value);

            tableContent += `
                <tr>
                        
                          <td>${currencyItem.code}</td>
                          <td>${currencyItem.value}</td>
                </tr>
                          `
        }

    }
    // console.log(tableContent);

    tBody.innerHTML = tableContent;
}



// array = [
//     {
//         meta: {},
//         data: {
//             ADA: {
//              code: 'ADA',
//              value: 3443,
//                   },
//             NPR: {
//              code: 'NOP',
//              value: 3443,
//                   },
//              },
//     }
// ]