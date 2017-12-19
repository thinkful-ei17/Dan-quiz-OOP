// HTML generator functions
// ========================

var htmlgenerator = (function() {
   return {
 		generateAnswerItemHtml: function(answer) {
		    return `
		          <li class="answer-item">
		          <input type="radio" name="answers" value="${answer}" />
		          <span class="answer-text">${answer}</span>
		      </li>
		    `;
		}
   	};
}());