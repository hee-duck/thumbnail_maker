window.onload = function(){
    // 색상 선택
    document.getElementById('color-picker').oninput = function(){
        document.getElementById('live-view').style.backgroundColor = this.value;
    }

    // 이미지 url 입력
    document.getElementById('image-url-input').onchange = function(){
        document.getElementById('live-view').style.backgroundImage = "url('" + this.value + "')";
    }

    // 썸네일별 미리보기
    document.getElementById('youtube').onclick = function() {
        setSize('1280px', '720px');
    }

    document.getElementById('instagram-square').onclick = function() {
        setSize('1080px', '1080px');
    }

    document.getElementById('instagram-row').onclick = function() {
        setSize('1080px', '566px');
    }

    document.getElementById('instagram-column').onclick = function() {
        setSize('566px', '1080px');
    }

    // 사이즈 커스텀
    document.getElementById('custom').onclick = function() {
        let customRow = document.getElementById('custom-row');
        let customColumn = document.getElementById('custom-column');
        let applyButton = document.getElementById('apply-custom-size');
    
        if (customRow.style.display === 'none') {
            customRow.style.display = 'block';
            customColumn.style.display = 'block';
            applyButton.style.display = 'block';  // 완료 버튼도 보이게 함
        }
    }
    
    document.getElementById('apply-custom-size').onclick = function() {
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
    document.getElementById('color-picker').oninput = function() {
        document.getElementById('live-view').style.backgroundColor = this.value;
        document.getElementById('live-view').style.backgroundImage = '';  // 배경 이미지 제거
    }

    // 이미지 url 입력
    document.getElementById('image-url-input').onchange = function() {
        let liveView = document.getElementById('live-view');
        let imageUrl = this.value;

        // 이미지 해상도 조정
        liveView.style.backgroundImage = "url('" + imageUrl + "')";
        liveView.style.backgroundSize = '100% 100%';  
        liveView.style.backgroundPosition = 'center'; 
        liveView.style.backgroundRepeat = 'no-repeat';  
        liveView.style.backgroundColor = '';  
    }
    
}