

const btn = document.getElementById("scrollToTop");

  // Показать кнопку при прокрутке вниз
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Прокрутка вверх при клике
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });





// ========== ТЕЛЕГРАМ КОНСТАНТЫ ==========
const TOKEN = '8786272320:AAGipCblG5fQaXxLJyllD2iJN3MrC-s3LJo';
const CHAT_ID = '6852778831';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// ========== МОДАЛЬНОЕ ОКНО "НАПИСАТЬ АВТОРУ" С ОТПРАВКОЙ В ТЕЛЕГРАМ ==========
function initContactModal() {
    const contactBtn = document.getElementById('contactBtn');
    const modal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');
    
    // Исправлено: добавлены || вместо пробелов
    if (!contactBtn || !modal || !closeBtn) return;
    
    function openModal() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        if (statusDiv) statusDiv.innerHTML = '';
        if (form) form.reset();
    }
    
    contactBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Исправлено: правильно получаем значения полей
            const email = document.getElementById('userEmail')?.value;
            const projectLink = document.getElementById('projectLink')?.value;
            const messageText = document.getElementById('message')?.value;
            
            // Валидация
            if (!email || !messageText) {
                if (statusDiv) {
                    statusDiv.innerHTML = '<span class="error">❌ Заполните email и комментарий</span>';
                }
                return;
            }
            
            // Формируем сообщение для Telegram
            const message = `📧 Новая заявка с сайта Indigo\n\n📨 Email: ${email}\n🔗 Ссылка на проект: ${projectLink || 'не указана'}\n💬 Комментарий: ${messageText}`;
            
            // Отправка в Telegram
            fetch(URL_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message,
                })
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    if (statusDiv) {
                        statusDiv.innerHTML = '<span class="success">✅ Сообщение отправлено! Я свяжусь с вами.</span>';
                    }
                    form.reset();
                    setTimeout(() => {
                        closeModal();
                    }, 2000);
                } else {
                    throw new Error('Telegram API error');
                }
            })
            .catch((err) => {
                console.error('Ошибка:', err);
                if (statusDiv) {
                    statusDiv.innerHTML = '<span class="error">❌ Ошибка отправки. Попробуйте позже.</span>';
                }
            });
        });
    }
}
