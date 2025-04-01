import { Resend } from 'resend';

const resend = new Resend('re_W5zHN6GH_E1gH6aKtiiLszQ2uAhX4kLsw');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'felipe.coutinho.psl@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});