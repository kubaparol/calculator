![](./images/screen.png)

# Calculator

## :mag: Overview

This project is a calculator. It allows you to perform basic calculations such as addition, subtraction, multiplication, division and multiplication.

It saves the results of recent actions, which can be deleted by clicking on the selected one.

See the live version of my [calculator]().

## :bulb: Technologies

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## :dizzy_face: Problems

The biggest challenge proved to be doing the calculations. Here I used the switch conditional instruction, which allowed to write the conditions clearly.

```
    switch(operator) {
        case '^': result = b ** a; break;
        case '/': result = b / a; break;
        case 'x': result = a * b; break;
        case '-': result = b - a; break;
        case '+': result = a + b; break;
    }
```