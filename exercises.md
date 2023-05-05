Написати тести для додатка https://juice-shop-sanitarskyi.herokuapp.com/

1.1. Скласти мінімально необхідний набір тестів для реєстрації і автоматизувати його.
1.2. Скласти мінімально необхідний набір тестів для авторизації і автоматизувати його.
1.3. Скласти мінімально необхідний набір тестів для оформлення замовлення і автоматизувати його.
1.4. Написати хелпер функцію для пошуку товару на головній сторінці. Написати тест на замовлення товару з використанням цього хелперу.
1.5. Автоматизувати тест для форми зворотного звʼязку http://juice-shop-sanitarskyi.herokuapp.com/#/contact

Даний пункт оцінюється як 60% загального обсягу роботи

Розгорнути локально сервер і автоматизувати API тести.


Налаштування середовища:
Перш ніж продовжити виконання завдання, вам потрібно встановити, налаштувати наступні інструменти та уважно переглянути документацію json-server.
Для запитів ми будемо використовувати сервер JSON з автентифікацією. 
Щоб встановити сервер JSON, скористайтеся такою командою:
npm install json-server-auth
Запустіть сервер JSON такою командою:
npx json-server-auth http://jsonplaceholder.typicode.com/db
Сервер JSON зараз має працювати на http://localhost:3000.

Даний пункт оцінюється як 40% загального обсягу роботи


 #
 Task
 Endpoint
 Expected response status code
 1.
 Get all posts. Verify HTTP response status code and content type.
 /posts
 200
2.
Get only first 10 posts. Verify HTTP response status code. Verify that only first posts are returned.
/posts
 200
3.
Get posts with id = 55 and id = 60. Verify HTTP response status code. Verify id values of returned records.
/posts
 200
4.
Create a post. Verify HTTP response status code.
/664/posts
 401
5.
Create post with adding access token in header. Verify HTTP response status code. Verify post is created.
/664/posts
 201
6.
Create post entity and verify that the entity is created. Verify HTTP response status code. Use JSON in body.
/posts
 201
7.
Update non-existing entity. Verify HTTP response status code.
/posts
 404
8.
Create post entity and update the created entity. Verify HTTP response status code and verify that the entity is updated.
/posts
 200
9.
Delete non-existing post entity. Verify HTTP response status code.
/posts
 404
10.
Create post entity, update the created entity, and delete the entity. Verify HTTP response status code and verify that the entity is deleted.
/posts
 200




Памʼятка:
Для обох завдань має бути окремий репозиторій.
Притримуватись git flow.
Усі дії в тестах мають бути поділені на логічні блоки і мати лог для сайпресс раннера.
Кожен запитуваний ідентифікатор неіснуючої сутності має бути згенерований випадковим чином.
Усі дані, які надсилаються в запитах POST, або записуються в поля на UI мають бути згенеровані випадковим чином.
Зберігайте високу якість коду (оптимізуйте код, уникайте дублювання коду, у візуальних тестах застосовуйте Page Object pattern, структуруйте файли та додавайте відступи, не залишайте невикористаних імпортів)
