import { createAction } from '@reduxjs/toolkit'

const showAction = createAction('visibilityAction/show');

const hideAction = createAction('visibilityAction/hide');

export {showAction, hideAction};