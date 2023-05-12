'use strict';

class Html {
  introductionToHtmlAndCss = `
    <div class="html-1"><div class="container main-content">
    <div class="logo--title">
      <svg
        fill="none"
        height="2500"
        width="2183"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 124 141.53199999999998"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
          fill="#e34f26"
        />
        <path
          d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
          fill="#ef652a"
        />
        <path
          d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
          fill="#fff"
        />
      </svg>
      <h1 class="text-heading">Introduction to HTML and CSS</h1>
    </div>
</div>
<!-- NOTE! ADD MAIN IF ADDITIONAL FEATURES NEEDED -->
<div class="container">
  <!-- INTRODUCTION SECTION -->
  <section id="introduction">
    <h1 class="text-heading">Introduction</h1>
    <p class="text-desc">
      Now is the perfect moment to put your hands into action. In this
      section, you will be introduced to HTML and CSS, which are the
      fundamental elements behind almost everything you see on the web.
    </p>
  </section>
  <!-- ----------------- -->

  <!-- LESSON OVERVIEW -->
  <section id="lesson-overview">
    <h1 class="text-heading">Lesson Overview</h1>
    <p class="text-desc">
      This section contains a general overview of topics that you will learn
      in this lesson.
    </p>
    <ul>
      <li>Get a basic overview of HTML, CSS and how they work together.</li>
    </ul>
  </section>

  <!-- ============== -->

  <section id="html-css">
    <p class="text-desc">
      The internet as we know it would not exist without the harmonious work
      of HTML and CSS. HTML is the essential foundation, providing the raw
      data of a webpage such as text, links, and buttons, while CSS adds the
      necessary style and visual design, including font, color, and
      positioning of those elements. Ultimately, HTML and CSS work hand in
      hand to create beautiful and functional web pages.
    </p>
    <br />
    <p class="text-desc">
      Although often referred to as programming languages, HTML and CSS are
      actually more concerned with the presentation of information rather
      than programming logic. In contrast, JavaScript, which you will learn
      in the next section, is a true programming language because it allows
      web pages to have interactive and dynamic behavior. Nonetheless,
      mastering HTML and CSS is crucial, as they provide essential tools for
      web design and serve as a foundation for more complex programming
      tasks such as those involving JavaScript. The following lessons will
      equip you with the necessary skills to succeed in future JavaScript
      content and beyond.
    </p>
  </section>
  <!-- ASSIGNMENT -->
  <section id="assignment">
    <h1 class="text-heading">Task</h1>

    <ol>
      <li>
        Read
        <a
          href="https://blog.hubspot.com/marketing/web-design-html-css-javascript"
          target="_blank"
          >How HTML, CSS, and JavaScript Work</a
        >. This is a brief overview of how the three primary technologies of
        the web function.
      </li>
      <li>
        Read <a href="#">HTML vs CSS vs Javascript</a>. This offers a brief
        introduction to how HTML, CSS, and JavaScript are interrelated.
      </li>
    </ol>
  </section>
  <!-- KNOWLEDGE CHECK -->
  <section id="knowledge">
    <h1 class="text-heading">Knowledge Check</h1>
    <p class="text-desc">
      Within this section, you will find a series of questions designed to
      help you assess your comprehension of the current lesson. If you
      encounter any difficulties answering a question, you can click on it
      to access the relevant material and review the topic further.
    </p>
    <ul>
      <li>
        <a
          href="https://brytdesigns.com/html-css-javascript-whats-the-difference#What_is_HTML"
          target="_blank"
          >What do HTML and CSS stands for?</a
        >
      </li>
      <li>
        <a
          href="https://blog.hubspot.com/marketing/web-design-html-css-javascript#:~:text=An%20overview%3A,the%20behavior%20of%20different%20elements."
          target="_blank"
          >What is the difference between HTML, CSS and JavaScript?</a
        >
      </li>
    </ul>
  </section>
  <!-- ADDITIONAL SOURCES -->
  <section id="additional-sources">
    <h1 class="text-heading">Additional Sources</h1>
    <p class="text-desc">
      This section provides additional resources and links to related
      content that can assist you in further understanding the material.
      While not mandatory, these resources serve as supplemental materials
      to enhance your learning experience.
    </p>
    <ul>
      <li>
        If you desire more detailed explanations of HTML and CSS concepts,
        you can access Codecademy's articles
        <a
          href="https://www.codecademy.com/articles/language/html-css"
          target="_blank"
          >here</a
        >. However, please note that these concepts will also be discussed
        further in upcoming lessons, so a brief review of the articles
        should suffice.
      </li>
      <li>
        <a
          href="https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/"
          target="_blank"
          >This FreeCodeCamp article</a
        >
        goes into a little more depth than the assigned one. It covers
        things we’ll be teaching explicitly in later lessons though, so
        don’t worry about memorizing any of the details.
      </li>
      <li>
        Bookmark
        <a href="https://devdocs.io/" target="_blank"> DevDocs.io</a>. Read
        the “Welcome” message. Massive API documentation collection that
        even works offline. An essential collection of reference material
        for everything covered and more.
      </li>
      <li>
        Here are some beginner guides for anything related about
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn"
          target="_blank"
          >front-end development</a
        >. We recommend it for you to bookmark so that you can read it
        anytime.
      </li>
    </ul>
  </section>
</div>
    </div>
    `;

  elementsAndTags = `
   <div  class="html-2 ">
   <div class="container main-content">
   <div class="logo--title">
     <svg
       fill="none"
       height="2500"
       width="2183"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 124 141.53199999999998"
       class="html-logo"
       data-aos="flip-up"
       data-aos-duration="1500"
     >
       <path
         d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
         fill="#e34f26"
       />
       <path
         d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
         fill="#ef652a"
       />
       <path
         d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
         fill="#fff"
       />
     </svg>
     <h1 class="text-heading">Elements and Tags</h1>
   </div>
 </div>
 <!-- NOTE! ADD MAIN IF ADDITIONAL FEATURES NEEDED -->
 <div class="container">
   <!-- INTRODUCTION SECTION -->
   <section id="introduction">
     <h1 class="text-heading">Introduction</h1>
     <p class="text-desc">
       HyperText Markup Language (HTML) determines the layout and
       substance of web pages. By utilizing HTML elements, we can
       generate fundamental components such as text, headings,
       lists, images, and links that constitute a standard web
       page. In this lesson, we will explore into the mechanics
       of HTML elements.
     </p>
   </section>
   <!-- ----------------- -->

   <!-- LESSON OVERVIEW -->
   <section id="lesson-overview">
     <h1 class="text-heading">Lesson Overview</h1>
     <p class="text-desc">
       This section contains a general overview of topics that
       you will learn in this lesson.
     </p>
     <ul>
       <li>Explain what HTML tags are</li>
       <li>Explain what HTML elements are</li>
     </ul>
   </section>

   <!-- ============== -->

   <section id="elements-tags">
     <h1 class="text-heading">Elements and Tags</h1>
     <p class="text-desc">
       Almost all elements on an HTML page are just pieces of
       content wrapped in opening and closing HTML tags.
     </p>
     <br />
     <p class="text-desc">
       Opening tags tell the browser this is the start of an HTML
       element. They are comprised of a keyword enclosed in angle
       brackets
       <span class="tags">&lt;&gt;</span> . For example, an
       opening paragraph tag looks like this:
       <span class="tags">&lt;p&gt;</span>.
     </p>

     <p class="text-desc">
       Closing tags tell the browser where an element ends. They
       are almost the same as opening tags; the only difference
       is that they have a forward slash before the keyword. For
       example, a closing paragraph tag looks like this:
       <span class="tags">&lt;/p&gt;</span>.
     </p>

     <p class="text-desc">
       A full paragraph element looks like this:
     </p>

     <div class="img-container">
       <img
         src="/main-content-html/img/opening-tag-closing-tag.jpg"
         alt=""
       />
     </div>

     <p class="text-desc">
       You can think of elements as containers for content. The
       opening and closing tags tell the browser what content the
       element contains. The browser can then use that
       information to determine how it should interpret and
       format the content.
     </p>

     <p class="text-desc">
       Certain HTML elements do not necessitate a closing tag and
       are referred to as self-closing or empty elements. They
       are identified by either including a forward slash within
       the opening tag, such as
       <span class="tags">&lt;br /&gt;</span> or
       <span class="tags">&lt;img/&gt;</span>, or not including
       one at all, such as
       <span class="tags">&lt;br&gt;</span> or
       <span class="tags">&lt;img&gt;</span>. Although we will
       encounter a few of these in later lessons, most elements
       will have both opening and closing tags.
     </p>

     <p class="text-desc">
       HTML encompasses an extensive range of
       <a
         href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
         target="_blank"
         >predefined tags</a
       >
       that enable you to construct a wide variety of distinct
       elements. It is crucial to employ the appropriate tags for
       your content since doing so can significantly influence
       two aspects of your websites: their search engine ranking
       and accessibility for users who depend on assistive
       technologies such as screen readers to navigate the web.
     </p>
     <p class="text-desc">
       Using the correct elements for content is called semantic
       HTML. We will explore this in much more depth later on in
       the curriculum.
     </p>
   </section>
   <!-- ASSIGNMENT -->
   <section id="assignment">
     <h1 class="text-heading">Task</h1>

     <ol>
       <li>
         <a
           href="https://youtu.be/LGQuIIv2RVA?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-"
           target="_blank"
           >Watch Kevin Powell's Introduction to HTML Video</a
         >
       </li>
       <li>
         <a href="https://youtu.be/salY_Sm6mv4" target="_blank"
           >Watch Aaron Jack's HTML in 5 Minutes</a
         >
       </li>
     </ol>
   </section>
   <!-- KNOWLEDGE CHECK -->
   <section id="knowledge">
     <h1 class="text-heading">Knowledge Check</h1>
     <p class="text-desc">
       Within this section, you will find a series of questions
       designed to help you assess your comprehension of the
       current lesson. If you encounter any difficulties
       answering a question, you can click on it to access the
       relevant material and review the topic further.
     </p>
     <ul>
       <li>
         <a href="#elements-tags">What is an HTML tag?</a>
       </li>
       <li>
         <a href="#elements-tags"
           >What are the three parts of an HTML element?</a
         >
       </li>
     </ul>
   </section>
   <!-- ADDITIONAL SOURCES -->
   <section id="additional-sources">
     <h1 class="text-heading">Additional Sources</h1>
     <p class="text-desc">
       This section provides additional resources and links to
       related content that can assist you in further
       understanding the material. While not mandatory, these
       resources serve as supplemental materials to enhance your
       learning experience.
     </p>
     <ul>
       <li>
         <a
           href="https://developer.mozilla.org/en-US/docs/Learn"
           target="_blank"
           >Don't Fear the Internet's video about HTML</a
         >
       </li>
     </ul>
   </section>
 </div>
   </div>
    `;

  htmlBoilerplate = `
  <div  class="html-3 ">
    <div class="container main-content">
    <div class="logo--title">
      <svg
        fill="none"
        height="2500"
        width="2183"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 124 141.53199999999998"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
          fill="#e34f26"
        />
        <path
          d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
          fill="#ef652a"
        />
        <path
          d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
          fill="#fff"
        />
      </svg>
      <h1 class="text-heading">HTML Boilerplate</h1>
    </div>
  </div>
  <!-- NOTE! ADD MAIN IF ADDITIONAL FEATURES NEEDED -->
  <div class="container">
    <!-- INTRODUCTION SECTION -->
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        All HTML documents have the same basic structure or
        boilerplate that needs to be in place before anything
        useful can be done. In this lesson, we will explore the
        different parts of this boilerplate and see how it all
        fits together.
      </p>
    </section>
    <!-- ----------------- -->

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that
        you will learn in this lesson.
      </p>
      <ul>
        <li>
          How to write the basic boilerplate for an HTML document
        </li>
        <li>How to open HTML documents in your browser</li>
      </ul>
    </section>

    <!-- ============== -->

    <section id="elements-tags">
      <h1 class="text-heading">Creating an HTML File</h1>
      <p class="text-desc">
        To demonstrate an HTML boilerplate, we first need an HTML
        file to work with.
      </p>
      <p class="text-desc">
        Create a new folder on your computer and name it
        <span class="tags">html-boilerplate</span>. Within that
        folder create a new file and name it
        <span class="tags">index.html</span>.
      </p>

      <p class="text-desc">
        You’re probably already familiar with a lot of different
        types of files, for example doc, pdf, and image files.
      </p>

      <p class="text-desc">
        To let the computer know we want to create an HTML file,
        we need to append the filename with the
        <span class="tags">.html</span> extension as we have done
        when creating the
        <span class="tags">index.html</span> file.
      </p>

      <p class="text-desc">
        It is worth noting that we named our HTML file
        <span class="tags">index</span>. We should always name the
        HTML file that will contain the homepage of our websites
        <span class="tags">index.html</span>. This is because web
        servers will by default look for an index.html page when
        users land on our websites - and not having one will cause
        big problems.
      </p>
    </section>

    <!-- THE DOCTYPE -->

    <section id="doctype">
      <h1 class="text-heading">The DOCTYPE</h1>

      <p class="text-desc">
        Every HTML page starts with a doctype declaration. The
        doctype’s purpose is to tell the browser what version of
        HTML it should use to render the document. The latest
        version of HTML is HTML5, and the doctype for that version
        is simply
        <span class="tags">&lt;!DOCTYPE html&gt;</span>.
      </p>

      <p class="text-desc">
        The doctypes for older versions of HTML were a bit more
        complicated. For example, this is the doctype declaration
        for HTML4:
      </p>

      <div class="code-container">
        <pre>
          <code>
          <span class="doctype-text">&lt;!DOCTYPE HTML PUBLIC </span> <span class="doc-link-text">"-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"</span> <span>&gt;</span>
          
           </code>
        </pre>
      </div>

      <p class="text-desc">
        However, we probably won’t ever want to be using an older
        version of HTML, and so we’ll always use
        <span class="tags">&lt;!DOCTYPE html&gt;</span>.
      </p>

      <p class="text-desc">
        Open the <span class="tags">index.html</span> file created
        earlier in your text editor and add
        <span class="tags">&lt;!DOCTYPE html&gt;</span> to the
        very first line.
      </p>
    </section>

    <secion id="html-elements">
      <h1 class="text-heading">HTML Element</h1>
      <p class="text-desc">
        After we declare the doctype, we need to provide an
        <span class="tags">html</span> element. This is what’s
        known as the root element of the document, meaning that
        every other element in the document will be a descendant
        of it.
      </p>
      <p class="text-desc">
        This becomes more important later on when we learn about
        manipulating HTML with JavaScript. For now, just know that
        the HTML element should be included on every HTML
        document.
      </p>

      <p class="text-desc">
        Back in the <span class="tags">index.html</span> file,
        let’s add the <span class="tags">html</span> element by
        typing out its opening and closing tags, like so:
      </p>

      <div class="code-container">
        <pre>
          <code>
          <span class="tag-white">&lt;!</span><span class="doctype-text">DOCTYPE html</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white">&lt;</span> <span class="code-text-clr">html lang</span> <span class="tag-white">="</span> <span class="en-clr">en</span><span class="tag-white">"&gt;</span>
        </code>

        <code>
          <span class="tag-white">&lt;/</span> <span class="code-text-clr">html</span><span class="tag-white">&gt;</span>
        </code>     
      </pre>
      </div>

      <h2 class="sub-heading">
        What is the <span class="sub-tags">lang</span> attribute?
      </h2>
      <p class="text-desc">
        <span class="tags">lang</span> specifies the language of
        the text content in that element. This attribute is
        primarily used for improving accessibility of the webpage.
        It allows assistive technologies, for example screen
        readers, to adapt according to the language and invoke
        correct pronunciation.
      </p>
    </secion>

    <!-- HEAD ELEMENT -->
    <section id="head-elem">
      <h1 class="text-heading">Head Element</h1>
      <p class="text-desc">
        The <span class="tags">&lt;head&gt;</span> element is
        where we put important meta-information about our
        webpages, and stuff required for our webpages to render
        correctly in the browser. Inside the
        <span class="tags">&lt;head&gt;</span>, we should not use
        any element that displays content on the webpage.
      </p>

      <h2 class="sub-heading">The Charset Meta Element</h2>
      <p class="text-desc">
        We should always have the meta tag for the charset
        encoding of the webpage in the head element:
        <span class="tags">&lt;meta charset="utf-8"&gt;</span>.
      </p>

      <p class="text-desc">
        Setting the encoding is very important because it ensures
        that the webpage will display special symbols and
        characters from different languages correctly in the
        browser.
      </p>

      <h2 class="sub-heading">Title Element</h2>
      <p class="text-desc">
        Another element we should always include in the head of an
        HTML document is the title element:
      </p>
      <p class="text-desc">
        <span class="tags">&lt;title&gt;</span
        ><span class="tags">My First Web Page</span
        ><span class="tags">&lt;/title&gt;</span>
      </p>

      <p class="text-desc">
        The title element is used to give webpages a
        human-readable title which is displayed in our webpage’s
        browser tab.
      </p>

      <p class="text-desc">
        If we didn’t include a title element, the webpage’s title
        would default to its file name. In our case that would be
        <span class="tags">index.html</span>, which isn’t very
        meaningful for users; this would make it very difficult to
        find our webpage if the user has many browser tabs open.
      </p>

      <p class="text-desc">
        There are many more elements that can go within the head
        of an HTML document. However, for now it’s only crucial to
        know about the two elements we have covered here. We will
        introduce more elements that go into the head throughout
        the rest of the curriculum.
      </p>

      <p class="text-desc">
        Back in our <span class="tags">index.html</span> file,
        let’s add a head element with a charset meta element and a
        title within it. The head element goes within the HTML
        element and should always be the first element under the
        opening <span class="tags">&lt;html&gt;</span> tag:
      </p>

      <div class="code-container">
        <pre>
          <code>
          <span class="tag-white">&lt;!</span><span class="doctype-text">DOCTYPE html</span><span class="tag-white">&gt;</span>
        </code>

        <code></code>

        <code>
          <span class="tag-white">&lt;</span> <span class="code-text-clr">html lang</span> <span class="tag-white">="</span> <span class="en-clr">en</span><span class="tag-white">"&gt;</span>
        </code>     

        <code>
        <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">head</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">meta charset</span><span class="tag-white">="<span class="code-text-clr">UTF-8</span>"</span> <span>&gt;</span>
        </code>
        <code>
          <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">title</span><span class="tag-white">&gt;</span><span class="tag-white">My First Webpage</span> <span class="tag-white">&lt;/</span><span class="code-text-clr">title</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white pl-space">&lt;/</span><span class="code-text-clr">head</span><span class="tag-white">&gt;</span>
          </code>

          <code>
            <span class="tag-white">&lt;/</span><span class="code-text-clr">html</span><span class="tag-white">&gt;</span>
          </code>
      </pre>
      </div>
    </section>

    <!-- BODY ELEMENT POTA -->

    <section id="body-elem">
      <h1 class="text-heading">Body Element</h1>
      <p class="text-desc">
        The final element needed to complete the HTML boilerplate
        is the
        <span class="tags">&lt;body&gt;</span> element. This is
        where all the content that will be displayed to users will
        go - the text, images, lists, links, and so on.
      </p>
      <p class="text-desc">
        To complete the boilerplate, add a body element to the
        index.html file. The body element also goes within the
        HTML element and is always below the head element, like
        so:
      </p>

      <div class="code-container">
        <pre>
          <code>
          <span class="tag-white">&lt;!</span><span class="doctype-text">DOCTYPE html</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white">&lt;</span> <span class="code-text-clr">html lang</span> <span class="tag-white">="</span> <span class="en-clr">en</span><span class="tag-white">"&gt;</span>
        </code>     

        <code>
        <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">head</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">meta charset</span><span class="tag-white">="<span class="code-text-clr">UTF-8</span>"</span> <span>&gt;</span>
        </code>
        <code>
          <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">title</span><span class="tag-white">&gt;</span><span class="tag-white">My First Webpage</span> <span class="tag-white">&lt;/</span><span class="code-text-clr">title</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white pl-space">&lt;/</span><span class="code-text-clr">head</span><span class="tag-white">&gt;</span>
          </code>

          <code></code>

          <code>
            <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
            </code>

            <code>
              <span class="tag-white pl-space">&lt;/</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
              </code>

          <code>
            <span class="tag-white">&lt;/</span><span class="code-text-clr">html</span><span class="tag-white">&gt;</span>
          </code>

      </pre>
      </div>
    </section>

    <!-- Viewing HTML Files in the Browser  -->

    <section id="html-files">
      <h1 class="text-heading">
        Viewing HTML Files in the Browser
      </h1>
      <p class="text-desc">
        The HTML boilerplate in the
        <span class="tags">index.html</span> file is complete at
        this point, but how do you view it in the browser? There
        are a couple of different options:
      </p>

      <ol>
        <li>
          You can drag and drop an HTML file from your text editor
          into the address bar of your browser.
        </li>
        <li>
          You can find the HTML file in your file system and then
          double click it. This will open up the file in the
          default browser your system uses.
        </li>
        <li>
          You can use the terminal to open the file in your
          browser.
        </li>
      </ol>
      <ul>
        <li>
          <span class="tags">Ubuntu</span> - Navigate to the
          directory containing the file and type
          <span class="tags">google-chrome</span>
          <span class="tags">index.html</span>
        </li>
        <li>
          <span class="tags">macOS</span> - Navigate to the
          directory containing the file and type
          <span class="tags">open</span>
          <span class="tags">./index.html</span>
        </li>
      </ul>

      <p class="text-desc">
        Using one of the methods above, open up the index.html
        file we have been working on. You’ll notice the screen is
        blank. This is because we don’t have anything in our body
        to display.
      </p>

      <p class="text-desc">
        Back in the <span class="tags">index.html</span> file,
        let’s add a heading (more on these later) to the body, and
        save the file:
      </p>

      <div class="code-container">
        <pre>
          <code>
          <span class="tag-white">&lt;!</span><span class="doctype-text">DOCTYPE html</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white">&lt;</span> <span class="code-text-clr">html lang</span> <span class="tag-white">="</span> <span class="en-clr">en</span><span class="tag-white">"&gt;</span>
        </code>     

        <code>
        <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">head</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">meta charset</span><span class="tag-white">="<span class="code-text-clr">UTF-8</span>"</span> <span>&gt;</span>
        </code>
        <code>
          <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">title</span><span class="tag-white">&gt;</span><span class="tag-white">My First Webpage</span> <span class="tag-white">&lt;/</span><span class="code-text-clr">title</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white pl-space">&lt;/</span><span class="code-text-clr">head</span><span class="tag-white">&gt;</span>
          </code>

          <code></code>

          <code>
            <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
            </code>

            <code>
              <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span><span class="tag-white">Hello World!</span><span class="tag-white">&lt;/</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span>
            </code>

            <code>
              <span class="tag-white pl-space">&lt;/</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
              </code>

          <code>
            <span class="tag-white">&lt;/</span><span class="code-text-clr">html</span><span class="tag-white">&gt;</span>
          </code>

      </pre>
      </div>

      <p class="text-desc">
        Now, if you refresh the page in the browser, you should
        see the changes take effect, and the heading “Hello
        World!” will be displayed.
      </p>
    </section>

    <!-- VSCODE SHORTCUT -->

    <section id="vs-code">
      <h1 class="text-heading">VS Code Shortcut</h1>
      <p class="text-desc">
        VSCode has a built-in shortcut you can use for generating
        all the boilerplate in one go. Please note that this
        shortcut only works while editing a file with the ‘.html’
        extension or a text file with the HTML language already
        selected. To trigger the shortcut, delete everything in
        the <span class="tags">index.html</span> file and just
        enter <span class="tags">!</span> on the first line. This
        will bring up a couple of options. Press the enter key to
        choose the first one, and voila, you should have all the
        boilerplate populated for you.
      </p>

      <p class="text-desc">
        But it’s still good to know how to write the boilerplate
        yourself in case you find yourself using a text editor
        like notepad (heaven forbid) which doesn’t have this
        shortcut. Try not to use the shortcut in your first few
        HTML projects, so you can build some muscle memory for
        writing the boilerplate code.
      </p>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>

      <ol>
        <li>
          Watch and follow along to Kevin Powell's brilliant
          <a href="#">Building Your First Web Page video</a>
        </li>
        <li>
          Build some muscle memory by deleting the contents of the
          <span class="tags">index.html</span> file and trying to
          write out all the boilerplate again from memory. Don’t
          worry if you have to peek at the lesson content the
          first few times if you get stuck. Just keep going until
          you can do it a couple of times from memory.
        </li>

        <li>
          Run your boilerplate through the W3
          <a href="#">HTML validator</a> or alternatively this
          <a href="#">HTML validator</a>. Validators ensure your
          markup is correct and are an excellent learning tool, as
          they provide feedback on syntax errors you may be making
          often and aren’t aware of, such as missing closing tags
          and extra spaces in your HTML.
        </li>
      </ol>
    </section>
    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        Within this section, you will find a series of questions
        designed to help you assess your comprehension of the
        current lesson. If you encounter any difficulties
        answering a question, you can click on it to access the
        relevant material and review the topic further.
      </p>
      <ul>
        <li>
          <a href="#doctype"
            >What is the purpose of the doctype declaration?</a
          >
        </li>
        <li>
          <a href="#html-elements">What is the HTML element?</a>
        </li>
        <li>
          <a href="#head-elem"
            >What is the purpose of the head element?</a
          >
        </li>
        <li>
          <a href="#body-elem"
            >What is the purpose of the body element?</a
          >
        </li>
      </ul>
    </section>
    <!-- ADDITIONAL SOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Sources</h1>
      <p class="text-desc">
        This section provides additional resources and links to
        related content that can assist you in further
        understanding the material. While not mandatory, these
        resources serve as supplemental materials to enhance your
        learning experience.
      </p>
      <ul>
        <li>
          Read through this article about what
          <a
            href="https://www.positioniseverything.net/html-encoding/"
            target="_blank"
            >charsets you should use with your HTML pages</a
          >
        </li>
        <li>
          Another option for opening your HTML pages in the
          browser is using the
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
            target="_blank"
            >live server extension</a
          >
          with VSCode. This will open your HTML document and
          automatically refresh it every time you save the
          document. However, we recommend not using this extension
          and instead doing it the old fashioned way, by opening
          the page and refreshing the page manually in the browser
          for your first few HTML projects. In this way you can
          get used to that process and won’t become reliant on
          extensions right away. One reason is that there may be
          subtle differences when using extensions. For example,
          live server will always use UTF-8 character encoding and
          not the value defined in your
          <span class="tags">meta-charset</span> attribute. This
          could potentially some characters on your site not being
          encoded in the way you expect.
        </li>

        <li>
          If you wish, you can add the
          <span class="tags">lang</span> attribute to individual
          elements throughout the webpage. Read through
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang"
            target="_blank"
            >this doc</a
          >
          for a better understanding of the lang attribute.
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  workingWithText = `
  <div  class="html-4 ">
    <div class="container main-content">
    <div class="logo--title">
      <svg
        fill="none"
        height="2500"
        width="2183"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 124 141.53199999999998"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
          fill="#e34f26"
        />
        <path
          d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
          fill="#ef652a"
        />
        <path
          d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
          fill="#fff"
        />
      </svg>
      <h1 class="text-heading">Working with Text</h1>
    </div>
  </div>
  <!-- NOTE! ADD MAIN IF ADDITIONAL FEATURES NEEDED -->
  <div class="container">
    <!-- INTRODUCTION SECTION -->
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Most content on the web is text-based, so you will find
        yourself needing to work with HTML text elements quite a
        bit.
      </p>
      <p class="text-desc">
        In this lesson, we will learn about the text-based
        elements you are likely to use the most.
      </p>
    </section>
    <!-- ----------------- -->

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that
        you will learn in this lesson.
      </p>
      <ul>
        <li>How to create paragraphs</li>
        <li>How to create headings</li>
        <li>How to create bold text</li>
        <li>How to create italicized text</li>
        <li>The relationships between nested elements</li>
        <li>The relationships between nested elements</li>
      </ul>
    </section>

    <!-- ============== -->

    <section id="paragraphs">
      <h1 class="text-heading">Paragraphs</h1>
      <p class="text-desc">
        What would you expect the following text to output on an
        HTML page?
      </p>

      <div class="code-container">
        <pre>
     
        <code>
        <span class="tag-white">&lt;</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
              
      </code>
      <code>
       
          <span class="tag-white pl-space">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>
      </code>

      <code>
        <span class="tag-white pl-space">tempor incididunt ut labore et dolore magna aliqua.</span>
      </code>

      <code></code>
        
        <code>
          <span class="tag-white pl-space">Diam quis enim lobortis scelerisque fermentum dui.</span>
        </code>
        <code>
          <span class="tag-white pl-space">Commodo ullamcorper a lacus vestibulum sed arcu non.</span>
        </code>

        <code>
          <span class="tag-white">&lt;/</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
          
          
          </code>
      </pre>
      </div>

      <p class="text-desc">
        It looks like two paragraphs of text, and so you might
        expect it to display in that way. However that is not the
        case, as you can see in the output below:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="VwEyPVa"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
        <span
        >See the Pen
        <a href="https://codepen.io/janeobenidi/pen/VwEyPVa">
          Untitled</a
        >
        by Janeo Benidi (<a
          href="https://codepen.io/janeobenidi"
          >@janeobenidi</a
        >) on <a href="https://codepen.io">CodePen</a>.</span
      >
    </p>
    <script
      async
      src="https://cpwebassets.codepen.io/assets/embed/ei.js"
    ></script>
        
      </div>

      <p class="text-desc">
        When the browser encounters new lines like this in your
        HTML, it will compress them down into one single space.
        The result of this compression is that all of the text is
        clumped together into one long line.
      </p>

      <p class="text-desc">
        If we want to create paragraphs in HTML, we need to use
        the paragraph element, which will add a newline after each
        of our paragraphs. A paragraph element is defined by
        wrapping text content with a
        <span class="tags">&lt;p&gt;</span> tag.
      </p>

      <p class="text-desc">
        Changing our example from before to use paragraph elements
        fixes the issue:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="oNapZgL"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/oNapZgL">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>
    </section>

    <!-- HEADINGS -->

    <section id="headings">
      <h1 class="text-heading">Headings</h1>

      <p class="text-desc">
        Headings are different from other HTML text elements: they
        are displayed larger and bolder than other text to signify
        that they are headings.
      </p>

      <p class="text-desc">
        There are 6 different levels of headings starting from
        <span class="tags">&lt;h1&gt;</span> to
        <span class="tags">&lt;h6&gt;</span>. The number within a
        heading tag represents that heading’s level. The largest
        and most important heading is h1, while h6 is the tiniest
        heading at the lowest level.
      </p>

      <p class="text-desc">
        Headings are defined much like paragraphs. For example, to
        create an h1 heading, we wrap our heading text in a
        <span class="tags">&lt;h1&gt;</span> tag.
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="XWxVMmr"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/XWxVMmr">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        Using the correct level of heading is important as levels
        provide a hierarchy to the content. An h1 heading should
        always be used for the heading of the overall page, and
        the lower level headings should be used as the headings
        for content in smaller sections of the page.
      </p>

      <
    </section>

    <!-- STRONG ELEMENT -->

    <secion id="strong-element">
      <h1 class="text-heading">Strong Element</h1>
      <p class="text-desc">
        The <span class="tags">&lt;strong&gt;</span> element makes
        text bold. It also semantically marks text as important;
        this affects tools, like screen readers, that users with
        visual impairments will rely on to use your website. The
        tone of voice on some screen readers will change to
        communicate the importance of the text within a strong
        element. To define a strong element we wrap text content
        in a <span class="tags">&lt;strong&gt;</span> tag.
      </p>
      <p class="text-desc">You can use strong on its own:</p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="yLRpMOr"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/yLRpMOr">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        But you will probably find yourself using the strong
        element much more in combination with other text elements,
        like this:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="PoyEpzQ"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/PoyEpzQ">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        Sometimes you will want to make text bold without giving
        it an important meaning. You’ll learn how to do that in
        the CSS lessons later in the curriculum.
      </p>
    </secion>

    <!-- Em ELEMENT -->
    <section id="em-elem">
      <h1 class="text-heading">Em Element</h1>
      <p class="text-desc">
        The <span class="tags">&lt;em&gt;</span> element makes
        text italic. It also semantically places emphasis on the
        text, which again may affect things like screen readers.
        To define an emphasised element we wrap text content in a
        <span class="tags">&lt;em&gt;</span> tag.
      </p>

      <p class="text-desc">
        To use <span class="tags">&lt;em&gt;</span> on its own:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="GRYyWNy"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/GRYyWNy">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        Again, like the strong element, you will find yourself
        mostly using the
        <span class="tags">&lt;em&gt;</span> element with other
        text elements:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="LYgeWxb"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/LYgeWxb">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>
    </section>

    <!-- Nesting and Indentation -->

    <section id="nesting">
      <h1 class="text-heading">Nesting and Indentation</h1>
      <p class="text-desc">
        You may have noticed that in all the examples in this
        lesson we indent any elements that are within other
        elements. This is known as nesting elements.
      </p>
      <p class="text-desc">
        When we nest elements within other elements, we create a
        parent and child relationship between them. The nested
        elements are the children and the element they are nested
        within is the parent.
      </p>

      <p class="text-desc">
        In the following example, the body element is the parent
        and the paragraph is the child:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="WNadppY"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/WNadppY">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        Just as in human relationships, HTML parent elements can
        have many children. Elements at the same level of nesting
        are considered to be siblings.
      </p>
      <p class="text-desc">
        For example, the two paragraphs in the following code are
        siblings, since they are both children of the body tag and
        are at the same level of nesting as each other:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="OJBzpmE"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/OJBzpmE">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>
      <p class="text-desc">
        We use indentation to make the level of nesting clear and
        readable for ourselves and other developers who will work
        with our HTML in the future. It is recommended to indent
        any child elements by two spaces.
      </p>

      <p class="text-desc">
        The parent, child, and sibling relationships between
        elements will become much more important later when we
        start styling our HTML with CSS and adding behavior with
        JavaScript. For now, however, it is just important to know
        the distinction between how elements are related and the
        terminology used to describe their relationships.
      </p>
    </section>

    <!-- HTML COMMENTS  -->

    <section id="html-comments">
      <h1 class="text-heading">HTML Comments</h1>
      <p class="text-desc">
        The parent, child, and sibling relationships between
        elements will become much more important later when we
        start styling our HTML with CSS and adding behavior with
        JavaScript. For now, however, it is just important to know
        the distinction between how elements are related and the
        terminology used to describe their relationships.
      </p>

      <p class="text-desc">
        Writing an HTML comment is simple: We just enclose the
        comment with
        <span class="tags">&lt;!--</span> and
        <span class="tags">--&gt;</span> tags. For example:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="eYPyvEY"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/eYPyvEY">
              Untitled</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>

      <ol>
        <li>
          Watch Kevin Powell’s
          <a
            href="https://youtu.be/yqcd-XkxZNM?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-"
            target="_blank"
            >HTML Paragraph and Headings Video</a
          >
        </li>
        <li>
          Watch Kevin Powell’s
          <a
            href="https://youtu.be/gW6cBZLUk6M?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-"
            target="_blank"
            >HTML Bold and Italic Text Video</a
          >
        </li>

        <li>
          To get some practice working with text in HTML, create a
          plain blog article page which uses different headings,
          uses paragraphs, and has some text in the paragraphs
          bolded and italicized. You can use
          <a href="https://loremipsum.io/" target="_blank">
            Lorem Ipsum
          </a>
          to generate dummy text, in place of real text as you
          build your sites.
        </li>
      </ol>
    </section>
    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        Within this section, you will find a series of questions
        designed to help you assess your comprehension of the
        current lesson. If you encounter any difficulties
        answering a question, you can click on it to access the
        relevant material and review the topic further.
      </p>
      <ul>
        <li>
          <a href="#paragraphs"
            >How do you create a paragraph in HTML?</a
          >
        </li>
        <li>
          <a href="#headings"
            >How do you create a heading in HTML?</a
          >
        </li>
        <li>
          <a href="#headings"
            >How many different levels of headings are there and
            what is the difference between them?</a
          >
        </li>
        <li>
          <a href="#strong-element"
            >What element should you use to make text bold and
            important?</a
          >
        </li>
        <li>
          <a href="#em-elem"
            >What element should you use to make text italicized
            to add emphasis to it?</a
          >
        </li>
        <li>
          <a href="#nesting"
            >What relationship does an element have with any
            nested elements within it?</a
          >
        </li>
        <li>
          <a href="#nesting"
            >What relationship do two elements have if they are at
            the same level of nesting?</a
          >
        </li>
        <li>
          <a href="#html-comments"
            >How do you create HTML comments?</a
          >
        </li>
      </ul>
    </section>
    <!-- ADDITIONAL SOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Sources</h1>
      <p class="text-desc">
        This section provides additional resources and links to
        related content that can assist you in further
        understanding the material. While not mandatory, these
        resources serve as supplemental materials to enhance your
        learning experience.
      </p>
      <ul>
        <li>
          <a
            href="https://medium.com/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb/"
            target="_blank"
            >The semantic difference between &lt;strong&gt; and
            &lt;b&gt; or &lt;em&gt; and &lt;i&gt; tags and when to
            use them.</a
          >
        </li>
        <li>
          Another option for opening your HTML pages in the
          browser is using the
          <a
            href="https://www.w3schools.com/html/html_formatting.asp"
            target="_blank"
            >An interactive HTML text formatting articlen</a
          >
        </li>
      </ul>
    </section>
  </div>
  <script
  type="module"
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
></script>
<script
  async
  src="https://cpwebassets.codepen.io/assets/embed/ei.js"
></script>
    </div>
    `;

  lists = `
  <div  class="html-5 ">
    <div class="container main-content">
    <div class="logo--title">
      <svg
        fill="none"
        height="2500"
        width="2183"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 124 141.53199999999998"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
          fill="#e34f26"
        />
        <path
          d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
          fill="#ef652a"
        />
        <path
          d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
          fill="#fff"
        />
      </svg>
      <h1 class="text-heading">List</h1>
    </div>
  </div>

  <div class="container">
    <!-- INTRODUCTION SECTION -->
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Lists are very common on the internet, like the top 250
        movies on IMDB or a Spotify playlist. You will eventually
        need to use a list on your own webpage.
      </p>
      <p class="text-desc">
        Luckily, with HTML there are a couple of different types
        of lists at your disposal.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that
        you will learn in this lesson.
      </p>
      <ul>
        <li>How to create an unordered list</li>
        <li>How to create an ordered list</li>
      </ul>
    </section>

    <!-- UNORDERED LIST SECTION -->
    <section id="unordered-list">
      <h1 class="text-heading">Unordered List</h1>
      <p class="text-desc">
        If you want to have a list of items where the order
        doesn’t matter, like a shopping list of items that can be
        bought in any order, then you can use an unordered list
      </p>
      <p class="text-desc">
        Unordered lists are created using the
        <span class="tags">&lt;ul&gt;</span> element, and each
        item within the list is created using the list item
        element <span class="tags">&lt;li&gt;</span>.
      </p>

      <p class="text-desc">
        Each list item in an unordered list begins with a bullet
        point:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="poxpQpL"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/poxpQpL">
              Unordered List</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>
    </section>

    <!-- ORDERED LIST SECTION -->
    <section id="ordered-list">
      <h1 class="text-heading">Ordered List</h1>
      <p class="text-desc">
        If you instead want to create a list of items where the
        order does matter, like step-by-step instructions for a
        recipe, or your top 10 favorite TV shows, then you can use
        an ordered list.
      </p>

      <p class="text-desc">
        Ordered lists are created using the
        <span class="tags">&lt;ol&gt;</span> element. Each
        individual item in them is again created using the list
        item element <span class="tags">&lt;li&gt;</span>.
        However, each list item in an ordered list begins with a
        number instead:
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="oNapQEv"
          data-user="janeobenidi"
          style="
            height: 300px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/janeobenidi/pen/oNapQEv">
              Ordered List</a
            >
            by Janeo Benidi (<a
              href="https://codepen.io/janeobenidi"
              >@janeobenidi</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>
    </section>
    <!-- ASSIGNMENT  -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>

      <ol>
        <li>An unordered shopping list of your favorite foods</li>
        <li>
          An ordered list of todo’s you need to get done today
        </li>
        <li>
          An unordered list of places you’d like to visit someday
        </li>
        <li>
          An ordered list of your all time top 5 favorite video
          games or movies
        </li>
      </ol>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>

      <p class="text-desc">
        This section contains questions for you to check your
        understanding of this lesson on your own. If you’re having
        trouble answering a question, click it and review the
        material it links to.
      </p>

      <ul>
        <li>
          <a href="#unordered-list"
            >What HTML element is used to create an unordered
            list?</a
          >
        </li>
        <li>
          <a href="#ordered-list"
            >What HTML element is used to create an ordered
            list?</a
          >
        </li>
        <li>
          <a href="#unordered-list"
            >What HTML element is used to create list items within
            both unordered and ordered lists?</a
          >
        </li>
      </ul>
    </section>

    <!-- ADDITIONAL SOURCES -->

    <section id="additional-sources">
      <h1 class="text-heading">Additional Sources</h1>
      <p class="text-desc">
        This section provides additional resources and links to
        related content that can assist you in further
        understanding the material. While not mandatory, these
        resources serve as supplemental materials to enhance your
        learning experience.
      </p>

      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
            target="_blank"
            >MDN documentation on the unordered list element</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"
            target="_blank"
            >MDN documentation on the ordered list element</a
          >
        </li>
        <li>
          <a
            href="https://learn.shayhowe.com/html-css/creating-lists/"
            target="_blank"
            >Shay Howe’s HTML lists tutorial</a
          >
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  linksAndImages = `
  <div  class="html-6 ">
   <div class="container main-content">
   <div class="logo--title">
     <svg
       fill="none"
       height="2500"
       width="2183"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 124 141.53199999999998"
       class="html-logo"
       data-aos="flip-up"
       data-aos-duration="1500"
     >
       <path
         d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
         fill="#e34f26"
       />
       <path
         d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
         fill="#ef652a"
       />
       <path
         d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
         fill="#fff"
       />
     </svg>
     <h1 class="text-heading">Links and Images</h1>
   </div>
 </div>

 <div class="container">
   <section id="introduction">
     <h1 class="text-heading">Introduction</h1>
     <p class="text-desc">
       Links are one of the key features of HTML. They allow us
       to link to other HTML pages on the web. In fact, this is
       why it’s called the web.
     </p>
     <p class="text-desc">
       In this lesson, we will learn how to create links and add
       some visual flair to our websites by embedding images.
     </p>
   </section>

   <!-- LESSON OVERVIEW -->

   <section id="lesson-overview">
     <h1 class="text-heading">Lesson Overview</h1>
     <p class="text-desc">
       This section contains a general overview of topics that
       you will learn in this lesson.
     </p>
     <ul>
       <li>
         How to create links to pages on other websites on the
         internet
       </li>
       <li>
         How to create links to other pages on your own websites
       </li>
       <li>
         The difference between absolute and relative links
       </li>
       <li>How to display an image on a webpage using HTML</li>
     </ul>
   </section>

   <section id="preparation">
     <h1 class="text-heading">Preparation</h1>
     <p class="text-desc">
       To get some practice using links and images throughout
       this lesson we need an HTML project to work with.
     </p>
     <ol>
       <li>
         Create a new directory named
         <span class="tags">proj-links-and-images</span>.
       </li>
       <li>
         Within that directory, create a new file named
         <span class="tags">index.html</span>.
       </li>
       <li>
         Open the file in VS Code and fill in the usual HTML
         boilerplate.
       </li>
       <li>Finally, add the following h1 to the body:</li>
     </ol>

     <div class="code-container">
       <pre>
         <code>
        <span class="tag-white">&lt;</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span><span class="tag-white">Homepage</span><span class="tag-white">&lt;/</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span>
         
          </code>
       </pre>
     </div>
   </section>

   <!-- ANCHOR ELEMENTS -->

   <section id="anchor-elem">
     <h1 class="text-heading">Anchor Elements</h1>
     <p class="text-desc">
       To create a link in HTML, we use the anchor element. An
       anchor element is defined by wrapping the text or another
       HTML element we want to be a link with an
       <span class="tags">&lt;a&gt;</span> tag.
     </p>
     <p class="text-desc">
       Add the following to the body of the index.html page we
       created and open it in the browser:
     </p>
     <div class="code-container">
       <pre>
         <code>
        <span class="tag-white">&lt;</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span><span class="tag-white">Click me</span><span class="tag-white">&lt;/</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span>
         
          </code>
       </pre>
     </div>

     <p class="text-desc">
       You may have noticed that clicking this link doesn’t do
       anything. This is because an anchor tag on its own won’t
       know where we want to link to. We have to tell it a
       destination to go to. We do this by using an HTML
       attribute.
     </p>
     <p class="text-desc">
       An HTML attribute gives additional information to an HTML
       element and always goes in the element’s opening tag. An
       attribute is usually made up of two parts: a name, and a
       value; however, not all attributes require a value. In our
       case, we need to add a href (hyperlink reference)
       attribute to the opening anchor tag. The value of the href
       attribute is the destination we want our link to go to.
     </p>

     <p class="text-desc">
       Add the following href attribute to the anchor element we
       created previously and try clicking it again, don’t forget
       to refresh the browser so the new changes can be applied.
     </p>

     <div class="code-container">
       <pre>
         <code>
        <span class="tag-white">&lt;</span><span class="code-text-clr">a href</span> <span class="tag-white">="</span><span class="code-link-clr">https://developer.mozilla.org/en-US/docs/Web/HTML</span> <span class="tag-white">"&gt;</span><span class="tag-white">Click me</span><span class="tag-white">&lt;/</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span>
         
          </code>
       </pre>
     </div>
     <p class="text-desc">
       By default, any text wrapped with an anchor tag without a
       <span class="tags">href</span> attribute will look like
       plain text. If the
       <span class="tags">href</span> attribute is present, the
       browser will give the text a blue color and underline it
       to signify it is a link.
     </p>

     <p class="text-desc">
       It’s worth noting you can use anchor tags to link to any
       kind of resource on the internet, not just other HTML
       documents. You can link to videos, pdf files, images, and
       so on, but for the most part, you will be linking to other
       HTML documents.
     </p>
   </section>

   <!-- ABSOLUTE AND RELATIVE LINKS -->
   <section id="absolute-relative">
     <h1 class="text-heading">Absolute and Relative Links</h1>
     <p class="text-desc">
       Generally, there are two kinds of links we will create:
     </p>
     <ol>
       <li>Links to pages on other websites on the internet</li>
       <li>Links to pages on other websites on the internet</li>
     </ol>

     <h2 class="sub-heading">Absolute Links</h2>
     <p class="text-desc">
       Links to pages on other websites on the internet are
       called absolute links. A typical absolute link will be
       made up of the following parts:
       <span class="tags">protocol://domain/path</span>. An
       absolute link will always contain the protocol and domain
       of the destination.
     </p>

     <p class="text-desc">
       Links to pages on other websites on the internet are
       called absolute links. A typical absolute link will be
       made up of the following parts: protocol://domain/path. An
       absolute link will always contain the protocol and domain
       of the destination.
     </p>

     <p class="text-desc">
       We’ve already seen an absolute link in action. The link we
       created to The Odin Project’s About page earlier was an
       absolute link as it contains the protocol and domain.
     </p>

     <p class="text-desc">
       <span class="tags"
         >https://developer.mozilla.org/en-US/about</span
       >
     </p>

     <h2 class="sub-heading">Relative Links</h2>

     <p class="text-desc">
       Links to other pages within our own website are called
       relative links. Relative links do not include the domain
       name, since it is another page on the same site, it
       assumes the domain name will be the same as the page we
       created the link on.
     </p>

     <p class="text-desc">
       Relative links only include the file path to the other
       page, relative to the page you are creating the link on.
       This is quite abstract, let’s see this in action using an
       example.
     </p>

     <p class="text-desc">
       Within the
       <span class="tags">proj-links-and-images</span> directory,
       create another HTML file named
       <span class="tags">about.html</span> and paste the
       following code into it:
     </p>

     <div class="code-container">
       <pre>
         <code>
         <span class="tag-white">&lt;!</span><span class="doctype-text">DOCTYPE html</span><span class="tag-white">&gt;</span>
       </code>

       <code>
         <span class="tag-white">&lt;</span> <span class="code-text-clr">html lang</span> <span class="tag-white">="</span> <span class="en-clr">en</span><span class="tag-white">"&gt;</span>
       </code>     

       <code>
       <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">head</span><span class="tag-white">&gt;</span>
       </code>

       <code>
         <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">meta charset</span><span class="tag-white">="<span class="code-text-clr">UTF-8</span>"</span> <span>&gt;</span>
       </code>
       <code>
         <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">title</span><span class="tag-white">&gt;</span><span class="tag-white">Project Links and Images</span> <span class="tag-white">&lt;/</span><span class="code-text-clr">title</span><span class="tag-white">&gt;</span>
       </code>

       <code>
         <span class="tag-white pl-space">&lt;/</span><span class="code-text-clr">head</span><span class="tag-white">&gt;</span>
         </code>

         <code></code>

         <code>
           <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span><span class="tag-white">About Page</span><span class="tag-white">&lt;/</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white pl-space">&lt;/</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
             </code>

         <code>
           <span class="tag-white">&lt;/</span><span class="code-text-clr">html</span><span class="tag-white">&gt;</span>
         </code>

     </pre>
     </div>

     <p class="text-desc">
       Back in the index page, add the following anchor element
       to create a link to the about page:
     </p>

     <div class="code-container">
       <pre>
         

         <code>
           <span class="tag-white">&lt;</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span><span class="tag-white">Homepage</span><span class="tag-white">&lt;/</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">a href</span> <span class="tag-white">="</span><span class="code-link-clr">https://developer.mozilla.org/en-US/docs/Web/HTML</span> <span class="tag-white">"&gt;</span><span class="tag-white">Click me</span><span class="tag-white">&lt;/</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span>
           </code>

           <code></code>

           <code>
             <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">a href</span> <span class="tag-white">="</span><span class="code-link-clr">about.html</span> <span class="tag-white">"&gt;</span><span class="tag-white">About</span><span class="tag-white">&lt;/</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white">&lt;/</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
             </code>

        
     </pre>
     </div>

     <p class="text-desc">
       Open the index file in a browser and click on the about
       link to make sure it is all wired together correctly.
       Clicking the link should go to the about page we just
       created.
     </p>

     <p class="text-desc">
       This works because the index and about page are in the
       same directory. That means we can simply use its name
       (<span class="tags">about.html</span>) as the link’s href
       value.
     </p>

     <p class="text-desc">
       But we will usually want to organize our website
       directories a little better. Normally we would only have
       the index.html at the root directory and all other HTML
       files in their own directory.
     </p>

     <p class="text-desc">
       Create a directory <span class="tags">named</span> pages
       within the
       <span class="tags">proj-links-and-images</span> directory
       and move the <span class="tags">about.html</span> file
       into this new directory.
     </p>

     <p class="text-desc">
       Refresh the index page in the browser and then click on
       the about link. It will now be broken. This is because the
       location of the about page file has changed.
     </p>

     <p class="text-desc">
       To fix this, we just need to update the about link href
       value to include the
       <span class="tags">pages/</span> directory since that is
       the new location of the about file relative to the index
       file.
     </p>

     <div class="code-container">
       <pre>
         

         <code>
           <span class="tag-white">&lt;</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span><span class="tag-white">Homepage</span><span class="tag-white">&lt;/</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span>
           </code>


           <code>
             <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">a href</span> <span class="tag-white">="</span><span class="code-link-clr">pages/about.html</span> <span class="tag-white">"&gt;</span><span class="tag-white">About</span><span class="tag-white">&lt;/</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white">&lt;/</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
             </code>
     </pre>
     </div>

     <p class="text-desc">
       Refresh the index page in the browser and try clicking the
       about link again, it should now be back in working order.
     </p>

     <p class="text-desc">
       In many cases, this will work just fine; however, you can
       still run into unexpected issues with this approach.
       Prepending
       <span class="tags">./</span> before the link will in most
       cases prevent such issues. By adding
       <span class="tags">./</span> you are specifying to your
       code that it should start looking for the file/directory
       relative to the
       <span class="tags">current</span> directory.
     </p>

     <div class="code-container">
       <pre>
         

         <code>
           <span class="tag-white">&lt;</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span><span class="tag-white">Homepage</span><span class="tag-white">&lt;/</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span>
           </code>


           <code>
             <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">a href</span> <span class="tag-white">="</span><span class="code-link-clr">./pages/about.html</span> <span class="tag-white">"&gt;</span><span class="tag-white">About</span><span class="tag-white">&lt;/</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white">&lt;/</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
             </code>
     </pre>
     </div>

     <h2 class="sub-heading">A Metaphor</h2>
     <p class="text-desc">
       Absolute and relative links are a tricky concept to build
       a good mental model of, a metaphor may help:
     </p>

     <p class="text-desc">
       Think of your domain name (<span class="tags"
         >town.com</span
       >) as a town, the directory in which your website is
       located (<span class="tags">/museum</span>) as a museum,
       and each page on your website as a room in the museum
       (<span class="tags"
         >/museum/movie_room.html and
         /museum/shops/coffee_shop.html</span
       >). Relative links like
       <span class="tags">./shops/coffee_shop.html</span> are
       directions from the current room (<span class="tags"
         >the museum movie room /museum/movie_room.html</span
       >) to another room (<span class="tags"
         >the museum shop</span
       >). Absolute links, on the other hand, are full directions
       including the protocol (<span class="tags">https</span>),
       domain name (<span class="tags">town.com</span>) and the
       path from that domain name (<span class="tags"
         >/museum/shops/coffee_shop.html</span
       >):
       <span class="tags"
         >https://town.com/museum/shops/coffee_shop.html</span
       >.
     </p>
   </section>

   <!-- IMAGES -->
   <section id="images">
     <h1 class="text-heading">Images</h1>
     <p class="text-desc">
       Websites would be fairly boring if they could only display
       text. Luckily HTML provides a wide variety of elements for
       displaying all sorts of different media. The most widely
       used of these is the image element.
     </p>

     <p class="text-desc">
       To display an image in HTML we use the
       <span class="tags">&lt;img&gt;</span> element. Unlike the
       other elements we have encountered, the
       <span class="tags">&lt;img&gt;</span> element is
       self-closing. Empty, self-closing HTML elements do not
       need a closing tag.
     </p>

     <p class="text-desc">
       Instead of wrapping content with an opening and closing
       tag, it embeds an image into the page using a src
       attribute which tells the browser where the image file is
       located. The src attribute works much like the href
       attribute for anchor tags. It can embed an image using
       both absolute and relative paths.
     </p>

     <p class="text-desc">
       To use images that we have on our own websites, we can use
       a relative path.
     </p>
     <ol>
       <li>
         Create a new directory named
         <span class="tags">images</span> within the
         <span class="tags">proj-links-and-images</span> project.
       </li>
       <li>
         Next, download
         <a
           href="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
           target="_blank"
           >this image</a
         >
         and move it into the images directory we just created
       </li>
       <li>
         Rename the image to <span class="tags">cat.jpg</span>
       </li>
     </ol>

     <p class="text-desc">
       Finally add the image to the
       <span class="tags">index.html</span> file:
     </p>
     <div class="code-container">
       <pre>
         

         <code>
           <span class="tag-white">&lt;</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span><span class="tag-white">Homepage</span><span class="tag-white">&lt;/</span><span class="code-text-clr">h1</span><span class="tag-white">&gt;</span>
           </code>

           <code>
             <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">a href</span> <span class="tag-white">="</span><span class="code-link-clr">https://developer.mozilla.org/en-US/docs/Web/HTML</span> <span class="tag-white">"&gt;</span><span class="tag-white">Click me</span><span class="tag-white">&lt;/</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span>
           </code>

           <code></code>

           <code>
             <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">a href</span> <span class="tag-white">="</span><span class="code-link-clr">pages/about.html</span> <span class="tag-white">"&gt;</span><span class="tag-white">About</span><span class="tag-white">&lt;/</span><span class="code-text-clr">a</span><span class="tag-white">&gt;</span>
           </code>

           <code></code>

           <code>
             <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">img src</span><span class="tag-white">="</span><span class="code-link-clr">images/cat.jpg</span><span class="tag-white">=&gt;</span>
           </code>

           <code>
             <span class="tag-white">&lt;/</span><span class="code-text-clr">body</span><span class="tag-white">&gt;</span>
             </code>

     </pre>
     </div>

     <p class="text-desc">
       Save the <span class="tags">index.html</span> file and
       open it in a browser to view a beautiful British Shorthair
       cat.
     </p>
   </section>

   <!-- PARENT DIRECTORIES -->
   <section id="parent-directories">
     <h1 class="text-heading">Parent Directories</h1>
     <p class="text-desc">
       What if we want to use the dog image in the about page? We
       would first have to go up one level out of the pages
       directory into its parent directory so we could then
       access the images directory.
     </p>

     <p class="text-desc">
       To go to the parent directory we need to use two dots in
       the relative filepath like this:
       <span class="tags">../</span>. Let’s see this in action,
       within the body of the
       <span class="tags">about.html</span> file, add the
       following image below the heading we added earlier:
     </p>
     <div class="code-container">
       <pre>
         
         <code>
           <span class="tag-white">&lt;</span><span class="code-text-clr">img src</span><span class="tag-white">="</span><span class="code-link-clr">../images/cat.jpg</span><span class="tag-white">"&gt;</span>
           </code>
     </pre>
     </div>

     <p class="text-desc">To break this down:</p>
     <ol>
       <li>
         First, we are going to the parent directory of the pages
         directory which is
         <span class="tags">proj-links-and-images</span>.
       </li>
       <li>
         Then, from the parent directory, we can go into the
         <span class="tags">images</span> directory.
       </li>
       <li>
         Finally, we can access the
         <span class="tags">cat.jpg</span> file.
       </li>
     </ol>

     <p class="text-desc">
       Using the metaphor we used earlier, using
       <span class="tags">../</span> in a filepath is kind of
       like stepping out from the room you are currently in to
       the main hallway so you can go to another room.
     </p>
   </section>

   <!-- ALT ATTRIBUTE -->
   <section id="alt-attribute">
     <h1 class="text-heading">Alt Attribute</h1>
     <p class="text-desc">
       Using the metaphor we used earlier, using ../ in a
       filepath is kind of like stepping out from the room you
       are currently in to the main hallway so you can go to
       another room.
     </p>
     <p class="text-desc">
       The alt attribute is used to describe an image. It will be
       used in place of the image if it cannot be loaded. It is
       also used with screen readers to describe what the image
       is to visually impaired users.
     </p>

     <p class="text-desc">
       As a bit of practice, add an alt attribute to the cat
       image we added to the proj-links-and-images project.
     </p>
   </section>

   <!-- ASSIGNMENT -->
   <section id="assignment">
     <h1 class="text-heading">Task</h1>
     <ol>
       <li>
         <a
           href="https://youtu.be/tsEQgGjSmkM?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-"
           target="_blank"
           >Watch Kevin Powell’s HTML Links Video</a
         >.
       </li>
       <li>
         <a
           href="https://youtu.be/0xoztJCHpbQ?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-"
           target="_blank"
           >Watch Kevin Powell’s HTML Images Video</a
         >.
       </li>
       <li>
         <a
           href="https://youtu.be/ta3Oxx7Yqbo?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-"
           target="_blank"
           >Watch Kevin Powell’s File Structure Video</a
         >.
       </li>
       <li>
         <a
           href="https://internetingishard.netlify.app/html-and-css/links-and-images/#image-formats"
           target="_blank"
           >Read about the four main image formats that can be
           used on the web</a
         >.
       </li>
     </ol>
   </section>

   <!-- KNOWLEDGE CHECK -->
   <section id="knowledge">
     <h1 class="text-heading">Knowledge Check</h1>
     <p class="text-desc">
       Within this section, you will find a series of questions
       designed to help you assess your comprehension of the
       current lesson. If you encounter any difficulties
       answering a question, you can click on it to access the
       relevant material and review the topic further.
     </p>
     <ul>
       <li>
         <a href="#anchor-elem"
           >What element is used to create a link?</a
         >
       </li>
       <li><a href="#anchor-elem">What is an attribute?</a></li>
       <li>
         <a href="#absolute-relative"
           >What attribute tells links where to go to?</a
         >
       </li>
       <li>
         <a href="#absolute-relative"
           >What is the difference between an absolute and
           relative link?</a
         >
       </li>
       <li>
         <a href="#images"
           >Which element is used to display an image?</a
         >
       </li>
       <li>
         <a href="#alt-attribute"
           >What two attributes do images always need to have?</a
         >
       </li>
       <li>
         <a href="#parent-directories"
           >How do you access a parent directory in a
           filepath?</a
         >
       </li>
       <li>
         <a
           href="#https://internetingishard.netlify.app/html-and-css/links-and-images/#image-formats"
           target="_blank"
         ></a
         >What are the four main image formats that you can use
         for images on the web?
       </li>
     </ul>
   </section>

   <!-- ADDITIONAL RESOURCES -->
   <section id="additional-sources">
     <h1 class="text-heading">Additional Resources</h1>
     <p class="text-desc">
       This section provides additional resources and links to
       related content that can assist you in further
       understanding the material. While not mandatory, these
       resources serve as supplemental materials to enhance your
       learning experience.
     </p>
     <ul>
       <li>
         <a
           href="https://internetingishard.netlify.app/html-and-css/links-and-images/"
           target="_blank"
           >Interneting is hard’s treatment on HTML links and
           images</a
         >
       </li>
       <li>
         <a
           href="https://www.itpro.com/609724/google-apologises-after-blacklisting-entire-internet"
           target="_blank"
           >What happened the day Google decided links including
           (/) were malware</a
         >
       </li>
     </ul>
   </section>
 </div>
   </div>
    `;

  PROJECTMusicPlaylist = `
  <div  class="html-7 ">
   <div class="container main-content">
   <div class="logo--title">
     <svg
       fill="none"
       height="2500"
       width="2183"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 124 141.53199999999998"
       class="html-logo"
       data-aos="flip-up"
       data-aos-duration="1500"
     >
       <path
         d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
         fill="#e34f26"
       />
       <path
         d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
         fill="#ef652a"
       />
       <path
         d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
         fill="#fff"
       />
     </svg>
     <h1 class="text-heading">Project: Music Playlist</h1>
   </div>
 </div>

 <div class="container">
   <section id="introduction">
     <h1 class="text-heading">Introduction</h1>
     <p class="text-desc">
       It’s time to practice all of the HTML knowledge you have
       acquired. In this project, you are going to build a basic
       recipe website.
     </p>
     <p class="text-desc">
       The website will consist of a main index page which will
       have links to your favorite songs. The website won’t look
       very pretty by the time you’ve finished.
     </p>
   </section>

   <!-- ASSIGNMENT -->
   <section id="assignment">
     <h1 class="text-heading">Task</h1>
     <div class="assignment-container">
       <ol>
         <h2 class="sub-heading">
           Iteration 1: Initial Structure
         </h2>
         <li>
           Within the
           <span class="tags">proj-playlist</span> directory,
           create an <span class="tags">index.html</span> file.
         </li>
         <li>
           Fill it out with the usual boilerplate HTML and add an
           <span class="tags">h1</span> heading “My Playlist” to
           the body.
         </li>
       </ol>
       <ol>
         <h2 class="sub-heading">Iteration 2: Playlist Page</h2>
         <li>
           Create a new directory within the
           <span class="tags">proj-playlist</span> directory and
           name it <span class="tags">playlist</span>.
         </li>
         <li>
           Create a new HTML file within the
           <span class="tags">playlist</span> directory and name
           it after the artist name that it will contain. For
           example <span class="tags">bruno-mars.html</span>.
         </li>
         <li>
           For now, just include an
           <span class="tags">h1</span> heading with the artist’s
           name as its content.
         </li>
         <li>
           Back in the <span class="tags">index.html</span> file,
           add a link to the artist page you just created.
           Example: Under the
           <span class="tags"
             >&lt;h1&gt;My Playlist&lt;/h1&gt;</span
           >
           heading, write out the link like so:
           <br />
           <span class="tags"
             >&lt;a href="playlist/artistname.html">Artist
             Name&lt;/a&gt;</span
           >. The text of the link should again be the artist
           name.
         </li>
       </ol>
       <h2 class="sub-heading">Artist Page Content</h2>
       <p class="text-desc">
         Your new artist page should have the following content:
       </p>
       <ol>
         <li>
           An image of the artist under the h1 heading that you
           added earlier.
         </li>
         <li>
           Under the image, it should have an appropriately sized
           “Description” heading followed by a paragraph or two
           describing your favorite artist.
         </li>
         <li>
           Under the description, add an “Songs” heading followed
           by an unordered list of the songs of the artist.
         </li>
       </ol>
     </div>
   </section>
 </div>
   </div>
    `;
  constructor() {}
}

export default Html;
