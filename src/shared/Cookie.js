// 키값을 기준으로 쿠키에 저장된 값을 가져오는 함수
const getCookie = (name) => {
  
  // 쿠키 값을 가져온다.
  let value = "; " + document.cookie;
  
  // 키값을 기준으로 파싱
  let parts = value.split(`; ${name}=`) // [aa=xx / aaa; abbb=sssss;];
  if (parts.length === 2){
    return parts.pop().split(";").shift();
  }
}

// 쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {

  // 날짜를 만들어준다 => 60*60*24 는 하루 24시간을 의미
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  // 저장하기
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
}

// 만료일을 이전 날짜로 설정해 쿠키를 지워주는 함수
const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  document.cookie = name + "=; expires="+date;
}

export {getCookie, setCookie, deleteCookie};