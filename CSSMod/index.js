const inputs = document.querySelectorAll('.controls input')
//document.querySelectorAll() gives you a NodeList 
//and NodeList is not same as an array 
//some times people confuse it with an array but it's different that an array
// because an array has all kinds of methods for dealing with 
//an array map,reduce, etc.

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    // console.log(this.name); // this will give us (on clicking space, it'll give us space, onclicking blur, it'll give use blur. onlcliking color, it'll give us color)
     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));

