/**
 * Created by Rune on 06-03-2016.
 */

//write some more..
app.use(session());

var session = req.session;

session.user = req.body.user;

// EU law side
// http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm