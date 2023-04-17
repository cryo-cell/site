const noiseButton = document.createElement("button");
noiseButton.innerText = "WhiteNoise";


noiseButton.addEventListener("click", () => {
	const audioContext = new AudioContext();

	const buffer = audioContext.createBuffer(
	1,
		audioContext.sampleRate * 0.1,
			audioContext.sampleRate
	)
	
	const channelData = buffer.getChannelData(0);
	for (let i=0; i<buffer.length; i++){
		channelData[i] = Math.random() * 2 -1;
	}
	
	const gainControl = audioContext.createGain();
		gainControl.gain.setValueAtTime(0, 0.5, 0);
		gainControl.connect(audioContext.destination);
	
	const whiteNoiseSource =
 		audioContext.createBufferSource();

		whiteNoiseSource.buffer = buffer;
		whiteNoiseSource.connect(gainControl);
		whiteNoiseSource.start();
});

document.body.appendChild(noiseButton);



const snareButton = document.createElement("button");
snareButton.innerText = "Snare";


snareButton.addEventListener("click", () => {
	const audioContext = new AudioContext();

	const buffer = audioContext.createBuffer(
		1,
			audioContext.sampleRate * 0.05,
				audioContext.sampleRate
	)

	const channelData = buffer.getChannelData(0);
		for (let i=0; i<buffer.length; i++){
			channelData[i] = Math.random() * 2 -1;
		}

	const gainControl = audioContext.createGain();
		gainControl.gain.setValueAtTime(0, 0.5, 0);
		gainControl.connect(audioContext.destination);

	const snareFilter = 
		audioContext.createBiquadFilter();
		snareFilter.type = "highpass";
		snareFilter.frequency.value = 5000;
		snareFilter.connect(gainControl);

	const snareButtonSource =
		audioContext.createBufferSource();
		snareButtonSource.buffer = buffer;
		snareButtonSource.connect(gainControl);
		snareButtonSource.start();
})

document.body.appendChild(snareButton);



const kickButton = document.createElement("button");
kickButton.innerText = "Kick";
kickButton.addEventListener("click", ()=> {
	const audioContext = new AudioContext();
/*
	const buffer = audioContext.createBuffer(
	1,
		audioContext.sampleRate * 0.05,
			audioContext.sampleRate
	)
	
	const channelData = buffer.getChannelData(0);
		
	for (let i=0; i<buffer.length; i++){
		channelData[i] = Math.random() * 2 -1;
	}
*/	
	const gainControl = audioContext.createGain();
		gainControl.gain.setValueAtTime(0, 0.5, 0);
		gainControl.connect(audioContext.destination);
/*
	const whiteNoiseSource =
 		audioContext.createBufferSource();

		whiteNoiseSource.buffer = buffer;
		whiteNoiseSource.connect(gainControl);
		whiteNoiseSource.start();
		*/
	const osc = 
		audioContext.createOscillator();
		osc.frequency.setValueAtTime(261.6,0)
		osc.connect(gainControl); 
		osc.start();
})

document.body.appendChild(kickButton);	

document.addEventListener('keydown', (event) => {
	switch(event.key){
		case "q":
			const audioContext = new AudioContext();

	const buffer = audioContext.createBuffer(
	1,
		audioContext.sampleRate * 0.1,
			audioContext.sampleRate
	)
	
	const channelData = buffer.getChannelData(0);
	for (let i=0; i<buffer.length; i++){
		channelData[i] = Math.random() * 2 -1;
	}
	
	const gainControl = audioContext.createGain();
		gainControl.gain.setValueAtTime(0, 0.5, 0);
		gainControl.connect(audioContext.destination);
	
	const whiteNoiseSource =
 		audioContext.createBufferSource();

		whiteNoiseSource.buffer = buffer;
		whiteNoiseSource.connect(gainControl);
		whiteNoiseSource.start()
		break;
		case "w":
			const snareAudioContext = new AudioContext();

	const snareBuffer = snareAudioContext.createBuffer(
		1,
			snareAudioContext.sampleRate * 0.05,
				snareAudioContext.sampleRate
	)

	const snareChannelData = snareBuffer.getChannelData(0);
		for (let i=0; i<snareBuffer.length; i++){
			snareChannelData[i] = Math.random() * 2 -1;
		}

	const snareGainControl = snareAudioContext.createGain();
		snareGainControl.gain.setValueAtTime(0, 0.5, 0);
		snareGainControl.connect(snareAudioContext.destination);

	const snareFilter = 
		snareAudioContext.createBiquadFilter();
		snareFilter.type = "highpass";
		snareFilter.frequency.value = 5000;
		snareFilter.connect(snareGainControl);

	const snareButtonSource =
		snareAudioContext.createBufferSource();
		snareButtonSource.buffer = snareBuffer;
		snareButtonSource.connect(snareGainControl);
		snareButtonSource.start();	
		break;
		case "e":
			const kickAudioContext = new AudioContext();


	const kickGainControl = kickAudioContext.createGain();
		kickGainControl.gain.setValueAtTime(0, 0.5, 0);
		kickGainControl.connect(kickAudioContext.destination);

	const kickFilter = 
		kickAudioContext.createBiquadFilter();
		kickFilter.type = "highpass";
		kickFilter.frequency.value = 5000;
		kickFilter.connect(kickGainControl);

	const osc = 
		kickAudioContext.createOscillator();
		osc.frequency.setValueAtTime(150,0);
		osc.frequency.exponentialRampToValueAtTime(
			0.001,
			kickAudioContext.currentTime * 0.
		)
		osc.connect(kickGainControl); 
		osc.start();
		break;

	}
})
