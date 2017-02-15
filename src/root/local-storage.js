const persisedStateName = 'store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(persisedStateName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        // Browsers security might not allow you to use local storage.
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(persisedStateName, serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};
