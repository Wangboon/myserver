"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    //test1
    if (Utils_1.Utils.add(1, 2) === 3) {
        console.log(0);
    }
    else {
        console.log('add test1');
        return;
    }
    8;
    //test2
    if (Utils_1.Utils.add(2, 3) === 5) {
        console.log(0);
    }
    else {
        console.log('add test2');
        return;
    }
    //test addUser
    const data = {
        "name": "pop",
        "username": "iampop"
    };
    try {
        const response = yield Utils_1.Utils.addUser(data);
        const correct_result = { "name": "pop", "username": "iampop" };
        const keys = Object.keys(correct_result);
        for (const k of keys) {
            if (correct_result[k] !== response[k]) {
                console.log("addUser " + k);
                return;
            }
        }
    }
    catch (error) {
        console.log("addUser" + error);
    }
});
unit_test();
