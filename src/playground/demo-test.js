const getGreet = (name = 'Anonymous') => `Hello ${name}!`

test('Say Hello', () => {
    const result = getGreet('Donald')
    expect(result).toBe('Hello Donald!');
});

test('Should generate greeting for no name', () => {
    const result = getGreet()
    expect(result).toBe('Hello Anonymous!')
});