# Using the CLI

## Using the reference documentation

The [user reference](../index.md#user-reference) documentation documents the REST-ful endpoints. To invoke an endpoint from the command line, simple:

1. Start with the command `sdlc`.
2. Enter the endpoint, replacing slashes ('/') with a space (' '). E.g., `/work/start` becomes `sdlc work start`. This is called the 'end-point', or 'end-point command'.
3. Parameters are separated by '--' and listed as '&lt;name&gt;=&lt;value&gt;' pairs, where a bare parameter is interpretted as having the value 'true'. E.g., `sdlc work start -- issues=4 issueBug`

## Tab completion

You can generally use tab completion to see "what's possible" at any point. Tab completion is invoked by hitting the &lt;TAB&gt; key from a bash or zsh shell. In bash, it may be necessary to hit the &lt;TAB&gt; key twice to invoke tab completion in some situations.

- Tab completion is complete for all command end-points (i.e., everything before the '--').
- Tab completion is complete for all parameters (i.e., all the parameters after the '--').
- Many parameter options can be tab completed (i.e., after the '='; e.g., `sdlc server plugins bundles add -- bundle=<TAB>` will list the known available bundles).
- Note, tab completion in zsh is known to have some limitations (at least on MacOS 13.5.2). In particular, it won't show parameter options, even when there are options available.