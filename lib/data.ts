export function generateUsers(numberOfUsers: number) {
  return Array.from({length: numberOfUsers}, (_, i) => ({
    fallbackText: `US${i}`,
    userName: `User${i}`,
    imgUrl: `https://picsum.photos/seed/${i}/200/200`,
  }))
}