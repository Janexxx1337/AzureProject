const callBody = () => {
    const changer = document.querySelector('.log-changer')
    const trigger = document.querySelector('.login');
    const emailBody = document.querySelector('.email-body')
    trigger.addEventListener('click', () => {
        changer.classList.add('block')
        emailBody.classList.add('hide')
        
    })
    }
    
    callBody()


/*     const callCars = (url) => {
        const getData = fetch(url)
        const res = getData.json();
        const {name} = res
    }

    callCars('someURL') */ // Вставить в ЮРЛ API сервера с которого будете колить данные

    const callChoose = () => {
        const btn = document.querySelector('.podbor')
     const input = document.querySelector('.input-group')
        btn.addEventListener('click', () => {
            btn.classList.add('hide')
            input.classList.add('active')
        })
    }

    callChoose()

    const openChoose = () => {
    const x1 = document.querySelector('.x1')
    const btn = document.querySelector('.podbor')
    const input = document.querySelector('.input-group')
    x1.addEventListener('click', () => {
        btn.classList.remove('hide')
        input.classList.remove('active')
    }) 
    }

    openChoose()