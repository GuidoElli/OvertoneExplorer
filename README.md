
# Concept

The idea behind this project was to create an additive synthesizer in which the user has full control, in terms of amplitude and frequency, over all the sinusoidal waves that make up the sound. The user plays some notes on the keyboard and visualizes, in a graphic way, amplitude and frequancy values of every harmonic.


<p align="center">
  <img src="https://raw.githubusercontent.com/GuidoElli/OvertoneExplorer/master/img-readme/all.PNG" alt="img" width="80%"/>
</p>


# Instructions
## Visualizer

In the right part of the screen, the columns represent the overtones (here called tracks). Track 0 (on the left) is the fundamental, track 1 is the first harmonic, track 2 is the second harmonic, and so on. The section coloured in blue is related to the amplitude (in dB). The green section is about frequency. If they are all set to 0, it does not mean they have zero frequency, but that they are at exact multiples of the fundamental. The interval between the exact multiple and the actual frequency is measured in cents of semitone (eg. "+100 cents" means 1 semitone above). 
- **Drag the mouse** on the tracks to change amplitude and frequency values.
- **Zoom in and out** using the controls at the top or the mouse wheel. When you zoom in, at a certain level, you can see the track numbers, as well as amplitude and frequency values.


```
img
```

## Track selection
There are some buttons above amplitude visualizer:
- **Play buttons** (coloured in grey)
- **Edit buttons** (visible only in editors)

For selection, edit and play buttons behave the same, so we will see just the play ones. If you click on *Play (All)* you can toggle playback (mute and unmute) to every track. Click on the single buttons to do it independently for each track or drag the mouse to toggle multiple tracks at the same time. Clicking on the *gear* button, some options are available. The selection mode changes the behaviour of the buttons:
- **ADD**: default, add elements (removes if all selected)
- **REMOVE**: [hold CTRL] remove elements
- **TOGGLE**: [hold SHIFT] toggle elementsThe groups are predefined groups of tracks (for example the ones with even/odd track number).

While a group is selected you can select just the tracks that belong to the group. 

*Note: if a single button is clicked, it will always toggle from the previous value. Instead, selection mode and groups options work with the 'Play (All)' button or by selecting multiple tracks dragging the mouse.*

## Amplitude Editor






























In this section you can change the amplitude of the tracks, adding or subtracting a specific amount. You can choose the tracks you want to edit by using the edit buttons above the visualizer (the same as for playback). You can give a shape to the tracks, choosing between:
- **FLAT**: all tracks with the same amount
- **TRIANGLE**: a sort of bandpass filter. Use the *Center* and *Width* knobs to control the triangle's position and shape
- **CURVE**: same as triangle, but with a gaussian shape

Under the shape section you can visualize what is happening in an intuitive way. When the *Random* option is on, every amount is scaled by a random factor in range (0, 1). The mirror option enables also the opposite direction and the random factor will be in range (-1, 1). You can change all the random factors by clicking on randomize. After clicking on *Apply*, changes are saves and you can do other editing. To set all amplitudes to default, click *Reset*.




## Frequency Editor
This has the exact same structure as the amplitude editor: here, instead, you change the frequencies.





## Chroma Editor
The Chroma editor allows to change amplitudes and frequencies in a particular way. On a MIDI keyboard, you should play both keys below and above a *split note* (that you can choose in settings). The keys below the split note are the *real notes* you are playing, while keys above the split note (we will call them *overtone notes*) change the overtones' amplitude and frequency of the actual notes.

On the PC keyboard, actual notes are in the lower half of the keyboard (from *<* to *.*), while overtone notes are in the upper part (from *Q* to *P*).

For each track (overtone) of the actual note, it is computed the interval (in cents) from its frequency to the closest *overtone note* frequency.
Example: track 20 has frequency 886Hz, which is a little bit more than an A, but we are playing a G on the overtone notes. So, the closest G to 886Hzis about 784Hz. The interval, in this case, would be around 211 cents. This interval is the input of both Chroma editors (on the x axis in both graphs).
### Chroma Amplitude:
The y axis of the graph represents the amount in dB to add or subtract from the current amplitude. The maximum amplitude can be set using the *Amount* knob: positive amount values enhance frequencies closer to the overtone notes, while negative values attenuate them. Use the *Range* knob to expand or shrink the maximum interval (in cents) in which to act. The *Coefficient* knob changes the shape of the function.

### Chroma Frequency:
Here, the y axis represents the new (modified) frequency of a track. The *Range* knob, as before, expands or shrinks the maximum interval and the *Coefficient* knob changes the shape of the function. Positive coefficient values make the frequencies approach the overtone notes, negative ones do the opposite, making the interval larger.

*Note: the computation of frequency happens before the amplitude, so, the input of Chroma amplitude is the output of Chroma frequency. In other words, we first compute the new frequency, then we use it to compute the new amplitude.*

















## Settings
#### Envelope:
You can choose some parameters for sound output
- **Attack, decay, sustain, release**
- **Split note** (where to split the keyboard between *real notes* and *overtone notes*)
- **Octave shift** (shift by octaves the sound output)
- **A4 frequency** (default: 440)



# 
