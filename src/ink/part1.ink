// Історія про Олега Віщого та взяття Києва
// Персонажі визначені в characters.ts: oleg, ihor, askold, dir, druzhynnyk, narrator
// Емоції: sternOleg, cunningOleg, triumphantOleg, shyIhor, curiousIhor, proudIhor
//         suspiciousAskold, angryAskold, resignedAskold, sternDir, defiantDir, shockedDir
//         alertDruzhynnyk, relievedDruzhynnyk, pleasedNarrator, concernedNarrator

VAR score = 0
VAR quiz_completed = false
VAR story_completed = false


=== part1 ===
# lazyload bundle bg ihor 
-> scene_arrival

=== scene_arrival ===
# show image novgorodTable x -100 y 0

narrator: Літопис називає Олега Віщим. 

narrator: Після смерті Рюрика він став опікуном малого Ігоря та правив від його імені в Новгороді.
<>Він був воєводою, родичем Рюрика й опікуном княжича.

oleg: Бережу престол за Ігорем. Русь треба з'єднати, а не роз'єднати.

# show image ihorStanding x 600 y 900 with dissolve

ihor: Вчителю Олеже, а коли я стану князем?

oleg: Навчишся справам княжим — тоді й сядиш на стіл батьківський.

# remove image ihorStanding with dissolve
-> scene_dnipro

=== scene_dnipro ===
# show image dniproBoat with dissolve

narrator: Близько 882 року Олег рушив Дніпром «із варяг у греки», шукаючи столицю для всієї Русі.

narrator: З дружиною та малим Ігорем пристав до київських гір.

# show image kyivArrival with dissolve 
druzhynnyk: Княже, місто на важливому торговому шляху. Пора зійти на берег.

# show image ihorAndOleg x 100 y 350 with dissolve
oleg: Спершу — розвідка. У Києві правлять Аскольд і Дір.


+ [Запитати Ігоря, що він думає]
    ihor: Вони нас приймуть?
    
    oleg: Приймуть торговців. Князів — навряд.
    
    -> scene_ruse
    
+ [Продовжити план без обговорення]
    oleg: Появимось як купці. Далі — по ситуації.
    
    -> scene_ruse

=== scene_ruse ===
# show image kyivMeeting with dissolve
narrator: Олег удався до хитрощів — прикинувся купцем і запросив Аскольда та Діра «від імені гостей».

askold: Купці? Чого хочете від київського двору?

dir: Говоріть швидко.

oleg: Ви не з княжого роду. Ось князь — син Рюриків.

ihor: Я — Ігор, спадкоємець.

narrator: Після цієї ради Аскольда і Діра було усунуто від влади.

-> scene_takeover

=== scene_takeover ===
# show image kyivTriumph with dissolve
narrator: Олег увійшов до Києва, посадив там Ігоря й правив як опікун.

oleg: Хай буде Київ матір'ю міст руських!

druzhynnyk: Північ і південь Русі — разом.
+ [Перейти до перевірки знань]
    -> quiz
    
+ [Завершити історію без тесту]
    -> outro


=== quiz ===
narrator: Хто такий Олег за літописом?

+ [А) Київський купець]
    narrator: Ні, це неправильно.
    -> q2
    
+ [Б) Воєвода, родич Рюрика й опікун Ігоря]
    ~ score = score + 1
    narrator: Правильно!
    -> q2
    
+ [В) Хозарський посол]
    narrator: Ні, це неправильно.
    -> q2
    
+ [Г) Скандинавський мандрівник]
    narrator: Ні, це неправильно.
    -> q2

=== q2 ===
narrator: Коли Олег прибув до Києва й почалися події з Аскольдом і Діром?

+ [А) 862 р.]
    narrator: Не зовсім.
    -> q3
    
+ [Б) близько 882 р.]
    ~ score = score + 1
    narrator: Так, правильно!
    -> q3
    
+ [В) 912 р.]
    narrator: Це пізніше.
    -> q3
    
+ [Г) 972 р.]
    narrator: Надто пізно.
    -> q3

=== q3 ===
narrator: Які слова приписують Олегові після взяття влади в Києві?

+ [А) «Київ – серце торгівлі Русі»]
    narrator: Гарна фраза, але не та.
    -> result
    
+ [Б) «Хай буде Київ матір'ю міст руських»]
    ~ score = score + 1
    narrator: Влучно! Це правильна відповідь.
    -> result
    
+ [В) «Русі потрібне море»]
    narrator: Ні, це неправильно.
    -> result
    
+ [Г) «Славимо Рюрика, князя всіх земель»]
    narrator: Ні, це неправильно.
    -> result

=== result ===
# call save_score
narrator: Твій результат: {score} з 3 правильних відповідей.

+ [Повторити тест]
    ~ score = 0
    -> quiz
    
+ [Завершити]
    -> outro

=== outro ===
# show image bg background_kyiv

narrator: Відтоді Київ став головним містом держави, а Олег — князем-об'єднувачем.

narrator: Він заклав основи могутньої Київської Русі, яка проіснує століття.

-> part2