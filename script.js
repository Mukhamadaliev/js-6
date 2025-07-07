document.addEventListener('DOMContentLoaded', function() {
    // 1. WELCOME MODAL (Birinchi ochiladigan modal)
    const welcomeModal = document.getElementById('welcomeModal');
    const welcomeForm = document.getElementById('welcomeForm');
    const mainContent = document.getElementById('mainContent');

    if (welcomeModal && welcomeForm && mainContent) {
        welcomeModal.style.display = 'block';

        welcomeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            welcomeModal.style.display = 'none';
            mainContent.classList.remove('hidden');
        });
    } else {
        if (mainContent) mainContent.classList.remove('hidden');
    }

    // 2. REGISTRATION MODAL (Ro'yxatdan o'tish)
    const regModal = document.getElementById('regModal');
    const regForm = document.getElementById('regForm');
    const regBtn = document.querySelector('.btn-2'); // "Ro'yxatdan o'tish" tugmasi

    if (regBtn && regModal) {
        regBtn.addEventListener('click', function() {
            regModal.style.display = 'block';
        });
    }

    if (regForm && regModal) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            regModal.style.display = 'none';
            alert("Ma'lumotlar yuborildi!");
        });
    }

    // 3. CONSULTATION MODAL (Konsultatsiya olish)
    const consultModal = document.getElementById('consultModal');
    const consultForm = document.getElementById('consultForm');
    const consultBtn = document.getElementById('consultBtn'); // "Bepul konsultatsiya" tugmasi

    if (consultBtn && consultModal) {
        consultBtn.addEventListener('click', function() {
            consultModal.style.display = 'block';
        });
    }

    if (consultForm && consultModal) {
        consultForm.addEventListener('submit', function(e) {
            e.preventDefault();
            consultModal.style.display = 'none';
            alert("So'rovingiz qabul qilindi!");
        });
    }

    // 4. CLOSE BUTTONS (Barcha modal oynalarni yopish)
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // 5. TEACHER INFO (Ustozlar haqida ma'lumot)
    const teacherBtns = document.querySelectorAll('.btn-max[data-teacher]');
    const teacherInfos = document.querySelectorAll('.teacher-info');

    teacherBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const teacherId = this.getAttribute('data-teacher') + '-info';
            document.getElementById(teacherId).style.display = 'block';
        });
    });

    document.querySelectorAll('.btn-modal-x').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    });
});