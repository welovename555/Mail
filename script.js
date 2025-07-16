// Email templates in Thai
const emailSubjects = [
    'ขอความช่วยเหลือในการลงทะเบียนอุปกรณ์',
    'ติดต่อสอบถามเรื่อง iOS Signing Service',
    'ส่งข้อมูลสำหรับเปิดใช้งานบริการ',
    'แจ้งรายละเอียดการลงทะเบียน UDID',
    'รบกวนตรวจสอบคำขอใช้งานของผมด้วยครับ',
    'ส่งคำขอใช้งานบริการนักพัฒนา',
    'รายละเอียดสำหรับการลงทะเบียนอุปกรณ์ใหม่',
    'สอบถามขั้นตอนการใช้งานระบบ Signing',
    'แจ้งข้อมูลประกอบการลงทะเบียน',
    'ขอลงทะเบียนอุปกรณ์เพื่อใช้งานบริการ Dev Tool'
];

const emailBodies = [
    'สวัสดีครับ ผมมีความประสงค์จะลงทะเบียนอุปกรณ์เพื่อใช้งานกับระบบ Signing ของทางคุณ หากมีข้อมูลเพิ่มเติมที่ผมต้องจัดเตรียมเพิ่มเติม รบกวนแจ้งกลับได้เลยครับ ขอบคุณมากครับ',
    'เรียนทีมงาน ผมสนใจใช้งานบริการ Signing สำหรับ iOS และขอแจ้งข้อมูลเบื้องต้นไว้ในอีเมลนี้ หากขั้นตอนใดที่ยังไม่ครบถ้วน ยินดีจะส่งเพิ่มเติมตามคำแนะนำครับ ด้วยความนับถือ',
    'สวัสดีครับ ผมต้องการลงทะเบียนอุปกรณ์ iOS เพื่อใช้งานกับแพลตฟอร์ม Dev Tools และต้องการขอคำแนะนำเพิ่มเติมในกรณีที่ต้องแนบข้อมูลอื่น ๆ ขอบคุณล่วงหน้าสำหรับการประสานงานครับ',
    'สวัสดีครับ ผมส่งอีเมลมาเพื่อสอบถามเกี่ยวกับขั้นตอนการลงทะเบียน UDID สำหรับการใช้งานระบบ Signing หากมีไฟล์หรือข้อมูลที่จำเป็นต้องแนบเพิ่มเติม กรุณาแจ้งให้ผมทราบได้เลยครับ ขอขอบพระคุณอย่างยิ่งครับ',
    'เรียนผู้ดูแลระบบ ผมขอแจ้งความประสงค์ในการเปิดใช้งานระบบลงทะเบียนอุปกรณ์ โดยในเบื้องต้นผมขอแจ้งข้อมูลเบื้องต้นผ่านทางอีเมลนี้ หากมีเอกสารหรือข้อมูลเพิ่มเติม ยินดีจะจัดส่งให้ทันทีครับ ขอบคุณครับ'
];

// DOM elements
const emailInput = document.getElementById('emailInput');
const sendEmailBtn = document.getElementById('sendEmailBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyContainer = document.getElementById('historyContainer');

// Load email history from localStorage
function loadEmailHistory() {
    const history = JSON.parse(localStorage.getItem('emailSuffixHistory') || '[]');
    displayEmailHistory(history);
}

// Save email suffix to history
function saveEmailSuffixToHistory(suffixes) {
    let history = JSON.parse(localStorage.getItem('emailSuffixHistory') || '[]');
    
    suffixes.forEach(suffix => {
        suffix = suffix.trim();
        if (suffix && !history.includes(suffix)) {
            history.unshift(suffix);
        }
    });

    // Keep only last 15 suffixes
    history = history.slice(0, 15);
    localStorage.setItem('emailSuffixHistory', JSON.stringify(history));
    displayEmailHistory(history);
}

// Display email history
function displayEmailHistory(history) {
    historyContainer.innerHTML = '';
    
    if (history.length === 0) {
        historyContainer.innerHTML = '<div class="empty-history">ยังไม่มีประวัติการใช้งาน</div>';
        return;
    }

    history.forEach(suffix => {
        const button = document.createElement('button');
        button.className = 'history-btn fade-in';
        button.textContent = suffix;
        button.onclick = () => {
            // Add to current input instead of replacing
            const currentValue = emailInput.value.trim();
            if (currentValue) {
                emailInput.value = currentValue + ' ' + suffix;
            } else {
                emailInput.value = suffix;
            }
            emailInput.focus();
            button.classList.add('pulse');
            setTimeout(() => button.classList.remove('pulse'), 1000);
        };
        historyContainer.appendChild(button);
    });
}

// Get random email template
function getRandomEmailTemplate() {
    const randomSubject = emailSubjects[Math.floor(Math.random() * emailSubjects.length)];
    const randomBody = emailBodies[Math.floor(Math.random() * emailBodies.length)];
    return { subject: randomSubject, body: randomBody };
}

// Convert suffixes to full email addresses
function convertToFullEmails(suffixes) {
    return suffixes.map(suffix => `normalshop${suffix.trim()}@gmail.com`);
}

// Handle space input to separate suffixes
function handleSpaceInput(event) {
    if (event.key === ' ') {
        const currentValue = emailInput.value;
        // Allow space for separation
        return true;
    }
}

// Send email function
function sendEmail() {
    const suffixValue = emailInput.value.trim();
    
    if (!suffixValue) {
        alert('กรุณาใส่ส่วนท้ายอีเมล');
        emailInput.focus();
        return;
    }

    // Split by space and clean up
    const suffixes = suffixValue.split(/\s+/).filter(s => s.trim());
    
    if (suffixes.length === 0) {
        alert('กรุณาใส่ส่วนท้ายอีเมลที่ถูกต้อง');
        emailInput.focus();
        return;
    }

    // Convert to full email addresses
    const fullEmails = convertToFullEmails(suffixes);
    
    // Get random template
    const template = getRandomEmailTemplate();
    
    // Save suffixes to history
    saveEmailSuffixToHistory(suffixes);
    
    // Create mailto link
    const recipients = fullEmails.join(',');
    const subject = encodeURIComponent(template.subject);
    const body = encodeURIComponent(template.body);
    const mailtoLink = `mailto:${recipients}?subject=${subject}&body=${body}`;
    
    // Add visual feedback
    sendEmailBtn.classList.add('pulse');
    sendEmailBtn.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        กำลังเปิดแอปอีเมล...
    `;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset button after delay
    setTimeout(() => {
        sendEmailBtn.classList.remove('pulse');
        sendEmailBtn.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
            ส่งอีเมล
        `;
    }, 2000);
}

// Clear history function
function clearHistory() {
    if (confirm('คุณต้องการล้างประวัติส่วนท้ายอีเมลทั้งหมดหรือไม่?')) {
        localStorage.removeItem('emailSuffixHistory');
        displayEmailHistory([]);
        
        // Visual feedback
        clearHistoryBtn.classList.add('pulse');
        setTimeout(() => clearHistoryBtn.classList.remove('pulse'), 1000);
    }
}

// Event listeners
sendEmailBtn.addEventListener('click', sendEmail);
clearHistoryBtn.addEventListener('click', clearHistory);

// Allow Enter key to send email
emailInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendEmail();
    } else {
        handleSpaceInput(e);
    }
});

// Add visual feedback for input
emailInput.addEventListener('input', () => {
    if (emailInput.value.trim()) {
        sendEmailBtn.style.transform = 'scale(1.02)';
    } else {
        sendEmailBtn.style.transform = 'scale(1)';
    }
});

// Load history on page load
document.addEventListener('DOMContentLoaded', loadEmailHistory);