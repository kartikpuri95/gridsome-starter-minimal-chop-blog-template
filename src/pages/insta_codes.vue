
    <template>
  
    <layout >
      
        <InstagramPost class="col-md-3" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />

      
    </layout>

</template>
    
    <script>
import Vue from "vue";
import InstagramPost from "~/components/InstagramPost.vue";


export default {
  name: "App",

  components: {


    InstagramPost
  }
};
</script>
    
    <style>
</style>

<page-query >
query {
  posts: allPost(filter: { insta_publish: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>