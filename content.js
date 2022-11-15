const rows = document.getElementsByTagName('tr')
for (let i = 1; i < rows.length; i++) {
    const tr = rows[i]
    const firstCol = tr.children[0];
    const href = firstCol.children[0].href;
    for (let j = 1; j < tr.children.length; j++) {
        const existingContent = tr.children[j].innerHTML
        const newCol = document.createElement('td')
        newCol.innerHTML = `<a href="${href}" target="blank">${existingContent}</a>`
        tr.replaceChild(newCol, tr.children[j])
    }
};