let app = new Vue (
    {
        el: "#root",
        data: {
            albums: [],
        },
        methods: {

        },
        mounted: function () {
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then( (result) => {
                    this.albums = result.data.response;
                    console.log(this.albums);
                } );
        }
    }
);
