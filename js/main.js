let button =document.getElementById("btn")

button.addEventListener("click", ()=>{

fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
console.log(response);
document.getElementById('todo').textContent= response.activity

    })
    .catch(err => {
        console.log(`error ${err}`)
        // alert("sorry, there are no results for your search")
    })
  })
