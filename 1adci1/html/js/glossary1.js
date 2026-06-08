const jsonGlossary = {
"ex": "This is an example of a glossary pop up window when you click words with a red underline. (key ex)",
"fi": "FTLE - Finite Time Lyapunov Exponent - is a measure of the rate of stretching of fluid parcels within a time-varying velocity field over a finite time interval, used to understand and visualize transport mechanisms in unsteady flows. (key fi)",
"la": "LCS are Lagrangian Coherent Structures. In STS, LCS is used to describe fluid dynamics of market sentiment. (key la)",
"pi": "Pitchforks are drawing tools. In STS, pitchforks are used to search for fluid dynamics in market sentiment. (key pi)"

};

function gk(key) {
	const container = document.getElementById("glossary-description");
	container.textContent = jsonGlossary[key];
}