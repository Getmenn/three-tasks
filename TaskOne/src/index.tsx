import '@/app/styles/index.scss';

import ReactDOM from 'react-dom/client';

import MainPage from './page/content/main';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контенер root не найден. Не удалось вмонтировать react приложение!');
}

ReactDOM.createRoot(container).render(
    <MainPage />,
);
