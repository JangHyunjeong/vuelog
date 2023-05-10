import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import List from "./components/List.vue";
import Detail from "./components/Detail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },

  /*
  1. 여기 params 이름은 자유롭게 작명가능
  /detail/:apple -> $route.params.apple 로 가져오면 됨
 
  2. 파리미터 안에 정규식 입력도 가능
  /detail/:id(\\d+) : 숫자만 찾아주는 정규식

  3. 반복하기
  /detail/:id*
  = /detail/:id/:id/:id

  4. 이용해서 404도 제작 가능
  /:아무거나
  /:anything(.*) : 모든문자라는 정규식 문법

  5. router 위에있는게 우선순위가 높다

  .. vue-router 공식홈페이지에서 확인 가능
  */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
