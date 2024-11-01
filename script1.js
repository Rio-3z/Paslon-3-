// Scroll Indicator
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
};

// Feedback Form Submission
document.getElementById("feedbackForm").onsubmit = function(event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    document.getElementById("responseMessage").innerText = "Saran Anda telah terkirim: " + message;
    document.getElementById("feedbackForm").reset();
};
