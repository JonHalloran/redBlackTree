/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binaryTree__ = __webpack_require__(1);


let tree = new __WEBPACK_IMPORTED_MODULE_0__binaryTree__["a" /* default */]();
tree.addVertex(50);
tree.addVertex(50);
tree.addVertex(50);
let height = 480;
let width = 640;
let data = [32];
let svg = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

let makeData = () => {
  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cy", 60)
    .attr("cx", function (d, i) {
      return i * 100 + 30;
    })
    .attr("r", function (d) {
      return Math.sqrt(d);
    });
};

let button = document.getElementsByClassName('data')[0];
button.addEventListener("click", () => {
  let value = Math.floor(Math.random(100) * 100);
  console.log("newValue", value);
  tree.addVertex(value);
  // data.push(Math.floor(Math.random(100) * 100)); console.log(data); makeData();

});

console.log('test');

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vertex__ = __webpack_require__(2);


class BinaryTree {
  constructor() {
    this.root = undefined;
    this.left = undefined;
    this.right = undefined;
  }

  addVertex(value) {
    if (!this.root) {
      this.root = new __WEBPACK_IMPORTED_MODULE_0__vertex__["a" /* default */](undefined, value);
      this
        .root
        .checkRed();
    } else {
      this
        .root
        .addVertex(value);
    }
    this.printNodes();
  }

  printNodes(node = this.root) {
    console.log(node);
    if (node.left) {
      this.printNodes(node.left);
    }
    if (node.right) {
      this.printNodes(node.right);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (BinaryTree);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vertex {
  constructor(parent, value) {
    console.log("parent", parent);
    this.parent = parent;
    this.value = value;
    this.color = "RED";
    this.left = undefined;
    this.right = undefined;
    if (this.parent) 
      console.log("preRed", this.parent.left);
    }
  
  get isRoot() {
    return this.parent === undefined;
  }

  get isRightChild() {
    return this.parent
      ? this.parent.value < this.value
      : false;
  }

  get grandparent() {
    return this.parent
      ? this.parent.parent
      : undefined;
  }

  get uncle() {
    return this.grandparent
      ? (this.parent.isRightChild
        ? this.grandparent.left
        : this.grandparent.right)
      : undefined;
  }

  get isLeaf() {
    return this.right && this.left;
  }

  leftRotate() {
    console.log("leftRotate", this);
    if (this.parent) {
      this.isRightChild
        ? this.parent.right = this.right
        : this.parent.left = this.right;
    }
    this.right.parent = this.parent;
    this.parent = this.right;
    this.right = this.parent.left;
    this.parent.left = this;
    if (this.right) 
      this.right.parent = this;

    }
  
  rightRotate() {
    console.log("rightRotate", this);
    if (this.parent) {
      this.isRightChild
        ? this.parent.right = this.left
        : this.parent.left = this.left;
    }
    this.left.parent = this.parent;
    this.parent = this.left;
    this.left = this.parent.right;
    this.parent.right = this;
    if (this.left) 
      this.left.parent = this;

    }
  
  addVertex(value) {
    if (value < this.value) {
      if (this.left) {
        this
          .left
          .addVertex(value);
      } else {
        this.left = new Vertex(this, value);
        this
          .left
          .checkRed();
      }

    } else {
      if (this.right) {
        this
          .right
          .addVertex(value);
      } else {
        this.right = new Vertex(this, value);
        this
          .right
          .checkRed();
      }
    }
  }

  checkRed() {
    console.log("checkRed", this.isRoot);
    if (this.isRoot) {
      // Case 0
      this.color = "BLACK";
    } else if (this.parent.color === "RED") {
      console.log(this.uncle, "uncle");
      if (this.uncle && this.uncle.color === "RED") {
        this.caseOne();
      } else {
        const rightLine = this.isRightChild && this.parent.isRightChild;
        const leftLine = !this.isRightChild && !this.parent.isRightChild;
        console.log(leftLine, rightLine);
        if (rightLine || leftLine) {
          this.caseThree();
        } else {
          this.caseTwo();
        }
      }
    }
  }

  caseOne() {
    console.log("CaseOne");
    // recolor only
    this.grandparent.color = "RED";
    this.uncle.color = "BLACK";
    console.log("uncle ", this.uncle);
    this.parent.color = "BLACK";
    this
      .grandparent
      .checkRed();
  }

  caseTwo() {
    console.log("caseTwo");
    if (this.isRightChild) {
      this
        .parent
        .leftRotate();
      this
        .left
        .checkRed();
    } else {
      this
        .parent
        .rightRotate();
      this
        .right
        .checkRed();
    }
  }

  caseThree() {
    console.log("caseThree");
    if (this.parent.isRightChild) {
      this
        .grandparent
        .leftRotate();
    } else {
      this
        .grandparent
        .rightRotate();
    }

    this.parent.color = "BLACK";
    this.parent.left.color = "RED";
    this.parent.right.color = "RED";
  }

}
/* harmony default export */ __webpack_exports__["a"] = (Vertex);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map