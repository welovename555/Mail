// Expanded email templates in Thai - More variety and natural content
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
    'ขอลงทะเบียนอุปกรณ์เพื่อใช้งานบริการ Dev Tool',
    'สอบถามเกี่ยวกับการใช้งาน Developer Certificate',
    'ขอคำแนะนำการตั้งค่า Provisioning Profile',
    'แจ้งปัญหาการใช้งานระบบ Signing',
    'ขอความช่วยเหลือเรื่องการ Deploy แอป',
    'สอบถามขั้นตอนการอัพเดท Certificate',
    'รบกวนช่วยตรวจสอบสถานะการสมัคร',
    'ขอข้อมูลเพิ่มเติมเกี่ยวกับบริการ',
    'แจ้งความต้องการใช้งานระบบ Testing',
    'สอบถามเรื่องการต่ออายุ Developer Account',
    'ขอคำปรึกษาเรื่องการใช้งาน Xcode',
    'รบกวนช่วยแก้ไขปัญหา Build Error',
    'สอบถามเกี่ยวกับการใช้งาน TestFlight',
    'ขอความช่วยเหลือเรื่อง App Store Connect',
    'แจ้งปัญหาการ Submit แอปขึ้น Store',
    'สอบถามขั้นตอนการทำ In-App Purchase',
    'ขอคำแนะนำเรื่อง App Review Guidelines',
    'รบกวนช่วยตรวจสอบ Metadata ของแอป',
    'สอบถามเกี่ยวกับการใช้งาน Push Notification',
    'ขอความช่วยเหลือเรื่อง Core Data',
    'แจ้งปัญหาการใช้งาน CloudKit'
];

const emailBodies = [
    'สวัสดีครับ ผมมีความประสงค์จะลงทะเบียนอุปกรณ์เพื่อใช้งานกับระบบ Signing ของทางคุณ หากมีข้อมูลเพิ่มเติมที่ผมต้องจัดเตรียมเพิ่มเติม รบกวนแจ้งกลับได้เลยครับ ขอบคุณมากครับ',
    'เรียนทีมงาน ผมสนใจใช้งานบริการ Signing สำหรับ iOS และขอแจ้งข้อมูลเบื้องต้นไว้ในอีเมลนี้ หากขั้นตอนใดที่ยังไม่ครบถ้วน ยินดีจะส่งเพิ่มเติมตามคำแนะนำครับ ด้วยความนับถือ',
    'สวัสดีครับ ผมต้องการลงทะเบียนอุปกรณ์ iOS เพื่อใช้งานกับแพลตฟอร์ม Dev Tools และต้องการขอคำแนะนำเพิ่มเติมในกรณีที่ต้องแนบข้อมูลอื่น ๆ ขอบคุณล่วงหน้าสำหรับการประสานงานครับ',
    'สวัสดีครับ ผมส่งอีเมลมาเพื่อสอบถามเกี่ยวกับขั้นตอนการลงทะเบียน UDID สำหรับการใช้งานระบบ Signing หากมีไฟล์หรือข้อมูลที่จำเป็นต้องแนบเพิ่มเติม กรุณาแจ้งให้ผมทราบได้เลยครับ ขอขอบพระคุณอย่างยิ่งครับ',
    'เรียนผู้ดูแลระบบ ผมขอแจ้งความประสงค์ในการเปิดใช้งานระบบลงทะเบียนอุปกรณ์ โดยในเบื้องต้นผมขอแจ้งข้อมูลเบื้องต้นผ่านทางอีเมลนี้ หากมีเอกสารหรือข้อมูลเพิ่มเติม ยินดีจะจัดส่งให้ทันทีครับ ขอบคุณครับ',
    'สวัสดีครับ ผมเป็นนักพัฒนาแอป iOS และต้องการใช้งานบริการ Developer Certificate ของทางคุณ ขอรบกวนแนะนำขั้นตอนการสมัครและเอกสารที่จำเป็นต้องเตรียมด้วยครับ รอคำตอบจากทางคุณครับ',
    'เรียนทีมงานที่เคารพ ผมกำลังพัฒนาแอปพลิเคชันและต้องการความช่วยเหลือในการตั้งค่า Provisioning Profile ขอรบกวนให้คำแนะนำและขั้นตอนที่ถูกต้องด้วยครับ ขอบคุณมากครับ',
    'สวัสดีครับ ผมพบปัญหาในการใช้งานระบบ Signing และต้องการความช่วยเหลือในการแก้ไข ขอรบกวนทีมงานช่วยตรวจสอบและแนะนำวิธีการแก้ไขด้วยครับ ขอขอบคุณล่วงหน้าครับ',
    'เรียนผู้ดูแลระบบ ผมต้องการความช่วยเหลือในการ Deploy แอปพลิเคชันขึ้น App Store ขอรบกวนแนะนำขั้นตอนและข้อควรระวังต่าง ๆ ด้วยครับ ขอบคุณมากครับ',
    'สวัสดีครับ ผมต้องการอัพเดท Developer Certificate ที่กำลังจะหมดอายุ ขอรบกวนแนะนำขั้นตอนการต่ออายุและเอกสารที่จำเป็นด้วยครับ รอคำตอบจากทางคุณครับ',
    'เรียนทีมงาน ผมขอสอบถามสถานะการสมัครใช้งานบริการของผม และขอทราบว่ามีขั้นตอนใดที่ยังต้องดำเนินการเพิ่มเติมหรือไม่ครับ ขอบคุณสำหรับการติดตามครับ',
    'สวัสดีครับ ผมต้องการข้อมูลเพิ่มเติมเกี่ยวกับบริการต่าง ๆ ที่ทางคุณให้บริการ โดยเฉพาะเรื่องราคาและแพ็กเกจที่เหมาะสมกับความต้องการของผม ขอบคุณครับ',
    'เรียนผู้ดูแลระบบ ผมสนใจใช้งานระบบ Testing และต้องการทราบรายละเอียดการใช้งานและข้อกำหนดต่าง ๆ ขอรบกวนส่งข้อมูลให้ผมด้วยครับ ขอบคุณมากครับ',
    'สวัสดีครับ ผม Developer Account กำลังจะหมดอายุและต้องการต่ออายุ ขอรบกวนแนะนำขั้นตอนและค่าใช้จ่ายในการต่ออายุด้วยครับ รอคำตอบจากทางคุณครับ',
    'เรียนทีมงาน ผมมีปัญหาในการใช้งาน Xcode และต้องการคำปรึกษาจากผู้เชี่ยวชาญ ขอรบกวนช่วยแนะนำแนวทางการแก้ไขด้วยครับ ขอบคุณล่วงหน้าครับ',
    'สวัสดีครับ ผมพบ Build Error ในโปรเจคและไม่สามารถแก้ไขได้ ขอรบกวนทีมงานช่วยตรวจสอบและแนะนำวิธีการแก้ไขด้วยครับ ขอขอบคุณมากครับ',
    'เรียนผู้ดูแลระบบ ผมต้องการใช้งาน TestFlight สำหรับทดสอบแอป ขอรบกวนแนะนำขั้นตอนการตั้งค่าและการใช้งานด้วยครับ ขอบคุณสำหรับความช่วยเหลือครับ',
    'สวัสดีครับ ผมมีปัญหาในการใช้งาน App Store Connect และต้องการความช่วยเหลือ ขอรบกวนทีมงานช่วยแนะนำการใช้งานด้วยครับ รอคำตอบจากทางคุณครับ',
    'เรียนทีมงาน ผมพบปัญหาในการ Submit แอปขึ้น App Store ขอรบกวนช่วยตรวจสอบและแนะนำวิธีการแก้ไขด้วยครับ ขอบคุณล่วงหน้าสำหรับความช่วยเหลือครับ',
    'สวัสดีครับ ผมต้องการทำ In-App Purchase ในแอปและต้องการคำแนะนำในการตั้งค่า ขอรบกวนส่งข้อมูลและขั้นตอนให้ผมด้วยครับ ขอบคุณมากครับ'
];

// DOM elements
const emailInput = document.getElementById('emailInput');
const sendEmailBtn = document.getElementById('sendEmailBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyContainer = document.getElementById('historyContainer');

// Tab elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Notes elements
const addNoteBtn = document.getElementById('addNoteBtn');
const addNoteForm = document.getElementById('addNoteForm');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const cancelNoteBtn = document.getElementById('cancelNoteBtn');
const notesTableBody = document.getElementById('notesTableBody');

// Form elements
const noteEmail = document.getElementById('noteEmail');
const noteDate = document.getElementById('noteDate');
const noteStatus = document.getElementById('noteStatus');
const noteRemarks = document.getElementById('noteRemarks');

// Stats elements
const totalCount = document.getElementById('totalCount');
const successCount = document.getElementById('successCount');
const failedCount = document.getElementById('failedCount');
const pendingCount = document.getElementById('pendingCount');

// Global variables
let editingNoteId = null;
let usedTemplates = new Set(); // Track used templates to avoid repetition

// Tab functionality
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;
        switchTab(tabName);
    });
});

function switchTab(tabName) {
    // Update tab buttons
    tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Update tab contents
    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === `${tabName}Tab`);
    });
}

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

// Get random email template without repetition
function getRandomEmailTemplate() {
    // Reset used templates if all have been used
    if (usedTemplates.size >= emailSubjects.length) {
        usedTemplates.clear();
    }

    let availableSubjects = emailSubjects.filter((_, index) => !usedTemplates.has(index));
    let availableBodies = emailBodies.filter((_, index) => !usedTemplates.has(index));

    const subjectIndex = Math.floor(Math.random() * availableSubjects.length);
    const bodyIndex = Math.floor(Math.random() * availableBodies.length);

    // Mark as used
    const originalSubjectIndex = emailSubjects.indexOf(availableSubjects[subjectIndex]);
    const originalBodyIndex = emailBodies.indexOf(availableBodies[bodyIndex]);
    
    usedTemplates.add(originalSubjectIndex);
    usedTemplates.add(originalBodyIndex);

    return {
        subject: availableSubjects[subjectIndex],
        body: availableBodies[bodyIndex]
    };
}

// Convert suffixes to full email addresses
function convertToFullEmails(suffixes) {
    return suffixes.map(suffix => `normalshop${suffix.trim()}@gmail.com`);
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

// Notes functionality
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('emailNotes') || '[]');
    displayNotes(notes);
    updateStats(notes);
}

function saveNotes(notes) {
    localStorage.setItem('emailNotes', JSON.stringify(notes));
}

function displayNotes(notes) {
    notesTableBody.innerHTML = '';
    
    if (notes.length === 0) {
        notesTableBody.innerHTML = `
            <tr class="empty-row">
                <td colspan="5" class="empty-message">ยังไม่มีข้อมูล</td>
            </tr>
        `;
        return;
    }

    notes.forEach(note => {
        const row = document.createElement('tr');
        row.className = 'fade-in';
        
        const statusIcon = {
            'pending': '⏳',
            'success': '✅',
            'failed': '❌'
        };

        const statusText = {
            'pending': 'รอผล',
            'success': 'สำเร็จ',
            'failed': 'ไม่สำเร็จ'
        };

        row.innerHTML = `
            <td class="email-cell">${note.email}</td>
            <td class="date-cell">${formatDate(note.date)}</td>
            <td class="status-cell">
                <span class="status-badge ${note.status}">
                    ${statusIcon[note.status]} ${statusText[note.status]}
                </span>
            </td>
            <td class="remarks-cell">${note.remarks || '-'}</td>
            <td class="actions-cell">
                <button class="action-btn edit-btn" onclick="editNote('${note.id}')">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                </button>
                <button class="action-btn delete-btn" onclick="deleteNote('${note.id}')">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                </button>
            </td>
        `;
        
        notesTableBody.appendChild(row);
    });
}

function updateStats(notes) {
    const stats = {
        total: notes.length,
        success: notes.filter(n => n.status === 'success').length,
        failed: notes.filter(n => n.status === 'failed').length,
        pending: notes.filter(n => n.status === 'pending').length
    };

    totalCount.textContent = stats.total;
    successCount.textContent = stats.success;
    failedCount.textContent = stats.failed;
    pendingCount.textContent = stats.pending;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function showAddNoteForm() {
    addNoteForm.classList.remove('hidden');
    addNoteBtn.style.display = 'none';
    
    // Set today's date as default
    noteDate.value = new Date().toISOString().split('T')[0];
    noteEmail.focus();
}

function hideAddNoteForm() {
    addNoteForm.classList.add('hidden');
    addNoteBtn.style.display = 'flex';
    clearForm();
    editingNoteId = null;
}

function clearForm() {
    noteEmail.value = '';
    noteDate.value = '';
    noteStatus.value = 'pending';
    noteRemarks.value = '';
}

function saveNote() {
    const email = noteEmail.value.trim();
    const date = noteDate.value;
    const status = noteStatus.value;
    const remarks = noteRemarks.value.trim();

    if (!email || !date) {
        alert('กรุณากรอกอีเมลและวันที่');
        return;
    }

    const notes = JSON.parse(localStorage.getItem('emailNotes') || '[]');
    
    if (editingNoteId) {
        // Edit existing note
        const noteIndex = notes.findIndex(n => n.id === editingNoteId);
        if (noteIndex !== -1) {
            notes[noteIndex] = {
                ...notes[noteIndex],
                email,
                date,
                status,
                remarks,
                updatedAt: new Date().toISOString()
            };
        }
    } else {
        // Add new note
        const newNote = {
            id: Date.now().toString(),
            email,
            date,
            status,
            remarks,
            createdAt: new Date().toISOString()
        };
        notes.unshift(newNote);
    }

    saveNotes(notes);
    displayNotes(notes);
    updateStats(notes);
    hideAddNoteForm();
}

function editNote(id) {
    const notes = JSON.parse(localStorage.getItem('emailNotes') || '[]');
    const note = notes.find(n => n.id === id);
    
    if (note) {
        editingNoteId = id;
        noteEmail.value = note.email;
        noteDate.value = note.date;
        noteStatus.value = note.status;
        noteRemarks.value = note.remarks || '';
        
        showAddNoteForm();
        saveNoteBtn.textContent = 'อัพเดท';
    }
}

function deleteNote(id) {
    if (confirm('คุณต้องการลบรายการนี้หรือไม่?')) {
        const notes = JSON.parse(localStorage.getItem('emailNotes') || '[]');
        const filteredNotes = notes.filter(n => n.id !== id);
        
        saveNotes(filteredNotes);
        displayNotes(filteredNotes);
        updateStats(filteredNotes);
    }
}

// Event listeners
sendEmailBtn.addEventListener('click', sendEmail);
clearHistoryBtn.addEventListener('click', clearHistory);
addNoteBtn.addEventListener('click', showAddNoteForm);
saveNoteBtn.addEventListener('click', saveNote);
cancelNoteBtn.addEventListener('click', () => {
    hideAddNoteForm();
    saveNoteBtn.textContent = 'บันทึก';
});

// Allow Enter key to send email
emailInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendEmail();
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

// Load data on page load
document.addEventListener('DOMContentLoaded', () => {
    loadEmailHistory();
    loadNotes();
});

// Make functions global for onclick handlers
window.editNote = editNote;
window.deleteNote = deleteNote;