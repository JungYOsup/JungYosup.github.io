---
title: "2. 알고리즘 기초1/2"
excerpt: "백준 알고리즘 두번째강의 '자료구조1' "
categories:
  - beginner
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## Stack

### 문제1. 단어뒤집기

[단어뒤집기 9093번](https://www.acmicpc.net/problem/9093)

> 1.문장이 주어졌을 때 단어를 모두 뒤집는 문제

> 2.단어의 순서를 바꿀 수 없고, 단어는 영어 알파벳으로만 이루어져 있다.

> 3.단어의 최대 길이: 20, 문장의 최대 길이: 1000

#### 첫번째 도전

나의 생각 : 문장을 뒤집는 문제가 아니기 때문에 String reverse를 사용하면 안될것 같고, Stack을 사용하면 좋을것 같다.

```java
public static void main(String[] args) {

	Scanner scan = new Scanner(System.in);

	int num = scan.nextInt();
	scan.nextLine();
	//Scanner.nextInt 메소드는 사용자 입력의 가장 마지막 개행문자(엔터, newline)를 제거하지 않음
	//개행문자(엔터) 전까지만 숫자로 입력 받습니다.
	//개행문자(엔터)는 다음에 호출된 Scanner.nextLine( ) 메소드의 입력으로 처리되서 문제기 발생합니다.
	//출처: https://allg.tistory.com/17 [프로그래밍 해볼까]

	while(num-->0) {

	    String s = scan.nextLine(); //scan.next()로 할경우 문장을 인지를 못함,
										//즉 i am 같은 경우 i만 변수가 받음 그래서 scan.nextLine()으로 받음
		char[] array = s.toCharArray();
		Stack<String> stack = new Stack<>();

		for(int i=0; i<array.length; i++) {

			if(array[i]==' ') {
				while(!stack.isEmpty()) {
					System.out.print(stack.pop());
				}
					System.out.print(' ');
			}else {
				stack.add(array[i]+""); //stack에는 String 값 이 들어가야하므로 ""를 더해줌

				}
			}
			while(!stack.isEmpty()) {
				System.out.print(stack.pop());
			}

		}

	}
```

> 결과 : _틀렸습니다._
>
> 이유 : 잘모르겠다..., System.out.pront(' '); 로 띄어쓰기를 구성하면 안된다는 가정을 함

#### 두번째 도전

```java

public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		int num = scan.nextInt();
		scan.nextLine();
		//Scanner.nextInt 메소드는 사용자 입력의 가장 마지막 개행문자(엔터, newline)를 제거하지 않음
		//개행문자(엔터) 전까지만 숫자로 입력 받습니다.
		//개행문자(엔터)는 다음에 호출된 Scanner.nextLine( ) 메소드의 입력으로 처리되서 문제기 발생합니다.
		//출처: https://allg.tistory.com/17 [프로그래밍 해볼까]

		while(num-->0) {

			String s = scan.nextLine(); //scan.next()로 할경우 문장을 인지를 못함,
										//즉 i am 같은 경우 i만 변수가 받음 그래서 scan.nextLine()으로 받음
			char[] array = s.toCharArray();
			Stack<String> stack = new Stack<>();
			String str = "";
			for(int i=0; i<array.length; i++) {

				if(array[i]==' ' || i==array.length) {
					while(!stack.isEmpty()) {
						str +=stack.pop(); //변수 str을 추가시킴
					}
					str +=" ";
				}else {
					stack.add(array[i]+"");
                    //stack에 Generic 타입으로 String을 넣었으므로 add안에 String을 값을 넣어주기 위해 array[i]+""를 해줌
                    //굳이 String을 쓰지 않고 Generic 타입으로 Character을 넣고 stack.add()에 array[i]만 넣어도 됨
				}
			}

			while(!stack.isEmpty()) {
				str+=stack.pop();
			}
			System.out.println(str);

		}



	}

```

> 결과 : _메모리초과._
>
> 이유 : 첫번째 도전에서 발생한 문제를 해결함, 띄어쓰기를 할따는 syso로 하면 안됨
>
> 메모리초과 문제는 왜 생기는지 모르겠으나.. , 이 문제를 해결하는 방법으로 BufferedReader, BufferedWriter을 사용함
> BufferedReader, BufferedWriter는 응답시간과 출력시간이 빠르므로

#### 세번째 도전

```java
public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));



		String str = br.readLine();
		int num = Integer.parseInt(str);

		// int num = br.read(); 를 쓰면 불편한 이유 !!
		// 바로 read()메서드는 값을 읽어올 때, int 값으로 변형하여 읽어 오기 때문이다.
		// 그래서 1이라는 숫자를 read()를 통해서 읽어오면 아스키코드 문자값 '1'을 읽어오므로
		// 결국 49를 읽어 오게 됨
		// 따라서 숫자를 읽어 올때는 위의 방법처럼 readLine()으로 읽고 숫자로 변환해주는게 더 편하다

		Stack<Character> stack = new Stack<>();

		while((num--)!=0) {

			String s = br.readLine()+"\n";

			for(char c : s.toCharArray()) {

				if(c==' '|| c== '\n') {

					while(!stack.isEmpty()) {
						bw.write(stack.pop());
					}
					bw.write(c);
				}else {
					stack.add(c);
				}


			}
		}
		bw.flush();

	}
```

> 결과 : _통과_

- [x] 생각으로만
- [x] Hint 보고
- [ ] 답 보고
