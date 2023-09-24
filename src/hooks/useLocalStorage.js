export default function useLocalStorage() {
  const getFromLocalStorage = (name) => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(name) || "[]")
    if(dataFromLocalStorage.length > 0) {
      return dataFromLocalStorage
    }
  }
  const saveToLocalStorage = (name, state) => {
    localStorage.setItem(name, JSON.stringify(state))
  }

  return {
    getFromLocalStorage,
    saveToLocalStorage
  }
}