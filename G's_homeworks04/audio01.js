(function() {

    var onDOMContentLoaded = function() {

        window.AudioContext = window.AudioContext || window.webkitAudioContext;

        try {
            // Create the instance of AudioContext
            var context = new AudioContext();
        } catch (error) {
            window.alert(error.message + ' : Please use Chrome or Safari.');
            return;
        }

        // for the instance of AudioBufferSourceNode
        var source = null;

        // for legacy browsers
        context.createGain = context.createGain || context.createGainNode;

        // Create the instance of GainNode
        var gain = context.createGain();

        // Create the instance of AnalyserNode
        var analyser = context.createAnalyser();

        // for drawTimeDomain(), drawSpectrum()
        var timerids = [null, null];
        var interval = document.getElementById('range-draw-interval').valueAsNumber;

        var drawAudio = function(canvas, data, sampleRate) {
            var canvasContext = canvas.getContext('2d');

            var width  = canvas.width;
            var height = canvas.height;

            var paddingTop    = 20;
            var paddingBottom = 20;
            var paddingLeft   = 30;
            var paddingRight  = 30;

            var innerWidth  = width  - paddingLeft - paddingRight;
            var innerHeight = height - paddingTop  - paddingBottom;
            var innerBottom = height - paddingBottom;

            var middle = (innerHeight / 2) + paddingTop;

            // Sampling period
            var period = 1 / sampleRate;

            // This value is the number of samples during 50 msec
            var n50msec = Math.floor(50 * Math.pow(10, -3) * sampleRate);

            // This value is the number of samples during 60 sec
            var n60sec = Math.floor(60 * sampleRate);

            // Clear previous data
            canvasContext.clearRect(0, 0, width, height);

            // Draw audio wave
            canvasContext.beginPath();

            for (var i = 0, len = data.length; i < len; i++) {
                // 50 msec ?
                if ((i % n50msec) === 0) {
                    var x = Math.floor((i / len) * innerWidth) + paddingLeft;
                    var y = Math.floor(((1 - data[i]) / 2) * innerHeight) + paddingTop;

                    if (i === 0) {
                        canvasContext.moveTo(x, y);
                    } else {
                        canvasContext.lineTo(x, y);
                    }
                }

                // 60 sec ?
                if ((i % n60sec) === 0) {
                    var sec  = i * period;  // index -&gt; time
                    var text = Math.floor(sec) + ' sec';

                    // Draw grid (X)
                    canvasContext.fillStyle = 'rgba(255, 0, 0, 1.0)';
                    canvasContext.fillRect(x, paddingTop, 1, innerHeight);

                    // Draw text (X)
                    canvasContext.fillStyle = 'rgba(255, 255, 255, 1.0)';
                    canvasContext.font      = '16px "Times New Roman"';
                    canvasContext.fillText(text, (x - (canvasContext.measureText(text).width / 2)), (height - 3));
                }
            }

            canvasContext.strokeStyle = 'rgba(0, 0, 255, 1.0)';
            canvasContext.lineWidth   = 0.5;
            canvasContext.lineCap     = 'round';
            canvasContext.lineJoin    = 'miter';
            canvasContext.stroke();

            // Draw grid (Y)
            canvasContext.fillStyle = 'rgba(255, 0, 0, 1.0)';
            canvasContext.fillRect(paddingLeft, middle,      innerWidth, 1);
            canvasContext.fillRect(paddingLeft, paddingTop,  innerWidth, 1);
            canvasContext.fillRect(paddingLeft, innerBottom, innerWidth, 1);

            // Draw text (Y)
            canvasContext.fillStyle = 'rgba(255, 255, 255, 1.0)';
            canvasContext.font      = '16px "Times New Roman"';
            canvasContext.fillText(' 1.00', 3, paddingTop);
            canvasContext.fillText(' 0.00', 3, middle);
            canvasContext.fillText('-1.00', 3, innerBottom);
        };

        var canvases = {
            time     : null,
            spectrum : null
        };

        var contexts = {
            time     : null,
            spectrum : null
        };

        canvases.time     = document.querySelectorAll('canvas')[2];
        canvases.spectrum = document.querySelectorAll('canvas')[3];

        contexts.time     = canvases.time.getContext('2d');
        contexts.spectrum = canvases.spectrum.getContext('2d');

        var drawTimeDomain = function(sampleRate) {
            var canvas        = canvases.time;
            var canvasContext = contexts.time;

            var width  = canvas.width;
            var height = canvas.height;

            var paddingTop    = 20;
            var paddingBottom = 20;
            var paddingLeft   = 30;
            var paddingRight  = 30;

            var innerWidth  = width  - paddingLeft - paddingRight;
            var innerHeight = height - paddingTop  - paddingBottom;
            var innerBottom = height - paddingBottom;

            var middle = (innerHeight / 2) + paddingTop;

            // Sampling period
            var period = 1 / sampleRate;

            // This value is the number of samples during 5 msec
            var n5msec = Math.floor(5 * Math.pow(10, -3) * sampleRate);

            // Get data for drawing sound wave
            var times = new Uint8Array(analyser.fftSize);
            analyser.getByteTimeDomainData(times);

            // Clear previous data
            canvasContext.clearRect(0, 0, width, height);

            // Draw sound wave
            canvasContext.beginPath();

            for (var i = 0, len = times.length; i &lt; len; i++) {
                var x = Math.floor((i / len) * innerWidth) + paddingLeft;
                var y = Math.floor((1 - (times[i] / 255)) * innerHeight) + paddingTop;

                if (i === 0) {
                    canvasContext.moveTo(x, y);
                } else {
                    canvasContext.lineTo(x, y);
                }

                // 5 msec ?
                if ((i % n5msec) === 0) {
                    var sec  = i * period;             // index -&gt; time
                    var msec = sec * Math.pow(10, 3);  // sec -&gt; msec
                    var text = Math.round(msec) + ' msec';

                    // Draw grid (X)
                    canvasContext.fillStyle = 'rgba(255, 0, 0, 1.0)';
                    canvasContext.fillRect(x, paddingTop, 1, innerHeight);

                    // Draw text (X)
                    canvasContext.fillStyle = 'rgba(255, 255, 255, 1.0)';
                    canvasContext.font      = '16px "Times New Roman"';
                    canvasContext.fillText(text, (x - (canvasContext.measureText(text).width / 2)), (height - 3));
                }
            }

            canvasContext.strokeStyle = 'rgba(0, 0, 255, 1.0)';
            canvasContext.lineWidth   = 1.5;
            canvasContext.lineCap     = 'round';
            canvasContext.lineJoin    = 'miter';
            canvasContext.stroke();

            // Draw grid (Y)
            canvasContext.fillStyle = 'rgba(255, 0, 0, 1.0)';
            canvasContext.fillRect(paddingLeft, middle,      innerWidth, 1);
            canvasContext.fillRect(paddingLeft, paddingTop,  innerWidth, 1);
            canvasContext.fillRect(paddingLeft, innerBottom, innerWidth, 1);

            // Draw text (Y)
            canvasContext.fillStyle = 'rgba(255, 255, 255, 1.0)';
            canvasContext.font      = '16px "Times New Roman"';
            canvasContext.fillText(' 1.00', 3, paddingTop);
            canvasContext.fillText(' 0.00', 3, middle);
            canvasContext.fillText('-1.00', 3, innerBottom);

            timerids[0] = window.setTimeout(function() {
                drawTimeDomain(sampleRate);
            }, interval);
        };

        var drawSpectrum = function(sampleRate) {
            var canvas        = canvases.spectrum;
            var canvasContext = contexts.spectrum;

            var width  = canvas.width;
            var height = canvas.height;

            var paddingTop    = 20;
            var paddingBottom = 20;
            var paddingLeft   = 30;
            var paddingRight  = 30;

            var innerWidth  = width  - paddingLeft - paddingRight;
            var innerHeight = height - paddingTop  - paddingBottom;
            var innerBottom = height - paddingBottom;

            var middle = (innerHeight / 2) + paddingTop;

            // Frequency resolution
            var fsDivN = sampleRate / analyser.fftSize;

            // This value is the number of samples during 1000 Hz
            var n1kHz = Math.floor(1000 / fsDivN);

            // Get data for drawing spectrum
            var spectrums = new Uint8Array(analyser.frequencyBinCount / 4);
            analyser.getByteFrequencyData(spectrums);

            // Clear previous data
            canvasContext.clearRect(0, 0, width, height);

            // Draw spectrum
            canvasContext.beginPath();

            for (var i = 0, len = spectrums.length; i &lt; len; i++) {
                var x = Math.floor((i / len) * innerWidth) + paddingLeft;
                var y = Math.floor((1 - (spectrums[i] / 255)) * innerHeight) + paddingTop;

                if (i === 0) {
                    canvasContext.moveTo(x, y);
                } else {
                    canvasContext.lineTo(x, y);
                }

                // 1000 Hz ?
                if ((i % n1kHz) === 0) {
                    var f    = Math.floor(1000 * (i / n1kHz));  // index -&gt; frequency
                    var text = (f &lt; 1000) ? (f + ' Hz') : ((f / 1000) + ' kHz');

                    // Draw grid (X)
                    canvasContext.fillStyle = 'rgba(255, 0, 0, 1.0)';
                    canvasContext.fillRect(x, paddingTop, 1, innerHeight);

                    // Draw text (X)
                    canvasContext.fillStyle = 'rgba(255, 255, 255, 1.0)';
                    canvasContext.font      = '16px "Times New Roman"';
                    canvasContext.fillText(text, (x - (canvasContext.measureText(text).width / 2)), (height - 3));
                }
            }

            canvasContext.strokeStyle = 'rgba(0, 0, 255, 1.0)';
            canvasContext.lineWidth   = 1.5;
            canvasContext.lineCap     = 'round';
            canvasContext.lineJoin    = 'miter';
            canvasContext.stroke();

            // Draw grid (Y)
            canvasContext.fillStyle = 'rgba(255, 0, 0, 1.0)';
            canvasContext.fillRect(paddingLeft, middle,      innerWidth, 1);
            canvasContext.fillRect(paddingLeft, paddingTop,  innerWidth, 1);
            canvasContext.fillRect(paddingLeft, innerBottom, innerWidth, 1);

            // Draw text (Y)
            canvasContext.fillStyle = 'rgba(255, 255, 255, 1.0)';
            canvasContext.font      = '16px "Times New Roman"';
            canvasContext.fillText('1.00', 3, paddingTop);
            canvasContext.fillText('0.50', 3, middle);
            canvasContext.fillText('0.00', 3, innerBottom);

            timerids[1] = window.setTimeout(function() {
                drawSpectrum(sampleRate);
            }, interval);
        };

        // Trigger 'ended' event
        var trigger = function() {
            var event = document.createEvent('Event');
            event.initEvent('ended', true, true);

            if (source instanceof AudioBufferSourceNode) {
                source.dispatchEvent(event);
            }
        };

        // This funciton is executed after getting ArrayBuffer of audio data
        var startAudio = function(arrayBuffer) {

            // The 2nd argument for decodeAudioData
            var successCallback = function(audioBuffer) {
                // The 1st argument (audioBuffer) is the instance of AudioBuffer

                // Get audio binary data for drawing wave
                var channelLs = new Float32Array(audioBuffer.length);
                var channelRs = new Float32Array(audioBuffer.length);

                console.log('numberOfChannels : ' + audioBuffer.numberOfChannels);

                // Stereo ?
                if (audioBuffer.numberOfChannels &gt; 1) {
                    // Stereo
                    channelLs.set(audioBuffer.getChannelData(0));
                    channelRs.set(audioBuffer.getChannelData(1));

                    drawAudio(document.querySelectorAll('canvas')[0], channelLs, audioBuffer.sampleRate);
                    drawAudio(document.querySelectorAll('canvas')[1], channelRs, audioBuffer.sampleRate);
                } else if (audioBuffer.numberOfChannels &gt; 0) {
                    // Monaural
                    channelLs.set(audioBuffer.getChannelData(0));
                    drawAudio(document.querySelectorAll('canvas')[0], channelLs, audioBuffer.sampleRate);
                } else {
                    window.alert('The number of channels is invalid.');
                    return;
                }

                // If there is previous AudioBufferSourceNode, program stops previous audio
                if ((source instanceof AudioBufferSourceNode) &amp;&amp; (source.buffer instanceof AudioBuffer)) {
                    // Execute onended event handler
                    trigger();
                    source = null;
                }

                // Create the instance of AudioBufferSourceNode
                source = context.createBufferSource();

                // for legacy browsers
                source.start = source.start || source.noteOn;
                source.stop  = source.stop  || source.noteOff;

                // Set the instance of AudioBuffer
                source.buffer = audioBuffer;

                // Set parameters
                source.playbackRate.value = document.getElementById('range-playback-rate').valueAsNumber;
                source.loop               = document.querySelector('[type="checkbox"]').checked;

                // AudioBufferSourceNode (Input) -> GainNode (Volume) -> AnalyserNode (Visualization) -> AudioDestinationNode (Output)
                source.connect(gain);
                gain.connect(analyser);
                analyser.connect(context.destination);

                // Start audio
                source.start(0);

                // Draw wave (Real Time)
                drawTimeDomain(audioBuffer.sampleRate);
                drawSpectrum(audioBuffer.sampleRate);

                // Set Callback
                source.onended = function(event) {
                    // Remove event handler
                    source.onended     = null;
                    document.onkeydown = null;

                    // Stop audio
                    source.stop(0);

                    // Stop drawing sound wave
                    if (timerids[0] !== null) {window.clearTimeout(timerids[0]); timerids[0] = null;}
                    if (timerids[1] !== null) {window.clearTimeout(timerids[1]); timerids[1] = null;}

                    console.log('STOP by "on' + event.type + '" event handler !!');

                    // Audio is not started !!
                    // It is necessary to create the instance of AudioBufferSourceNode again

                    // Cannot replay
                    // source.start(0);
                };

                // Stop audio
                document.onkeydown = function(event) {
                    // Space ?
                    if (event.keyCode !== 32) {
                        return;
                    }

                    // Execute onended event handler
                    trigger();

                    return false;
                };
            };

            // The 3rd argument for decodeAudioData
            var errorCallback = function(error) {
                if (error instanceof Error) {
                    window.alert(error.message);
                } else {
                    window.alert('Error : "decodeAudioData" method.');
                }
            };

            // Create the instance of AudioBuffer (Asynchronously)
            context.decodeAudioData(arrayBuffer, successCallback, errorCallback);
        };

        /*
         * File Uploader
         */

        document.getElementById('file-upload-audio').addEventListener('change', function(event) {
            var uploader     = this;
            var progressArea = document.getElementById('progress-file-upload-audio');

            // Get the instance of File (extends Blob)
            var file = event.target.files[0];

            if (!(file instanceof File)) {
                window.alert('Please upload file.');
            } else if (file.type.indexOf('audio') === -1) {
                window.alert('Please upload audio file.');
            } else {
                // Create the instance of FileReader
                var reader = new FileReader();

                reader.onprogress = function(event) {
                    if (event.lengthComputable &amp;&amp; (event.total &gt; 0)) {
                        var rate = Math.floor((event.loaded / event.total) * 100);
                        progressArea.textContent = rate + ' %';
                    }
                };

                reader.onerror = function() {
                    window.alert('FileReader Error : Error code is ' + reader.error.code);
                    uploader.value = '';
                };

                // Success read
                reader.onload = function() {
                    var arrayBuffer = reader.result;  // Get ArrayBuffer

                    startAudio(arrayBuffer);

                    uploader.value           = '';
                    progressArea.textContent = file.name;
                };

                // Read the instance of File
                reader.readAsArrayBuffer(file);
            }
        }, false);

        // Control Draw Interval
        document.getElementById('range-draw-interval').addEventListener('input', function() {
            interval = this.valueAsNumber;
            document.getElementById('output-draw-interval').textContent = this.value;
        }, false);

        // Control Volume
        document.getElementById('range-volume').addEventListener('input', function() {
            var min = gain.gain.minValue || 0;
            var max = gain.gain.maxValue || 1;

            if ((this.valueAsNumber &gt;= min) &amp;&amp; (this.valueAsNumber &lt;= max)) {
                gain.gain.value = this.valueAsNumber;
                document.getElementById('output-volume').textContent = this.value;
            }
        }, false);

        // Control playbackRate
        document.getElementById('range-playback-rate').addEventListener('input', function() {
            if (source instanceof AudioBufferSourceNode) {
                var min = source.playbackRate.minValue || 0;
                var max = source.playbackRate.maxValue || 1024;

                if ((this.valueAsNumber &gt;= min) &amp;&amp; (this.valueAsNumber &lt;= max)) {
                    source.playbackRate.value = this.valueAsNumber;
                }
            }

            document.getElementById('output-playback-rate').textContent = this.value;
        }, false);

        // Toggle loop
        document.querySelector('[type="checkbox"]').addEventListener(EventWrapper.CLICK, function() {
            if (source instanceof AudioBufferSourceNode) {
                source.loop = this.checked;
            }
        }, false);

        // Select fftSize
        document.getElementById('select-fft-size').addEventListener('change', function() {
            switch (parseInt(this.value)) {
                case   32 :
                case   64 :
                case  128 :
                case  256 :
                case  512 :
                case 1024 :
                case 2048 :
                    analyser.fftSize = this.value;
                    break;
                default :
                    window.alert('The selected FFT size is invalid.');
                    break;
            }
        }, false);

        // Control smoothingTimeConstant
        document.getElementById('range-smoothing-time-constant').addEventListener('input', function() {
            var min = 0;
            var max = 1;

            if ((this.valueAsNumber &gt;= min) && (this.valueAsNumber &lt;= max)) {
                analyser.smoothingTimeConstant = this.valueAsNumber;
                document.getElementById('output-smoothing-time-constant').textContent = this.value;
            }
        }, false);
    };

    if ((document.readyState === 'interactive') || (document.readyState === 'complete')) {
        onDOMContentLoaded();
    } else {
        document.addEventListener('DOMContentLoaded', onDOMContentLoaded, true);
    }

})();
