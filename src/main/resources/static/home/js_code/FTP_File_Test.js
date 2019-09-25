var app = new Vue({
    el: '#app',
    data: {
        img_src: '',
        file_save_path: 'user_pic/2019/09/24',
        file_save_name: '(170903684)register_bg_pic.jpg',
        file_origin_name: 'register_bg_pic.jpg'
    },
    methods: {
        update_file: function (event) {
            var file = event.target.files[0];
            var param = new FormData();
            param.append('file', file);

            axios({
                method: 'post',
                url: '/api/ftp_file/upload_user_pic',
                headers: {'Content-Type':'multipart/form-data'},
                data: param
            }).then(function(response) {
                var data = response.data;
                if(data.code == "1") {
                    alert("上傳成功, 文件名:" + data.t);
                } else {
                    alert("上傳失敗," + data.msg + data.t);
                }
            });
        }
    },
    created: function() {
        var _self = this;
        _self.img_src = '/api/pic_show/load?file_save_path=' + _self.file_save_path
            +'&file_save_name=' + _self.file_save_name + '&file_origin_name=' + _self.file_origin_name;
    }
});