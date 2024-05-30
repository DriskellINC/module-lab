
// // document.getElementById("demo").innerHTML = "Hello!";
// let node = document.getElementById('demo');
// node.innerHTML('<p>some dynamic html</p>');
// let node = document.getElementById('node-demo');
// let newNode = document.createElement('p');
// newNode.appendChild(document.createTextNode('some dynamic html'));
// node.appendChild(newNode);

document.addEventListener('DOMContentLoaded', function() {

    // Get the form element with the id 'demo'
    let form = document.getElementById('demo');

    // Create a new paragraph element
    let paragraph = document.createElement('p');

    // Create a text node with the content you want to display
    let textNode = document.createTextNode('Thanks for visiting the site and signing up!');

    // Append the text node to the paragraph element
    paragraph.appendChild(textNode);

    // Append the paragraph element to the form
    form.appendChild(paragraph);
});