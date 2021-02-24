---
title: "6.ReactNative 프로젝트"
excerpt: " Beauty Knots를 클론코딩하면서 하루하루 배운것들 정리하기"
categories:
  - react
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 2021-02-24

### 1. useEffect를 사용할때 함수 vs 비동기(async)처리함수

> useEffect(일반함수)가 들어가는건 문제없다
>
> 그러나 useEffect 안에 비동기 처리함수가 들어가기 위해서는 즉시 실행 함수로 선언해줘야한다.

[useEffect 비동기함수 처리하는법]("https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret")
[비동기 vs 동기]("https://private.tistory.com/24")
[즉시 실행함수란]("")

### 2. spread 연산자 두번사용하기

> useState의 초기값 인 객체 안의 객체 like한테 접근하기 위해서
>
> setDetails({...details,data:{...data,like:"liked"}})로 like에 접근해숴 like의 값을 liked로 바꿔줌

```tsx
const DetailContainer = ({ route }: any) => {
  const [details, setDetails] = useState({
    data: {
      phone: "",
      like: "canceled",
      energy: "",
    },
  });

  setDetails({ ...details, data: { ...data, like: "liked" } });

  return <DetailPage data={data} likeBtn={likeBtn} />;
};

export default DetailContainer;
```

### 3. 삼항연산자

> {data.option?.map((data: any, index: number)=>()}

```tsx
{
  data.option?.map((data: any, index: number) => (
    <View
      key={index}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>
        상품{index + 1}&nbsp;|&nbsp;{data.name}
      </Text>
      <Text>+{data.price}원</Text>
    </View>
  ));
}
```

> {data.option ? (data.option.map()) : (null)}

```tsx
{
  data.option
    ? data.option.map((data: any, index: number) => (
        <View
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>
            상품{index + 1}&nbsp;|&nbsp;{data.name}
          </Text>
          <Text>+{data.price}원</Text>
        </View>
      ))
    : null;
}
```

### 4. React Native 앱에서 뒤로가기 할때 는 리 랜더링 되지 않는다.

> ex) A->B 가고 B 에서 A로 뒤로가기 할시 A는 이미 랜더링된 상태이므로 리 랜더링 되지 않는다.
>
> 따라서 필요에 의해 리 랜더링 시켜줘야 하는 경우가 있는데 그때, navigation.addListener(focus)를 사용하면 된다.
>
> 이것은 화면에 초점이 맞을때 리 랜더링 된다. 즉 A->B 로 가고 B에서 다시 A로 뒤로가기할시 A에 다시 초점이 맞춰지므로 A가 리랜더링 된다.
