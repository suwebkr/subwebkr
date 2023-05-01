
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open('GET', 'http://naver.com'); // GET 요청 보내기
xhr.onreadystatechange = function() { // 요청 상태가 변경될 때마다 실행되는 콜백 함수
  if (xhr.readyState === 4 && xhr.status === 200) { // 요청이 완료되고, 상태 코드가 200인 경우
    console.log(xhr.responseText); // 응답 내용 출력
  }
};
xhr.send(); // 요청 보내기