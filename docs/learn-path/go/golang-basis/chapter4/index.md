# 运算符

对于计算机来说，除了存储数据和展示数据以外，还有数据运算的功能，要不然怎么能称作计算机呢？这一章我们需要学习一下计算机中的各种运算符，本质上来说，运算符代表了某种运算规则，意味着你看到这个符号就应该知道它应该遵循什么样的运算规则，例如：”+“ 这个符号，那么你就应该知道 1+1 的结果应该是 2， 它遵循的是一种加法的运算规则，那么你应该知道学习的核心了，那就是搞清楚 每个符号对应的规则 应该是怎样的

## 算术运算符

算术运算符和我们数学中的运算规则是一致的

| 运算符 |        术语         |  例子   | 结果 |
| :----: | :-----------------: | :-----: | :--: |
|   +    |         加          |  20+30  |  50  |
|   -    |         减          |  20-30  | -10  |
|   \*   |         乘          |  20\*3  |  60  |
|   /    |         除          |  20/20  |  1   |
|   ++   | 自加,注意没有前自加 | a=0;a++ | a=1  |
|   --   | 自减,注意没有前自减 | a=1;a-- | a=0  |

代码示范：

```go
package main

import "fmt"

func main()  {
	a := 0
	a++
	fmt.Println(a) // 1
}

```

## 4.2.赋值运算符

| 运算符 |     说明     |                 例子                  |
| :----: | :----------: | :-----------------------------------: |
|   =    | 普通赋值运算 | a := 20, 定义变量 a，并且 20 赋值给它 |
|   +=   |  相加后赋值  |       c += a，等价于 c = c + a        |
|   -=   |  相减后赋值  |       c -= a，等价于 c = c - a        |
|  \*=   |  相乘后赋值  |       c _= a，等价于 c = c _ a        |
|   /=   |  相除后赋值  |       c /= a，等价于 c = c / a        |
|   %=   |  取余后赋值  |       c %= a，等价于 c = c % a        |

注意上面的规律

```go
package main

import "fmt"

func main()  {
	a := 5
	c := 2
	c *= a
	fmt.Println(c) // 10
}

```

## 关系运算符

| 运算符 |   术语   |  例子  | 结果 ｜ |
| :----: | :------: | :----: | :-----: |
|   ==   |   相等   | 3 == 3 |  true   |
|   !=   |   不等   | 3 != 3 |  false  |
|   <    |   小于   | 3 < 3  |  false  |
|   >    |   大于   | 3 > 3  |  false  |
|   <=   | 小于等于 | 3 <= 3 |  true   |
|   >=   | 大于等于 | 3 >= 3 |  true   |

代码演示

```go
package main

import "fmt"

func main()  {
	a := 3
	b := 3
	fmt.Printf("%v", a == b)
}

```

## 逻辑运算符

Go 语言中常用逻辑运算符

| 运算符 | 术语 |   例子   |                               结果                                |
| :----: | :--: | :------: | :---------------------------------------------------------------: |
|   !    |  非  |    !a    | 取反，如果 a 为 true，结果为 false，如果 a 为 true，结果为 false  |
|   &&   |  与  |  a && a  | 并且，a 和 b 都为 true，结果才为 true，有一个 false，结果为 false |
|  \|\|  |  或  | a \|\| b |        或者，a 或者 b 有一个为 true，结果为 true，有真为真        |

代码演示

```go
package main

import "fmt"

func main()  {
	a := 3
	b := 4
	c := 5
	d := 6
	fmt.Printf("%v", a == b || c < d)
}

```

## 运算符优先级

![20210529230455](https://nodeing-book.oss-cn-beijing.aliyuncs.com/nodeing-dashu-blog/20210529230455.png)

注意：括号"()"的优先级最高，当你分不清楚优先级的时候，你可以使用括号把优先级提升

例如：

```
a + b * c ==> 提升 a + b 优先级 ==> (a + b) * c
```
