const fontSize = Array.from(document.querySelectorAll('.font-size'));
fontSize.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let idx = fontSize.findIndex((item) => item.classList.contains('font-size_active'));
      fontSize[idx].classList.remove('font-size_active');
      item.classList.add('font-size_active');
    let index = fontSize.findIndex((item) => item.classList.contains('font-size_active'));
      const parent = item.closest('.book');
      parent.classList.remove('book_fs-big');
      parent.classList.remove('book_fs-small');
        if(index === 0) {
          parent.classList.add('book_fs-small');
        } else if(index === 2) {
          parent.classList.add('book_fs-big');
        }
  })
})