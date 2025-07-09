// Welcome Modal
let welcomeModal = document.getElementById('welcomeModal');
let mainContent = document.getElementById('mainContent');

// Show welcome modal on page load
window.addEventListener('DOMContentLoaded', () => {
    if (welcomeModal) {
        welcomeModal.style.display = 'block';
    }
});

// General function to close any modal
function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Welcome form submission
let welcomeForm = document.getElementById('welcomeForm');
if (welcomeForm) {
    welcomeForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('nameField').value.trim();
        let email = document.getElementById('emailField').value.trim();
        let number = document.getElementById('numberField').value.trim();
        let message = document.getElementById('messageField').value.trim();
        let result = document.getElementById('welcomeResult');

        // Validation
        if (name === "" || email === "" || number === "" || message === "") {
            result.textContent = "Xato to`ldirding boshqadan to`ldir";
            result.style.color = "red";
            return;
        }

        // Email validation
        if (!email.endsWith("@gmail.com")) {
            result.textContent = "kirish  uchun @gmail.com yoz ";
            result.style.color = "red";
            return;
        }

        // If all valid
        result.textContent = "";
        result.style.color = "green";

        setTimeout(() => {
            welcomeModal.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 1500);
    });
}

// Registration Modal
let regBtn = document.querySelector('.btn-2');
let regModal = document.getElementById('regModal');
let regForm = document.getElementById('regForm');

if (regBtn && regModal) {
    regBtn.addEventListener('click', () => {
        regModal.style.display = 'block';
    });
}

if (regForm) {
    regForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('regName').value.trim();
        let email = document.getElementById('regEmail').value.trim();
        let phone = document.getElementById('regPhone').value.trim();
        let message = document.getElementById('regMessage').value.trim();
        let result = document.getElementById('regResult');

        if (name === "" || email === "" || phone === "" || message === "") {
            result.textContent = "Iltimos, barcha maydonlarni to'ldiring!";
            result.style.color = "red";
            return;
        }

        if (!email.includes("@")) {
            result.textContent = "Iltimos, to'g'ri email kiriting!";
            result.style.color = "red";
            return;
        }

        if (phone.length < 9) {
            result.textContent = "Telefon raqami noto'g'ri kiritilgan!";
            result.style.color = "red";
            return;
        }

        result.textContent = "";
        result.style.color = "green";

        // Formani tozalash
        this.reset();
        
        // 3 soniyadan so'ng modal yopiladi
        setTimeout(() => {
            closeModal('regModal');
        }, 3000);
    });
}

// Consultation Modal
let consultBtn = document.getElementById('consultBtn');
let consultModal = document.getElementById('consultModal');
let consultForm = document.getElementById('consultForm');

if (consultBtn) {
    consultBtn.addEventListener('click', () => {
        consultModal.style.display = 'block';
    });
}

if (consultForm) {
    consultForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('consultName').value.trim();
        let phone = document.getElementById('consultPhone').value.trim();
        let topic = document.getElementById('consultTopic').value;
        let result = document.getElementById('consultResult');

        if (name === "" || phone === "" || topic === "") {
            result.textContent = "Hammasini to`ldir";
            result.style.color = "red";
            return;
        }

        if (phone.length < 9) {
            result.textContent = "Telefon raqami noto'g'ri kiritilgan!";
            result.style.color = "red";
            return;
        }

        result.textContent = "";
        result.style.color = "green";

        // Formani tozalash
        this.reset();
        
        // 3 soniyadan so'ng modal yopiladi
        setTimeout(() => {
            closeModal('consultModal');
        }, 3000);
    });
}

// Theme Toggle
let darkBtn = document.querySelector('.btn-black');
let whiteBtn = document.querySelector('.btn-white');

if (darkBtn && whiteBtn) {
    darkBtn.addEventListener('click', () => {
        document.body.classList.add('dark-theme');
    });

    whiteBtn.addEventListener('click', () => {
        document.body.classList.remove('dark-theme');
    });
}

// Teacher Info Toggle
let teacherButtons = document.querySelectorAll('.btn-max');
teacherButtons.forEach(button => {
    button.addEventListener('click', function() {
        let teacher = this.getAttribute('data-teacher');
        let infoDiv = document.getElementById(`${teacher}-info`);
        
        if (infoDiv) {
            // Hide all info divs first
            document.querySelectorAll('.teacher-info').forEach(div => {
                div.style.display = 'none';
            });
            // Show the selected one
            infoDiv.style.display = 'block';
        }
    });
});

// Close teacher info
function closeTeacherInfo(teacherId) {
    let infoDiv = document.getElementById(teacherId);
    if (infoDiv) {
        infoDiv.style.display = 'none';
    }
}