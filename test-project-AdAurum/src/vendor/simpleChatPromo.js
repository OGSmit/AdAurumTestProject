export default async function simpleChatPromo(arr) {
  setTimeout(() => {
    arr.push({
      text: 'Рад представить мой первый опыт во Vue.js',
      id: '123!3ad1asdasd',
      date: new Date(),
      isMyMessage: false,
      avatar: 'https://w7.pngwing.com/pngs/75/697/png-transparent-avatars-accounts-man-male-people-person-turtleneck-sunglasses-beard-wavy-hair-male-avatars-free-d-illustration.png',
      author: 'Администратор'
    })
  }, 1000)

  setTimeout(() => {
    arr.push({
      text: 'пока смущают условия как атрибуты html тега, мне привычен Reactовский формат, но можно привыкнуть :) ',
      id: '123!3ad1asdasd',
      date: new Date(),
      isMyMessage: false,
      avatar: 'https://w7.pngwing.com/pngs/75/697/png-transparent-avatars-accounts-man-male-people-person-turtleneck-sunglasses-beard-wavy-hair-male-avatars-free-d-illustration.png',
      author: 'Администратор'
    })
  }, 2000)

  setTimeout(() => {
    arr.push({
      text: 'Еще много мест под оптимизацию но времени было не много :)',
      id: '123!3ad1asdasd',
      date: new Date(),
      isMyMessage: false,
      avatar: 'https://w7.pngwing.com/pngs/75/697/png-transparent-avatars-accounts-man-male-people-person-turtleneck-sunglasses-beard-wavy-hair-male-avatars-free-d-illustration.png',
      author: 'Администратор'
    })
  }, 3000)
}