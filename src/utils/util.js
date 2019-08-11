// Рендерим компонент
const renderComponent = (elementContainer, markup, where = `beforeend`) => {
  return elementContainer.insertAdjacentHTML(where, markup);
};

export {renderComponent};

