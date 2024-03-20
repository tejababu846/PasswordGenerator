
import { type IPasswordGenerationForm } from "@/interfaces/forms/PasswordGeneration";
import { type IGenerateRandomIndex } from "@/interfaces/helpers/PasswordGeneration";

export const generateRandom : IGenerateRandomIndex = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateNewPassword: (form : IPasswordGenerationForm) => string = ({ characterLength, securityLevels }) => {
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const uppercase = lowercase.map(c => c.toUpperCase());
    const number = [0, 1, 2, 3, 4, 5, 6 ,7 ,8, 9];
    const optionsCharsPassword = [];

    if(securityLevels[1]) {
      optionsCharsPassword.push(uppercase);
    }

    if(securityLevels[2]) {
      optionsCharsPassword.push(lowercase);
    }

    if(securityLevels[3]) {
      optionsCharsPassword.push(number);
    }

    if(securityLevels[4]) {
      optionsCharsPassword.push(symbols);
    }
    
    let password = "";

    if(!optionsCharsPassword.length) {
      return password;
    }

    for(let i = 0; i<characterLength; i++) {
        const typeChar = generateRandom(0, optionsCharsPassword.length - 1);
        const charIndex = generateRandom(0, optionsCharsPassword[typeChar].length - 1);

        password += optionsCharsPassword[typeChar][charIndex]

    }

    return password;
};