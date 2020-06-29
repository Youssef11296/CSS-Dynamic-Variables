

let doc = document.documentElement;

doc.addEventListener('mousemove', e => {
    doc.style.setProperty('--x', e.clientX + 'px');
    doc.style.setProperty('--y', e.clientY + 'px');
})