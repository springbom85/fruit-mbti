document.addEventListener("DOMContentLoaded", function() {
    let fruitSelected = '';

    // selectFruit 함수 정의
    const selectFruit = (fruit) => {
        fruitSelected = fruit;
        displayResult();
    };

    // 결과 화면을 보여주는 함수
    const displayResult = () => {
        const resultSection = document.getElementById('result-section');
        const questionSection = document.getElementById('question-section');
        const resultText = document.getElementById('result-text');
        const mbtiResult = document.getElementById('mbti-result');
        const bloodTypeResult = document.getElementById('blood-type-result');
        const nicknameResult = document.getElementById('nickname-result');

        questionSection.style.display = 'none';
        resultSection.style.display = 'block';

        if (fruitSelected === '딸기') {
            resultText.innerHTML = '🔥 당신은 열정적이고, 리더십이 넘치는 성격입니다!';
            mbtiResult.innerHTML = 'MBTI: ENFJ';
            bloodTypeResult.innerHTML = '혈액형: AB형';
            nicknameResult.innerHTML = '팻네임: “딸기 폭풍”';
        } else if (fruitSelected === '사과') {
            resultText.innerHTML = '🍏 당신은 차분하고, 계획적인 성격입니다!';
            mbtiResult.innerHTML = 'MBTI: ISFJ';
            bloodTypeResult.innerHTML = '혈액형: O형';
            nicknameResult.innerHTML = '팻네임: “사과 마스터”';
        } else if (fruitSelected === '레몬') {
            resultText.innerHTML = '🍋 당신은 독립적이고, 분석적인 성격입니다!';
            mbtiResult.innerHTML = 'MBTI: INTJ';
            bloodTypeResult.innerHTML = '혈액형: A형';
            nicknameResult.innerHTML = '팻네임: “레몬 장인”';
        } else if (fruitSelected === '바나나') {
            resultText.innerHTML = '🍌 당신은 긍정적이고, 에너지 넘치는 성격입니다!';
            mbtiResult.innerHTML = 'MBTI: ESFP';
            bloodTypeResult.innerHTML = '혈액형: B형';
            nicknameResult.innerHTML = '팻네임: “바나나 해피”';
        }
    };

    // 초기화 함수
    const restart = () => {
        fruitSelected = '';
        document.getElementById('question-section').style.display = 'block';
        document.getElementById('result-section').style.display = 'none';
    };

    // 각 버튼 클릭 시 selectFruit 함수 호출
    document.getElementById('strawberry-btn').addEventListener('click', () => selectFruit('딸기'));
    document.getElementById('apple-btn').addEventListener('click', () => selectFruit('사과'));
    document.getElementById('lemon-btn').addEventListener('click', () => selectFruit('레몬'));
    document.getElementById('banana-btn').addEventListener('click', () => selectFruit('바나나'));
});
