const devices = [
    {
        id: "D01",
        name: "Dieu hoa phong khach",
        isActive: true,
        powerWatts: 1500
    },
    {
        id: "D02",
        name: "Den ngu",
        isActive: true,
        powerWatts: 20
    }
];

const findDeviceById = (devices, targetId) => {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].id === targetId) {
            return devices[i];
        }
    }

    return null;
};

const updateDevice = (devices, targetId, updatedData) => {
    const targetDevice = findDeviceById(devices, targetId);

    if (targetDevice === null) {
        return false;
    }

    if (updatedData.name !== undefined) {
        targetDevice.name = updatedData.name;
    }

    if (updatedData.isActive !== undefined) {
        targetDevice.isActive = updatedData.isActive;
    }

    if (updatedData.powerWatts !== undefined) {
        targetDevice.powerWatts = updatedData.powerWatts;
    }

    return true;
};

console.log("===== TEST CASE 1 =====");

updateDevice(devices, "D01", {
    isActive: false
});

console.log("Trang thai dieu hoa:", findDeviceById(devices, "D01").isActive);

console.log("===== TEST CASE 2 =====");

updateDevice(devices, "D02", {
    powerWatts: 0
});

console.log("Cong suat den ngu:", findDeviceById(devices, "D02").powerWatts);

console.log("===== TEST CASE 3 =====");

updateDevice(devices, "D01", {
    name: "Dieu hoa phong khach moi"
});

console.log("Ten thiet bi:", findDeviceById(devices, "D01").name);

console.log("===== TEST CASE 4 =====");

const updateResult = updateDevice(devices, "D99", {
    isActive: false
});

console.log("Ket qua cap nhat:", updateResult);

console.log("===== DANH SACH THIET BI =====");
console.log(devices);