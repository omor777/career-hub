import { toast } from "react-toastify";

const getDataFromLocalStorage = () => {
  const localData = JSON.parse(localStorage.getItem("jobs"));
  if (localData) {
    return localData;
  }
  return [];
};

const saveDataToLocalStorage = (id) => {
  const localData = getDataFromLocalStorage();

  const exist = localData.find((localId) => localId === id);
  if (!exist) {
    localData.push(id);
    localStorage.setItem("jobs", JSON.stringify(localData));
    toast.success("Apply successfully");
  } else {
    toast.warn("Already applied!");
  }
};

// const findJobsFromLocalStorage = (ids, jobs) => {};

export { getDataFromLocalStorage, saveDataToLocalStorage };
