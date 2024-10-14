import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
httpClient = inject(HttpClient) ;
contactData = {
  name:"",
  email:"",
  message:"",
  pPolicyAccepted: false,
};

mailTest = false;
//dieses hier muss zu false umgeändert werden, bevor ich diese auf den Server lade

  post = {
    endPoint: 'https://rabia-soeylemez.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

onSubmit(ngForm: NgForm) {
  console.log(this.contactData);
  if (ngForm.form.valid && !this.mailTest && this.contactData.pPolicyAccepted) {
    this.httpClient.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
          console.log('subscribe.next-teil');
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }
  //die erste if-Abfrage wird nur durchgeführt,wenn das Projekt über die domain geladen wird, 
  //sonst wird der elseIf Teil geladen 
  else if (ngForm.form.valid && this.mailTest) {
    ngForm.resetForm();
    console.log('Else-if-Teil');
  }else {
    console.error('Form is invalid or privacy policy not accepted');
  }
}

}
