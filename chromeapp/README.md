form에서 submit이라는 이벤트가 발생(이벤트는 약간 거품같은 것 !!)하면 다른 모든 것들이 이 이벤트에 영향을 받게 되고  document까지 올라가서 그 document 는 다른 곳으로 간다.  -> 약간 새로고침같은 느낌
바로 이동작을 막고 싶을 때 쓰는 것이 event.preventDefault()라는 것이다. 

LocalStorage는 key : value형태로 저장하게 돼있다.

그래서 저장시에는 localStorage.setItem(USER_LS,text);와 같이 저장하게 된다.
또, LocalStorage는 url형식으로 작동하는데 같urls로 접속하게 되면 그 상태가 유지됨

LocalStorage에서 뭔가를 불러오고 싶으면 localStorage.getItem();을 하면 된다.
 