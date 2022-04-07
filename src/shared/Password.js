
// 비밀번호 형식 체크 : 영문, 숫자 조합으로 8자리 이상, 20자리 이하 입력
export const passwordCheck = (pwd) => {
  let regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  return regPass.test(pwd);
}