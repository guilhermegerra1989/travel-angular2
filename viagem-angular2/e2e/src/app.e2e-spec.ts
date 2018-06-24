'use strict'; // necessary for es6 output in node

import { browser, element, by, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

const expectedUser1 = 'Travel Control';
const expectedTitle = `${expectedUser1}`;
const targetUser = { id: 15, name: 'Magneta' };
const targetHeroDashboardIndex = 3;
const nameSuffix = 'X';
const newUserName = targetUser.name + nameSuffix;

class User {
    id: number;
    name: string;

    static fromString(s: string): User {
        return {
            id: +s.substr(0, s.indexOf(' ')),
            name: s.substr(s.indexOf(' ') + 1),
        };
    }

    static async fromDetail(detail: ElementFinder): Promise<User> {
        let _id = await detail.all(by.css('div')).first().getText();
        let _name = await detail.element(by.css('h2')).getText();
        return {
            id: +_id.substr(_id.indexOf(' ') + 1),
            name: _name.substr(0, _name.lastIndexOf(' '))
        };
    }
}

