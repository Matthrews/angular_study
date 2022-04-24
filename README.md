# angular_study
Angular12 Study

## Lesson 1: Introduction



![image-20220424195521118](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424195521118.png)

![image-20220424195724927](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424195724927.png)

![image-20220424195835653](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424195835653.png)

![image-20220424195918534](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424195918534.png)

![image-20220424200011147](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424200011147.png)

## Lesson 2: Setup and install

![image-20220424200146391](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424200146391.png)

## Lesson 3: Files and folder structure

![image-20220424201727104](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424201727104.png)

![image-20220424202921230](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424202921230.png)

Lesson 4: Hello World | Apply first change

![image-20220424203132755](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424203132755.png)****

## Lesson 5: What is interpolation

![image-20220424203729966](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424203729966.png)`xxx.component.ts`中定义的动态值可以在`xxx.component.html`中通过`{{}}`使用

variable, function, typeof, num+1. OK

new, ++   Error

Q: How to make dynamic class?

```html
<h1 class="{{cls}}">Dynamic class</h1>
<!-- OR -->
<h1 class={{cls}}>Dynamic class</h1>
```

## Lesson 6: Angular CLI & Important commands

![image-20220424205312371](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424205312371.png)

```bash
npm insstall -g @angular/cli@12.0.0
ng generate component login
# OR
ng g c login
ng generate module user
ng generate class Person
ng generate service api
```

## Lesson 7: Component

![image-20220424210752317](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424210752317.png)

Q: How can we use components?

```html
<app-login></app-login>
```

## Lesson 8: Component with Inline Style & Template

![image-20220424212100373](/Users/opsmind/Library/Application Support/typora-user-images/image-20220424212100373.png)

```bash
ng g c use-list --inline-style
ng g c cc-list --inline-template
ng g c vv-list --inline-template --inline-style
```

