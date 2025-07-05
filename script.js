document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('myModal');
    let modalForm = document.getElementById('modalForm');
    let mainContent = document.getElementById('mainContent');
    
    // Check if elements exist before proceeding
    if (modal && modalForm && mainContent) {
        // Show modal on page load
        modal.style.display = 'block';
        
        // Handle form submission
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you can add validation or send data to server if needed
            
            // Hide modal
            modal.style.display = 'none';
            
            // Show main content
            mainContent.classList.remove('hidden');
        });
    } else {
        console.error('One or more required elements not found');
        // Optionally show main content if modal elements aren't found
        if (mainContent) {
            mainContent.classList.remove('hidden');
        }
    }
});