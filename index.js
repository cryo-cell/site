const audioContext = new AudioContext();

const buffer = audioContext.createBuffer(
1,
	audioContext.sampleRate * 1,
		audioContext.sampleRate
)

const channelData = buffer.getChannelData(0);

console.log(channelData);

for (let i=0; i<buffer.length; i++){
channelData[i] = Math.random() * 2 -1;
}

const gainControl = audioContext.createGain();
gainControl.gain.setValueAtTime(0, 0.5, 0);
gainControl.connect(audioContext.destination);

const button = document.createElement("button");
button.innerText = "WhiteNoise";
button.addEventListener("click", () => {
const whiteNoiseSource =
 audioContext.createBufferSource();

whiteNoiseSource.buffer = buffer;

whiteNoiseSource.connect(gainControl);
whiteNoiseSource.start();
});

document.body.appendChild(button);

const snareButton = document.createElement("button");
snareButton.innerText = "Snare";
snareButton.addEventListener("click", () => {
const snareButtonSource =
 audioContext.createBufferSource();

snareButtonSource.buffer = buffer;

snareButtonSource.connect(gainControl);
snareButtonSource.start();
})

document.body.appendChild(snareButton);
