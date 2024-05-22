document.getElementById('specialist-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const issue = document.getElementById('issue').value;
    const preference = document.getElementById('preference').value;
    const mode = document.getElementById('mode').value;

    const specialist = matchSpecialist(age, gender, issue, preference, mode);

    alert(`We have matched you with: ${specialist.name}, ${specialist.type}.`);
});

function matchSpecialist(age, gender, issue, preference, mode) {
    // Mock data of specialists
    const specialists = [
        { name: 'Dr. Jane Doe', type: 'Psychologist', issues: ['anxiety', 'depression'], modes: ['in-person', 'video'] },
        { name: 'Dr. John Smith', type: 'Psychiatrist', issues: ['stress', 'relationship'], modes: ['video', 'phone'] },
        { name: 'Dr. Alice Brown', type: 'Therapist', issues: ['self-esteem', 'anxiety'], modes: ['in-person'] },
        { name: 'Dr. Robert Wilson', type: 'Counselor', issues: ['depression', 'stress'], modes: ['phone', 'video'] }
    ];

    // Simple matching logic
    for (const specialist of specialists) {
        if ((preference === 'no-preference' || specialist.type.toLowerCase() === preference) &&
            specialist.issues.includes(issue) &&
            specialist.modes.includes(mode)) {
            return specialist;
        }
    }

    return { name: 'No suitable specialist found', type: '' };
}
