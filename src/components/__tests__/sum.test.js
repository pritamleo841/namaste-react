import { sum } from "../sum"

test("Sum function should sum two numbers",()=>{
    const result  = sum(3,4);

    //assertion
    expect(result).toBe(7);
})