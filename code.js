'use strict';
    
    // Example
    let tab = document.querySelectorAll(".info-header-tab"), // your tab-headers
        info = document.querySelector(".info-header"), // box(class or tag) for your tabs
        tabContent = document.querySelectorAll(".info-tabcontent"); // tabcontent
        
function tabContentControl(tabHeaderBox, tab, tabContent) {

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabHeaderBox.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
}