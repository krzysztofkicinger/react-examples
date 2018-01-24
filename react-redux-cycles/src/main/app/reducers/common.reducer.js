export const rehydrateIfSectionExists = (store = {}, sectionName, rehydrateCallback) =>
    store[sectionName] ? rehydrateCallback(store[sectionName]) : store;