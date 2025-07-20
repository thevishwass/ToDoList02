let taskContent = document.querySelectorAll(".content");
let deleteBut = document.querySelectorAll(".delete");
let task = document.querySelectorAll(".task");
let pre = document.querySelectorAll("pre");

let num = new Number;

task.forEach(() => {
    num += 1;
    
})

console.log(num);
var xxx = new Number;
xxx = 0;

pre.forEach((pre1) => {
    pre1 = "==";
    return pre1;
})


taskContent.forEach((eachContent, index,pre1) => {
    eachContent.addEventListener('click', () => {
        eachContent.innerHTML = `<s>${eachContent.textContent}</s>`;
        eachContent.style.backgroundColor ="rgba(0, 0, 0)";
        pre1.innerHTML = "==";
    });
    
    deleteBut[index].addEventListener('click', () => {
        task = deleteBut[index].closest('.task');
        task.outerHTML = '';
        xxx += 1;
        console.log(xxx);
        
        if(num === xxx){
            document.getElementById("null").style.display = "flex";
            document.querySelector(".null").style.display = "flex";
        }
    });
});
