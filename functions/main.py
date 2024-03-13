from firebase_functions import https_fn, logger
from firebase_admin import initialize_app
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os

initialize_app()


@https_fn.on_call()
def send_email(req: https_fn.CallableRequest):

    massage_html_header = """"
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    margin: 0;
                }
        
                * {
                    font-family: 'Arial';
                    color: #05234B;
                }
            
                h1 {
                    margin-left: 10%;
                    margin-right: 10%;
                }
            
                h3 {
                    font-weight: 100;
                    margin-left: 10%;
                    margin-right: 10%;
                    margin-bottom: 100px;
                }
            
                table, th, td {
                    border: 1px solid black;
                    border-collapse: collapse;
                    padding: 10px;
                }
        
                .table-div {
                    display: flex;
                    justify-content: center;
                }
        
                footer {
                    padding-top: 40px;
                    text-align: center;
                    background-color: #05234B;
                    height: 70px;
                    color: white;
                }
            </style>
        </head>
        <body>
    """

    massage_html_body = f""""
            <h1>Wiadomość od {req.data['name']}</h1><br/>
            <h3>{req.data['message']}</h3><br/><br/>
            <div class="table-div">
                <table>
                    <tr>
                        <th colspan="2">
                            <b>DANE NADAWCY</b>
                        </th>
                    </tr>
                    <tr>
                        <td><b>OD: </b></td>
                        <td>{req.data['name']}</td>
                    </tr>
                    <tr>
                        <td><b>ADRES E-MAIL:</b></td>
                        <td><a href="mailto:{req.data['email']}">{req.data['email']}</a></td>
                    </tr><tr>
                        <td><b>NR. TEL:</b></td>
                        <td>{req.data['phone']}</td>
                    </tr>
                </table>
            </div>
            <br/><br/>
            <footer>Estradex &copy; 2024</footer>
        </body>
        </html>
    """
    
    message = Mail(
        from_email=os.environ.get('SENDGRID_FROM_EMAIL'),
        to_emails=os.environ.get('SENDGRID_TO_EMAIL'),
        subject=f'Wiadomość od {req.data["name"]}',
        html_content=(massage_html_header + massage_html_body)
    )

    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        logger.info(f'{response.status_code}, {response.body}, {response.headers}')
        return response.status_code
    except Exception as e:
        logger.error(e.message)
        return 500
