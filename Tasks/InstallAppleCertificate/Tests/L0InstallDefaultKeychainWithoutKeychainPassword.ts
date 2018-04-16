import ma = require('vsts-task-lib/mock-answer');
import tmrm = require('vsts-task-lib/mock-run');
import path = require('path');
import fs = require('fs');

let taskPath = path.join(__dirname, '..', 'preinstallcert.js');
let tr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tr.setInput('certSecureFile', 'mySecureFileId');
tr.setInput('certPwd', 'mycertPwd');
tr.setInput('keychain', 'default');
tr.setInput('keychainPassword', '');

process.env['AGENT_VERSION'] = '2.116.0';
process.env['AGENT_TEMPDIRECTORY'] = '/build/temp';
process.env['HOME'] = '/users/test';

tr.run();

