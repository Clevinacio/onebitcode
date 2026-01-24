var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`-----------------------------------`);
            console.log(`Chamando o método: ${key} com os parêmetros: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`O método ${key} retornou: ${JSON.stringify(result)}`);
            console.log(`-----------------------------------`);
            return result;
        };
    };
}
class Planet {
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        // ...
        console.log(`Calculando ${value} * 2`);
        return value * 2;
    }
    invertName() {
        return this.name.split("").reverse().join("");
    }
}
__decorate([
    Log(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Planet.prototype, "calculate", null);
__decorate([
    Log(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Planet.prototype, "invertName", null);
const planet = new Planet("Boy é foda");
const result = planet.calculate(5);
console.log(`Resultado: ${result}`);
const invertedName = planet.invertName();
console.log(`Nome invertido: ${invertedName}`);
