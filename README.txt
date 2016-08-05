FREEDOM FRI!

3 stages
true static (pure stateless components, renderedToString)
quasi-static (req bundle, components may have state, static routing) ! only difference is template must be bundled for front end consumption
pre rendered single page app (includes router, predictive pre-loader)


stage one complete!

bundle plan:
  in client: onLoad check url, download and run bundled assets/url.js
  attach component to document.body
  all pages contain react, any other dep, * components and their particular page's content

RoadMap:
  - bundle react components, add re-initialization script
  <end of stage 2>

  add editor components if possible
  hello world lambda
  api gateway lambda
  have a lambda trigger reload
  figure out how to use sid to edit data


CONVENIENCE FEATURE:
mk new bolt project script
make bolt-cli module











browser uses data payload and component to re-render

diff to s3

GOAL: Rely of webpack where possible

COOLIDEA:
sid are page scoped by default (sid="blah")
can be added to global table (sid="GLOBAL:blah") which stores list of files that reference it.
{
  blah:{value:'foo', refs:['file']}
}
when one file with global lookups is changed all refs are also updated (reactively)
maybe sid inside the components dir are auto globals so that the pages that dep on them are auto




index command:
  reads all files in current directory, appends 'exports filename as filename' forEach to index.js

parseTemplate(pageTemplate) -> {sid:value...}

children(component) -> [pages]

update lambda:
  bundles .node_modules & setting with new lambda code
