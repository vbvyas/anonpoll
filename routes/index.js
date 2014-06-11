exports.index = function(req, res){
  res.render('index', { title: 'anonpoll' });
};

exports.post_data = function(req, res){
  res.json(req.body);
};
