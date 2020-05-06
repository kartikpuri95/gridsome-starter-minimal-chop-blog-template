<template>
  <div id="app">
    <!-- Navigation -->
    <!-- Navigation for Desktop -->
    <div class="d-none d-sm-block d-xs-block">
      <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
        <div class="container">
          <!-- <a class="navbar-brand" href="index.html">Start Bootstrap</a> -->
          <g-link style="text-decoration:none" to="/">
            <span style="font-size:  38px;font-weight: bolder;">CHOP</span>
            <br />
            <span
              id="maskinglogo"
              style="
           position: relative;
           top: -18px;
           right: 4px;
           font-size: 18px;
           padding-top: 5px;
           padding-left: 10px;
           padding-right: 8px;
       "
            >{CODING}</span>
          </g-link>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <g-link class="nav-link" to="/" href="index.html">Home</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/instaCodes" href="index.html">Instacodes</g-link>
              </li>
            </ul>
          </div>
        </div>
        <ToggleTheme />
      </nav>
    </div>
    <!-- Navigation for mobile -->
    <div class="d-lg-none d-md-none">
      <nav>
        <div class="container">
          <div class="row">
            <g-link style="text-decoration:none" to="/">
              <span style="font-size:  38px;font-weight: bolder;">CHOP</span>
              <br />
              <span
                id="maskinglogo"
                style="position: relative;top: -18px;right: 4px;font-size: 18px;padding-top: 5px;padding-left: 10px;padding-right: 8px;"
              >{CODING}</span>
            </g-link>

            <ul style="flex-direction:row!important" class="navbar-nav mt-4">
             <li class="nav-item">
                <g-link class="nav-link mr-2" to="/" >Home</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/instaCodes/" >Instacodes</g-link>
              </li>
            </ul>
                   <ToggleTheme style="position: absolute;left: 90%;" ></ToggleTheme>
          </div>
    
        </div>
        
      </nav>
    </div>
    <!-- Page Header -->
    <header class="masthead">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading d-none d-sm-block d-xs-block">
              <h1>Chop Coding</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <!-- main -->
    <div class="container-fluid">

      <div class="row">
        <div v-if="$context.pagename!='instacode'" class="col-lg-8 col-md-10 mx-auto">
          <slot />
        </div>
      </div>
      <div class="row" v-if="$context.pagename=='instacode' ">
        <slot />
      </div>
    </div>
    <!-- footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
              <!-- <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              </li>-->
              <li class="list-inline-item">
                <a target="_blank" href="http://www.instagram.com/chopcoding">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <!-- <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              </li>-->
            </ul>
            <p class="copyright text-muted">Copyright &copy; Chop Coding 2019</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
};
</script>

<style lang="scss">
img {
  max-width: 100% !important;
}
p {
  font-size: 20px !important;
}
blockquote {
  border-left: 4px solid;
  padding-left: 8px;
  color: black;
}
</style>
