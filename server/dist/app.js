"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const student_1 = __importDefault(require("./routes/student"));
dotenv_1.default.config({ path: '.env' });
const app = (0, express_1.default)();
// Express configuration
app.use(express_1.default.json());
// Routes
app.use('/api/students', student_1.default);
// Custom API error handler
exports.default = app;
//# sourceMappingURL=app.js.map