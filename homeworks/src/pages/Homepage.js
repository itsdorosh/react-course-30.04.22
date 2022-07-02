import {useState} from "react";

import {AppCard} from "../shared-components";


export function Homepage() {
  const [appsToShow] = useState([
    {
      id: 1,
      title: "Contacts Book",
      description: `Задача, реализовать книгу контактов с возможностью поиска и редактирования. Имя и фамилия контакта должны быть разделены на разные поля.
      Поиск должен производиться по имени, по фамилии или по номеру телефона. При вводе значений в поле поиска, количество результатов подходящих под введенное значение должно уменьшаться.
      В каждом контакте должны быть две кнопки: одна запускает процесс изменения контакта, а вторая - его удаление из списка.
      Редактирование должно происходить в попапе, который открывается по центру.
      И да, всё пишем на функциональных классах с использование хука useState.`,
      link: {text: "Check it out →", href: "/contacts-book"},
    },
    {
      id: 2,
      title: "TodoApp",
      description: "This is TodoApp",
      link: {text: "Get explore Brand new Todo App", href: "/todos"}
    },
  ]);

  return (
    <>
      <h1>Welcome Home, Guys!</h1>
      {/* TODO: nested routing */}
      <div className="cards">
        {appsToShow.map(({id, title, description, link}) => <AppCard key={id} title={title} description={description}
                                                                     link={link}/>)}
      </div>
    </>
  );
}
