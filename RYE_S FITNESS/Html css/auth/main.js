import { supabase } from './supabase.js'

window.switchTab = function(tab) {
    const registerForm = document.getElementById('register-form')
    const loginForm = document.getElementById('login-form')

    const tabs = document.querySelectorAll('.auth-tab')

    tabs.forEach(tabBtn => tabBtn.classList.remove('active'))

    if (tab === 'register') {
        registerForm.classList.add('active')
        loginForm.classList.remove('active')
        tabs[0].classList.add('active')
    } else {
        loginForm.classList.add('active')
        registerForm.classList.remove('active')
        tabs[1].classList.add('active')
    }
}

window.doRegister = async function(event) {
    event.preventDefault()

    const firstName = document.getElementById('reg-first').value
    const lastName = document.getElementById('reg-last').value
    const email = document.getElementById('reg-email').value
    const phone = document.getElementById('reg-phone').value
    const password = document.getElementById('reg-password').value
    const confirmPassword = document.getElementById('reg-confirm').value

    if (password !== confirmPassword) {
        alert('Passwords do not match')
        return
    }

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstName,
                last_name: lastName,
                phone: phone
            }
        }
    })

    if (error) {
        alert(error.message)
        return
    }

    alert('Registration successful! Check your email.')
    console.log(data)
}

window.doLogin = async function(event) {
    event.preventDefault()

    const email = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

    if (email === 'admin' && password === 'admin123') {
        alert('Admin login successful!')
        window.location.href = 'Admin.html'
        return
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        alert(error.message)
        return
    }

    alert('Login successful!')
    console.log(data)

    // Redirect example
    window.location.href = 'User.html'
}
