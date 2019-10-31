---
title: "3. 알고리즘 기초1/2 자료구조 연습문제"
excerpt: "백준 알고리즘 세번째강의 '자료구조 연습문제' "
categories:
  - beginner
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 연습문제

### 문제1. 단어뒤집기2

[단어뒤집기2 17413번](https://www.acmicpc.net/problem/17413)

> 먼저, 문자열 S는 아래와과 같은 규칙을 지킨다.
>
> 1.알파벳 소문자('a'-'z'), 숫자('0'-'9'), 공백(' '), 특수 문자('<', '>')로만 이루어져 있다.
>
> 2.문자열의 시작과 끝은 공백이 아니다.
>
> 3.'<'와 '>'가 문자열에 있는 경우 번갈아가면서 등장하며, '<'이 먼저 등장한다. 또, 두 문자의 개수는 같다.

#### 첫번째 도전

나의 생각 : 만약 <가 있으면 >가 나올떄 까지는 담아주고, 나머지는 뒤집기를 한다.

```java
public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		String s = scan.nextLine()+'\n';
		Stack<Character> stack = new Stack<>();

		char[] c = s.toCharArray();

		String str = "";

		for(int i=1; i<c.length; i++) {


			if(c[i]==' ' || c[i]=='\n') {

				while(!stack.isEmpty()) {
					str += stack.pop();
				}
				str +=" ";

			}else {

				stack.add(c[i]);
			}

		}

		System.out.println(str);

	}
```

> 결과 : 틀렸습니다.
>
> 이유 : <>에서 뒤집지 않게하는 조건을 넣어주지 않음.. 잘모르겠음..
>
> 이 문제를 해결하기 위해 상당히 시간을 많이 씀..

#### 두번째 도전

나의 생각: <>안에 뒤집지 않게 하는 방법을 어떻게 구현할지 생각해봤는데..
'<'가 나올경우 '>'게 나올때 까지 그대로 표현하고는 조건문을 구해보자는 생각을했음..
그리고 그 조건문에 맞춰 입력문을 출력한결과 발생한 문제들에 대해서 수정하면서 했음

```java
public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		String s = scan.nextLine()+'\n';
		Stack<Character> stack = new Stack<>();

		char[] c = s.toCharArray();

		String str = "";

		for(int i=0; i<c.length; i++) {


			if(c[i]=='<') {

				while(!stack.isEmpty()) {
					str += stack.pop();
				} // else 부분에서 띄어쓰기 그리고 '\n' 일때 pop을 해줬는데 그럴경우
                //ex) <int>ab cd<max> 라고 할때 pop보다 if(c[i]=='<')가 먼저 시작되므로
                //<int>ab <max>cd 이렇게 출력되는경우가 잇었는데
                //그 부분을 수정하고자 '<'를 만났을때 stack을 한번더 pop해줌

				while(c[i]!='>') {

					if(c[i]==' ' || c[i]=='\n') {

						str +=" ";

					}else {

						str += c[i];
					}
					i++;

				}
				str += '>'; //c[i]가 '>'게 나올때까지 그대로 표현하고 '>' 나올때 그대로 표현하는것이 멈추므로
                //'>'를 추가시켜줌

			}else {
				if(c[i]==' ' || c[i]=='\n') {

					while(!stack.isEmpty()) {
						str += stack.pop();
					}
					str +=" ";

				}else {

					stack.add(c[i]);
				}

			}



		}

		System.out.println(str);

	}

```

> 결과 : 시간초과..
>
> 시간초과가 이전에도 계속 발생했는데, 미리 예측할수 있는방법이 없을까?? 한번 알아보자..

#### 세번쨰 도전

나의생각 : 시간초과가 났으므로 BufferedReader을 사용하자. 응? 시간초과가 또 발생하네
그렇다면 BufferedWriter을 같이 사용해보자

```java
public static void main(String[] args) throws IOException {


		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

		String s = br.readLine()+"\n";

		Stack<Character> stack = new Stack<>();

		char[] c = s.toCharArray();


		for(int i=0; i<c.length; i++) {


			if(c[i]=='<') {

				while(!stack.isEmpty()) {
					bw.write(stack.pop());
				}

				while(c[i]!='>') {

					if(c[i]==' ' || c[i]=='\n') {

						bw.write(" ");

					}else {

						bw.write(c[i]);
					}
					i++;

				}
				bw.write('>');

			}else {
				if(c[i]==' ' || c[i]=='\n') {

					while(!stack.isEmpty()) {
						bw.write(stack.pop());
					}
					bw.write(" ");

				}else {

					stack.add(c[i]);
				}

			}

		}

		bw.flush();
	}

```

> 결과 : 맞았습니다

### 문제3. 오큰수

[오큰수 17298번](https://www.acmicpc.net/problem/17298)

> 1.크기가 N인 수열 A = A1, A2, …, AN이 있고, 각 원소 Ai의 오큰수 NGE(i)를 구하려고 한다.
>
> 2.Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 그러한
>
> 수가 없는 경우에 오큰수는 -1이다.
>
> 3.A = [3, 5, 2, 7] → NGE = [5, 7, 7, -1]
>
> A = [9, 5, 4, 8] → NGE = [-1, 8, 8, -1]

#### 첫번째 도전

나의생각 : for문을 2번써서 돌려서 기준보다 큰수는 기준을 큰수로 바꿔주고 , 그런수가 없다면 -1로 나오게끔 해줌

```java
	public static void main(String[] args){


		Scanner scan = new Scanner(System.in);

		int num =scan.nextInt();

		int[] array = new int[num];

		for(int i=0; i<array.length; i++) {

			array[i] = scan.nextInt();


		}
		System.out.println();

		for(int i=0; i<array.length-1; i++) {

			for(int j=i+1; j<array.length; j++) {


				if(array[i]<array[j]) {

					array[i] = array[j];
					break;

				}else {
					if(j==array.length-1) {
						array[i] = -1; // array[i]보다 큰 값이 없을때 -1로 넣어주기 위해서
					}
					continue;
				}

			}

		}
		array[num-1] = -1; //어차피 맨 마지막은 -1 이므로


		for(int i=0; i<array.length; i++) {
			System.out.print(array[i]+" ");
		}

	}


	}

```

> 결과 : 시간초과..
>
> 출력 결과는 예시와 같지만, 시간초과가 발생한다. 그 이유인즉슨 조건이 1000000이기 때문이고 나의 코드가 O(n^2)이므로
>
> 시간복잡도가 백만^2 이 나오므로 시간초과가 발생하는것이다.
