const project__boxes = document.querySelector('.projects__boxes');
const right__top = document.querySelector('.right__top');
const right__middle = document.querySelector('.right__middle');
const right__bottom = document.querySelector('.right__bottom');
const nav__bar = document.querySelector('.sidebar__cont');
const nav__bar2 = document.querySelector('.sidebar__cont2');
const nav__lines = document.querySelector('.sidebar__toggle');
const main__cont = document.querySelector('.main__cont');
let counter = 0;
let mouseOver = false;

function enable() {
    right__top.addEventListener('mouseenter', () => {
        counter += 1;
        mouseOver = true;
        const newDiv = document.createElement('div');
        newDiv.classList.add('right__top_expanded');
        newDiv.innerHTML = right__top.innerHTML;
        project__boxes.appendChild(newDiv);
        if (counter > 1) {
            project__boxes.removeChild(newDiv);
        }

        newDiv.addEventListener('mouseleave', () => {
            project__boxes.removeChild(newDiv);
            counter = 0;
        })
    });

    

    right__middle.addEventListener('mouseenter', () => {
        counter += 1;
        const newDiv = document.createElement('div');
        newDiv.classList.add('right__middle_expanded');
        newDiv.innerHTML = right__middle.innerHTML;
        project__boxes.appendChild(newDiv);
        if (counter > 1) {
            project__boxes.removeChild(newDiv);
        }

        newDiv.addEventListener('mouseleave', () => {
            project__boxes.removeChild(newDiv);
            counter = 0;
        })
    });

    right__bottom.addEventListener('mouseenter', () => {
        counter += 1;
        const newDiv = document.createElement('div');
        newDiv.classList.add('right__bottom_expanded');
        newDiv.innerHTML = right__bottom.innerHTML;
        project__boxes.appendChild(newDiv);
        if (counter > 1) {
            project__boxes.removeChild(newDiv);
        }

        newDiv.addEventListener('mouseleave', () => {
            project__boxes.removeChild(newDiv);
            counter = 0;
        })
    });
}

enable();

nav__lines.addEventListener('mouseenter', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('sidebar__cont');
    newDiv.style.gridColumn = '2';
    newDiv.style.gridRow = '1 / 5';
    newDiv.style.width = '286px';
    newDiv.style.height = '30%';
    newDiv.style.display = 'grid';
    newDiv.style.gridTemplateColumns = '1fr 5fr';
    newDiv.gap = '15px';
    newDiv.style.backgroundColor = 'var(--common-blue)';
    newDiv.style.padding = '20px';
    newDiv.style.zIndex = '999';
    newDiv.style.borderBottomRightRadius = '8px';
    newDiv.innerHTML = nav__bar.innerHTML;
    newDiv.style.position = 'sticky';
    newDiv.style.top = '0';
    main__cont.appendChild(newDiv);

    newDiv.addEventListener('mouseleave', () => {
    main__cont.removeChild(newDiv);
})
})