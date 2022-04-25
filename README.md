# angular_study
Angular12 Study

## Lesson 1: Introduction



![image-20220424195521118](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424195521118.png)

![image-20220424195724927](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424195724927.png)

![image-20220424195835653](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424195835653.png)

![image-20220424195918534](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424195918534.png)

![image-20220424200011147](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424200011147.png)

## Lesson 2: Setup and install

![image-20220424200146391](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424200146391.png)

## Lesson 3: Files and folder structure

![image-20220424201727104](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424201727104.png)

![image-20220424202921230](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424202921230.png)

Lesson 4: Hello World | Apply first change

![image-20220424203132755](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424203132755.png)****

## Lesson 5: What is interpolation

![image-20220424203729966](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424203729966.png)`xxx.component.ts`中定义的动态值可以在`xxx.component.html`中通过`{{}}`使用

variable, function, typeof, num+1. OK

new, ++   Error

Q: How to make dynamic class?

```html
<h1 class="{{cls}}">Dynamic class</h1>
<!-- OR -->
<h1 class={{cls}}>Dynamic class</h1>
```

## Lesson 6: Angular CLI & Important commands

![image-20220424205312371](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424205312371.png)

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

![image-20220424210752317](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424210752317.png)

Q: How can we use components?

```html
<app-login></app-login>
```

## Lesson 8: Component with Inline Style & Template

![image-20220424212100373](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424212100373.png)

```bash
ng g c use-list --inline-style
ng g c cc-list --inline-template
ng g c vv-list --inline-template --inline-style
```

## Lesson 9: What is module?

![image-20220424213932843](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424213932843.png)

## Lesson 10: How to make and call function

![image-20220424215231108](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424215231108.png)

```html
<button (click)="getName('cck')">Click me</button>
```

## Lesson 10: Important Events

![image-20220424220051592](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424220051592.png)

## Lesson 11: Get Input field Value

![image-20220424221351921](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424221351921.png)

## Lesson 12: Make Counter

![image-20220424222436171](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424222436171.png)

## Lesson 13: Basic style

![image-20220424223454094](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424223454094.png)

优先级：Inline Style > Internal Style > Global Style > Component Style


## Lesson 14: Property Binding

![image-20220424224514726](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424224514726.png)

Conclusion: Property Binding is a better option s compreg to Interpolation


## Lesson 15: If/Else Condition

![image-20220424230017201](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220424230017201.png)

![image-20220425084622390](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220425084622390.png)

```html
<!-- <p *ngIf="show else ccb">Matthew</p> -->
<p *ngIf="show; then ccf else ccb">Matthew</p>
<ng-template #ccf>
  <p>Matthew</p>
</ng-template>
<ng-template #ccb>
  <p>Jansen</p>
</ng-template>
```

## Lesson 17: Switch Case

![image-20220425132044633](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220425132044633.png)

```html
<div [ngSwitch]="color">
  <h1 *ngSwitchCase="'red'" style="color: red;">Red Color</h1>
  <h1 *ngSwitchCase="'green'" style="color: green;">Green Color</h1>
  <h1 *ngSwitchCase="'gray'" style="color: gray;">Gray Color</h1>
  <h1 *ngSwitchDefault>Unknown Color</h1>
</div>
```

## Lesson 18: Loop in Angular

![image-20220425234531887](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220425234531887.png)

```html
<p *ngFor="let user of users">Name is {{user}}</p>
```

![image-20220425235119213](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220425235119213.png)

```html
<ul *ngFor="let listItem of list">
  <li>Name is {{listItem.name}}</li>
  <li>Phone is {{listItem.phone}}</li>
  <li>Email is {{listItem.email}}</li>

  <ul *ngFor="let account of listItem.accounts">
    <li>Account is {{account}}</li>
  </ul>
</ul>
```

## Lesson 20: Style Binding

![image-20220426000249378](https://cdn.jsdelivr.net/gh/Matthrews/zm_cdn/images/image-20220426000249378.png)

```html
<!-- <h1 style="color: green;">{{ title }}</h1> -->
<h1 [style.color]="'red'">{{ title }}</h1>
<h1 [style.color]="color">{{ title }}</h1>
<button (click)="updateColor()">Update Color</button>
```