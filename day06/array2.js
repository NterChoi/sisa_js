const butter = `Smooth like butter, like a criminal undercover
Gon' pop like trouble breaking into your heart like that, ooh
Cool shade, stunner, yeah, I owe it all to my mother, uh
Hot like summer, yeah, I'm making you sweat like that (break it down)
Ooh, when I look in the mirror
I'll melt your heart into two
I got that superstar glow, so
Ooh (do the boogie, like)
A side step, right-left, to my beat
High like the moon, rock with me, baby
Know that I got that heat
Let me show you 'cause talk is cheap
Side step, right-left, to my beat
Get it, let it roll
Smooth like butter, pull you in like no other
Don't need no Usher to remind me you got it bad
Ain't no other that can sweep you up like a robber
Straight up, I (got ya) making you fall like that (break it down)
`;

const butterArr = butter.split(" ");

const findButter = butterArr.filter((x) => {
  return x.includes("butter") || x.includes("Butter");
});

console.log(findButter.length);

const butterNum = butterArr.map((x) => x.length).reduce((a, c) => a + c, 0);

console.log(butterNum);
