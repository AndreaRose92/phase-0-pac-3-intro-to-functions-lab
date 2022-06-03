const string = "Hello!"
let greeting;

function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    switch (string) {
        case whisper(string):
            greeting = "I can\'t hear you!"
            break
        case shout(string):
            greeting = "YES INDEED!"
            break
        case "Let\'s have dinner together!":
            greeting = "I would love to!"
            break
    }
    return greeting

}