export const students = [
  { id: 1, name: "Олександр Коваленко", score: 85, isActive: true },
  { id: 2, name: "Марія Петренко", score: 92, isActive: true },
  { id: 3, name: "Іван Сірко", score: 55, isActive: true },
  { id: 4, name: "Анна Остапчук", score: 88, isActive: true },
  { id: 5, name: "Дмитро Мельник", score: 45, isActive: true },
  { id: 6, name: "Олена Франко", score: 95, isActive: true },
  { id: 7, name: "Сергій Бондар", isActive: true }, // Score missing
  { id: 8, name: "Юлія Кравченко", score: 72, isActive: false }
];

export const posts = [
  {
    id: 1,
    author: "Олександр Коваленко",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    content: "Сьогодні розпочали вивчати списки в React. Це дуже потужний інструмент для відображення динамічного контенту!",
    date: "17 березня 2026",
    likes: 12,
    category: "News"
  },
  {
    id: 2,
    author: "Марія Петренко",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    content: "Не забудьте використовувати унікальні ключі (keys) при рендерингу масивів. Це критично для продуктивності React.",
    date: "16 березня 2026",
    likes: 24,
    category: "Tips"
  },
  {
    id: 3,
    author: "Іван Сірко",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan",
    content: "Vite + React = ❤️. Розробка стає набагато приємнішою завдяки швидкості HMR.",
    date: "15 березня 2026",
    likes: 5,
    category: "Updates"
  },
  {
    id: 4,
    author: "Анна Остапчук",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    content: "State та Props — це база. Розібравшись з ними, можна побудувати будь-що!",
    date: "14 березня 2026",
    likes: 31,
    category: "News"
  }
];
