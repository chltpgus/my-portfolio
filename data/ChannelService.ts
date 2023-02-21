class ChannelService {
    constructor() {
        this.loadScript();
    }

    loadScript() {
        if (typeof window !== 'undefined') {
            var w: any = window;
            const windowCopy: any = window;
            if (w.ChannelIO) {
                return (window.console.error || window.console.log || function () {})('ChannelIO script included twice.');
            }
            var ch: any = function () {
                ch.c(arguments);
            };
            ch.q = [];
            ch.c = function (args: any) {
                ch.q.push(args);
            };
            w.ChannelIO = ch;
            const l = () => {
                if (w.ChannelIOInitialized) {
                    return;
                }
                w.ChannelIOInitialized = true;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                s.charset = 'UTF-8';
                var x = document.getElementsByTagName('script')[0];
                x?.parentNode?.insertBefore(s, x);
            };
            if (document.readyState === 'complete') {
                l();
            } else if (windowCopy.attachEvent) {
                windowCopy.attachEvent('onload', l);
            } else {
                windowCopy.addEventListener('DOMContentLoaded', l, false);
                windowCopy.addEventListener('load', l, false);
            }
        }
    }

    boot(settings: any) {
        if (typeof window !== 'undefined') {
            const w: any = window;
            w.ChannelIO('boot', settings);
        }
    }

    shutdown() {
        if (typeof window !== 'undefined') {
            const w: any = window;
            w.ChannelIO('shutdown');
        }
    }
}

const Channel = new ChannelService();

export default Channel;
