# DDT-exam
### 1. HTML 
<img width="240" alt="截圖 2023-10-19 下午5 55 26" src="https://github.com/linda-pai/DDT-exam/assets/66729413/0f31a1b8-0ebf-42aa-a2a8-cac8eedffa85">

```
<head>
    <style>
        .container {
            font-size: 14px;
        }

        .container .header {
            font-size: 18px;
        }

        .container .shop-list {
            list-style: none;
            margin-left: -15px;
        }

        .container .shop-list li.item {
            color: green;
        }

        .container .shop-list .item {
            /* Explain why does this color not works, and how to fix make it work on 1st list */
            color: blue;
        }

        /* A: The specificity of css selector is 0,0,0,1, 
        /* which is lower than .container .shop-list li.item (0,0,1,1), 
        /* so it will be overrided */
        /* to fix it -> adding :first-child to .shop-list, so the specificity will be 0,0,2,1 */

        /* Write styling make every other line give background color to next one */
        .container .shop-list:first-child .item {
            color: blue;
        }

        /*  more readable 
        .container ul.shop-list .item {
            color: green;
        }

        .container ol.shop-list .item {
            color: blue;
        }
        */

        /* NOTE: inline style > ID > class and pseudo-classe > element and pseudo-element */
        /*                (0,    0,     0,                       0) */


        /* Write styling make every other line give background color to next one */
        .container .shop-list .item:nth-child(even) {
            background-color: #ccc;
        }
    </style>

</head>
<div class="container">
    <div class="header">5/8 外出確認表</div>
    <div class="content">
        <ol class="shop-list">
            <li class="item">麵包</li>
            <li class="item">短袖衣服</li>
            <li class="item">飲用水</li>
            <li class="item">帳篷</li>
        </ol>
        <ul class="shop-list">
            <li class="item">暈車藥</li>
            <li class="item">感冒藥</li>
            <li class="item">丹木斯</li>
            <li class="item">咳嗽糖漿</li>
        </ul>
    </div>
    <div class="footer">以上僅共參考</div>
</div>
```



### 2. Explain the problem with the following code, and how to fix it.
```
import React from "react";
import ReactDOM from "react-dom";

interface ICountState {
  count: number;
}

 class Count extends React.Component<{}, ICountState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
 
    // the problem is that the state is not updated immediately, but in batches (asynchronous), so the count will be 1, not 3
    // fix: use the prevState to get the previous state and update it (see below)
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // or in one line: this.setState((prevState) => ({ count: prevState.count + 3 }));
  }


  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById("root"));

export default Count;
```
### 3. What is different between framwork base website and traditional website?

#### Framework-based: 
 Uses pre-built tools and conventions, more faster development and built-in support for scalability.

#### Traditional:
 Built from scratch, offering more control, more flexibility and customization and scalable with more custom development.


### 4. 

#### Q1: Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
  ```
let arr = [];
arr = [
  {
    firstName: "xxx",
    lastName: "Pai",
    customerID: 10,
    note: "xxx",
    profession: "student",
  },
  {
    firstName: "xxx",
    lastName: "",
    customerID: 3,
    note: "xxx",
    profession: "student",
  },
];

export function arraySortByFullName(arr) {
  return arr.sort((a, b) => {
    if (
      a.firstName + a.lastName + a.customerID >
      b.firstName + b.lastName + b.customerID
    ) {
      return 1;
    } else {
      return -1;
    }
  });
}
```

## Q2:Please sort by ‘profession’ to follow the principle.(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
```
export function arraySortByType(arr) {
  let type = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5,
  };

  return arr.sort((a, b) => type[a.profession] - type[b.profession]);
}
```

