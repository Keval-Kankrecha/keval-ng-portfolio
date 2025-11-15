import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: false,
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  loading = false;

  constructor(private toastr: ToastrService) {}

  sendEmail() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.toastr.error('Please fill all fields');
      return;
    }

    this.loading = true;

    const serviceID = 'service_flybors';
    const templateID = 'template_0x4fnab';
    const publicKey = 'JPtOYOMj9rFB42WTL';

    emailjs
      .send(serviceID, templateID, this.formData, publicKey)
      .then(() => {
        this.toastr.success('Message sent successfully!','Success');
        this.formData = { name: '', email: '', message: '' };
        this.loading = false;
        this.toastr.success('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.toastr.error('Failed to send message, please try again later.');
        this.loading = false;
      });
  }
}
