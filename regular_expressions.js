'use strict'

// // Determine whether a string contains a nomor KTP
const has_ktp = (string) => {
  let polaKTP = /\d{3,3}-\d{2,2}-\d{4,4}/;
  if(string.match(polaKTP)){
    return true;
  } else {
    return false;
  }
}

console.log("has_ktp if it has what looks like a nomor KTP");
console.log(has_ktp("please don't share this: 234-60-1422") === true); // true

console.log("has_ktp if it doesn't have a nomor KTP");
console.log(has_ktp('please confirm your identity: XXX-XX-1422') === false) // true
//
// // -----------------------------------------------------------------------------
//
// // Return the Social Security number from a string.
const grab_ktp = (string) => {
  let polaKTP = /\d{3,3}-\d{2,2}-\d{4,4}/;
  if(string.match(polaKTP)){
    //console.log(string.match(polaKTP)[0]);
    return string.match(polaKTP)[0];
  } else {
    return null;
  }
}

console.log('grab_ktp returns nomor KTP if the string has an nomor KTP')
console.log(grab_ktp("please don't share this: 234-60-1422") === '234-60-1422') // true

console.log("grab_ktp if it doesn't have a nomor KTP")
console.log(grab_ktp('please confirm your identity: XXX-XX-1422') === null) // true

// -----------------------------------------------------------------------------

// Return all of the Social Security numbers from a string.
const grab_all_nomor_ktp = (string) => {
  let polaKTP = /\d{3,3}-\d{2,2}-\d{4,4}/;
// for(let i = 0; i < string.split(',').length; i++){
  if(string.match(polaKTP)){
    let x = string.match(polaKTP);
    // console.log(x.input.split(','));
    return x.input.split(',');
  } else {
    return [];
  }
// }
}

console.log('grab_all_nomor_ktp returns all nomor KTP if the string has any nomor KTP')
console.log(grab_all_nomor_ktp('234-60-1422, 350-80-0744, 013-60-8762')) // return ["234-60-1422", "350-80-0744", "013-60-8762"])

console.log("grab_all_nomor_ktp returns an empty Array if it doesn't have any nomor KTP")
console.log(grab_all_nomor_ktp('please confirm your identity: XXX-XX-1422')) // return []

// -----------------------------------------------------------------------------

// Obfuscate all of the nomor KTP in a string. Example: XXX-XX-4430.
const hide_all_nomor_ktp = (string) => {
    let polaKTP = /\d{3,3}-\d{2,2}-\d{4,4}/;
    let ktpbank = [];

    if(string.match(polaKTP)){
      let x = string.match(polaKTP).input.split(',');

      //console.log(string.match(polaKTP)[0]);
      for(let i = 0; i < x.length; i++) {

      // console.log(x.length);
        ktpbank.push(x[i].replace(/\d{3,3}-\d{2,2}/, "XXX-XX"));
      }
      } else { return []; }

    return ktpbank.join('');

}

console.log('hide_all_nomor_ktp obfuscates any nomor KTP in the string')
console.log(hide_all_nomor_ktp('234-60-1422, 350-80-0744, 013-60-8762')) // "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log('hide_all_nomor_ktp does not alter a string without nomor KTP in it')

let hideString = 'please confirm your identity: XXX-XX-1422'
console.log(hide_all_nomor_ktp(hideString) === hideString) // true

// // -----------------------------------------------------------------------------
//
// // Ensure all of the Social Security numbers use dashes for delimiters.
// // Example: 480.01.4430 and 480014430 would both be 480-01-4430.
const format_nomor = (string) => {
  // ...
  // ambil masukan
  // pecah masukan menjadi array dengan split (',')
  //tentukan pattern polaKTP, pattern dg dot (nnti di replace), dan patternNonFormat
  //buat output array
  //buat parameter penampung nonPola
    //buat perulangan sebanyak panjang array yang sebelumnya dibuat
      //buat 3 kondisi
      //pertama - jika masukan sesuai dengan polaKTP maka kembalikan isi array
        //push hasil ke output array
      //kedua - jika masukan sesuai dengan polaDOT maka replace dot dengan dash
        //push hasil ke output array
      //ketiga - jika tidak sesuai dengan polaDOT dan polaKTP tp sama dengan patternNonFormat maka replace sesuai polaKTP
        //push hasil ke output array
      // else return false
    //endfor
  //return output array

  let polaKTP = /\d{3,3}-\d{2,2}-\d{4,4}/;
  let polaDOT = /\d{3,3}.\d{2,2}.\d{4,4}/;
  let nonPola = /\d{9,9}/;

  let reFormat = [];
  let nonpola = '';
  let input = string.split(',');

  for(let i = 0; i < input.length; i++){
    if(input[i].match(polaKTP)){
      reFormat.push(input[i]);
    } else if(input[i].match(polaDOT)){
      reFormat.push(input[i].replace('.','-'));
    } else if(input[i].match(nonPola)){
      //reFormat.push(input[i].replace('nonPola','polaKTP'));
      // reFormat.push(input[i]);
      let non = input[i].toString().split('');
      reFormat.push(non[0] + non[1] + non[2]+'-'+non[3] + non[4]+'-'+non[5] + non[6] + non[7] + non[8]);
      // let x = (non[0] non[1] non[2]+'-'+non[3] non[4]+'-'+non[5] non[6] non[7] non[8]);
      // reFormat.push(x);
    }
  }
console.log(reFormat.join(''));
}

console.log('format_nomor finds and reformat any nomor KTP in the string')
console.log(format_nomor('234601422, 350.80.0744, 013-60-8762') === '234-60-1422, 350-80-0744, 013-60-8762') // true

console.log('format_nomor does not alter a string without nomor KTP in it')

let formatString = 'please confirm your identity: 44211422'
console.log(format_nomor(formatString) === formatString) // true

module.exports = {
  has_ktp,
  grab_ktp,
  grab_all_nomor_ktp,
  hide_all_nomor_ktp
}
