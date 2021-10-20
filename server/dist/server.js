"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const middleware_1 = require("./middleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
const connect_1 = __importDefault(require("./config/connect"));
(0, connect_1.default)();
app.use(express_1.default.json());
const student_1 = __importDefault(require("./routes/student"));
app.get('/', (req, res) => {
    res.send('backend page');
});
app.use('/api/students', student_1.default);
app.use(middleware_1.notFound);
app.use(middleware_1.errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT}`);
});
//# sourceMappingURL=server.js.map