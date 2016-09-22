from bottle import route, run, request, static_file

@route('/detectFace', method='POST')
def detectFace():
    print request.body.read()
    return {"first": "This is the first", "second": "the second one here",
            "third": "and finally the third one!"}


@route('/<filename>')
def server_static(filename):
    return static_file(filename, root='.')

run(host='localhost', port=8080)



