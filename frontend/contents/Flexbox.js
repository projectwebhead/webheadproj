'use strict';

class Flexbox {
  introductionToFlexbox = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          fill="#264de4"
          d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
        />
        <path
          fill="#2965f1"
          d="M405.388 431.408l35.148-393.73H256v435.146z"
        />
        <path
          fill="#ebebeb"
          d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
        />
        <path
          fill="#fff"
          d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
        />
      </svg>
      <h1 class="text-heading">Introduction to Flexbox</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        As you’ll learn, there are many ways to move elements around on a web
        page. New methods have been developed over the years and older things
        have fallen out of style. Flexbox is a
        <a
          href="https://medium.com/@BennyOgidan/history-of-css-grid-and-css-flexbox-658ae6cfe6d2"
          target="_blank"
          >relatively new</a
        >
        way of manipulating elements in CSS, and its debut was
        <em>revolutionary</em>.
      </p>

      <p class="text-desc">
        Many resources put it near the end of their curriculum because it is
        somewhat new as a technology. But at this point, it has become the
        default way of positioning elements for many developers. Flexbox will
        be one of the most used tools in your toolbox, so why not learn it
        first?
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will learn
        in this lesson.
      </p>
      <ul>
        <li>You will learn how to position elements using flexbox.</li>
        <li>You will learn about flex containers and flex items.</li>
        <li>
          You will learn how to create useful components and layouts that go
          beyond just stacking and centering items.
        </li>
      </ul>
    </section>

    <!-- BEFORE WE GET STARTED -->
    <section id="before-we-get-started">
      <h1 class="text-heading">Before We Get Started</h1>
      <p class="text-desc">
        Flexbox layouts can get a little complicated. In a previous lesson,
        you learned how to inspect and debug things using your browser’s
        developer tools. Those tools will be crucial for you in the following
        lessons. If something isn’t behaving the way you expect, inspecting it
        in the developer tools should be your first step <em>every time</em>.
      </p>
      <p class="text-desc">
        Flexbox isn’t necessarily any more difficult than the other concepts
        that we’ve covered so far, but it does have a few more moving parts.
        It is going to be somewhat difficult to make use of any of the things
        you’re learning in these first lessons until you get to the end and
        can put it all together. As we go, do yourself a favor and
        <strong>play with all of the code examples</strong>.
      </p>

      <p class="text-desc">
        You will almost definitely need to come back and reference these
        lessons (or a couple of the resources we share with you) when you get
        to the assignments at the end of the section, but if you take your
        time and experiment with all the code examples we provide, you’ll know
        better where to look when that time comes.
      </p>
    </section>

    <!-- LET'S FLEX -->
    <section id="lets-flex">
      <h1 class="text-heading">Let's Flex</h1>
      <p class="text-desc">
        Flexbox is a way to arrange items into rows or columns. These items
        will flex (i.e. grow or shrink) based on some simple rules that you
        can define. To get started, let’s look at a simple demonstration.
      </p>
      <div class="note-container">
        <p class="text-desc">
          We’ve embedded a lot of interactive examples in these lessons. Take
          your time to experiment with them as you go to cement the concepts
          in your mind!
        </p>
      </div>
      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="rNqZbeW"
          data-user="webhead-project"
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
            <a href="https://codepen.io/webhead-project/pen/rNqZbeW">
              Flex Sample</a
            >
            by webhead project (<a href="https://codepen.io/webhead-project"
              >@webhead-project</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>
      <p class="text-desc">
        We’ll get into exactly what’s going on here soon enough. But for now,
        let’s uncomment the two flex related CSS declarations in the above
        Codepen by removing the <span class="tags">/*</span> and
        <span class="tags">*/</span> tags surrounding them, then check out the
        result.
      </p>
      <div class="note-container">
        <p class="text-desc">
          Comments prevent the browser from interpreting lines as code, and
          are wrapped between specific tags. CSS uses
          <span class="sub-tags">/*</span> as an opening comment tag and
          <span class="sub-tags">*/</span> as a closing comment tag, while
          HTML and JavaScript have their own syntax. Commented out lines of
          code can be ‘re-enabled’ simply by removing the comment tags
          surrounding the code.
        </p>
      </div>

      <p class="text-desc">
        All 3 divs should now be arranged horizontally. If you resize the
        results frame with the “1x”, “.5x” and “.25x” buttons you’ll also see
        that the divs will ‘flex’. They will fill the available area and will
        each have equal width.
      </p>
      <p class="text-desc">
        If you add another div to the HTML, inside of
        <span class="tags">.flex-container</span>, it will show up alongside
        the others, and everything will flex to fit within the available area.
      </p>

      <div class="note-container">
        <p class="text-desc">
          If it’s hard to see what’s going on in the small embedded CodePen,
          feel free to click the “Edit on CodePen” or “Fork on CodePen”
          button. This will bring the example into a full-sized environment.
          Some of the later examples might especially benefit from doing this.
        </p>
      </div>

      <h2 class="sub-heading" id="flex-container-flex-items">
        Flex Containers and Flex Items
      </h2>
      <p class="text-desc">
        As you’ve seen, flexbox is not just a single CSS property but a whole
        toolbox of properties that you can use to put things where you need
        them. Some of these properties belong on the <em>flex container</em>,
        while some go on the <em>flex items</em>. This is a simple yet
        important concept.
      </p>

      <p class="text-desc">
        A flex container is any element that has
        <span class="tags">display: flex</span> on it. A flex item is any
        element that lives directly inside of a flex container.
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/flexbox-sample.jpg" alt="" />
      </div>

      <p class="text-desc">
        Somewhat confusingly, any element can be both a flex container and a
        flex item. Said another way, you can also put
        <span class="tags">display: flex</span> on a flex item and then use
        flexbox to arrange <em>its children</em>.
      </p>

      <div class="img-container" id="flex-nested">
        <img src="/main-content-html/img/flexboxsample-1.jpg" alt="" />
      </div>

      <p class="text-desc">
        Creating and nesting multiple flex containers and items is the primary
        way we will be building up complex layouts. The following image was
        achieved using only flexbox to arrange, size, and place the various
        elements. Flexbox is a very powerful tool.
      </p>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding of
        this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ul>
        <li>
          <a href="#flex-container-flex-items"
            >What’s the difference between a flex container and a flex
            item?</a
          >
        </li>
        <li>
          <a href="#flex-nested"
            >What’s the difference between a flex container and a flex
            item?</a
          >
        </li>
      </ul>
    </section>

    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to related content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          <a
            href="https://internetingishard.netlify.app/html-and-css/flexbox/index.html"
            target="_blank"
            >This Flexbox tutorial</a
          >
          is a friendly tutorial for modern CSS layouts by Interneting Is
          Hard.
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  growingAndShrinking = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          fill="#264de4"
          d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
        />
        <path
          fill="#2965f1"
          d="M405.388 431.408l35.148-393.73H256v435.146z"
        />
        <path
          fill="#ebebeb"
          d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
        />
        <path
          fill="#fff"
          d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
        />
      </svg>
      <h1 class="text-heading">Growing And Shrinking</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Let’s look a little closer at what actually happened when you put
        flex: 1 on those flex items in the last lesson.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will learn
        in this lesson.
      </p>
      <ul>
        <li>
          You’ll learn the 3 properties that are defined by the flex
          shorthand, and how to use them individually.
        </li>
      </ul>
    </section>

    <!-- THE FLEX SHORTHAND -->
    <section id="flex-shorthand">
      <h1 class="text-heading">The Flex Shorthand</h1>
      <p class="text-desc">
        The <span class="tags">flex</span> declaration is actually a shorthand
        for 3 properties that you can set on a flex item. These properties
        affect how flex items size themselves within their container. You’ve
        seen some shorthand properties before, but we haven’t officially
        defined them yet.
      </p>

      <div class="note-container">
        <p class="text-desc">
          Shorthand properties are CSS properties that let you set the values
          of multiple other CSS properties simultaneously. Using a shorthand
          property, you can write more concise (and often more readable)
          stylesheets, saving time and energy.

          <em
            >Source:
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"
              target="_blank"
              >Shorthand properties on MDN</a
            ></em
          >
        </p>
      </div>
      <p class="text-desc">
        In this case, <span class="tags">flex</span> is actually a shorthand
        for <span class="tags">flex-grow</span>,
        <span class="tags">flex-shrink</span> and
        <span class="tags">flex-basis</span>.
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/div flex 1.jpg" alt="" />
      </div>
      <p class="text-desc">
        In the above screenshot, <span class="tags">flex: 1</span> equates to:
        <span class="tags">flex-grow: 1</span>,
        <span class="tags">flex-shrink: 1</span>,
        <span class="tags">flex-basis: 0</span>.
      </p>

      <p class="text-desc">
        Very often you see the flex shorthand defined with only one value. In
        that case, that value is applied to
        <span class="tags">flex-grow</span>. So when we put
        <span class="tags">flex: 1</span> on our divs, we were actually
        specifying a shorthand of <span class="tags">flex: 1 1 0</span>.
      </p>

      <h2 class="sub-heading">Flex-Grow</h2>
      <p class="text-desc">
        <span class="tags">flex-grow</span> expects a single number as its
        value, and that number is used as the flex-item’s “growth factor”.
        When we applied <span class="tags">flex: 1</span> to every div inside
        our container, we were telling every div to grow the same amount. The
        result of this is that every div ends up the exact same size. If we
        instead add <span class="tags">flex: 2</span> to just one of the divs,
        then that div would grow to 2x the size of the others.
      </p>

      <p class="text-desc">
        In the following example the <span class="tags">flex</span> shorthand
        has values for <span class="tags">flex-shrink</span> and
        <span class="tags">flex-basis</span> specified with their default
        values.
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="gOBdJzw"
          data-user="webhead-project"
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
            <a href="https://codepen.io/webhead-project/pen/gOBdJzw">
              Flex Grow</a
            >
            by webhead project (<a href="https://codepen.io/webhead-project"
              >@webhead-project</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <h2 class="sub-heading">Flex-Shrink</h2>
      <p class="text-desc">
        <span class="tags">flex-shrink</span> is similar to
        <span class="tags">flex-grow</span>, but sets the “shrink factor” of a
        flex item. <span class="tags">flex-shrink</span> only ends up being
        applied if the size of all flex items is larger than their parent
        container. For example, if our 3 divs from above had a width
        declaration like: <span class="tags">width: 100px</span>, and .<span
          class="tags"
          >flex-container</span
        >
        was smaller than <span class="tags">300px</span>, our divs would have
        to shrink to fit.
      </p>

      <p class="text-desc">
        The default shrink factor is <span class="tags">flex-shrink: 1</span>,
        which means all items will shrink evenly. If you do not want an item
        to shrink then you can specify
        <span class="tags">flex-shrink: 0;</span>. You can also specify higher
        numbers to make certain items shrink at a higher rate than normal.
      </p>

      <p class="text-desc">
        Here’s an example. Note that we’ve also changed the
        <span class="tags">flex-basis</span> for reasons that will be
        explained shortly. If you shrink your browser window you’ll notice
        that <span class="tags">.two</span>never gets smaller than the given
        width of 250px, even though the
        <span class="tags">flex-grow</span> rule would otherwise specify that
        each element should be equally sized.
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="wvYEbxe"
          data-user="webhead-project"
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
            <a href="https://codepen.io/webhead-project/pen/wvYEbxe">
              Flex-Shrink</a
            >
            by webhead project (<a href="https://codepen.io/webhead-project"
              >@webhead-project</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        An important implication to notice here is that when you specify
        <span class="tags">flex-grow</span> or
        <span class="tags">flex-shrink</span>, flex items do not necessarily
        respect your given values for <span class="tags">width</span>. In the
        above example, all 3 divs are given a width of 250px, but when their
        parent is big enough, they grow to fill it. Likewise, when the parent
        is too small, the default behavior is for them to shrink to fit. This
        is not a bug, but it could be confusing behavior if you aren’t
        expecting it.
      </p>

      <h2 class="sub-heading">Flex-Basis</h2>
      <p class="text-desc">
        <span class="tags">flex-basis</span> simply sets the initial size of a
        <span class="tags">flex item</span>, so any sort of
        <span class="tags">flex-grow</span>ing or
        <span class="tags">flex-shrink</span>ing starts from that baseline
        size. The shorthand value defaults to
        <span class="tags">flex-basis: 0%</span>. The reason we had to change
        it to <span class="tags">auto</span> in the
        <span class="tags">flex-shrink</span> example is that with the basis
        set to <span class="tags">0</span>, those items would ignore the
        item’s width, and everything would shrink evenly. Using
        <span class="tags">auto</span> as a flex-basis tells the item to check
        for a width declaration (<span class="tags">width: 250px</span>).
      </p>

      <div class="note-container">
        <h2 class="sub-heading">
          <em>Important Note About Flex-Basis:</em>
        </h2>

        <p class="text-desc">
          <em>
            There is a difference between the default value of
            <span class="sub-tags">flex-basis</span> and the way the
            <span class="sub-tags">flex</span> shorthand defines it if no
            <span class="sub-tags">flex-basis</span> is given. The actual
            default value for <span class="sub-tags">flex-basis</span> is
            <span class="sub-tags">auto</span>, but when you specify
            <span class="sub-tags">flex: 1</span> on an element, it interprets
            that as <span class="sub-tags">flex: 1 1 0</span>. If you want to
            only adjust an item’s <span class="sub-tags">flex-grow</span> you
            can simply do so directly, without the shorthand. Or you can be
            more verbose and use the full 3 value shorthand
            <span class="sub-tags">flex: 1 1 auto</span>, which is also
            equivalent to using <span class="sub-tags">flex: auto</span>.
          </em>
        </p>
      </div>

      <div class="note-container" id="flex-auto">
        <h2 class="sub-heading">
          <em>What is flex: auto?</em>
        </h2>
        <p class="text-desc">
          <em>
            If you noticed, we mentioned a new
            <span class="sub-tags">flex</span> shorthand
            <span class="sub-tags">flex: auto</span> in the previous note.
            However we didn’t fully introduce it.
            <span class="sub-tags"> flex: auto </span> is one of the
            shorthands of <span class="sub-tags">flex</span>. When
            <span class="sub-tags">auto</span> is defined as a
            <span class="sub-tags">flex </span>keyword it is equivalent to the
            values of <span class="sub-tags">flex-grow: 1</span>,
            <span class="sub-tags">flex-shrink: 1</span> and
            <span class="sub-tags">flex-basis: auto</span> or to
            <span class="sub-tags">flex: 1 1 auto</span> using the
            <span class="sub-tags">flex</span> shorthand. Note that
            <span class="sub-tags">flex: auto</span> is not the default value
            when using the <span class="sub-tags">flex</span> shorthand
            despite the name being “auto” which may be slightly confusing at
            first. You will encounter and learn more about
            <span class="sub-tags">flex: auto</span> and its potential
            use-cases when reading through the assignment section
          </em>
        </p>
      </div>

      <h2 class="sub-heading">In Practice...</h2>
      <p class="text-desc">
        In practice you will likely not be using complex values for
        <span class="tags">flex-grow</span>,
        <span class="tags">flex-shrink</span> or
        <span class="tags">flex-basis</span>. Generally, you’re most likely to
        use declarations like <span class="tags">flex: 1;</span> to make divs
        grow evenly and <span class="tags">flex-shrink: 0</span> to keep
        certain divs from shrinking.
      </p>

      <p class="text-desc">
        It is possible to get fancy, and set up layouts where some columns
        relate to each other in a specific ratio, so it’s useful to know that
        you can use other values, but those are relatively rare.
      </p>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <ol>
        <li>
          Read
          <a
            href="https://www.w3.org/TR/css-flexbox-1/#flex-common"
            target="_blank"
            >W3C’s flex section</a
          >
          to understand the basic values of common flex shorthand values.
        </li>
        <li>
          This
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
            target="_blank"
            >MDN Doc</a
          >
          summarizes the entire flex shorthand values as well as introduces
          some new syntax that hasn’t been covered in the previous article.
        </li>
        <li>
          Watch this flexbox tutorial about flex-shrink, flex-grow and
          flex-basis
          <a href="https://youtu.be/sanswTlz4ZY" target="_blank">here</a>
        </li>
      </ol>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        https://developer.mozilla.org/en-US/docs/Web/CSS/flex
      </p>
      <ul>
        <li>
          <a href="#flex-shorthand"
            >What are the 3 values defined in the shorthand flex property
            (e.g. flex: 1 1 auto)?</a
          >
        </li>
        <li>
          <a href="#flex-auto"
            >What are the 3 defined values for the flex shorthand
            flex:auto?</a
          >
        </li>
      </ul>
    </section>

    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to related content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=u044iM9xsWU&t=1s&pp=ugMICgJhchABGAE%3D"
            target="_blank"
            >Check out this video</a
          >
          explaining how flexbox works and why.
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  axes = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          fill="#264de4"
          d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
        />
        <path
          fill="#2965f1"
          d="M405.388 431.408l35.148-393.73H256v435.146z"
        />
        <path
          fill="#ebebeb"
          d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
        />
        <path
          fill="#fff"
          d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
        />
      </svg>
      <h1 class="text-heading">Axes</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Let’s see how the orientation of items within a flex container can be
        controlled using the
        <span class="tags">flex-direction</span> property.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will learn
        in this lesson.
      </p>
      <ul>
        <li>You’ll learn about the 2 “axes” of a flex container.</li>
        <li>
          You’ll learn how to change those axes to arrange your content in
          columns instead of rows.
        </li>
      </ul>
      <p class="text-desc">
        The most confusing thing about flexbox is that it can work either
        horizontally or vertically, and some rules change a bit depending on
        which direction you are working with.
      </p>
      <p class="text-desc">
        The default direction for a flex container is horizontal, or
        <span class="tags">row</span>, but you can change the direction to
        vertical, or <span class="tags">column</span>. The direction can be
        specified in CSS like so:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="selector-clr">.flex-container</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space-2">flex-direction</span> <span class="tag-white">: column;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>
    </section>

    <!-- AXES -->
    <section id="axes">
      <h1 class="text-heading">Axes</h1>
      <p class="text-desc">
        No matter which direction you’re using, you need to think of your
        flex-containers as having 2 axes: the main axis and the cross axis. It
        is the direction of these axes that changes when the
        <span class="tags">flex-direction</span> is changed. In most
        circumstances, <span class="tags">flex-direction: row</span> puts the
        main axis horizontal (left-to-right), and
        <span class="tags">column</span> puts the main axis vertical
        (top-to-bottom).
      </p>
      <p class="text-desc">
        In other words, in our very first example, we put
        <span class="tags">display: flex</span> on a div and it arranged its
        children horizontally. This is a demonstration of
        <span class="tags">flex-direction: row</span>, the default setting.
        The following example is very similar. If you uncomment the line that
        says <span class="tags">flex-direction: column</span>, those divs will
        stack vertically.
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="VwEEZqv"
          data-user="webhead-project"
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
            <a href="https://codepen.io/webhead-project/pen/VwEEZqv">
              Flex Direction</a
            >
            by webhead project (<a href="https://codepen.io/webhead-project"
              >@webhead-project</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        One thing to note is that in this example,
        <span class="tags">flex-direction: column</span> would not work as
        expected if we used the shorthand <span class="tags">flex: 1</span>.
        Try it out now (i.e. go change the flex value on the
        <span class="tags">flex: 1 1 auto;</span> line). Can you figure out
        why it does not work if <span class="tags">flex: 1</span> is used? The
        divs collapse, even though they <em>clearly</em> have a
        <span class="tags">height</span> defined there.
      </p>

      <p class="text-desc">
        The reason for this is that the flex shorthand expands
        <span class="tags">flex-basis</span> to <span class="tags">0</span>,
        which means that all <span class="tags">flex-grow</span>ing and
        <span class="tags">flex-shrink</span>ing would begin their
        calculations from <span class="tags">0</span>. Empty divs by default
        have 0 height, so for our flex items to fill up the height of their
        container, they don’t actually need to have any height at all.
      </p>

      <p class="text-desc" id="flex-basis-info">
        The example above fixed this by specifying
        <span class="tags">flex: 1 1 auto</span>, telling the flex items to
        default to their given <span class="tags">height</span>. We could also
        have fixed it by putting a height on the parent
        <span class="tags">.flex-container</span>, or by using
        <span class="tags">flex-grow: 1</span> instead of the shorthand.
      </p>

      <p class="text-desc">
        Another detail to notice: when we changed the flex-direction to
        <span class="tags">column</span>,
        <span class="tags">flex-basis</span> refers to
        <span class="tags">height</span> instead of
        <span class="tags">width</span>. Given the context this may be
        obvious, but it’s something to be aware of.
      </p>

      <p class="text-desc">
        We’ve strayed from the point slightly… We were talking about
        flex-direction and axes. To bring it back home, the default behavior
        is <span class="tags">flex-direction: row</span> which arranges things
        horizontally. The reason this often works well without changing other
        details in the CSS is because block-level elements default to the full
        width of their parent. Changing things to vertical using
        <span class="tags">flex-direction: column</span> adds complexity
        because block-level elements default to the height of their content,
        and in this case there is no content.
      </p>

      <div class="note-container">
        <em
          ><p class="text-desc">
            There are situations where the behavior of flex-direction could
            change if you are using a language that is written top-to-bottom
            or right-to-left, but you should save worrying about that until
            you are ready to start making a website in Arabic or Hebrew.
          </p></em
        >
      </div>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding of
        this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ul>
        <li>
          <a href="#axes"
            >How do you make flex items arrange themselves vertically instead
            of horizontally?</a
          >
        </li>
        <li>
          <a href="#flex-basis-info"
            >In a <span class="tags">column</span> flex-container, what does
            <span class="tags">flex-basi</span>s refer to?</a
          >
        </li>
        <li>
          <a href="#flex-basis-info"
            >In a <span class="tags">row</span> flex-container, what does
            <span class="tags">flex-basis</span> refer to?</a
          >
        </li>
        <li>
          <a href="#axes"
            >Why do the previous two questions have different answers?</a
          >
        </li>
      </ul>
    </section>
    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to related content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          <a href="https://flexbox.malven.co/" target="_blank"
            >This flexbox visual cheatsheet</a
          >
          has some useful references to flex and its properties.
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  alignment = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          fill="#264de4"
          d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
        />
        <path
          fill="#2965f1"
          d="M405.388 431.408l35.148-393.73H256v435.146z"
        />
        <path
          fill="#ebebeb"
          d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
        />
        <path
          fill="#fff"
          d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
        />
      </svg>
      <h1 class="text-heading">Alignment</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        So far everything we’ve touched with flexbox has used the rule
        <span class="tags">flex: 1</span> on all flex items, which makes the
        items grow or shrink equally to fill all of the available space. Very
        often, however, this is not the desired effect. Flex is also very
        useful for arranging items that have a specific size.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        So far everything we’ve touched with flexbox has used the rule flex: 1
        on all flex items, which makes the items grow or shrink equally to
        fill all of the available space. Very often, however, this is not the
        desired effect. Flex is also very useful for arranging items that have
        a specific size.
      </p>
      <ul>
        <li>
          You’ll learn how to align items inside a flex container both
          vertically and horizontally.
        </li>
      </ul>
    </section>
    <!-- ALIGNMENT -->
    <section id="alignment">
      <h1 class="text-heading">Alignment</h1>
      <p class="text-desc">Let's look at an example.</p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="poxxoJx"
          data-user="webhead-project"
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
            <a href="https://codepen.io/webhead-project/pen/poxxoJx">
              Flex-Alignment</a
            >
            by webhead project (<a href="https://codepen.io/webhead-project"
              >@webhead-project</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        You should be able to predict what happens if you put
        <span class="tags">flex: 1</span> on the
        <span class="tags">.item</span> by now. Give it a shot before we move
        on!
      </p>

      <p class="text-desc">
        Adding <span class="tags">flex: 1</span> to
        <span class="tags">.item</span> makes each of the items grow to fill
        the available space, but what if we wanted them to stay the same
        width, but distribute themselves differently inside the container? We
        can do this!
      </p>

      <p class="text-desc">
        Remove flex: 1 from .item and add justify-content: space-between to
        .container. Doing so should give you something like this:
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/justify-content.png" alt="" />
      </div>
      <p class="text-desc">
        <span class="tags">justify-content</span> aligns items across the main
        axis. There are a few values that you can use here. You’ll learn the
        rest of them in the reading assignments, but for now try changing it
        to <span class="tags">center</span>, which should center the boxes
        along the main axis.
      </p>

      <p class="text-desc">
        To change the placement of items along the
        <strong>cross axis</strong> use <span class="tags">align-items</span>.
        Try getting the boxes to the center of the container by adding
        <span class="tags">align-items: center</span> to
        <span class="tags">.container</span>. The desired result looks like
        this:
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/justify-content-center.png" alt="" />
      </div>

      <p class="text-desc">
        Because <span class="tags">justify-content</span> and
        <span class="tags">align-items</span> are based on the main and cross
        axis of your container, their behavior changes when you change the
        flex-direction of a flex-container. For example, when you change
        <span class="tags">flex-direction</span> to
        <span class="tags">column</span>,
        <span class="tags">justify-content</span> aligns vertically and
        <span class="tags">align-items</span> aligns horizontally. The most
        common behavior, however, is the default, i.e.
        <span class="tags">justify-content</span> aligns items horizontally
        (because the main axis defaults to horizontal), and
        <span class="tags">align-items</span> aligns them vertically. One of
        the biggest sticking points that beginners have with flexbox is
        confusion when this behavior changes.
      </p>

      <h2 class="sub-heading">Gap</h2>
      <p class="text-desc">
        One more very useful feature of flex is the
        <span class="tags">gap</span> property. Setting
        <span class="tags">gap</span> on a flex container simply adds a
        specified space between flex items, very similar to adding a margin to
        the items themselves. <span class="tags">gap</span> is a new property
        so it doesn’t show up in many resources yet, but it works reliably in
        all modern browsers, so it is safe to use and very handy! Adding
        <span class="tags">gap: 8px</span> to the centered example above
        produces the result below.
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="mdzzdKp"
          data-user="webhead-project"
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
            <a href="https://codepen.io/webhead-project/pen/mdzzdKp">
              Flex-Gap</a
            >
            by webhead project (<a href="https://codepen.io/webhead-project"
              >@webhead-project</a
            >) on <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>

      <p class="text-desc">
        There’s more for you to learn in the reading below, but at this point
        surely you can see how immensely useful flexbox is. Using just the
        properties we’ve already covered you could already put together some
        impressive layouts!
      </p>

      <p class="text-desc">
        Take your time going through the reading. There will be some review of
        the items we’ve already covered here, but it goes into more depth and
        touches on a few things that haven’t been mentioned yet. Don’t stress
        too much about trying to memorize every little detail yet; just code
        along with the examples and do your best to internalize everything
        that is possible with flexbox. You’ll have to reach for these
        resources again once you get to the practice exercises, but that’s
        perfectly acceptable. The more you use this stuff the better it will
        stick in your mind… and you will be using it
        <span class="tags">constantly</span>. Have fun!
      </p>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <ol>
        <li>
          This beautiful
          <a
            href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/"
            target="_blank"
            >Interactive Guide to Flexbox</a
          >
          covers everything you need to know. It will help reinforce concepts
          we’ve already touched on with some really fun and creative examples.
          Spend some time here, some of it should be review at this point, but
          the foundations here are important!
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox"
            target="_blank"
            >Typical use cases of Flexbox</a
          >
          is an MDN article that covers some more practical tips. Don’t skip
          the interactive sections! Playing around with this stuff is how you
          learn it!
        </li>
        <li>
          The
          <a
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="_blank"
            >CSS Tricks “Guide to Flexbox”</a
          >
          is a classic. There isn’t any new information for you here, but the
          images and examples are super helpful. This one is a great cheat
          sheet that you’ll probably return to often. (Keep it handy for the
          practice exercises!)
        </li>
      </ol>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding of
        this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container"
            target="_blank"
            >What is the difference between
            <span class="tags">justify-content</span> and
            <span class="tags">align-items</span>?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container"
            target="_blank"
            >How do you use flexbox to completely center a div inside a flex
            container?</a
          >
        </li>
        <li>
          <a
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="_blank"
            >What’s the difference between
            <span class="tags">justify-content: space-betwee</span>n and
            <span class="tags">justify-content: space-around</span>?</a
          >
        </li>
      </ul>
    </section>
    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to related content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          <a href="https://flexboxfroggy.com/" target="_blank"
            >Flexbox Froggy</a
          >
          is a funny little game for practicing moving things around with
          flexbox.
        </li>
        <li>
          <a href="https://mastery.games/flexboxzombies/" target="_blank"
            >Flexbox Zombies</a
          >
          is another gamified take on flexbox. Free, but requires an account.
        </li>
        <li>
          The
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
            target="_blank"
            >Basic Concepts of Flexbox</a
          >
          article on MDN is another good starting point. There are helpful
          examples and interactive sections.
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container"
            target="_blank"
            >Aligning Items in a Flex Container</a
          >
          goes into more depth on the topic of axes and align-items vs
          justify-content.
        </li>
        <li>
          This
          <a
            href="https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/"
            target="_blank"
            >Flexbox Tutorial</a
          >
          from freecodecamp is another decent resource.
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=3YW65K6LcIA"
            target="_blank"
            >Flexbox Crash Course</a
          >
          is a nice resource by Traversy Media.
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=u044iM9xsWU"
            target="_blank"
            >Learn flexbox the easy way</a
          >
          by Kevin Powell explains flexbox very well in this video.
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  PROJECTLandingPage = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <path
          fill="#264de4"
          d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
        />
        <path
          fill="#2965f1"
          d="M405.388 431.408l35.148-393.73H256v435.146z"
        />
        <path
          fill="#ebebeb"
          d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
        />
        <path
          fill="#fff"
          d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
        />
      </svg>
      <h1 class="text-heading">Project: Landing Page</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        For this project you’ll be creating an entire web page from a design
        we’ll provide for you. If you’ve been following along you should have
        the skills you need to accomplish this, but it may not be easy!
      </p>
      <p class="text-desc">
        Do not be afraid to use google or go back to previous lessons to look
        something up.
        <strong
          >Real-life, professional developers use google constantly for things
          that they have been doing for years.</strong
        >
        At this point it is not expected that you will have everything
        memorized, so don’t worry about it. Additionally, there are a few
        small details that you may not have encountered in our lessons yet.
        This is by design. These details are minor, and easily searched (e.g.
        google <span class="tags">css rounded corners</span>).
      </p>

      <p class="text-desc">Here is an example of a Landing Page:</p>
      <div class="img-container">
        <img src="/main-content-html/img/layout-example.jpg" alt="" />
      </div>

      <p class="text-desc">
        You can also look for more designs here just search "Landing Page" (<a
          href="https://land-book.com/"
          target="_blank"
          >Landbook</a
        >, <a href="https://screenlane.com/" target="_blank">Screenlane</a>,
        <a href="https://dribbble.com/" target="_blank">Dribbble</a>)
      </p>

      <p class="text-desc">
        Do not worry about getting it pixel-perfect. Don’t get out your ruler
        or count pixels to find the exact margins between the various
        sections. The point of this assignment is to create something from
        scratch and get the various elements in more or less the right
        position relative to the rest.
      </p>

      <div class="note-container">
        <h2 class="sub-heading">A note about images on the web</h2>
        <p class="text-desc">
          You do not have the legal right to use just any image that you find
          on the web. There are many free images to be found, but make sure
          that the image you use is actually free for you to use, and make
          sure to credit the creator of the image in your project. An easy way
          to give credit is to put the creator’s name and contact info in a
          README file in your repository.
        </p>
        <p class="text-desc">
          Some good places to find free-to-use images on the web include
          <a href="https://www.pexels.com/" target="_blank">Pexels</a>,
          <a href="https://pixabay.com/" target="_blank">Pixabay</a>, and
          <a href="https://unsplash.com/" target="_blank">Unsplash</a>.
        </p>
      </div>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <ol>
        <li>
          There are many ways to tackle a project like this, and it can be
          overwhelming to look at a blank HTML document and not know where to
          start. Our suggestion: take it one section at a time. The website
          you’re creating has 4 main sections (and a footer), so pick one and
          get it into pretty good shape before moving on. Starting at the top
          is always a solid plan.
        </li>
        <li>
          For the section you’re working on, begin by getting all the content
          onto the page before beginning to style it. In other words, do the
          HTML and then do the CSS. You’ll probably have to go back to the
          HTML once you start styling, but bouncing back and forth from the
          beginning will take more time and may cause more frustration. (Note:
          you don’t need to use more than one stylesheet. Using only one CSS
          file is adequate for this project).
        </li>
        <li>
          Many of the elements on this page are very similar to things you saw
          in our flexbox exercises… feel free to go back to those if you need
          a refresher.
        </li>
        <li>
          Do not worry about making your project look nice on a mobile device.
        </li>
      </ol>
    </section>
  </div>
    </div>
    `;
}

export default Flexbox;
