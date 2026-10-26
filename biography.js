

//in this file, write some code that will display some text using a paragraph element.  You can use the innerHTML property to set the text of the paragraph element. also add an image.

document.addEventListener('DOMContentLoaded', function () {

    console.log('DOM is ready');
    // body.appendChild(p);
    var body = document.body;
    var p = document.createElement('p');

    var img = document.createElement('img');
    img.src = 'https://via.placeholder.com/150';
    img.alt = 'Placeholder Image';
    body.appendChild(img);

    body.appendChild(p);
    p.innerText = '<div style="color:red">This is a div</div>';


}
);



