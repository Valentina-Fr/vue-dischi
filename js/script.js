console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums:[],
    musicGenre:"All"
  },
  computed: {
    yearSort(){
      return this.albums.sort((a, b) => {return a.year - b.year});
    },
    selectGenre(){
      const genres = [];
      this.yearSort.forEach(album => { 
        if(!genres.includes(album.genre)){
          genres.push(album.genre)
        }
      });
      return genres;
    }
  },
  methods: {
    showGenre(album){
      if(this.musicGenre === "All" || this.musicGenre === album.genre){
        return true;
      }
    }
  },
  created(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
      this.albums = res.data.response;
    })
  }
});
