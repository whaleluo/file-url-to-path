import test from 'ava';
import fileURLToPath from './index.js';
test('converts file url to file path', t => {
	if (process.platform === 'win32') {
		t.is(fileURLToPath('file:///C:/path/'), 'C:\\path\\');
		t.is(fileURLToPath('file://C:/path/'), 'C:\\path\\');
		t.is(fileURLToPath('file://C:\\path\\'), 'C:\\path\\');
		t.is(fileURLToPath('file:///C:\\path\\'), 'C:\\path\\');
	} else {
		t.is(fileURLToPath('file:///Users/dev/'), 'file:///Users/dev/');
	}
});

test('encoding and decoding of special characters', t => {
	t.is(fileURLToPath('file:///D:/你好.txt'), 'D:\\你好.txt');
	t.is(fileURLToPath('file:///D:/hello world.txt'), 'D:\\hello world.txt');
});

