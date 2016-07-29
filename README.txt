WHOLE FOLDER MAY NEED TO BE UPLOADED TO S3, (req 4 lambda builds)
ONLY SITE/ IS PUBLIC its essentially dest/


require components
render sitemap -> pages (recursively)
*components(*/individual) bundled by name into clientjs?
upload files to s3
browser downloads static page
browser uses data payload and component to re-render

diff to s3

GOAL: Rely of webpack where possible

3 types
true static (pure stateless components, renderedToString)
quasi-static (req bundle, components may have state, static routing) ! only difference is template must be bundled for front end consumption
pre rendered single page app (includes router, predictive pre-loader)

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
