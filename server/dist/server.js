"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT;
mongoose_1.default
    .connect('mongodb+srv://all:all@cluster0.wtmn6.mongodb.net/Integrify?retryWrites=true&w=majority')
    .then(() => {
    // Start Express server
    app_1.default.listen(port, () => {
        console.log(`App is running at port ${port}`);
        console.log('  Press CTRL-C to stop\n');
    });
})
    .catch((error) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + error);
    process.exit(1);
});
//# sourceMappingURL=server.js.map