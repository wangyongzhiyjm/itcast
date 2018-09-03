<template>
    <el-container class="container">
      <!-- 头部 -->
        <el-header class="header">
             <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <img src="@/assets/logo.png" alt="">
                </div>
              </el-col>
              <el-col :span="19" class="middle">
                  <h2>电商后台管理系统</h2>
              </el-col>
              <el-col :span="1">
                  <a href="#"  class="loginout" @click.prevent="logout">退出</a>
              </el-col>
            </el-row>
        </el-header>
        <!-- 主体 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside  class="aside" width="200px" heigth="100%">
                    <!-- default-active:默认展开项
                        :unique-opened: 只允许同时展开一项
                        :router 开启路由模式
                        开启后, 设置el-menu-item的index值 为路由标识
                    -->
                <!-- 唯一一个显示 -->
                <el-menu default-active="2-1" class="menu" :unique-opened="true" :router="true" >
                <!-- 用户管理-->
                  <el-submenu index="1">
                      <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>用戶管理</span>
                          
                      </template>

  

                      <el-menu-item index="/user">
                        <i class="el-icon-location"></i>用戶列表
                      </el-menu-item>
                      
                  </el-submenu>

                  
        
                <!-- 权限管理-->
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>權限管理</span>
                    </template>
                            <el-menu-item index="/roles">
                            <i class="el-icon-menu"></i>
                            角色列表
                    </el-menu-item>
                      <el-menu-item index="/rights">
                        <i class="el-icon-view"></i>
                        權限列表
                      </el-menu-item>
                </el-submenu>
                <!-- 商品管理-->
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>商品管理</span>
                  </template>

                    <el-menu-item index="3-1">
                          <i class="el-icon-menu"></i>
                          商品列表
                    </el-menu-item>

                    <el-menu-item index="3-1">
                      <i class="el-icon-view"></i>
                      分类参数
                    </el-menu-item>

                    <el-menu-item index="3-1">
                        <i class="el-icon-view"></i>
                        商品分类
                    </el-menu-item>

                  </el-submenu>
                  <!--订单管理-->
                  <el-submenu index="4">
                      <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>订单管理</span>
                      </template>
                    <el-menu-item index="4-1">
                        <i class="el-icon-location"></i>
                      订单列表
                    </el-menu-item>
                  </el-submenu>
                  <!--数据统计-->
                    <el-submenu index="5">
                      <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>数据统计</span>
                      </template>
                    <el-menu-item index="5-1">
                        <i class="el-icon-location"></i>
                      数据报表
                    </el-menu-item>
                  </el-submenu>

                  </el-menu>
                </el-aside>
            <!-- 内容区域 -->
            <el-main class="main">Main</el-main>
        </el-container>
  </el-container>
</template>

<script>
export default {
  // 判断是否打开
  beforeCreate() {
    const token =sessionStorage.getItem('token');
    // 判断token的值
    if (!token) {
      // 提示登陆
      this.$message.warning('请先登陆!')
      // 跳转登陆页面
      this.$router.push('/login')
    }
  },
  methods:{
    logout(){
      sessionStorage.clear();
      // 提示退出
      this.$message.warning('退出成功!!')
      // 跳转登陆页面
      this.$router.push('/login')
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}

.header {
  background-color: #b3c0d1;
}

.aside {
  background-color: #ccc;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
.header .middle{
    line-height: 60px;
    color: #fff;
    text-align: center;
  }
  .header .loginout{
    line-height: 60px;
    text-decoration: none;
    color: #000;
    font-weight: 700;
  }
</style>
