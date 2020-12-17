let app = new Vue (
    {
        el: "#root",
        data: {
            albums: [],
            genreSelected: "All",
        },
        methods: {
            getGenreFromArray: function () {
                let newArray = [];
                this.albums.forEach( (element) => {
                    if (!newArray.includes(element.genre)) {
                        newArray.push(element.genre);
                    }
                } );
                return newArray
            },
            filterAlbumsForGenre: function () {
                let newArray = [];
                this.albums.forEach( (element) => {
                    if (element.genre == this.genreSelected) {
                        newArray.push(element);
                    }
                } );
                return newArray;
            }
        },
        mounted: function () {
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then( (result) => {
                    this.albums = result.data.response;
                } );
        }
    }
);
