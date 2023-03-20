const progress = document.getElementById('progress');
progress.value = 0.7;

form.addEventListener('submit', event => {
  event.preventDefault();

  const form = document.getElementById('form');
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.onprogress = function(event) {
    progress.value = event.loaded / event.total;
  }

  xhr.addEventListener('readystatechange', (event) => {
    if (xhr.status === 200) {
      xhr.abort();
    }
  })
  
  
  xhr.send(formData);
});
