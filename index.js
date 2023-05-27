
const renderEmailListUnread = (email) => {
    const emailList = document.querySelector('.inbox-unread')
    emailList.innerHTML += email
        .map((email) => {
            return `
                <div class="email">
                    <div class="email__head">
                        <button class="email__icon email__icon--closed"></button>
                        <div class="email__info">
                            <div class="email__sender">${email.sender.name}</div>
                            <div class="email__subject">${email.subject}</div>
                        </div>
                        <div class="email__time">${email.time}</div>
                    </div>
                    <div class="email__body"></div>
                </div>
            `
        })
        .join('')
}

const renderEmailListRead = (email) => {
    const emailList = document.querySelector('.inbox-read')
    emailList.innerHTML += email
        .map((email) => {
            return `
                <div class="email" class="email__icon--opened">
                    <div class="email__head">
                        <button class="email__icon email__icon--opened"></button>
                        <div class="email__info">
                            <div class="email__sender">${email.sender.name}</div>
                            <div class="email__subject">${email.subject}</div>
                        </div>
                        <div class="email__time">${email.time}</div>
                    </div>
                    <div class="email__body"></div>
                </div>
            `
        })
        .join('')
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then((response) => response.json())
    .then((dataUnread) => renderEmailListUnread(dataUnread.emails))

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
    .then((response) => response.json())
    .then((dataRead) => renderEmailListRead(dataRead.emails))