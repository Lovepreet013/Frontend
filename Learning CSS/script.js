const awesome = document.querySelector('[data-element="awesome"]');
const intrinsicSwitch = document.getElementById("intrinsic-switch");

intrinsicSwitch.addEventListener("change", () => {
    awesome.setAttribute('data-sizing', intrinsicSwitch.checked? "intrinsic" : "extrinsic");
});


const root = document.documentElement;


const switcher = document.getElementById("switcher");
switcher.addEventListener("change", function(evt){
    root.style.setProperty("--var-col", evt.target.value);
})

const switcher2 = document.getElementById("switcher2");
switcher2.addEventListener("change", function(evt){
    root.style.setProperty("--var-repeat", evt.target.value);
})


const switcher3 = document.getElementById("switcher3");
switcher3.addEventListener("change", function(evt){
    if(switcher3.checked){
        root.style.setProperty("--var-packing", 'row dense');
    }else{
        root.style.setProperty("--var-packing", 'row');
    }
})


const switcher4 = document.getElementById("switcher4");
switcher4.addEventListener("change", function(evt){
    if(switcher4.checked){
        root.style.setProperty("--var-z-index", 2);
    }else{
        root.style.setProperty("--var-z-index", 0);
    }
})


const slider = document.querySelector('[type=range]');
const demo = document.querySelector('.demo');

slider.addEventListener('input', ({target}) => {
    demo.style.setProperty('--heading-margin', `${target.value}rem`)
})



const img = document.querySelector(".demo2 img");

document.querySelector(".toggle-switch input").addEventListener('change', (event) => {
    if(event.currentTarget.checked){
        img.style.mixBlendMode = "multiply";
    }else{
        img.style.mixBlendMode = "normal";
    }
});