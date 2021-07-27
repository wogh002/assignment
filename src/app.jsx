import "./app.css";
import React, { useEffect, useState, useRef, useCallback } from "react";
import InfiniteScrollListItem from "./components/infiniteScrollListItem";
const LIMIT = 10;
function App({ user }) {
  const [userList, setUserList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const lastUserRef = useRef();

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
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries[0].isIntersecting && loadUser();
        },
        { threshold: 1 }
        //타겟의 가시성이 100%일 때 모두 옵저버가 실행됩니다.
      );
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
