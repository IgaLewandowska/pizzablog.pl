function myFunction() {
    let body = document.body;
    let header = document.getElementById('header-id');
    let list_class = body.className.split(' ');
    if (list_class.includes('dark-mode')) {
        delete_class(header, 'dark-mode');
        delete_class(body, 'dark-mode');
    } else {
        add_class(body, 'dark-mode');
        add_class(header, 'dark-mode');
    }
}

function add_class(element, class_name) {
    element.className = class_name;
}

function delete_class(element, class_name) {
    element.classList.remove(class_name);
}