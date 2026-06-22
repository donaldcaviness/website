================================================================
 ACADEMIC WEBSITE — SETUP GUIDE
================================================================

WHAT YOU HAVE
--------------
Five files, no build tools, no installs required:

  index.html    home page — bio + photo, then publications
  cv.html       separate CV page
  styles.css    all colors, fonts, spacing (edit the :root
                block at the top to retheme everything at once)
  script.js     small enhancement (footer year, fade-in on
                scroll) — the site works fully without it
  README.txt    this file

Plain static site, no dependencies. Double-click index.html to
preview it in a browser right now, before touching GitHub.


STEP 1 — ADD YOUR PHOTO
--------------------------
1. Save your photo as exactly:  photo.jpg
   and put it in this same folder, next to index.html.
   (If it's a .png or .jpeg instead, that's fine — just update
   the filename in the step below to match.)
2. Open index.html in a text editor, find the section that
   starts with <div class="portrait-frame">.
3. Delete the <div class="portrait-placeholder">...</div>
   block.
4. Un-comment the line right after it:
      <!-- <img src="photo.jpg" alt="Donald [Last Name]"> -->
   becomes
      <img src="photo.jpg" alt="Donald [Last Name]">
The frame is portrait-oriented (a bit taller than wide) and
will crop your photo to fit — a head-and-shoulders or half-body
shot works best.


STEP 2 — FILL IN YOUR INFO
-----------------------------
Open index.html AND cv.html and search both for square
brackets, like [Last Name] or [Add dissertation title].
Replace each with your real info and delete the brackets.

index.html: name, email, bio links, social links.
cv.html: name, email, education, dissertation title, fellowship
and teaching entries, plus the "Skills" list at the bottom
(a few real ones are already filled in — add or remove as
needed).

To offer a downloadable CV: add a file named "cv.pdf" to this
folder. The "Download as PDF" button on cv.html already points
to that filename.


STEP 3 — ADD A PUBLICATION (WHEN YOU HAVE ONE)
--------------------------------------------------
Right now the Publications section on index.html shows an
honest "nothing yet" message instead of fake placeholder
entries. When you have a real paper to list:
  1. Open index.html and find the Publications section.
  2. Delete the <div class="empty-state">...</div> block.
  3. Just below it, there's a commented-out template starting
     with "TEMPLATE" — copy the <div class="pub">...</div>
     block inside it (once per paper) and fill in the title,
     venue, status, and a short description.


STEP 4 — PUT IT ON GITHUB
----------------------------
Pick ONE of these two setups:

  OPTION A — your main personal site
    Repo name must be exactly:  yourusername.github.io
    Site will live at:          https://yourusername.github.io

  OPTION B — a project-style site (any name)
    Repo name can be anything, e.g. "academic-site"
    Site will live at:
      https://yourusername.github.io/academic-site

How to upload:
  1. Go to github.com and create a new repository (public).
  2. On the repo page, click "Add file" -> "Upload files".
  3. Drag in index.html, cv.html, styles.css, script.js,
     photo.jpg, and cv.pdf (whichever of those you have ready).
  4. Commit the changes.


STEP 5 — TURN ON GITHUB PAGES
--------------------------------
  1. In your repo, click "Settings".
  2. Click "Pages" in the left sidebar.
  3. Under "Build and deployment" -> "Source", choose
     "Deploy from a branch".
  4. Under "Branch", choose "main" and "/ (root)", then Save.
  5. Wait about a minute, then refresh — GitHub will show the
     live URL at the top.

Every time you upload new versions of these files and commit,
the live site updates automatically within a minute or two.


OPTIONAL — CUSTOM DOMAIN
---------------------------
If you own a domain and want the site to live there instead of
the github.io address:
  1. Add a file named exactly "CNAME" (no extension) to this
     folder containing just your domain, e.g.:
         donaldsomething.com
  2. At your domain registrar, point a CNAME record to
     yourusername.github.io
  3. Re-enable Pages under Settings if prompted.
Optional — the default github.io address works fine on its own.


TROUBLESHOOTING
------------------
- Photo doesn't show: double-check the filename matches exactly
  (capitalization matters — "Photo.JPG" is not "photo.jpg") and
  that you un-commented the <img> tag, not just added the file.
- Site looks unstyled / no fonts: hard-refresh the page
  (Ctrl+Shift+R or Cmd+Shift+R) — browsers sometimes cache an
  old version right after a Pages deploy.
- "404 - File not found": make sure index.html and cv.html are
  at the TOP LEVEL of the repo, not inside a subfolder.
- Changes not showing up: GitHub Pages can take 1-2 minutes to
  rebuild. Check the "Actions" tab in your repo to see if the
  deploy finished.
================================================================
