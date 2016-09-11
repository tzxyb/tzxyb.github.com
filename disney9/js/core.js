/**
 * User: jy.feng
 * Date: 2014/12/8
 * Time: 16:46
 */
var ucar = {
    version: "1.0",
    author: "m.10101111.com",
    website: "/"
};
ucar.uitls = {
    getUrlParam : function(key) {
        var url = window.location.search;
        url = url.split("?")[1];
        if (!url) {
            return null;
        }
        var value = null;
        var params = url.split("&");
        $.each(params,
            function(i, param) {
                var kv = param.split("=");
                if (kv[0] == key) {
                    value = decodeURIComponent(kv[1]);
                    return false;
                }
            });
        return value;
    },
    show: function(msg, callback) {
        //window.scroll(0, 0);
        if (!$("#dialog-mask").length) {
            var dialog = document.createElement("div");
            dialog.id = "dialog-mask";
            dialog.className = "mask";
            $(dialog).html("<div class='dialog'><div class='dialog-content-full'><p>" + msg + "</p><span class='btn-dialog-close'></span></div></div>");
            document.body.appendChild(dialog);
            $("#dialog-close").click(function() {
                $("#dialog-mask").remove();
                if(callback) {
                    callback();
                }
            });
            $("#dialog-mask").click(function() {
                $("#dialog-mask").remove();
                if(callback) {
                    callback();
                }
            });
            $("#dialog-mask").fadeIn("normal");
        }
    },
    loading: {
        show: function() {
            var html = "<div id='loading-mask' class='mask'><div class='loading-full'><img src='http://img01.10101111cdn.com/mkt/bak/2015/wap/download/app/loading_new.gif' /><div></div></div></div>";
            if ($("#loading-mask").length) {
                $("#loading-mask").show();
            } else {
                $(html).appendTo(document.body);
            }
        },
        hide: function() {
            $("#loading-mask").hide();
        }
    },
    isMobile : function(val) {
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        return (myreg.test(val));
    },
    canStorage: function() {
        return !! window.localStorage ? true: false;
    },
    setStorage: function(key, value) {
        try {
            if (ucar.uitls.canStorage()) {
                localStorage.removeItem(key);
                if (typeof value !== "string") {
                    value = JSON.stringify(value);
                }
                localStorage.setItem(key, value);
            }
        } catch(e) {}
    },
    getStorage: function(key) {
        if (ucar.uitls.canStorage()) {
            var value = localStorage.getItem(key);
            if (value && typeof value === "string" && value === "undefined") {
                value = null;
            }
            try {
                return value ? JSON.parse(value) : null;
            } catch(err) {
                return value;
            }
        }
    },
    removeStorage: function(key) {
        if (ucar.uitls.canStorage()) {
            localStorage.removeItem(key);
        }
    },
    setSession: function(key, value) {
        if (window.sessionStorage) {
            try {
                sessionStorage.removeItem(key);
                if (typeof value !== "string") {
                    value = JSON.stringify(value);
                }
                sessionStorage.setItem(key, value);
            } catch(e) {}
        }
    },
    getSession: function(key) {
        if (window.sessionStorage) {
            try {
                var value = sessionStorage.getItem(key);
                if (value && typeof value === "string" && value === "undefined") {
                    value = null;
                }
                try {
                    return value ? JSON.parse(value) : null;
                } catch(err) {
                    return value;
                }
            } catch(e) {}
        }
    },
    removeSession: function(key) {
        sessionStorage.removeItem(key);
    }
};

$(document).on('ajaxStart',function() {
    ucar.uitls.loading.show();
});
$(document).on('ajaxStop',function() {
    ucar.uitls.loading.hide();
});