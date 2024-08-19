const input = document.getElementById("input")

function reversestring(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reversestring(value)
    
    if (value === reverse) {
        alert("This word is indeed a Palindrome")
    } else {
        alert("This word is not a Palindrome")
    }

    input.value = ""

}