function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    return fare + (fare * 0.20) + 30;
}

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    return str.replace(/\s+/g, "").toUpperCase();
}
function bestTeam(player1, player2) {
    if (
        typeof player1 !== "object" || player1 === null || Array.isArray(player1) ||
        typeof player2 !== "object" || player2 === null || Array.isArray(player2)
    ) {
        return "Invalid";
    }

    let score1 = player1.foul + player1.cardY + player1.cardR;
    let score2 = player2.foul + player2.cardY + player2.cardR;

    if (score1 < score2) {
        return player1.name;
    } else if (score2 < score1) {
        return player2.name;
    } else {
        return "Tie";
    }
}
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let totalMarks = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let avgScore = Math.round(totalMarks / marks.length);

    return {
        finalScore: avgScore,
        pass: passCount,
        fail: failCount
    };
}
