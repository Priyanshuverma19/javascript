let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello world!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>hello</h1>';
a.appendChild(div);