
import sys
sys.path.append("./lib")

import json
import webapp2
import jsonschema
from jsonschema import validate


class SiteData(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'application/json'
        schema = {
            "type": "object",
            "additionalProperties": False,
            "properties": {
                "site_title": {"type": "string"},
            },
            "required": ["site_title"]
        }

        with open('data.json') as json_file:
            data = json.load(json_file)
            try:
                validate(data, schema)
                self.response.write(json.dumps(data))
            except jsonschema.exceptions.ValidationError:
                self.error(400)
                self.response.write(json.dumps({
                    'error': 'InvalidJsonSchema'
                }))


app = webapp2.WSGIApplication([
    ('/data', SiteData)
], debug=True)
