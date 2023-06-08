'use strict'

function generatePassword(length) {
    const chars = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    let passwordData = '';
    for (let i = 0; i < length; i++) {
      passwordData += chars[Math.floor(Math.random() * chars.length)];
    }
    return passwordData;
  }
  
  
  function passwordEncaps() {
    const length = document.getElementById('length').value;
    const password = generatePassword(length);
    document.getElementById('password').value = password;
  }