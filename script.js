const BASE_URL="https://latest.currency-api.pages.dev/v1/currencies";
const dropdowns=document.querySelectorAll(".ss");
const btn=document.querySelector(".gett");
const conv=document.querySelector(".foorm2");
window.addEventListener("load",()=>{
    updatee();
});
for(let select of dropdowns){
    for(currCode in countryList){
        let newCurr=document.createElement("option");
        newCurr.innerText=currCode;
        newCurr.value=currCode;
        select.append(newCurr);
    }
    select.addEventListener("change",(event)=>{
        updateflag(event.target);
    })
}
const updateflag=(element)=>{
    let code=element.value;
    let countryCode=countryList[code];
    const img = element.closest(".flag").querySelector(".image");
    img.src=`https://flagsapi.com/${countryCode}/flat/64.png`;
}
btn.addEventListener("click",()=>{
    updatee();
});
const updatee=async ()=>{
    let amnt=document.querySelector(".foorm1");
    let amntval=amnt.value;
    if(amntval===""||amntval<1){
        amntval=1;
        amnt.value="1";
    }
    let code1=document.querySelector(".from").value.toLowerCase();
    let code2=document.querySelector(".to").value.toLowerCase();
    const url=`${BASE_URL}/${code1}.json`;
    let response = await fetch(url);
    let data=await response.json();
    let rate=data[code1][code2];
    convrate=amntval*rate;
    conv.value=convrate;
}