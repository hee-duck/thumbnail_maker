window.onload = function () {
    // 색상 선택
    document.getElementById('color-picker').oninput = function () {
        document.getElementById('live-view').style.backgroundColor = this.value;
    }

    // 이미지 url 입력
    document.getElementById('image-url-input').onchange = function () {
        document.getElementById('live-view').style.backgroundImage = "url('" + this.value + "')";
    }

    // 썸네일별 미리보기
    document.getElementById('youtube').onclick = function () {
        setSize('1280px', '720px');
    }

    document.getElementById('instagram-square').onclick = function () {
        setSize('1080px', '1080px');
    }

    document.getElementById('instagram-row').onclick = function () {
        setSize('1080px', '566px');
    }

    document.getElementById('instagram-column').onclick = function () {
        setSize('566px', '1080px');
    }

    // 사이즈 커스텀
    document.getElementById('custom').onclick = function () {
        let customRow = document.getElementById('custom-row');
        let customColumn = document.getElementById('custom-column');
        let applyButton = document.getElementById('apply-custom-size');

        if (customRow.style.display === 'none') {
            customRow.style.display = 'block';
            customColumn.style.display = 'block';
            applyButton.style.display = 'block';  // 완료 버튼도 보이게 함
        }
    }

    document.getElementById('apply-custom-size').onclick = function () {
        let customRow = document.getElementById('custom-row');
        let customColumn = document.getElementById('custom-column');

        if (customRow.value && customColumn.value) {
            let customWidth = customRow.value + 'px';
            let customHeight = customColumn.value + 'px';
            setSize(customWidth, customHeight);
        } else {
            alert("가로 및 세로 값을 모두 입력해주세요!");
        }
    }

    // 미리보기
    function setSize(width, height) {
        let liveView = document.getElementById('live-view');
        liveView.style.width = width;
        liveView.style.height = height;
    }

    // 색상 선택
    document.getElementById('color-picker').oninput = function () {
        document.getElementById('live-view').style.backgroundColor = this.value;
        document.getElementById('live-view').style.backgroundImage = '';  // 배경 이미지 제거
    }

    // 이미지 url 입력
    document.getElementById('image-url-input').onchange = function () {
        let liveView = document.getElementById('live-view');
        let imageUrl = this.value;

        // 이미지 해상도 조정
        liveView.style.backgroundImage = "url('" + imageUrl + "')";
        liveView.style.backgroundSize = '100% 100%';
        liveView.style.backgroundPosition = 'center';
        liveView.style.backgroundRepeat = 'no-repeat';
        liveView.style.backgroundColor = '';
    }

    let textCounter = 0;  // 각 텍스트 요소에 고유한 ID를 부여하는 변수

    // 텍스트 추가
    document.getElementById('add-text-btn').onclick = function() {
        let liveView = document.getElementById('live-view');
        let userInput = document.getElementById('user-text-input').value;

        if (userInput) {
            let newTextElement = document.createElement('p');
            newTextElement.innerText = userInput;
            newTextElement.style.position = 'absolute';
            // 기본 텍스트 위치 이미지 중앙
            newTextElement.style.top = '50%';
            newTextElement.style.left = '50%';
            newTextElement.style.transform = 'translate(-50%, -50%)';
            // 고유한 ID 설정
            newTextElement.id = 'draggableText' + textCounter++;
            newTextElement.draggable = true;  // 드래그 가능하게 설정

            liveView.appendChild(newTextElement);

            // 입력 필드 초기화
            document.getElementById('user-text-input').value = '';
        } else {
            alert("텍스트를 입력해주세요!");
        }
    };

    // 텍스트 드래그
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'P') {
            e.dataTransfer.setData('text/plain', e.target.id);  // 드래그하는 요소의 ID 저장
        }
    });

    document.getElementById('live-view').addEventListener('dragover', function(e) {
        e.preventDefault();  // 기본 dragover 이벤트 동작 방지
    });

    document.getElementById('live-view').addEventListener('drop', function(e) {
        e.preventDefault();

        const draggedElementId = e.dataTransfer.getData('text/plain');  // 저장된 ID를 가져옴
        const draggedElement = document.getElementById(draggedElementId);

        if (draggedElement) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            draggedElement.style.left = x + 'px';
            draggedElement.style.top = y + 'px';
            draggedElement.style.transform = 'none';  // 중앙 정렬 보정 제거
        }
    });

}