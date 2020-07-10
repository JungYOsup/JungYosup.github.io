---
title: "2.ReactJs로 고객관리 시스템 만들기"
excerpt: "React로 고객관리 시스템 만들기(feat. 동빈나)"
categories:
  - react
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 1. 고객 컴포넌트(Component) 만들기

1. class Component 는 내부적으로 props를 가지고 있으므로, this.props가 가능한것이다.

- Customer.js

```js
import React from "react";

// class component vs function component

class Customer extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

// function Customer({ name, birthday, gender, job }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{birthday}</p>
//       <p>{gender}</p>
//       <p>{job}</p>
//     </div>
//   );
// }

export default Customer;
```

- App.js

```js
import React, { Component } from "react";
import Customer from "./components/Customer";

const customer = {
  id: 1,
  name: "홍길동",
  image: "https://placeimg.com/64/64/any",
  birthday: 96122,
  gender: "남",
  job: "대학생",
};

class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
```

- 질문 : class component vs 함수형 component 중 어느것을 썻어야하는가?

## 2. 고객 컴포넌트 구조화 하기

> 1.출력할 내용이 많으면 컴포넌트를 적절히 구조화 해야한다.
>
> 2.render되는 컴포넌트가 여러개일 경우 div나 section 등으로 감싸줘야한다.
>
> 3.Compoent는 재사용할수 있다.
>
> 4.Component에 각기 다른 데이터를 전달할때는, map()을 사용하면 더 쉽게 전달할수 있다.
>
> 5.map()함수를 사용하는데 있어, key 속성(값이 유일해야함)을 전달해야하되 , map에서 자체적으로 제공하는 index로 전달할수 있지만 잘 사용하지 않는다.

1. 출력할 내용이 많으면 컴포넌트를 적절히 구조화 해야한다.

- Customer.js

```js
import React from "react";

// class component vs function component
class Customer extends React.Component {
  render() {
    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          image={this.props.image}
          name={this.props.name}
        />
        <CustomerInfo
          birthday={this.props.birthday}
          gender={this.props.gender}
          job={this.props.job}
        />
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>
          {this.props.name}({this.props.id})
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
```

2. 여러명의 데이터를 Component로 출력하려고 할때

- App.js

* bad example

```js
import React, { Component } from "react";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    name: "홍길동",
    image: "https://placeimg.com/64/64/1",
    birthday: 960122,
    gender: "남",
    job: "대학생",
  },
  {
    id: 2,
    name: "정요섭",
    image: "https://placeimg.com/64/64/2",
    birthday: 911115,
    gender: "남",
    job: "대학생",
  },
  {
    id: 3,
    name: "김수진",
    image: "https://placeimg.com/64/64/3",
    birthday: 951207,
    gender: "여",
    job: "대학생",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        />
      </div>
    );
  }
}

export default App;
```

- good example

```js
class App extends Component {
  render() {
    return (
      <div>
        {customers.map((custom) => (
          <Customer
            id={custom.id}
            name={custom.name}
            image={custom.image}
            birthday={custom.birthday}
            gender={custom.gender}
            job={custom.job}
          />
        ))}
      </div>
    );
  }
}
```

## 3. Material UI를 적용하여 고객 테이블 디자인하기

- Material UI 란 ? : React에서 가장 많이 사용되는 디자인 프레임 워크
  [Material ui 설치 및 사용방법](https://material-ui.com/)

* App.js

```js
import React, { Component } from "react";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    name: "홍길동",
    image: "https://placeimg.com/64/64/1",
    birthday: 960122,
    gender: "남",
    job: "대학생",
  },
  {
    id: 2,
    name: "정요섭",
    image: "https://placeimg.com/64/64/2",
    birthday: 911115,
    gender: "남",
    job: "대학생",
  },
  {
    id: 3,
    name: "김수진",
    image: "https://placeimg.com/64/64/3",
    birthday: 951207,
    gender: "여",
    job: "대학생",
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {customers.map((custom) => (
              <Customer
                key={custom.id}
                id={custom.id}
                name={custom.name}
                image={custom.image}
                birthday={custom.birthday}
                gender={custom.gender}
                job={custom.job}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
```

- Customer.js

```js
import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.image} alt="profile"></img>
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>
    );
  }
}

export default Customer;
```

## 4. Node.js Express 서버 개발환경 구축하기

- Node.js Express 서버 란 : 웹서버 프레임 워크중 하나로 , 일반적으로 React를 개발하는 사람들은, Node.js가 같은 javascript를 기반으로 한다는 점에서 서버로 많이 사용하고 있다.

* 영상 참조

## 5. Node.js Express에서 Rest API 구축하기

## 6. 리액트의 라이프사이클 이해 및 API 로딩 처리 구현하기

## 7. AWS RDS 서비스를 이용하여 MYSQL DB 구축하기

## 8. 고객(Customer) DB 테이블 구축 및 Express 연동하기

## 9. 고객 추가 양식(Form) 구현 및 이벤트 핸들링

## 10. Node.js Express에서 파일업로드 요청 처리 및 DB에 데이터 삽입

## 11. 부모 컴포넌트의 상태(state) 변경을 통한 고객 정보 갱신

## 12. 고객 정보 삭제 기능 구현하기

## 13. Material UI 모달(modal) 디자인 구현하기

## 14. AppBar 및 웹 폰트를 적용하여 디자인 개편하기

## 15. 필터(filter) 함수를 이용한 고객 검색 기능 구현하기
