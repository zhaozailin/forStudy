/**
 * Created by zhaozailin on 2017/3/6.
 */
import mock from './mock';

const trueApi = {
    // 我的企业相关api
    ENTERPRISE_HOME_QUERY: '/xqy-portal-web/manage/dzb/customer/getHomeCustomer'

};

const mockApi = {
    ENTERPRISE_HOME_QUERY: '/data/enterpriseMain.json'
};

let api = trueApi;
if (mock) {
    api = mockApi;
}else{
    api = trueApi
}

export default api;