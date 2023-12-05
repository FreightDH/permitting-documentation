const isEmpty = (str) => {
  if (str.trim() !== '') return true;
  return 'Некорректный ввод!';
};

export default isEmpty;
