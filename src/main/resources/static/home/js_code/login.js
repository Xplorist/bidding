var app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        encodedPSW: '',
    },
    methods: {
        goto_register: function () {
            window.location.href = "register.html";
        },
        login: function () {
            var _self = this;
            _self.encodedPSW = md5(_self.password);

            axios({
                method: 'post',
                url: '/user/login',
                data: {
                    username: _self.username,
                    password: _self.encodedPSW
                }
            }).then(function(response) {
                var result = response.data;
                if(result.code == "1") {
                    alert("登錄成功:" + result.msg);
                    document.cookie = result.t;
                    //window.location.href = "recv/index.html";
                } else {
                    alert("保存失敗:" + result.msg);
                }
            });
        },
        test_token: function () {
            var _self = this;
            var token = document.cookie.split(";")[0];

            axios({
                method: 'get',
                url: '/user/getUser?username=11',
                headers: {
                    'token': token
                },
                data: ''
            }).then(function(response) {
                var result = response.data;
                if(result.code == "1") {
                    alert("登錄成功:" + result.msg);
                    //window.location.href = "recv/index.html";
                } else {
                    alert("保存失敗:" + result.msg);
                }
            });
        }
    },
    created: function() {

    }
});