<template>
  <div>
    <!-- <div class="post-preview">
      <g-link :to="post.path">
        <h4 v-html="post.title" class="post-title" />
  
        <h5 v-html="post.description" class="post-subtitle" />
      

      <span>
        <p></p>
      </span>

      <PostTags :post="post" />
      <PostMeta :post="post" />
  
    </div> -->
    
<div class="card" style="">
  <div v-if="post.cover_image">
  <g-image class="card-img-top" :src="post.cover_image.src"  alt="Card image cap"></g-image>
  </div>
  <div class="card-body pt-0">
    <h5 class="card-title mt-1">{{post.title}}</h5>
    <p class="card-text">{{post.description}}</p>
    
     <PostTags :post="post" />
  </div>
   <div class="card-footer">
    <g-link :to="post.path">  <button href="#" class="btn btn-primary btn-sm mr-1">Code</button></g-link>
    <!-- <button href="#" class="btn btn-info btn-sm ">Instagram</button> -->
    </div>
</div>
    
  
  </div>
 
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ["post"]
};
</script>


