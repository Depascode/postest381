// Function to show booking form modal
function showBookingForm() {
    var modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close booking form modal
function closeBookingForm() {
    var modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to submit order
function submitOrder() {
    var form = document.getElementById('orderForm');
    var orderResults = document.getElementById('orderResults');

    if (form && orderResults) {
        var fullname = form.fullname.value;
        var email = form.email.value;
        var phone = form.phone.value;
        var service = form.service.value;

        var orderHTML = `
            <h3>Terima kasih atas pemesanan Anda!</h3>
            <p>Berikut adalah detail pemesanan Anda:</p>
            <ul>
                <li><strong>Nama Lengkap:</strong> ${fullname}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Nomor Telepon:</strong> ${phone}</li>
                <li><strong>Layanan Pilihan:</strong> ${service}</li>
            </ul>
            <button onclick="downloadOrder('${fullname}', '${email}', '${phone}', '${service}')">Download Order</button>
        `;
        orderResults.innerHTML = orderHTML;

        // Reset form after successful submission
        form.reset();

        // Save order data to order.txt
        saveOrderToTxt(fullname, email, phone, service);
    }
}

// Function to save order data to order.txt
function saveOrderToTxt(fullname, email, phone, service) {
    var orderData = {
        fullname: fullname,
        email: email,
        phone: phone,
        service: service
    };

    // Send order data to server-side script for processing
    fetch('save_order.php', {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Order saved successfully:', data);
    })
    .catch(error => {
        console.error('Error saving order:', error);
    });
}

// Function to download order details as text file
function downloadOrder(fullname, email, phone, service) {
    var orderText = `Nama: ${fullname}\nEmail: ${email}\nTelepon: ${phone}\nLayanan: ${service}`;
    var blob = new Blob([orderText], { type: 'text/plain' });

    // Create object URL from blob
    var url = URL.createObjectURL(blob);

    // Create <a> element for download
    var a = document.createElement('a');
    a.href = url;
    a.download = 'order.txt';
    document.body.appendChild(a);
    a.click();

    // Clean up object URL after use
    URL.revokeObjectURL(url);
}
