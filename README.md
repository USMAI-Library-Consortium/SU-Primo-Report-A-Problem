### Adding a "Report a Problem" Button to Primo

The code in this repository will allow you to add a link that users can click to report a problem to the item record pages in Primo. The screenshot below shows how this looks in Salisbury University's Primo.

<img width="100%" alt="The View Online section with a Report a Problem link at the bottom" src="https://github.com/user-attachments/assets/20f4f3b2-7a68-42a3-83f7-9055de28f128">

#### Add Code to `custom.js`

1. Copy lines 5-17 from the `reportaproblem.js` file in this repository.
2. Paste those lines at the bottom of your `custom.js` file, before the final `})();` line.
3. In the first line that starts `addReportProblemLinks`, you can change the two function parameters to set the appearance and behavior of your links. Set the first paramater to be the text you want the link to use, and the second to the URL you want the link to take patrons to.
4. In line 15 of the `reportaproblem.js` file, there is a class name of `su-report-a-problem-link` that will be applied to all the links added by the script. You may wish to change the prefix to your own insitution code, though this isn't strictly necessary.

Following the steps above will add a "Report a Problem" link to the bottom of every section of an item record in Primo. To limit the places it appears, you wil need to add a bit of CSS to your `custom1.css` file.

#### Add Code to `custom1.css`

1. Copy all the code in the `reportaproblem.css` file in this repository.
2. Paste that code anywhere in your `custom1.css` file.
3. If you changed the class name in step 4 above, change the class names in lines 1, 5, and 6 to match the name you used.

The first line of CSS hides all the Report a Problem links by default. Lines 5-8 displays them only in the sections where you want them to display. In this case, that will be the "View Online" section and the "Links" section. If you like, you can add additional sections by adding another CSS selector with the HTML ID for that section. For example, adding the following line would cause the link to also display in the "Get It" section:

`prm-full-view #getit_link1_1 a.su-report-a-problem-link`

The full code for all 3 sections would be: 

```
prm-full-view #getit_link1_0 a.su-report-a-problem-link,
prm-full-view #getit_link1_1 a.su-report-a-problem-link,
prm-full-view #links a.su-report-a-problem-link {
	display: inline;
}
```

#### George Washington University PowerPoint Presentation

Also included in this repository are slides from a 2020 presentation by George Washington University Libraries, which is what SU based their implementation on. They cover some other techniques and use slightly different code, so some may find the information useful.

#### Questions?

SU's implementation was done by Chris Woodall (cmwoodall@salisbury.edu). Feel free to reach out with any questions!
