document.getElementById('colorPicker').addEventListener('input', (e) => {
    document.getElementById('paragraph').style.color = e.target.value;
});

document.getElementById('fontSize').addEventListener('input', (e) => {
    document.getElementById('paragraph').style.fontSize = `${e.target.value}px`;
});

document.getElementById('fontFamily').addEventListener('change', (e) => {
    document.getElementById('paragraph').style.fontFamily = e.target.value;
});
