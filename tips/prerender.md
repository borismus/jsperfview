(From
[simonsarris.com](http://simonsarris.com/blog/427-increasing-performance-by-caching-paths-on-canvas)' blog)
# Prerender for winning

Prendering paths isn’t a magic bullet, there are still a lot of uses for
drawing paths constantly in canvas. If you are making a live drawing
application, or otherwise constructing dynamic paths and/or moving and
animating paths on the fly, then any kind of pre-rendering is going to
be nearly pointless or even harmful to performance. After all, what’s
the use of drawing something to a separate canvas and drawing that state
back to the original canvas if the path changes constantly? You’d need
to re-draw the in-memory canvas just as often, so you’d lose all
benefit.

## Yadda yadda

It is also worth mentioning that you might want to play around with
using PNGs instead of in-memory canvases. Another thing to test is
putting multiple paths onto one in-memory canvas versus putting them all
in their own separate canvases, effectively making a sprite sheet. From
previous tests, it seems that there is a slight advantage to giving each
sprite its own png instead of using a single-png (or single in-memory
canvas) sprite-sheet, but it wasn’t that big of a difference.
