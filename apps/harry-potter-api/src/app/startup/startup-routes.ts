import * as express from 'express';
import { UrlConstants } from '@tekkon/api-services';
import { Home } from '../routes';
const { BASE_CONSTANTS } = UrlConstants;
export default function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(BASE_CONSTANTS.BASE_URL + BASE_CONSTANTS.BASE_URL, Home);
}
