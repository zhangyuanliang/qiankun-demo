# qiankun-demo介绍
微前端demo
- main 主应用，微前端基座
- sub-vue 子应用，技术栈vue
- sub-purehtml 子应用，纯html项目
- sub-react 子应用，技术栈react

# 分支
- main分支 应用之间通讯采用 qiankun API initGlobalState/onGlobalStateChange
- dev分支 应用之间通讯基于 props 传参的模式
## Project setup
```
yarn
yarn start
```
Visit http://localhost:8000.

### Customize configuration
See [Configuration Reference](https://qiankun.umijs.org/).
