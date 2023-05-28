-- currently npm run build:wc works as the bundle can be used as a web component in an Angular app

-- below are things I tried out with rollup and vite

-- I just want to note that it doesn't support React children, which is a huge gap imo – 
Chris
 Nov 11, 2022 at 1:36

 https://stackoverflow.com/questions/66970860/creating-pure-web-component-from-react-components

 
-- build both webcomponents and react components
A6485229:vite-react-to-webcomponent ChunGuangY$ ls -lSR dist/
total 2616
-rw-r--r--  1 ChunGuangY  staff  732173 May 25 14:33 webcomponents.es.js
-rw-r--r--  1 ChunGuangY  staff  474935 May 25 14:33 webcomponents.umd.js
-rw-r--r--  1 ChunGuangY  staff   73585 May 25 14:33 index.es.js
-rw-r--r--  1 ChunGuangY  staff   48816 May 25 14:33 index.umd.js
drwxr-xr-x  5 ChunGuangY  staff     160 May 25 14:33 Header
-rw-r--r--  1 ChunGuangY  staff      26 May 25 14:33 index.d.ts
-rw-r--r--  1 ChunGuangY  staff      11 May 25 14:33 webcomponents.d.ts

dist//Header:
total 24
-rw-r--r--  1 ChunGuangY  staff  438 May 25 14:33 Header.stories.d.ts
-rw-r--r--  1 ChunGuangY  staff  153 May 25 14:33 Header.d.ts
-rw-r--r--  1 ChunGuangY  staff   35 May 25 14:33 index.d.ts
A6485229:vite-react-to-webcomponent ChunGuangY$ 

Note: index*.js files are smaller than webcomponents.*.js files because the format does not include react stuff in it.

-- build webcomponents only
A6485229:vite-react-to-webcomponent ChunGuangY$ ls -lSR dist/
total 2376
-rw-r--r--  1 ChunGuangY  staff  732173 May 25 14:29 webcomponents.es.js
-rw-r--r--  1 ChunGuangY  staff  474935 May 25 14:29 webcomponents.umd.js
drwxr-xr-x  5 ChunGuangY  staff     160 May 25 14:29 Header
-rw-r--r--  1 ChunGuangY  staff      26 May 25 14:29 index.d.ts
-rw-r--r--  1 ChunGuangY  staff      11 May 25 14:29 webcomponents.d.ts

dist//Header:
total 24
-rw-r--r--  1 ChunGuangY  staff  438 May 25 14:29 Header.stories.d.ts
-rw-r--r--  1 ChunGuangY  staff  153 May 25 14:29 Header.d.ts
-rw-r--r--  1 ChunGuangY  staff   35 May 25 14:29 index.d.ts

===
Another library, https://www.npmjs.com/package/convert-react-to-web-component, React < 18

