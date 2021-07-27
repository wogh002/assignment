import "./app.css";
import React, { useEffect, useState, useRef, useCallback } from "react";
import InfiniteScrollListItem from "./components/infiniteScrollListItem";
const LIMIT = 10;

function App({ user }) {
  //this.setState((가장최신의값 조회)=>{}); === setUserList('');
  const [userList, setUserList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const lastUserRef = useRef();

  //componentDidMount
  useEffect(() => {
    user.getInfo(pageNumber, LIMIT).then((data) => {
      setUserList((member) => [...member, ...data]);
      setLoading(true);
    });
  }, [pageNumber, user]);

  const loadUser = useCallback(() => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }, []);

  useEffect(() => {
    //loading 을 넣어준 이유 ? => useEffect() 자체가 가상돔이 돔에 장착된 이후로 실행이되는데
    //그럴 경우 옵저버가 바로 lastUserRef를 감지해서 loadUser()를 실행시킨다 그러면 데이터가 바로 20개가보여서.
    //우리의 과제는 처음 10개가 보여야 했다.
    if (loading) {
      //entries는 IntersectionObserverEntry 인스턴스의 배열입니다.
      const observer = new IntersectionObserver(
        (entries) => {
          console.log(entries);
          entries[0].isIntersecting && loadUser();
          //isIntersecting (boolean)
          //isIntersecting: 관찰 대상의 교차 상태(Boolean)
          //교차되면 false -> true 로 바뀝니다.
        },
        //옵저버를 조정할래 내맘대로!
        { threshold: 1 }
        //(뷰폴트기준으로  lastUserRef 마주치면 옵저버 발동)
        //타겟의 가시성이 100%일 때  옵저버가 실행.
      );
      //관찰대상등록
      observer.observe(lastUserRef.current);
    }
  }, [loading]);
  return (
    <div>
      {userList.map((user) => {
        return (
          <ul key={user.id}>
            <InfiniteScrollListItem user={user} />
          </ul>
        );
      })}
      <div ref={lastUserRef}></div>
    </div>
  );
}

export default App;
