import {playerHealth} from "../playerhealth.js";

test("show player health witn big health", () => {
    expect(playerHealth({name: 'Маг', health: 90})).toBe("healthy");
});

test("show player health witn middle health", () => {
    expect(playerHealth({name: 'Волшебник', health: 45})).toBe("wounded");
});

test("show player health witn bed health", () => {
    expect(playerHealth({name: 'Ученик', health: 7})).toBe("critical");
});

test("show player health without health", () => {
    expect(playerHealth({})).toBe("");
});