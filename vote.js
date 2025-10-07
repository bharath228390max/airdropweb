const tableBody = document.querySelector('#leaderboard tbody');

tableBody.addEventListener('click', (e) => {
  if (e.target.classList.contains('arrow')) {
    const voteBox = e.target.closest('.vote-box');
    const countEl = voteBox.querySelector('.count');
    let count = parseInt(countEl.textContent);

    if (e.target.classList.contains('up')) count++;
    else if (e.target.classList.contains('down') && count > 0) count--;

    countEl.textContent = count;

    // Re-sort leaderboard
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    rows.sort((a, b) => {
      const aCount = parseInt(a.querySelector('.count').textContent);
      const bCount = parseInt(b.querySelector('.count').textContent);
      return bCount - aCount;
    });

    rows.forEach((row, index) => {
      row.querySelector('td:first-child').textContent = index + 1;
      tableBody.appendChild(row);
    });
  }
});
