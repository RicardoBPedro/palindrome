exports.isPalindrome = (req, res, next) => {
    const words = req.params.words.replace('words=','');

    if (isPalindrome(words)) {
        res.status(200).json({
            message: 'It is a palindrome'
        });
    } else {
        res.status(400).json({
            message: 'It is not a palindrome '
        });   
    }
}

//Test if words are a palindrome
function isPalindrome(words) {
    if (words === null || words === undefined) {
        return false
    }
    
    var forwards = words.toLowerCase();
    var backwards = forwards.split("").reverse().join("");

    return forwards === backwards
}