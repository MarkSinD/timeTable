/**
 * Returns a random greeting message to inspire productivity.
 * @returns {string} A random greeting message with optional emoji code.
 */
export const getRandomGreeting = (): string => {
  const greetingsText: string[] = [
    "Давайте сделаем сегодня что-то особенное **1f680**",
    "Примите силу продуктивности!",
    "Оставайтесь организованными, оставайтесь впереди.",
    "Производительность - ключ к успеху. **1f511**",
    "Используйте силу продуктивности!",
    "Начните свой день с плана **1f5d3-fe0f**",
    "Разблокируйте потенциал своей продуктивности. **1f513**",
  ];

  const randomIndex = Math.floor(Math.random() * greetingsText.length);
  return greetingsText[randomIndex];
};
