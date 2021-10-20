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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.create = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const student_1 = __importDefault(require("../models/student"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, password } = req.body;
    if (!(username || password)) {
        return res.status(400).json({ error: 'field cannot be empty' });
    }
    const saltRounds = 10;
    const passwordHash = yield bcrypt_1.default.hash(password, saltRounds);
    const newStudent = new student_1.default({
        username,
        name,
        passwordHash,
    });
    const savedStudent = yield newStudent.save();
    res.status(201).json(savedStudent);
});
exports.create = create;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_1.default.find({});
    res.json(students);
});
exports.findAll = findAll;
//# sourceMappingURL=student.js.map