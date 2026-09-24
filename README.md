# My Portfolio — React SPA

Простое self-promo приложение на React с 3 компонентами:
`Header`, `AboutMe`, `Contact`.

## 1. Что нужно поменять перед сдачей

- В `src/components/Header.jsx` — своё имя и слоган.
- В `src/components/AboutMe.jsx` — рассказ о себе, хобби, навыки.
- В `src/components/Contact.jsx` — свои ссылки (GitHub, Instagram и т.д. — **без** телефона и адреса).
- Добавь свою фотографию в `public/profile.jpg` (просто положи файл с этим именем в папку `public`).

## 2. Установка и запуск локально

```bash
npm install
npm run dev
```

Открой ссылку из терминала (обычно http://localhost:5173).

## 3. Деплой на GitHub Pages

1. Создай новый репозиторий на GitHub, например `my-portfolio`.
2. В `vite.config.js` пропиши `base: "/название-репозитория/"`.
3. Инициализируй git и запушь код:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tgnuraaaaaa17/my-portfolio.git
git push -u origin main
```

4. Задеплой:

```bash
npm run deploy
```

Эта команда соберёт проект и запушит папку `dist` в ветку `gh-pages`.

5. В настройках репозитория GitHub → **Settings → Pages** → Source: выбери
   ветку `gh-pages` (папка `/root`). Через пару минут сайт будет доступен по
   адресу:

```
https://tgnuraaaaaa17.github.io/my-portfolio/
```

## 4. Что приложить в домашку

1. Ссылку на GitHub-репозиторий.
2. Ссылку на задеплоенное приложение.
3. Скриншот работающего приложения в браузере.
