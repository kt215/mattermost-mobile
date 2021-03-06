// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {combineReducers} from 'redux';
import {getLocales} from 'react-native-localize';

import {UserTypes} from '@mm-redux/action_types';

const defaultLocale = getLocales()[0].languageCode;

function locale(state = defaultLocale, action) {
    switch (action.type) {
    case UserTypes.RECEIVED_ME: {
        const data = action.data || action.payload;
        if (data?.locale) {
            return data.locale;
        }
    }
    }

    return state;
}

export default combineReducers({
    locale,
});
