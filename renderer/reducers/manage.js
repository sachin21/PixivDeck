// @flow
import {union} from 'lodash';
import type {Manage, Action} from '../types';

const initManageState: Manage = {
	isLogin: false,
	isImageView: false,
	isImgLoaded: false,
	isMangaView: false,
	isModal: false,
	isDropdown: false,
	currentWorkId: null,
	filter: {
		tags: []
	}
};

export default function (state: Manage = initManageState, action: Action): Manage {
	switch (action.type) {
		case 'SUCCESS_LOGINED':
			return {...state, isLogin: true};
		case 'LOGOUT':
			return {...state, isLogin: false};
		case 'OPEN_IMAGE_VIEW':
			return {...state, isImageView: Boolean(state.currentWorkId)};
		case 'CLOSE_IMAGE_VIEW':
			return {...state, isImageView: false};
		case 'OPEN_MANGA_PREVIEW':
			return {...state, isMangaView: Boolean(state.currentWorkId)};
		case 'CLOSE_MANGA_PREVIEW':
			return {...state, isMangaView: false};
		case 'OPEN_MODAL':
			return {...state, isModal: true};
		case 'CLOSE_MODAL':
			return {...state, isModal: false};
		case 'OPEN_DROPDOWN':
			return {...state, isDropdown: true};
		case 'CLOSE_DROPDOWN':
			return {...state, isDropdown: false};
		case 'TOGGLE_DROPDOWN':
			return {...state, isDropdown: !state.isDropdown};
		case 'START_IMG_LOADING':
			return {...state, isImgLoaded: false};
		case 'SET_IMG_LOADED':
			return {...state, isImgLoaded: true};
		case 'SELECT_WORK':
			return {...state, currentWorkId: action.id};
		case 'ADD_TAG_FILTER':
			return {...state, filter: {tags: union([...state.filter.tags, action.tag])}};
		default:
			return state;
	}
}
