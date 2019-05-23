import ngVueComponentsModule from '@/ngVueBridgeCode/ngVueComponentsModule';
import { GeometryUtils } from '@/js/ol/geometryUtils.js';
import { Translation } from '@/js/i18n/translation.js';
import config from '@/config.js';

export let gaGeomUtils;
ngVueComponentsModule.service('gaGeomUtils', GeometryUtils);
ngVueComponentsModule.run($injector => {
    gaGeomUtils = $injector.get('gaGeomUtils');
})


class gaLangBridge extends Translation {
    constructor() { super(); }
    get() {
        return this.getLang();
    }
    getNoRm() {
        return this.getLang();
    }
    set(newLang) {
        return this.setLang(newLang);
    }
    use() {
        return this.getLang();
    }
    instant(key) {
        return this.t(key);
    }
    setLocalesBaseUrl(url) {
        config.LOCALES_BASE_URL = url;
    }
}

export let gaLang;
ngVueComponentsModule.service('gaLang', gaLangBridge);
ngVueComponentsModule.run($injector => {
    gaLang = $injector.get('gaLang');
})

export let $translate;
ngVueComponentsModule.service('$translate', gaLangBridge);
ngVueComponentsModule.run($injector => {
    $translate = $injector.get('$translate');
})