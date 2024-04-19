from flask import Flask, request, jsonify
app = Flask(__name__)
def diagonostic_tool():
   # Implementation for diagonostic_tool function
   pass
def web_app():
   # Implementation for web_app function
   pass
def product_info():
   # Implementation for product_info function
   pass
def wvx_system():
   # Implementation for wvx_system function
   pass
def process_query(query):
   # Implement chatbot logic here
   if query == "diagonostic tool":
       return diagonostic_tool()
   elif query == "web app":
       return web_app()
   elif query == "product info":
       return product_info()
   elif query == "wvx system":
       return wvx_system()
   else:
       return "Sorry, I couldn't understand your query."
@app.route('/chatbot', methods=['POST'])
def chatbot():
   data = request.get_json()
   query = data.get('query')
   response = process_query(query)
   return jsonify({'response': response})
if __name__ == '__main__':
   app.run(debug=True)
has context menu
