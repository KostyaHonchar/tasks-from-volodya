import React from 'react';
import ComboBox from './Combobox';

const categories = [
  { label: 'Фотографи' },
  { label: 'Відеооператори' },
  { label: 'Ведучі' },
  { label: 'Ресторани' },
  { label: 'Оформлення залу' },
  { label: 'Сукні для дружок' },
  { label: 'Весільні сукні' },
  { label: 'Торти та короваї' },
  { label: 'Автомобілі' },
  { label: 'Організація весілля' },
  { label: 'Шоу-програма' },
  { label: 'Салони краси' },
  { label: 'Запрошення та аксесуари' },
  { label: 'Перший танець' },
  { label: 'Фуршетний стіл' },
  { label: 'Весільні букети' },
];

const cities = [
  { label: 'Київ' },
  { label: 'Львів' },
  { label: 'Івано-Франківськ' },
  { label: 'Тернопіль' },
  { label: 'Луцьк' },
  { label: 'Харків' },
  { label: 'Одеса' },
  { label: 'Рівне' },
  { label: 'Дніпро' },
  { label: 'Ужгород' },
  { label: 'Чернівці' },
  { label: 'Хмельницький' },
  { label: 'Вінниця' },
  { label: 'Запоріжжя' },
  { label: 'Кривий Ріг' },
  { label: 'Миколаїв' },
  { label: 'Херсон' },
  { label: 'Полтава' },
  { label: 'Чернігів' },
  { label: 'Черкаси' },
  { label: 'Житомир' },
  { label: 'Суми' },
  { label: 'Кропивницький' },
  { label: 'Маріуполь' },
  { label: 'Усі міста України' },
];

function SearchBox() {
  return (
    <div className="searchbox">
      <ComboBox data={categories} title="Категорія" label="Оберіть категорію" />
      <ComboBox data={cities} title="Місто" label="Оберіть місто" />
    </div>
  )
}

export default SearchBox;
