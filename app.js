const factpara = document.querySelector("#rinnengan");
const getter = document.querySelector("#geto");


const url = "https://dog-api.kinduff.com/api/facts"
const DogFacts = async () => {
    let apple = await fetch(url);
    console.log(apple);
    let fax = await apple.json()
    factpara.style.border = "3px solid black";
    factpara.style.borderRadius = "25px";
    factpara.innerText = fax.facts[0]
}
getter.addEventListener('click',DogFacts)
