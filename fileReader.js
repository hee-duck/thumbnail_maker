// 웹 페이지의 내용을 이미지로 변환하면서, 외부 이미지 URL을 사용하는 경우 웹 보안 정책 이슈가 있음..
// Base64 인코딩 우회 방법 예비

function convertImageToBase64(imgUrl, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        let reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', imgUrl);
    xhr.responseType = 'blob';
    xhr.send();
}
