"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_1 = require("../controller/student");
const router = express_1.default.Router();
router.get('/', student_1.findAll);
exports.default = router;
//# sourceMappingURL=student.js.map