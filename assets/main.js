const welcomeMsg = 'welcome to the bootcamp';
const fetchName = () => {
  document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
    let name = document.getElementsByTagName("input")[0].value;
    if(Number(name) || name == "") return;
    document.getElementsByTagName("p")[0].textContent =`
        Hello ${name}, ${welcomeMsg}
`
  } )
}
fetchName()