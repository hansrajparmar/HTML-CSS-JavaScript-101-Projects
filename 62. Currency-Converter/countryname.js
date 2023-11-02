const currencyCodes = [
    "AED", //(United Arab Emirates dirham)
    "AUD", // (Australian dollar)
    "EUR", // (Euro)
    "FJD", // (Fijian dollar) 
    "INR", // (The Indian rupee)
    "MXN", //(Currency of Mexico)
    "NZD", // (New Zealand Dollar)
    "QAR", // (Qatari riyal)
    "USD", // (U.S. dollar)
    "ZMK", // (Currency of Zambia)
  ];
  
  let selectInputs = document.querySelectorAll("select");
  console.log(selectInputs);

  selectInputs.forEach((selectInput) => {
    for (let i=0; i<currencyCodes.length; i++) {
      let option = document.createElement("option");
  
      option.value = currencyCodes[i];
      option.text =currencyCodes[i];
      selectInput.appendChild(option);
    }
  });
