(From Seb's blog post at
[sebleedelisle.com](http://sebleedelisle.com/2011/02/html5-canvas-sprite-optimisation/))

If we’re serious about making HTML games then we need to know the most
efficient ways to render multiple sprites. Many are saying that Canvas
isn’t fast enough for gaming and we should use DOM objects instead. But
before we give up Canvas altogether, let’s see if we can squeeze out
just a little more performance…

A little while ago my podcasting mate Iain Lobb converted his sprite
blitting test “Bunny Benchmark” to HTML5 canvas and was impressed with
the results – he got 3000 bunnies rendering quite comfortably on all of
his browsers.

But I was massively unimpressed – I could only get 5-10fps on all of my
browsers. The reason for the difference in performance – Iain’s on
Windows and I’m on OSX.

I did some hunting and I found this benchmark on JSPerf which showed
that if you call drawImage on the Canvas element, it’s much faster if
you round the x and y position to a whole number.


