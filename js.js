const project__boxes = document.querySelector('.projects__boxes');
const right__top = document.querySelector('.right__top');
const right__middle = document.querySelector('.right__middle');
const right__bottom = document.querySelector('.right__bottom');
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