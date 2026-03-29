function mostrarArea(id) {
    const areas = document.querySelectorAll('.area');
    areas.forEach(area => area.style.display = 'none');

    document.getElementById(id).style.display = 'block';
}
