<template>
  <div>
    <div class="post-preview">
      <g-link class="hover_me" :to="post.path">
        <h4 v-html="post.title" class="post-title" />

        <h5 v-html="post.description" class="post-subtitle" />
      </g-link>

      <span>
        <p></p>
      </span>

      <PostTags :post="post" />
      <PostMeta :post="post" />
      <!-- <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
      on September 24, 2019</p>-->
    </div>
    <hr />
  </div>
  <!-- <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card__header">
      <g-image alt="Cover image" v-if="post.cover_image" class="post-card__image" :src="post.cover_image" />
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="post.title" />
      <p class="post-card__description" v-html="post.description" />

      <PostMeta class="post-card__meta" :post="post" />
      <PostTags class="post-card__tags" :post="post" />

      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>-->
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
<style >

</style>

