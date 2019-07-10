<template>
  <div id="app">
    <!-- <div class="header"> -->
      <el-container>
        <el-header>
          <img class="img" src="./images/u1.png" alt="">
        </el-header>
        <el-container>
          <el-aside width="200px">
              <el-menu 
              >
                <el-menu-item index="1">
                  <span ><router-link to="/first" tag="div">首页案例管理</router-link></span>
                </el-menu-item>
                <el-menu-item index="2">
                  <span><router-link to="/echartsPhoto" tag="div">全部案列管理</router-link></span>
                </el-menu-item>

                <el-submenu index="3">
                    <template slot="title">图标</template>
                    <el-menu-item index="3-1">
                      <span><router-link to="/echartsPhoto" tag="div">柱状图</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                      <span><router-link to="/line" tag="div">柱状图</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="3-3">
                      <span><router-link to="/pie" tag="div">饼图</router-link></span>
                    </el-menu-item>
                </el-submenu>
              </el-menu>
          </el-aside>

          <el-main>
            <router-view></router-view>
            </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  background-color:rgba(242, 242, 242, 1);
}

.el-header{
    background-color: rgba(53, 62, 69, 1);
    line-height: 60px;
     
  }
  .el-aside{
    margin: 10px;
    height: 200px;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: white;
    /* overflow: hidden; */
  }
  .el-main{
    height: 100%;
    line-height: 60px;
    margin: 10px;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: white;
  
  }

.el-container{
  background-color: rgba(242, 242, 242, 1);
}

.img{
  width: 300px;
  height: 60px;
}


</style>
