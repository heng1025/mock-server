// use addon to mock http request
module.exports = {
  // GET
  "GET /v1/posts/:id": function(req, res, next){
	// response json format
    res.send({
      title: "title changed",
      content: "tow post hahahah"
    })
  },
  // PUT POST DELETE is the same
  "PUT /v1/posts/:id": function(){
  },
  "POST /v1/posts": function(){
  },
  "DELETE /v1/posts/:id": function(){
  }
}