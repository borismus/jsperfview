# JSPerfView - making sense of JSPerf

JSPerf is targeted towards developers quickly creating performance
tests, but a much more common use case is for developers to learn about
what performs and what doesn't on their target platforms.

Idea: use JSPerf and Browserscope to create a portal for web developers
to learn performance tradeoffs between different approaches.

Goals:
1. Developers should be able to go to jsperfview.com and see JSPerf
   tests via tags (eg. graphics, networking, etc).
2. JSPerf tests need to be taggable with extra metadata to facilitate
   these groupings.
3. Each individual test should show the best approach to use for modern
   browsers (or a customizeable view focused on a user specified set)

Provide an explanation to go with each benchmark.

## Pilot: HTML5 cavnas performance

The above is a large undertaking. To begin with, I'll handpick a set of
tests that are important for canvas performance. Pretend that they're
marked with the tags "canvas".

So we have tests = [foo, bar, baz, ...]
Need a way to render each test in an HTML5 graph
