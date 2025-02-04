import React, { useState } from "react";
import Layout from "./Layout";
import { data } from "./../data/dummyData";

const CssContents = () => {
  const [text, setText] = useState({});
  const [newCss, setNewCss] = useState({});

  const textHandler = (e) => {
    changeText(e.target.id, e.target.value);
  };

  const changeText = (key, val) => {
    setText((cur) => {
      let condition = { ...cur };
      condition[key] = val;
      return condition;
    });
  };

  const changeCss = (key, val) => {
    setNewCss((cur) => {
      let condition = { ...cur };
      condition[key] = val;
      return condition;
    });
  };

  const answerHandler = (e) => {
    e.preventDefault();
    for (let key in data.css) {
      if (key === text[key]) {
        changeCss(key, `bg-green-100`);
      } else {
        changeCss(key, `bg-red-100`);
        changeText(key, "");
      }
    }
  };

  return (
    <>
      <span className="text-xl font-bold">CSS (Cascading Style Sheets)</span>
      <br />
      <span>웹 페이지 스타일 및 레이아웃을 정의하는 스타일시트 언어</span>
      <br />
      <span>
        더 나은 사용자 경험(UX)을 제공하기 위해 UI 및 레이아웃을 적절히
        구성합니다.
      </span>
      <span>배우기 가장 쉬운 동시에, 가장 어려운 언어 중 하나</span>
      <br />
      <br />
      <span className="text-xl font-bold">Flexbox</span>
      <span>박스를 유연하게 늘리거나 줄여 레이아웃을 잡는 방법</span>
      <br />
      <br />
      <span className="text-xl font-bold">
        display:{"\n"}
        <input
          id="flex"
          type="text"
          placeholder="f???"
          value={text["flex"] || ""}
          onChange={textHandler}
          className={newCss.flex}
        />
      </span>
      <br />
      <span>
        부모 박스 요소에 적용해 자식 박스의 방향과 크기를 결정하는 레이아웃
        구성법
      </span>
      <br />
      <br />
      <span className="text-xl font-bold">
        부모 요소에 적용해야하는 Flexbox 속성
      </span>
      <br />
      <span>
        <input
          id="flex-direction"
          type="text"
          placeholder="????-????????n"
          value={text["flex-direction"] || ""}
          onChange={textHandler}
          className={newCss["flex-direction"]}
        />
        {"\n"}:{"\n"}정렬 축 정하기, 가본값은 가로 정렬, (row, column, ...)
      </span>
      <br />
      <span>
        <input
          id="justify-content"
          type="text"
          placeholder="???????-??????t"
          value={text["justify-content"] || ""}
          onChange={textHandler}
          className={newCss["justify-content"]}
        />
        {"\n"}:{"\n"}자식 요소들을 축의 수평 방향으로 어떻게 정렬할 것인지
        정합니다.
      </span>
      <br />
      <span>
        <input
          id="align-item"
          type="text"
          placeholder="?????-???m"
          value={text["align-item"] || ""}
          onChange={textHandler}
          className={newCss["align-item"]}
        />
        {"\n"}:{"\n"}자식 요소들을 축의 수직 방향으로 어떻게 정렬할 것인지
        정합니다.
      </span>
      <br />
      <br />
      <button className="w-[80px]" onClick={answerHandler}>
        제출
      </button>
    </>
  );
};

const CSS = () => {
  return <Layout contents={<CssContents />} />;
};

export default CSS;
