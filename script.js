document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission for booking
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const params = new URLSearchParams(new FormData(event.target)).toString();
        window.location.href = `bookingConfirmation.html?${params}`;
    });

    // Populate the confirmation page with the form data
    if (window.location.pathname.endsWith('bookingConfirmation.html')) {
        const params = new URLSearchParams(window.location.search);
        document.getElementById('service').textContent = `Service Booked: ${params.get('services')}`;
        document.getElementById('petName').textContent = `Pet's Name: ${params.get('petName')}`;
        document.getElementById('groomer').textContent = `Groomer: ${params.get('teamMember')}`;
        document.getElementById('dateTime').textContent = `Date and Time: ${params.get('date')} at ${params.get('time')}`;
        document.getElementById('ownerName').textContent = `Owner's Name: ${params.get('firstName')} ${params.get('lastName')}`;
        document.getElementById('email').textContent = `Email: ${params.get('email')}`;
    }
});
let serviceCount = 1;

document.getElementById('addServiceBtn').addEventListener('click', function() {
    if (serviceCount < 4) {
        serviceCount++;
        const servicesContainer = document.getElementById('servicesContainer');
        const newServiceGroup = document.createElement('div');
        newServiceGroup.classList.add('form-group', 'service-group');
        newServiceGroup.innerHTML = `
            <select id="services${serviceCount}" class="form-control">
                <option value="Bathing">Bathing</option>
                <option value="Teeth Brushing">Teeth Brushing</option>
                <option value="Haircut and Styling">Haircut and Styling</option>
                <option value="Nail Trimming">Nail Trimming</option>
            </select>
        `;
        servicesContainer.appendChild(newServiceGroup);
    }
});
