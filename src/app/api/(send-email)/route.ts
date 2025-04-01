
import { EmailTemplate } from '@/components/organisms/email-template/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Carpost <no-reply@carpost.com>',
            to: ['felipe.coutinho.psl@gmail.com'],
            subject: 'Hello world',
            html: `<div></div>`,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}