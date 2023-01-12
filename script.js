// Toast main function
function toast({title = "",message = "",type = "",duration = 3000}) {
    // Font Awesome icons
    const icons = {
        success: "fa-solid fa-circle-check",            
        info: "fa-solid fa-circle-info",
        warning: "fa-solid fa-triangle-exclamation",
        error: "fa-solid fa-xmark"
    }

    // Select the icon for the specified toast type
    const icon = icons[type]

    // Milisecond to second convert
    const delay = durationInSecond = (duration/1000).toFixed(2)

    // Get toast div element
    const main = document.getElementById("toast")
    
    // Create div element
    const toast = document.createElement("div");

    // Appent class names to the toast element
    toast.classList.add('toast', `toast-${type}`);

    // Add animation to the element with the custom delay
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut ease .5s ${delay}s forwards`;

    // Appent HTML to the toast element
    toast.innerHTML = `
        <div class="toast-icon">
          <i class="${icon}"></i>
        </div>
  
        <div class="toast-body">
          <h3 class="toast-title">${title}</h3>
          <p class="toast-msg">${message}</p>
        </div>
  
        <div class="toast-close">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="progress-track"></div>
        <div class="progress-running ${type}"></div>
        `
        
    // Get the progress bar to set the animation with custom delay    
    const progressRunning = toast.querySelector(".progress-running");
    progressRunning.style.animation = `progress linear ${durationInSecond}s forwards`;
        
    // Append toast to the main element (.toast)
    main.appendChild(toast);
        
    // Auto remove toast
    const autoRemoveToast = setTimeout(function() {
        // Remove toast from main (.toast)
        main.removeChild(toast)
    }, duration);
      
    // Remove toast when close icon is clicked
    const closeIcon = toast.querySelector('.toast-close');

    closeIcon.addEventListener('click', () => {
        // Remove toast from main (.toast)
        main.removeChild(toast);

        // Clear timeout of the automatic remove
        clearTimeout(autoRemoveToast);
    })
}


/** Notification Methods **/

// Success Notification Method
function showSuccessToast () {
    toast({
      title: "Success!",
      message: "Congratulation! Successfully submitted",
      type: "success",
      duration: 5000
    })
}

// Information Notification Method
function showInfoToast () {
    toast({
      title: "Information!",
      message: "Plase verify your email",
      type: "info",
      duration: 10000
    })
}

// Warning Notification Method
function showWarningToast () {
    toast({
      title: "Warning!",
      message: "Email already exist in the database",
      type: "warning",
      duration: 3000
    })
}

// Error Notification Method
function showErrorToast () {
    toast({
      title: "Error!",
      message: "Please fix the error!",
      type: "error",
      duration: 7000
    })
}