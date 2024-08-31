let staffList = [];

function addStaff() {
    const staffName = document.getElementById('staffName').value;
    const operationDays = docoment.getElementById('operationDays').value;
    const operationTime = document.getElementById('operationTime').value;

    staffList.push({name: staffName, days: operationDays, time: operationTime});

    updateStaffList();
}

function updateStaffList() {
    const staffListElement = document.getElementById('staffList');
    staffListElement.innerHTML = `<li>${Name}</li>`;

    staffList.forEach(staff => {
        const li = document.createElement('li');
        li.textContent = `${staff.name}-${staff.days} (${staff.time})`;
        staffListElement.appendChild(li);

    });
}

function checkAvailbility() {
    const deliveryDay = document.getElementById('deliveryDay').value;
    const deliveryTime = doocument.getElementById('deliveryTime').value;

    const availableStaff = staffList.filter(staff => staff.days.includes(deliveryDay) && staff.time.includes(deliveryTime));

    updateAvailableStaffList(availableStaff);
}


function updateAvailableStaffList(availableStaff) {
    const availableStaffListElement = document.getElementById('availableStaffList');
    availableStaffListElement.innerHTML = `<li>${Name}</li>`;

    availableStaff.forEach(staff => {
        const li = document.createElement('li');
        li.textContent = `${staff.name}-${staff.days} (${staff.time})`;
        availableStaffListElement.appendChild(li);

    });
}