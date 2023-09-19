function google() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href=__uv$config.prefix + __uv$config.encodeUrl('https://google.com');
    });

}