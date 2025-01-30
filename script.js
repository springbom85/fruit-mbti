{\rtf1\ansi\ansicpg949\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // script.js\
\
let fruitSelected = '';\
\
const selectFruit = (fruit) => \{\
    fruitSelected = fruit;\
    displayResult();\
\};\
\
const displayResult = () => \{\
    const resultSection = document.getElementById('result-section');\
    const questionSection = document.getElementById('question-section');\
    const resultText = document.getElementById('result-text');\
    const mbtiResult = document.getElementById('mbti-result');\
    const bloodTypeResult = document.getElementById('blood-type-result');\
    const nicknameResult = document.getElementById('nickname-result');\
\
    questionSection.style.display = 'none';\
    resultSection.style.display = 'block';\
\
    if (fruitSelected === '\uc0\u46392 \u44592 ') \{\
        resultText.innerHTML = '\uc0\u55357 \u56613  \u45817 \u49888 \u51008  \u50676 \u51221 \u51201 \u51060 \u44256 , \u47532 \u45908 \u49901 \u51060  \u45336 \u52824 \u45716  \u49457 \u44201 \u51077 \u45768 \u45796 !';\
        mbtiResult.innerHTML = 'MBTI: ENFJ';\
        bloodTypeResult.innerHTML = '\uc0\u54792 \u50529 \u54805 : AB\u54805 ';\
        nicknameResult.innerHTML = '\uc0\u54075 \u45348 \u51076 : \'93\u46392 \u44592  \u54253 \u54413 \'94';\
    \} else if (fruitSelected === '\uc0\u49324 \u44284 ') \{\
        resultText.innerHTML = '\uc0\u55356 \u57167  \u45817 \u49888 \u51008  \u52264 \u48516 \u54616 \u44256 , \u44228 \u54925 \u51201 \u51064  \u49457 \u44201 \u51077 \u45768 \u45796 !';\
        mbtiResult.innerHTML = 'MBTI: ISFJ';\
        bloodTypeResult.innerHTML = '\uc0\u54792 \u50529 \u54805 : O\u54805 ';\
        nicknameResult.innerHTML = '\uc0\u54075 \u45348 \u51076 : \'93\u49324 \u44284  \u47560 \u49828 \u53552 \'94';\
    \} else if (fruitSelected === '\uc0\u47112 \u47788 ') \{\
        resultText.innerHTML = '\uc0\u55356 \u57163  \u45817 \u49888 \u51008  \u46021 \u47549 \u51201 \u51060 \u44256 , \u48516 \u49437 \u51201 \u51064  \u49457 \u44201 \u51077 \u45768 \u45796 !';\
        mbtiResult.innerHTML = 'MBTI: INTJ';\
        bloodTypeResult.innerHTML = '\uc0\u54792 \u50529 \u54805 : A\u54805 ';\
        nicknameResult.innerHTML = '\uc0\u54075 \u45348 \u51076 : \'93\u47112 \u47788  \u51109 \u51064 \'94';\
    \} else if (fruitSelected === '\uc0\u48148 \u45208 \u45208 ') \{\
        resultText.innerHTML = '\uc0\u55356 \u57164  \u45817 \u49888 \u51008  \u44557 \u51221 \u51201 \u51060 \u44256 , \u50640 \u45320 \u51648  \u45336 \u52824 \u45716  \u49457 \u44201 \u51077 \u45768 \u45796 !';\
        mbtiResult.innerHTML = 'MBTI: ESFP';\
        bloodTypeResult.innerHTML = '\uc0\u54792 \u50529 \u54805 : B\u54805 ';\
        nicknameResult.innerHTML = '\uc0\u54075 \u45348 \u51076 : \'93\u48148 \u45208 \u45208  \u54644 \u54588 \'94';\
    \}\
\};\
\
const restart = () => \{\
    fruitSelected = '';\
    document.getElementById('question-section').style.display = 'block';\
    document.getElementById('result-section').style.display = 'none';\
\};\
}