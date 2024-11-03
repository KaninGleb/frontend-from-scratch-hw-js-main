// Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:
// - объект галереи
// - название произведения (ключ)
// - новое значение
// Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

// Пример использования функции:

// const gallery = {
//   'Mona Lisa': 'Leonardo da Vinci',
//   'Starry Night': 'Vincent van Gogh',
//   'The Scream': 'Edvard Munch'
// }

// updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
// updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

// console.log(gallery)

// Ожидаемый вывод:
// {
//   'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
//   'Starry Night': 'Vincent van Gogh',
//   'The Scream': 'Edvard Munch',
//   'The Persistence of Memory': 'Salvador Dali'
// }


// OPTION 1
const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(gallery, artName, newValue) {
  if (gallery.hasOwnProperty(artName)) {
    gallery[artName] = newValue;
  } else {
    gallery[artName] = newValue;
  }
}


// OPTION 2
const modifiedGallery = {
  artObjects: {
      'Mona Lisa': 'Leonardo da Vinci',
      'Starry Night': 'Vincent van Gogh',
      'The Scream': 'Edvard Munch',
  },
  updateArt(artName, newValue) {
      if (this.artObjects.hasOwnProperty(artName)) {
          this.artObjects[artName] = newValue;
      } else {
          this.artObjects[artName] = newValue;
      }
  }
};


// ✅ Checking OPTION 1
updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506');
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali');

console.log(gallery);


// ✅ Checking OPTION 2
modifiedGallery.updateArt('Mona Lisa', 'Leonardo da Vinci, 1503-1506');
modifiedGallery.updateArt('The Persistence of Memory', 'Salvador Dali');

console.log(modifiedGallery.artObjects);