[![Build status](https://ci.appveyor.com/api/projects/status/n7n2s0tlh159rhg8?svg=true)](https://ci.appveyor.com/project/Al101020/13-2-03-dz-game-with-goblins-2)<br>
https://al101020.github.io/13-2.03_DZ-Game-with-Goblins-2/
<br>
-----------------------------------------------------------------------------
# Правила сдачи задания:<br>


Важно: в рамках этого ДЗ нужно использовать менеджер пакетов yarn (а значит, никакого package-lock.json в репозитории быть не должно)<br>
Важно: всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через Appveyor.<br>
В README.md должен быть размещён бейджик сборки и ссылка на Github Pages<br>
В качестве результата присылайте проверяющему ссылки на ваши GitHub-проекты
-----------------------------------------------------------------------------

# 13-2.03_DZ-Game-with-Goblins-2
ДЗ - Обработка событий,  игра убей гоблина - 2

1.  node.js версии 12.22.12
2.  Проект из листинга к занятию "Обработка событий"
3.  yarn add url-loader --save-dev
    вствил в webpack.config.js:
    { test: /\.(jpg|png)$/, use: {loader: 'url-loader', }, },
