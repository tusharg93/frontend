import os
from flask import Flask,render_template,request, redirect, url_for, send_from_directory
from time import time

app = Flask(
    __name__,
    template_folder=os.path.join(os.getcwd(), 'templates')
)
@app.before_request
def before():
    return


api_hostname = ''
static_path = '/app/static/'
current_time = time()

@app.route('/',strict_slashes=False)
def index():
        return render_template('<html><title>Welcome!</title></body></html>')




if __name__=="__main__":
    app.run(host='0.0.0.0')

