async function apicall(){
    let result=await fetch("https://meowfacts.herokuapp.com/");
    let finalresult=await result.json();
    let ultimateresult=finalresult.data[0]
    document.getElementById('content').innerText=ultimateresult;
}
