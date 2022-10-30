function myFunction() {
    let body = document.body;
    let header = document.getElementById('header-id');
    let footer = document.getElementById('footer-id');
    let links = document.getElementsByClassName('links');
    let list_class = body.className.split(' ');
    // let links_dark = '';
    if (list_class.includes('dark-mode')) {
        delete_class(header, 'dark-mode');
        delete_class(body, 'dark-mode');
        delete_class(footer, 'dark-mode');
        for(let i = 0; i<links.length; i++) {
            console.log(links[i]);
            delete_class(links[i], 'dark-mode');
            // names += links[i].name;
            // links_dark += delete_class(links, 'dark-mode');
        }
    } else {
        add_class(body, 'dark-mode');
        add_class(header, 'dark-mode');
        add_class(footer, 'dark-mode');
        for(let i = 0; i<links.length; i++) {
            add_class(links[i], 'dark-mode');
        }
    }
}

function add_class(element, class_name) {
    element.classList.add(class_name);
}

function delete_class(element, class_name) {
    element.classList.remove(class_name);
}

function dark_mode() {
    let body = document.body;
    let dark = document.getElementsByClassName('dark_mode_on');
    let list_class = body.className.split(' ');
    if (list_class.includes('dark-mode')) {
        for(let i = 0; i < dark.length; i++) {
            delete_class(dark[i], 'dark-mode');
        }
    } else {
        for(let i = 0; i < dark.length; i++) {
            add_class(dark[i], 'dark-mode');
        }
    }
}
