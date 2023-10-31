//================= Network Configration =======================//
const URIS = {
    DEVELOPMENT: 'https://dummyapi.io/data/v1/',
    PRODUCTION: '',
    STAGING: '',
};

const HTTP_CODES = {
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    VALIDATION: 422,
    SERVER_ERROR: 500,
};

const URL_ENDPOINTS = {
    LOGIN: 'users',
    REGISTRATION: 'user/registration',
    POSTS:'post'
};

const STATIC_PAGE = {
    PRIVACY_POLICY: '',
    TERMS_CONDITION: ''
}

//================== REGEX =============================//
const REGEX = {
    NAME:/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    EMAIL:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    MOBILE:/^[6-9]\d{9}$/,
    PASSWORD:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
}

//================== Font Family =============================//
const FONT_FAMILIES = {
    MEDIUM: 'Inter-Medium',
    BOLD: 'Inter-Bold',
    DEMI: 'Inter-Thin',
    LIGHT: 'Inter-Light',
    REGULAR: 'Inter-Regular',
};

//================ MARGIN and PADDINGS ===================//
const METRICS = {
    MAR_5: 5,
    MAR_8: 8,
    MAR_9: 9,
    MAR_10: 10,
    MAR_11: 11,
    MAR_12: 12,
    MAR_13: 13,
    MAR_14: 14,
    MAR_15: 15,
    MAR_16: 16,
    MAR_17: 17,
    MAR_18: 18,
    MAR_19: 19,
    MAR_20: 20,
    MAR_21: 21,
    MAR_22: 22,
    MAR_23: 23,
    MAR_24: 24,
    MAR_25: 25,
    MAR_29: 29,
    MAR_30: 30,
    MAR_32: 32,
    MAR_35: 35,
    MAR_40: 40,
    MAR_45: 45,
    MAR_50: 50,
    MAR_55: 55,
    MAR_60: 60,
    MAR_66: 66,
    MAR_81: 81,
    MAR_104: 104,
    MAR_110: 110,
    MAR_120: 120,
    MAR_131: 131
};

//==================== Define Colors ========================//
const COLORS = {
    GRAY_BACKGROUND: 'rgba(190,190,190,0.5)',
    GRAY: 'gray',
    BORDER_COLOR: 'gray',
    WHITE: 'white',
    BLACK: 'black',
    RED: 'red',
    GREEN: 'green',
    GRAY_255_6: 'rgba(255,255,255,0.6)',
    GOLD: '#E6C65B',
};


export {
    HTTP_CODES,
    FONT_FAMILIES,
    URIS,
    COLORS,
    METRICS,
    URL_ENDPOINTS,
    STATIC_PAGE,
    REGEX
};