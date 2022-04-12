fetch('https://api.adviceslip.com/advice').then((data) => {
    return data.json();
}).then((adviceData) => {
    console.log(adviceData.slip.advice);
    rslt = `

                <h2 id="myAdviceID">Advice #${adviceData.slip.id}</h2>

                <h3 id="myAdviceText">${adviceData.slip.advice}</h3>

        `;
    document.getElementById("myData").innerHTML = rslt;
}).catch((err) => {
    console.log(err);
});