import resumeDataJsonEnglish from './../data/res_primaryLanguage.json' assert { type: 'json' };
import resumeDataJsonVietnamese from './../data/res_secondaryLanguage.json' assert { type: 'json' };
import USFlagIcon from '../components/Icons/USFlag';
import VietnameseFlagIcon from '../components/Icons/VietnameseFlag';

export const languageMap = {
    EN: {
        json: resumeDataJsonEnglish,
        id: 'EN',
        dataIcon: USFlagIcon
    },
    VN: {
        json: resumeDataJsonVietnamese,
        id: 'VN',
        dataIcon: VietnameseFlagIcon
    }
}

export const initialState = languageMap['EN'];

export function reducer(state, action) {
    const { type, id } = action;
    switch (type) {
        case 'LANGUAGE_UPDATE': {
            const newLanguage = languageMap[id];
            return {
                ...newLanguage
            };
        }
        default: return state;
    }
}