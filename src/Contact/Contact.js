import React from 'react';
import '../scss/Contact/Contact.scss';

export default function Contact(){
    return (
        <div className="page-contact">
            <div className="info"><h1>Контактна інформація</h1></div>
            <div className="contact-info"><strong>Адреса:</strong>      м. Львів, вул. Степана Бандери 25</div>
            <div className="contact-info"><strong>Графік роботи:</strong>     08:00-20:00 (щоденно)</div>
            <div className="contact-info"><strong>Телефони:</strong>   (032)-882-993, 050-73-14-500</div>
            <div className="contact-info"><strong>Електронна пошта:</strong>  admin@gadgetos.com</div>
        </div>
    )
}