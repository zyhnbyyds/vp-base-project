# 工具函数 API

本文档介绍项目中所有可用的工具函数。所有函数可从 `@/utils` 导入。

## 字符串处理工具

### capitalize

将字符串的第一个字符大写。

```typescript
import { capitalize } from '@/utils'

capitalize('hello') // => 'Hello'
capitalize('world world') // => 'World world'
```

### camelize

将用连字符或下划线分隔的单词转换为驼峰式。

```typescript
import { camelize } from '@/utils'

camelize('hello-world') // => 'helloWorld'
camelize('foo_bar_baz') // => 'fooBarBaz'
```

### pascalize

与 camelize 相同，但首字母大写。

```typescript
import { pascalize } from '@/utils'

pascalize('hello-world') // => 'HelloWorld'
pascalize('foo_bar') // => 'FooBar'
```

### toKebabCase

将字符串转换为 kebab-case（用连字符分隔）。

```typescript
import { toKebabCase } from '@/utils'

toKebabCase('helloWorld') // => 'hello-world'
toKebabCase('FooBar') // => 'foo-bar'
```

### toSnakeCase

将字符串转换为 snake_case（用下划线分隔）。

```typescript
import { toSnakeCase } from '@/utils'

toSnakeCase('helloWorld') // => 'hello_world'
toSnakeCase('FooBar') // => 'foo_bar'
```

### truncate

截断字符串到指定长度，并添加省略号。

```typescript
import { truncate } from '@/utils'

truncate('Hello World', 8) // => 'Hello Wo...'
truncate('Hello World', 8, '...') // => 'Hello W...'
truncate('Hello', 10) // => 'Hello'
```

### repeat

重复字符串指定的次数。

```typescript
import { repeat } from '@/utils'

repeat('ab', 3) // => 'ababab'
repeat('-', 5) // => '-----'
```

## 数字处理工具

### toFixed

格式化数字到指定小数位数。

```typescript
import { toFixed } from '@/utils'

toFixed(0.625, 2) // => '0.63'（四舍五入）
toFixed(0.625, 1) // => '0.6'
toFixed(123.456, 0) // => '123'
```

### formatCurrency

格式化金额，支持自定义货币符号。

```typescript
import { formatCurrency } from '@/utils'

formatCurrency(1000) // => '¥1,000'
formatCurrency(1000.5) // => '¥1,000.5'
formatCurrency(1000, '$') // => '$1,000'
formatCurrency(123.456, '€') // => '€123.456'
```

### roundTo

四舍五入到指定的小数位数。

```typescript
import { roundTo } from '@/utils'

roundTo(123.456, 2) // => 123.46
roundTo(10.5, 0) // => 10 or 11（取决于实现）
```

### randomInt

生成指定范围内的随机整数。

```typescript
import { randomInt } from '@/utils'

randomInt(1, 10) // => 7（示例，1-10之间的整数）
randomInt(0, 100) // => 42
```

### percentage

计算百分比。

```typescript
import { percentage } from '@/utils'

percentage(50, 200) // => 25
percentage(20, 100) // => 20
```

## 数组处理工具

### chunk

将数组分割成指定大小的块。

```typescript
import { chunk } from '@/utils'

chunk([1, 2, 3, 4, 5], 2) // => [[1, 2], [3, 4], [5]]
chunk(['a', 'b', 'c', 'd'], 3) // => [['a', 'b', 'c'], ['d']]
```

### flatten

展平嵌套数组。

```typescript
import { flatten } from '@/utils'

flatten([1, [2, 3], [4, [5]]]) // => [1, 2, 3, 4, [5]]
flatten([1, [2, 3], [4, [5]]], true) // => [1, 2, 3, 4, 5]（深度展平）
```

### unique

获取数组中的唯一值。

```typescript
import { unique } from '@/utils'

unique([1, 2, 2, 3, 3, 3]) // => [1, 2, 3]
unique(['a', 'b', 'a', 'c']) // => ['a', 'b', 'c']
```

### compact

移除数组中的虚值（false、null、undefined、0、''）。

```typescript
import { compact } from '@/utils'

compact([0, 1, false, 2, '', 3]) // => [1, 2, 3]
compact([null, 'a', undefined, 'b']) // => ['a', 'b']
```

### findIndex

查找数组中第一个满足条件的元素的索引。

```typescript
import { findIndex } from '@/utils'

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
]
findIndex(users, (u) => u.id === 2) // => 1
```

## 对象处理工具

### isEmpty

检查对象是否为空。

```typescript
import { isEmpty } from '@/utils'

isEmpty({}) // => true
isEmpty({ a: 1 }) // => false
isEmpty(null) // => true（取决于实现）
```

### pick

从对象中选择指定的键。

```typescript
import { pick } from '@/utils'

const obj = { a: 1, b: 2, c: 3 }
pick(obj, ['a', 'c']) // => { a: 1, c: 3 }
```

### omit

从对象中排除指定的键。

```typescript
import { omit } from '@/utils'

const obj = { a: 1, b: 2, c: 3 }
omit(obj, ['a', 'b']) // => { c: 3 }
```

### merge

合并多个对象。

```typescript
import { merge } from '@/utils'

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }
merge(obj1, obj2) // => { a: 1, b: 3, c: 4 }
```

### cloneDeep

深度克隆对象。

```typescript
import { cloneDeep } from '@/utils'

const obj = { a: { b: { c: 1 } } }
const cloned = cloneDeep(obj)
cloned.a.b.c = 2
console.log(obj.a.b.c) // => 1（原对象未改变）
console.log(cloned.a.b.c) // => 2
```

## 验证工具

### isEmail

检查字符串是否为有效的电子邮件地址。

```typescript
import { isEmail } from '@/utils'

isEmail('user@example.com') // => true
isEmail('invalid.email') // => false
isEmail('user@domain') // => false
```

### isPhone

检查字符串是否为有效的中国手机号码。

```typescript
import { isPhone } from '@/utils'

isPhone('13800138000') // => true
isPhone('12345678901') // => false
isPhone('138001380') // => false（太短）
```

### isUrl

检查字符串是否为有效的 URL。

```typescript
import { isUrl } from '@/utils'

isUrl('https://example.com') // => true
isUrl('http://localhost:3000') // => true
isUrl('not a url') // => false
```

### isIdCard

检查字符串是否为有效的身份证号码。

```typescript
import { isIdCard } from '@/utils'

isIdCard('110101199003078795') // => true
isIdCard('12345678901234567890') // => false
```

### isCreditCard

检查字符串是否为有效的信用卡号码。

```typescript
import { isCreditCard } from '@/utils'

isCreditCard('4532015112830366') // => true
isCreditCard('1234567812345678') // => false
```

## 日期处理工具

### formatDate

格式化日期对象。

```typescript
import { formatDate } from '@/utils'

formatDate(new Date(), 'YYYY-MM-DD') // => '2024-01-15'
formatDate(new Date(), 'YYYY-MM-DD HH:mm') // => '2024-01-15 14:30'
```

### parseDate

解析日期字符串。

```typescript
import { parseDate } from '@/utils'

parseDate('2024-01-15') // => Date object
parseDate('2024-01-15 14:30:00') // => Date object
```

### getDateDiff

获取两个日期间的差值。

```typescript
import { getDateDiff } from '@/utils'

const date1 = new Date('2024-01-01')
const date2 = new Date('2024-01-15')
getDateDiff(date1, date2, 'day') // => 14
getDateDiff(date1, date2, 'hour') // => 336
```

### getMonthDays

获取指定月份的天数。

```typescript
import { getMonthDays } from '@/utils'

getMonthDays(2024, 2) // => 29（闰年二月）
getMonthDays(2024, 1) // => 31（一月）
```

## 存储工具

### setStorage

存储数据到本地存储。

```typescript
import { setStorage } from '@/utils'

setStorage('username', 'john')
setStorage('preferences', { theme: 'dark', lang: 'zh-CN' })
```

### getStorage

从本地存储获取数据。

```typescript
import { getStorage } from '@/utils'

getStorage('username') // => 'john'
getStorage('preferences') // => { theme: 'dark', lang: 'zh-CN' }
getStorage('nonexistent') // => null
```

### removeStorage

从本地存储删除数据。

```typescript
import { removeStorage } from '@/utils'

removeStorage('username')
```

### clearStorage

清空本地存储的所有数据。

```typescript
import { clearStorage } from '@/utils'

clearStorage()
```

## 其他工具

### generateId

生成唯一的 ID。

```typescript
import { generateId } from '@/utils'

generateId() // => 'abc123xyz789'（随机字符串）
```

### debounce

防抖函数，延迟执行函数直到停止调用。

```typescript
import { debounce } from '@/utils'

const search = debounce((query: string) => {
  console.log('Searching for:', query)
}, 300)

search('hello') // 未立即执行
search('hel') // 未立即执行
// 300ms 后执行最后一次调用
```

### throttle

节流函数，限制函数执行频率。

```typescript
import { throttle } from '@/utils'

const handleScroll = throttle(() => {
  console.log('Scrolling...')
}, 500)

window.addEventListener('scroll', handleScroll)
// 每 500ms 最多执行一次
```

## 使用示例

### 组合多个工具

```typescript
import { formatCurrency, formatDate, isEmail, capitalize, chunk } from '@/utils'

// 格式化产品列表
const products = [
  { id: 1, name: 'product 1', price: 129.99, date: new Date() },
  { id: 2, name: 'product 2', price: 89.5, date: new Date() },
]

products.forEach((p) => {
  console.log(capitalize(p.name)) // => 'Product 1'
  console.log(formatCurrency(p.price)) // => '¥129.99'
  console.log(formatDate(p.date, 'YYYY-MM-DD')) // => '2024-01-15'
})

// 分页
const items = Array.from({ length: 100 }, (_, i) => i + 1)
const pages = chunk(items, 10)
console.log(pages[0]) // => [1, 2, 3, ..., 10]
```
