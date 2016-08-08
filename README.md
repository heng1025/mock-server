# mock-server 简介及使用

# 第一部分 (根据规则生成mock data)

## mock.js (国内的)
	- mock.js是阿里巴巴开源的工具库，基于此的还有RAP
  - 官方地址： http://mockjs.com/
  - 使用方法
    在页面中引入mock.js  
  `<script type="text/javascript" src="mock.js"></script>`

```<script>
  var data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
      }]
    })
    // 输出结果
  console.log(JSON.stringify(data, null, 4))
</script>
```

## faker.js (国外的)
  - 官方地址： https://github.com/marak/Faker.js/
	- 使用方法：
	　在页面中引入faker.js	
          `<script src="faker.js" type="text/javascript"></script>`

```
<script>
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomCard = faker.helpers.createCard();
  console.log(randomEmail);
</script>
```

#第二部分 mock http请求

## imitator 
  - 地址： https://github.com/hanan198501/imitator
	- 百度员工开源和puer功能类似
	- 功能
	  + 转发
	  + mock http请求
	
## puer 
	 - 地址： http://leeluolee.github.io/2014/10/24/use-puer-helpus-developer-frontend/
   - 推荐使用该工具
   - 优势 
     + mock http/https请求
     + 代理
     + 内置weinre,便于移动端调试


## RAP
  - 地址： http://rap.taobao.org/org/index.do
	- 阿里巴巴开源
	- 支持在线和本地(本地版本需要自己独立安装)



  
