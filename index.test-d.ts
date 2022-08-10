import {expectType} from 'tsd';
import fileUrlToPath from './index.d.js';

expectType<string>(fileUrlToPath('file://C:/Users/'));
