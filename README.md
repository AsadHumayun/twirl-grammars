## A Grammar for HTML Twirl Templates with Play Framework on Scala

This repository attempts to apply a grammar that will tokenise
basic components of Twirl templates, for use with Scala and the
Play Framework.

At the moment, the root of this repository functions as a vscode
extension and as such, has been tested on the VSC editor. There
are, however, some limitations to the grammar. There is unfortunately
only so much I can do with regexes and TextMate's `begin`/`end`/`match`.

You may apply this vscode extension by cloning this repository, opening it
in VSCode, and then navigating to `Run` > `Start Debugging`. A pop-up
"Extension Host" window will appear. Open a Play project in this extension
host window, and navigate to a Twirl HTML file. If everything works as
expected, then you should hopefully see some helpful syntax highlighting
for your Twirl template.

I have tried my best to make something that is decent-enough to use and
that works to the best of my ability. I have little experience with TextMate
and the Oniguruma regex engine it uses.

### Known Limitations

Wherever embedded Scala is detected, the `source.scala` grammar 
is used. This is to reduce the complexity of this grammar and keep it 
aligned with the goal of trying to bring some form of tokenisation support
for Twirl template files. This is still considerably better than... well, nothing.
This has some downsides though - it seems that the `source.scala` scope that
I am using for embedded Scala is, in fact, not designed for embedded Scala
and therefore can be a bit aggressive with its matches. There are potentially
similar issues with other embedded languages that also have a grammar written
for them.


So far, only Twirl HTML is supported. As it stands, it is not likely that there
will be additions of Twirl JS and Twirl XML as these aren't really popular enough.
There is a chance that this may be done at some point in the future, but this is not
something that will be supported as the v1 draft.

- inline `@* comment *@` on @import lines will get consumed by `source.scala` and will
	be erroneously reported as Scala source. This is not the case.
- any inline `@...` Scala code will be missed inside HTML tags. The
  alternative here was to effectively re-implement the HTML grammar
	to also match the patterns introduced in this grammar. Eg `<div class="g" @t>`,
	`@t` will instead be coloured and parsed as an HTML tag. This can
	then lead to further pains as if there is a method call that contains
	a parameter list which is a string, then this will cause an invalid
	illegal token to be reported by the HTML grammar and will result in
	a rather scary-looking red marker. This can be quite jarring for a
	relatively commonly used Play pattnern. See [#5](https://github.com/AsadHumayun/twirl-grammars/issues/5)
	for more info (child of parent issue [#4](https://github.com/AsadHumayun/twirl-grammars/issues/4)).
	Any help here would be appreciated.

The general way of going around this may be to trust your eyes and
intuition as opposed to relying solely on the grammar or assuming that
it is 100% correct, 100% of the time.

Maintained by: [Asad Humayun](https://github.com/AsadHumayun)
