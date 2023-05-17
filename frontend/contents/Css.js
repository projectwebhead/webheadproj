'use strict';

class Css {
  foundations = `
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
      <h1 class="text-heading">CSS Foundations</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        In the previous lesson, you learned how to write the HTML that
        determines how a web page is structured. The next step is to make that
        structure look good with some style, which is exactly what CSS is for.
        In this lesson, we’re going to focus on what we believe are some
        foundational CSS concepts, things that everyone should know from the
        beginning — whether they are just starting out or simply need a
        refresher.
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
        <li>Add styles to HTML with CSS.</li>
        <li>Add styles to HTML with CSS.</li>
        <li>Add styles to specific elements using the correct selectors.</li>
        <li>Understand what the cascade does.</li>
      </ul>
    </section>

    <!-- BASIC SYNTAX -->
    <section id="basic-syntax">
      <h1 class="text-heading">Basic Syntax</h1>
      <p class="text-desc">
        At the most basic level, CSS is made up of various rules. These rules
        are made up of a selector (more on this in a bit) and a semi-colon
        separated list of declarations, with each of those declarations being
        made up of a property:value pair.
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/css-selector.jpg" alt="css" />
      </div>

      <div class="note-container">
        <h4 class="sub-heading">Note</h4>
        <p class="text-desc">
          A <span class="tags">&lt;div&gt;</span> is one of the basic HTML
          elements. It is simply an empty container. In general, it is best to
          use other tags such as <span class="tags">&lt;h1&gt;</span> or
          <span class="tags">&lt;p&gt;</span> for content in your projects,
          but as we learn more about CSS you’ll find that there are many cases
          where the thing you need is just a container for other elements.
          Many of our exercises use plain
          <span class="tags">&lt;div&gt;</span> for simplicity. Later lessons
          will go into much more depth about when it is appropriate to use the
          various HTML elements.
        </p>
      </div>
    </section>

    <!-- SELECTORS -->
    <section id="selectors">
      <h1 class="text-heading">Selectors</h1>
      <p class="text-desc">
        Selectors simply refer to the HTML elements to which CSS rules apply;
        they’re what is actually being “selected” for each rule. The following
        subsections don’t cover every selector available, but they’re by far
        the most common and the ones you should get comfortable using first.
      </p>
      <h2 class="sub-heading">Universal Selector</h2>
      <p class="text-desc">
        The universal selector will select elements of any type, hence the
        name “universal”, and the syntax for it is a simple asterisk. In the
        example below, every element would have the
        <span class="tags">color: purple;</span> style applied to it.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">*</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space-2">color</span><span class="tag-white">: purple;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <h2 class="sub-heading" id="type-selectors">Type Selectors</h2>
      <p class="text-desc">
        A type selector (or element selector) will select all elements of the
        given element type, and the syntax is just the name of the element:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- index.html --&gt;</span>
          </code>
          <code></code>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span><span class="tag-white">Hello, World!&lt;/</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span><span class="tag-white">Hello again!&lt;/</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">p</span><span class="tag-white">&gt;</span><span class="tag-white">Hi...&lt;/</span><span class="code-text-clr">p</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span><span class="tag-white">Okay, bye.&lt;/</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* styles.css */</span>
          </code>
          <code></code>
          <code>
            <span class="code-text-clr">div</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span><span class="tag-white">: white;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        Here, all three <span class="tags">&lt;div&gt;</span> elements would
        be selected, while the <span class="tags">&lt;p&gt;</span> element
        wouldn’t be.
      </p>

      <h2 class="sub-heading">Class Selectors</h2>
      <p class="text-desc">
        Class selectors will select all elements with the given class, which
        is just an attribute you place on an HTML element. Here’s how you add
        a class to an HTML tag and select it in CSS:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- index.html --&gt;</span>
          </code>
          <code></code>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">div class</span><span class="tag-white">="</span><span class="class-clr">alert-text</span><span class="tag-white">"&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">Please agree to our terms of service.</span>
          </code>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* styles.css */</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">.alert-text</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span><span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        Note the syntax for class selectors: a period immediately followed by
        the case-sensitive value of the class attribute. Classes aren’t
        required to be unique, so you can use the same class on as many
        elements as you want.
      </p>

      <p class="text-desc">
        Another thing you can do with the class attribute is to add multiple
        classes to a single element as a space-separated list, such as
        <span class="tags">class="alert-text severe-alert"</span>. Since
        whitespace is used to separate class names like this, you should never
        use spaces for multi-worded names and should use a hyphen instead.
      </p>

      <h2 class="sub-heading">ID Selectors</h2>
      <p class="text-desc">
        ID selectors are similar to class selectors. They select an element
        with the given ID, which is another attribute you place on an HTML
        element:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- index.html --&gt;</span>
          </code>
          <code></code>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">div id</span><span class="tag-white">="</span><span class="class-clr">title</span><span class="tag-white">"&gt; My First Web Page&lt;/</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* styles.css */</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">#title</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">background-color</span><span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        Instead of a period, we use a hashtag immediately followed by the
        case-sensitive value of the ID attribute. A common pitfall is people
        overusing the ID attribute when they don’t necessarily need to, and
        when classes will suffice. While there are cases where using an ID
        makes sense or is needed, such as taking advantage of specificity or
        having links redirect to a section on the current page, you should use
        IDs <strong>sparingly</strong> (if at all).
      </p>

      <p class="text-desc">
        The major difference between classes and IDs is that an element can
        only have one ID. An ID cannot be repeated on a single page, and the
        ID attribute should not contain any whitespace at all.
      </p>

      <h2 class="sub-heading">Group Selector</h2>
      <p class="text-desc">
        What if we have two groups of elements that share some of their style
        declarations?
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="selector-clr">.read</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: white;</span>
          </code>
          <code>
            <span class="property-clr pl-space">background-color</span> <span class="tag-white">: black;</span>
          </code>
          <code>
            <span class="comment-clr pl-space">/* several unique declarations */</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">.unread</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: white;</span>
          </code>
          <code>
            <span class="property-clr pl-space">background-color</span> <span class="tag-white">: black;</span>
          </code>
          <code>
            <span class="comment-clr pl-space">/* several unique declarations */</span>
          </code>

          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        Both our <span class="tags">.read</span> and
        <span class="tags">.unread</span> selectors share the
        <span class="tags">color: white;</span> and
        <span class="tags">background-color: black;</span> declarations, but
        otherwise have several of their own unique declarations. To cut down
        on the repetition, we can group these two selectors together as a
        comma-separated list:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="selector-clr">.read,</span>
          </code>
          <code>
            <span class="selector-clr">.unread</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: white;</span>
          </code>
          <code>
            <span class="property-clr pl-space">background-color</span> <span class="tag-white">: black;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">.read</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="comment-clr pl-space">/* several unique declarations */</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          
          <code>
            <span class="selector-clr">.unread</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="comment-clr pl-space">/* several unique declarations */</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        Both of the examples above (with and without grouping) will have the
        same result, but the second example reduces the repetition of
        declarations and makes it easier to edit either the
        <span class="tags">color</span> or
        <span class="tags">background-color</span> for both classes at once.
      </p>

      <h2 class="sub-heading">Chaining Selectors</h2>
      <p class="text-desc">
        Another way to use selectors is to chain them as a list without any
        separation. Let’s say we had the following HTML:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">div class</span><span class="tag-white">="</span><span class="class-clr">subsection header</span><span class="tag-white">&lt;/</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">p class</span><span class="tag-white">="</span><span class="class-clr">subsection preview</span><span class="tag-white">"&gt;This is where a preview for a post might go.</span><span class="tag-white">&lt;/</span><span class="code-text-clr">p</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;/</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        We have two elements with the
        <span class="tags">subsection</span> class that have some sort of
        unique styles, but what if we only want to apply a separate rule to
        the element that also has <span class="tags">header</span> as a second
        class? Well, we could chain both the class selectors together in our
        CSS like so:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="selector-clr">.subsection.header</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        What <span class="tags">.subsection.header</span> does is it selects
        any element that has both the <span class="tags">subsection</span> and
        <span class="tags">header</span> classes. Notice how there isn’t any
        space between the <span class="tags">.subsection</span> and
        <span class="tags">.header</span> class selectors. This syntax
        basically works for chaining any combination of selectors, except for
        chaining more than one <a href="#type-selectors">type selector</a>.
      </p>

      <p class="text-desc">
        This can also be used to chain a class and an ID, as shown below:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="tag-white">&lt;</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">div class</span><span class="tag-white">="</span><span class="class-clr">subsection header</span><span class="tag-white">&lt;/</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;</span><span class="code-text-clr">p class</span><span class="tag-white">="</span><span class="class-clr">subsection</span><span class="tag-white">"</span> <span class="code-text-clr pl-space-2">id</span> <span class="tag-white">="</span> <span class="class-clr">preview</span> <span class="tag-white">"&gt;This is where a preview for a post might go.</span><span class="tag-white">&lt;/</span><span class="code-text-clr">p</span><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;/</span><span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        You can take the two elements above and combine them with the
        following:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="selector-clr">.subsection.header</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space-2">color</span> <span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">.subsection#preview</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space-2">color</span> <span class="tag-white">: blue;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        In general, you can’t chain more than one type selector since an
        element can’t be two different types at once. For example, chaining
        two type selectors like <span class="tags">div</span> and
        <span class="tags">p</span> would give us the selector
        <span class="tags">divp</span>, which wouldn’t work since the selector
        would try to find a literal
        <span class="tags">&lt;divp&gt;</span> element, which doesn’t exist.
      </p>

      <h2 class="sub-heading">Descendant Combinator</h2>

      <p class="text-desc">
        Combinators allow us to combine multiple selectors differently than
        either grouping or chaining them, as they show a relationship between
        the selectors. There are four types of combinators in total, but for
        right now we’re going to only show you the
        <strong>descendant combinator</strong>, which is represented in CSS by
        a single space between selectors. A descendant combinator will only
        cause elements that match the last selector to be selected if they
        also have an ancestor (parent, grandparent, etc) that matches the
        previous selector.
      </p>

      <p class="text-desc">
        So something like <span class="tags">.ancestor</span>
        <span class="tags">.child</span> would select an element with the
        class child if it has an ancestor with the class
        <span class="tags">ancestor</span>. Another way to think of it is
        <span class="tags">child</span> will only be selected if it is nested
        inside of <span class="tags">ancestor</span>, no matter how deep. Take
        a quick look at the example below and see if you can tell which
        elements would be selected based on the CSS rule provided:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- index.html --&gt;</span>
          </code>
          <code></code>
          <code><span class="tag-white">&lt;</span><span class="code-text-clr">div class</span><span class="tag-white">="</span><span class="class-clr">ancestor</span><span class="white-tag">"&gt;</span> <span class="comment-clr">&lt;!-- A --&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space-2">&lt;</span><span class="code-text-clr">div class</span><span class="tag-white">="</span><span class="class-clr">contents</span><span class="white-tag">"&gt;</span> <span class="comment-clr">&lt;!-- B --&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">&lt;</span><span class="code-text-clr">div class</span><span class="tag-white">="</span><span class="class-clr">contents</span><span class="white-tag">"&gt;</span> <span class="comment-clr">&lt;!-- C --&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">&lt;/</span> <span class="code-text-clr">div</span> <span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;/</span> <span class="code-text-clr">div</span> <span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space-2">&lt;/</span> <span class="code-text-clr">div</span> <span class="tag-white">&gt;</span>
          </code>

          <code></code>

          <code><span class="tag-white">&lt;</span><span class="code-text-clr">div class</span><span class="tag-white">="</span><span class="class-clr">contents</span><span class="white-tag">"&gt;</span> <span class="comment-clr">&lt;!-- D --&gt;</span>
          </code>

        </pre>
      </div>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- styles.css --&gt;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">.ancestor .contents</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>

          <code>
            <span class="comment-clr pl-space">/* some declarations */</span>
          </code>

          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>
      <p class="text-desc">
        In the above example, the first two elements with the
        <span class="tags">contents</span> class (B and C) would be selected,
        but that last element (D) won’t be. Was your guess correct?
      </p>

      <p class="text-desc">
        There’s really no limit to how many combinators you can add to a rule,
        so <span class="tags">.one</span> <span class="tags">.two</span>
        <span class="tags">.three</span> <span class="tags">.four</span> would
        be totally valid. This would just select an element that has a class
        of <span class="tags">four</span> if it has an ancestor with a class
        of <span class="tags">three</span>, and if that ancestor has its own
        ancestor with a class of <span class="tags">two</span>, and so on. You
        generally want to avoid trying to select elements that need this level
        of nesting, though, as it can get pretty confusing and long, and it
        can cause issues when it comes to specificity.
      </p>
    </section>

    <!-- PROPERTIES TO GET STARTED WITH -->
    <section id="properties">
      <h1 class="text-heading">Properties to Get Started With</h1>
      <p class="text-desc">
        There are some CSS properties that you’re going to be using all the
        time, or at the very least more often than not. We’re going to
        introduce you to several of these properties, though this is by no
        means a complete list. Learning the following properties will simply
        be enough to help get you started.
      </p>

      <h2 class="sub-heading">Color and Background-Color</h2>
      <p class="text-desc">
        The <pan class="tags">color</pan> property sets an element’s text
        color, while <span class="tags">background-color</span> sets, well,
        the background color of an element. I guess we’re done here?
      </p>

      <p class="text-desc">
        Almost. Both of these properties can accept one of several kinds of
        values. A common one is a keyword, such as an actual color name like
        <span class="tags">red</span> or the
        <span class="tags">transparent</span> keyword. They also accept HEX,
        RGB, and HSL values, which you may be familiar with if you’ve ever
        used a photoshop program or a site where you could customize your
        profile colors.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="selector-clr">p</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="comment-clr pl-space">/* hex example: */</span>
          </code>
          <code>
            <span class="propery-clr pl-space">color</span> <span class="tag-white">: #a18be5;</span>
          </code>
          <code>
            <span class="comment-clr pl-space">/* rgb example: */</span>
          </code>
          <code>
            <span class="propery-clr pl-space">color</span> <span class="tag-white">:</span> <span class="code-text-clr">rgb</span><span class="tag-white">&#40;100, 0, 127&#41;;</span>
          </code>
          <code>
            <span class="comment-clr pl-space">/* hsl example: */</span>
          </code>
          <code>
            <span class="propery-clr pl-space">color</span> <span class="tag-white">:</span> <span class="code-text-clr">hsl</span><span class="tag-white">&#40;15, 82%, 56%&#41;;</span>
          </code>
          <code>
            <span class="tag-white">&#123;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        Take a quick look at
        <a
          href="https://www.w3schools.com/cssref/css_colors_legal.php"
          target="_blank"
          >CSS Legal Color Values</a
        >
        to see how you can adjust the opacity of these colors by adding an
        alpha value.
      </p>

      <h2 class="sub-heading">Typography Basics and Text-Align</h2>
      <p class="text-desc">
        <span class="tags">font-family</span> can be a single value or a
        comma-separated list of values that determine what font an element
        uses. Each font will fall into one of two categories, either a “font
        family name” like <span class="tags">"DejaVu Sans"</span> (we use
        quotes due to the whitespace between words) or a “generic family name”
        like <span class="tags">sans-serif</span> (generic family names never
        use quotes).
      </p>

      <p class="text-desc">
        If a browser cannot find or does not support the first font in a list,
        it will use the next one, then the next one and so on until it finds a
        supported and valid font. This is why it’s best practice to include a
        list of values for this property, starting with the font you want to
        be used most and ending with a generic font family as a fallback, e.g.
        <span class="tags">font-family: "DejaVu Sans", sans-serif;</span>
      </p>

      <p class="text-desc">
        <span class="tags">font-size</span> will, as the property name
        suggests, set the size of the font. When giving a value to this
        property, the value should not contain any whitespace, e.g.
        <span class="tags">font-size: 22px</span> has no space between “22”
        and “px”.
      </p>

      <p class="text-desc">
        <span class="tags">font-weight</span> affects the boldness of text,
        assuming the font supports the specified weight. This value can be a
        keyword, e.g. <span class="tags">font-weight: bold</span>, or a number
        between 1 and 1000, e.g.
        <span class="tags">font-weight: 700</span> (the equivalent of
        <span class="tags">bold</span>). Usually, the numeric values will be
        in increments of 100 up to 900, though this will depend on the font.
      </p>

      <p class="text-desc">
        <span class="tags">text-align</span> will align text horizontally
        within an element, and you can use the common keywords you may have
        come across in word processors as the value for this property, e.g.
        <span class="tags">text-align: center</span>.
      </p>

      <h2 class="sub-heading">Image Height and Width</h2>
      <p class="text-desc">
        Images aren’t the only elements that we can adjust the height and
        width on, but we want to focus on them specifically in this case.
      </p>

      <p class="text-desc">
        By default, an <span class="tags">&lt;img&gt;</span> element’s
        <span class="tags">height</span> and
        <span class="tags">width</span> values will be the same as the actual
        image file’s height and width. If you wanted to adjust the size of the
        image without causing it to lose its proportions, you would use a
        value of “auto” for the <span class="tags">height</span> property and
        adjust the <span class="tags">width</span> value:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="selector-clr">img</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">height</span> <span class="tag-white">: auto;</span>
          </code>
          <code>
            <span class="property-clr pl-space">width</span> <span class="tag-white">: 500px;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        For example, if an image’s original size was 500px height and 1000px
        width, using the above CSS would result in a height of 250px.
      </p>

      <p class="text-desc">
        It’s best to include both of these properties for
        <span class="tags">&lt;img&gt;</span> elements, even if you don’t plan
        on adjusting the values from the image file’s original ones. When
        these values aren’t included, if an image takes longer to load than
        the rest of the page contents, the image won’t take up any space on
        the page at first, but will suddenly cause a drastic shift of the
        other page contents once it does load in. Explicitly stating a
        <span class="tags">height</span> and
        <span class="tags">width</span> prevents this from happening, as space
        will be “reserved” on the page and will just appear as a blank space
        until the image loads.
      </p>
    </section>

    <!-- The Cascade of CSS -->
    <section id="cascade">
      <h1 class="text-heading">THe Cascade of CSS</h1>
      <p class="text-desc">
        Sometimes we may have rules that conflict with one another, and we end
        up with some unexpected results. “But I wanted these paragraphs to be
        blue, why are they red like these other paragraphs?!” As frustrating
        as this can be, it’s important to understand that CSS doesn’t just do
        things against our wishes. CSS only does what we tell it to do. One
        exception to this is the default styles that are provided by a
        browser. These default styles vary from browser to browser, and they
        are why some elements create a large “gap” between themselves and
        other elements, or why buttons look the way they do, despite us not
        writing any CSS rules to style them that way.
      </p>

      <p class="text-desc">
        So if you end up with some unexpected behavior like this it’s either
        because of these default styles or due to not understanding how a
        property works or not understanding this little thing called the
        cascade.
      </p>

      <p class="text-desc">
        The cascade is what determines which rules actually get applied to our
        HTML. There are different factors that the cascade uses to determine
        this, three of which we’ll go over to hopefully help you avoid (as
        many of) those frustrating “I hate CSS” moments.
      </p>

      <h2 class="sub-heading">Specifity</h2>
      <p class="text-desc">
        A CSS declaration that is more specific will take precedence over less
        specific ones. Inline styles, which we will go over more in the Adding
        CSS to HTML section towards the end of the lesson, have the highest
        specificity compared to selectors, while each type of selector has its
        own specificity level that contributes to how specific a declaration
        is. Other selectors contribute to specificity, but we’re focusing only
        on the ones mentioned in this lesson:
      </p>
      <ol>
        <li>ID selectors (most specific selector)</li>
        <li>Class selectors</li>
        <li>Type selectors</li>
      </ol>

      <p class="text-desc">
        Specificity will only be taken into account when an element has
        multiple, conflicting declarations targeting it, sort of like a
        tie-breaker. An ID selector will always beat any number of class
        selectors, a class selector will always beat any number of type
        selectors, and a type selector will always beat any number of anything
        less specific than it. When no declaration has a selector with a
        higher specificity, a larger amount of a single selector will beat a
        smaller amount of that same selector.
      </p>

      <p class="text-desc">
        Let’s take a look at a few quick examples to visualize how specificity
        works. Consider the following HTML and CSS code:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- index.html --&gt;</span>
          </code>
          <code></code>
          <code>
            <span class="code-text-clr">div class</span> <span class="tag-white">="</span> <span class="class-clr">main</span> <span class="tag-white">"&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;</span> <span class="code-text-clr">div class</span> <span class="tag-white">="</span> <span class="class-clr">list subsection</span> <span class="tag-white">"&lt;&gt;/</span> <span class="code-text-clr">div</span> <span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;/</span> <span class="code-text-clr">div</span><span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* rule 1 */</span>
          </code>
          <code>
            <span class="selector-clr">#subsection</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: blue;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="comment-clr">/* rule 2 */</span>
          </code>
          <code>
            <span class="selector-clr">.main .list</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: red;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        In the example above, despite rule 2 having more class selectors than
        ID selectors, rule 1 is more specific because ID beats class. In this
        case, the <span class="tags">color: blue;</span> declaration would
        take precedence.
      </p>

      <p class="text-desc">Let’s consider one final example:</p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- index.html --&gt;</span>
          </code>
          <code></code>
          <code>
            <span class="tag-white">&lt;</span> <span class="code-text-clr">div class</span> <span class="tag-white">="</span> <span class="class-clr">main</span> <span class="tag-white">"&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space-2">&lt;</span> <span class="code-text-clr">div class</span> <span class="tag-white">="</span> <span class="class-clr">list</span> <span class="tag-white">"&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">&lt;</span> <span class="code-text-clr">div id</span> <span class="tag-white">="</span> <span class="class-clr">subsection</span> <span class="tag-white">"&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space-2">&lt;/</span> <span class="code-text-clr">div</span> <span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;/</span> <span class="code-text-clr">div</span> <span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* rule 1 */</span>
          </code>
          <code>
            <span class="selector-clr">.list #subsection</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">background-color</span> <span class="tag-white">: yellow;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: blue;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="comment-clr">/* rule 2 */</span>
          </code>
          <code>
            <span class="selector-clr">.main .list #subsection</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        In this example, both rules are using ID and class selectors, so
        neither rule is using a more specific selector than the other. The
        cascade then checks the amounts of each selector type. Both rules only
        have one ID selector, but rule 2 has more class selectors, so rule 2
        has a higher specificity!
      </p>
      <p class="text-desc">
        While the <span class="tags">color: red</span> declaration would take
        precedence, the
        <span class="tags">background-color: yellow</span> declaration would
        still be applied since there’s no conflicting declaration for it.
      </p>

      <p class="text-desc">
        Note: When comparing selectors, you may come across special symbols
        for the universal selector (<span class="tags">*</span>) as well as
        combinators (<span class="tags">+</span>, <span class="tags">~</span>,
        <span class="tags">></span>, and an empty space). These symbols do not
        add any specificity in and of themselves.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* rule 1 */</span>
          </code>
          <code>
            <span class="selector-clr">.class.second-class</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">font-size</span> <span class="tag-white">: 12px;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="comment-clr">/* rule 2 */</span>
          </code>
          <code>
            <span class="selector-clr">.class .second-class</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">font-size</span> <span class="tag-white">: 24px;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>
      <p class="text-desc">
        Here both rule 1 and rule 2 have the same specificity. Rule 1 uses a
        chaining selector (no space) and rule 2 uses a descendant combinator
        (the empty space). But both rules have two classes and the combinator
        symbol itself does not add to the specificity.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* rule 1 */</span>
          </code>
          <code>
            <span class="selector-clr">.class.second-class</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">font-size</span> <span class="tag-white">: 12px;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="comment-clr">/* rule 2 */</span>
          </code>
          <code>
            <span class="selector-clr">.class > .second-class</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">font-size</span> <span class="tag-white">: 24px;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        This example shows the same thing. Even though rule 2 is using a child
        combinator (<span class="tags">></span>), this does not change the
        specificity value. Both rules still have two classes so they have the
        same specificity values.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* rule 1 */</span>
          </code>
          <code>
            <span class="selector-clr">*</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: black;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="comment-clr">/* rule 2 */</span>
          </code>
          <code>
            <span class="selector-clr">h1</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: orange;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        In this example, rule 2 would have higher specificity and the
        <span class="tags">orange</span> value would take precedence for this
        element. Rule 2 uses a type selector, which has the lowest specificity
        value. But rule 1 uses the universal selector (<span class="tags"
          >*</span
        >) which has no specificity value. In the case of multiple
        declarations having the same specificity, the last CSS rule
        declaration is evaluated and applied.
      </p>

      <h2 class="sub-heading">Inheritance</h2>
      <p class="text-desc">
        Inheritance refers to certain CSS properties that, when applied to an
        element, are inherited by that element’s descendants, even if we don’t
        explicitly write a rule for those descendants. Typography based
        properties (<span class="tags">color</span>,
        <span class="tags">font-size</span>,
        <span class="tags">font-family</span>, etc.) are usually inherited,
        while most other properties aren’t.
      </p>

      <p class="text-desc">
        The exception to this is when directly targeting an element, as this
        always beats inheritance:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- index.html --&gt;</span>
          </code>
          <code></code>
          <code>
            <span class="tag-white">&lt;</span> <span class="code-text-clr">div id</span> <span class="tag-white">="</span> <span class="class-clr">parent</span> <span class="tag-white">"&lt;&gt;/</span> <tag class="code-text-clr">div</tag><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;</span> <span class="code-text-clr">div class</span> <span class="tag-white">="</span> <span class="class-clr">child</span> <span class="tag-white">"&lt;&gt;/</span> <tag class="code-text-clr">div</tag><span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;/</span> <span class="code-text-clr">div</span> <span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* styles.css */</span>
          </code>
          <code>
            <span class="selector-clr">#parent</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">.child</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: blue;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        Despite the <span class="tags">parent</span> element having a higher
        specificity with an ID, the <span class="tags">child</span> element
        would have the <span class="tags">color: blue</span> style applied
        since that declaration directly targets it, while
        <span class="tags">color: red</span> from the parent is only
        inherited.
      </p>

      <h2 class="sub-heading">Rule Order</h2>
      <p class="text-desc">
        The final factor, the end of the line, the tie-breaker of the
        tie-breaker. Let’s say that after every other factor has been taken
        into account, there are still multiple conflicting rules targeting an
        element. How does the cascade determine which rule to apply?
      </p>

      <p class="text-desc">
        Really simply, actually. Whichever rule was the last defined is the
        winner.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* styles.css */</span>
          </code>
          <code>
            <span class="selector-clr">.alert</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">.warning</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: yellow;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        For an element that has both the <span class="tags">alert</span> and
        <span class="tags">warning</span> classes, the cascade would run
        through every other factor, including inheritance (none here) and
        specificity (neither rule is more specific than the other). Since the
        <span class="tags">.warning</span> rule was the last one defined, and
        no other factor was able to determine which rule to apply, it’s the
        one that gets applied to the element.
      </p>
    </section>

    <!-- ADDING CSS TO HTML -->
    <section id="adding-css-html">
      <h1 class="text-heading">Adding CSS to HTML</h1>

      <p class="text-desc">
        Okay, we went over quite a bit so far. The only thing left for now is
        to go over how to add all this CSS to our HTML. There are three
        methods to do so.
      </p>

      <h2 class="sub-heading">External CSS</h2>
      <p class="text-desc">
        External CSS is the most common method you will come across, and it
        involves creating a separate file for the CSS and linking it inside of
        an HTML’s opening and closing
        <span class="tags">&lt;head&gt;</span> tags with a self-closing
        <span class="tags">&lt;link&gt;</span> element:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">&lt;!-- index.html --&gt;</span>
          </code>
         <code></code>

         <code>
          <span class="tag-white">&lt;</span> <span class="code-text-clr">head</span> <span class="tag-white">&gt;</span>
         </code>
         <code>
          <span class="tag-white pl-space">&lt;</span> <span class="code-text-clr">link rel</span> <span class="tag-white">="</span> <span class="class-clr">stylesheet</span> <span class="tag-white">"</span> <span class="code-text-clr pl-space-2">href</span> <span class="tag-white">="</span> <span class="class-clr">styles.css</span> <span class="tag-white">"&gt;</span>
         </code>
         
         <code>
          <span class="tag-white">&lt;/</span> <span class="code-text-clr">head</span> <span class="tag-white">&gt;</span>
         </code>

        </pre>
      </div>

      <div class="code-container">
        <pre>
          <code>
            <span class="comment-clr">/* styles.css */</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">div</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: white;</span>
          </code>
          <code>
            <span class="property-clr pl-space">background-color</span> <span class="tag-white">: black;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">p</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">color</span> <span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        First, we add a self-closing
        <span class="tags">&lt;link&gt;</span> element inside of the opening
        and closing <span class="tags">&lt;head&gt;</span> tags of the HTML
        file. The <span class="tags">href</span> attribute is the location of
        the CSS file, either an absolute URL or, what you’ll be utilizing, a
        URL relative to the location of the HTML file. In our example above,
        we are assuming both files are located in the same directory. The
        <span class="tags">rel</span> attribute is required, and it specifies
        the relationship between the HTML file and the linked file.
      </p>

      <p class="text-desc">
        Then inside of the newly created
        <span class="tags">styles.css</span> file, we have the selector (the
        <span class="tags">div</span> and <span class="tags">p</span>),
        followed by a pair of opening and closing curly braces, which create a
        “declaration block”. Finally, we place any declarations inside of the
        declaration block. <span class="tags">color: white;</span> is one
        declaration, with <span class="tags">color</span> being the property
        and <span class="tags">white</span> being the value, and
        <span class="tags">background-color: black;</span> is another
        declaration.
      </p>

      <p class="text-desc">
        A note on file names: <span class="tags">styles.css</span> is just
        what we went with as the file name here. You can name the file
        whatever you want as long as the file type is
        <span class="tags">.css</span>, though “style” or “styles” is most
        commonly used.
      </p>

      <p class="text-desc">A couple of the pros to this method are:</p>
      <ol>
        <li>
          It keeps our HTML and CSS separated, which results in the HTML file
          being smaller and making things look cleaner.
        </li>
        <li>
          We only need to edit the CSS in one place, which is especially handy
          for websites with many pages that all share similar styles.
        </li>
      </ol>

      <h2 class="sub-heading">Internal CSS</h2>
      <p class="text-desc">
        Internal CSS (or embedded CSS) involves adding the CSS within the HTML
        file itself instead of creating a completely separate file. With the
        internal method, you place all the rules inside of a pair of opening
        and closing <span class="tags">&lt;style&gt;</span> tags, which are
        then placed inside of the opening and closing
        <span class="tags">&lt;head&gt;</span> tags of your HTML file. Since
        the styles are being placed directly inside of the
        <span class="tags">&lt;head&gt;</span> tags, we no longer need a
        <span class="tags">&lt;link&gt;</span> element that the external
        method requires.
      </p>

      <p class="text-desc">
        Besides these differences, the syntax is exactly the same as the
        external method (selector, curly braces, declarations):
      </p>

      <div class="code-container">
        <pre>
          
          <code>
            <span class="tag-white">&lt;</span> <span class="code-text-clr">head</span> <span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;</span> <span class="code-text-clr">style</span> <span class="tag-white">&gt;</span>
          </code>

          <code>
            <span class="selector-clr pl-space-4">div</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space-4">color</span> <span class="tag-white">: white;</span>
          </code>
          <code>
            <span class="property-clr pl-space-4">background-color</span> <span class="tag-white">: black;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr pl-space-4">p</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space-4">color</span> <span class="tag-white">: red;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">&#125;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&lt;/</span> <span class="code-text-clr">style</span> <span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;/</span> <span class="code-text-clr">head</span> <span class="tag-white">&gt;</span>
          </code>
          <code>
            <span class="tag-white">&lt;/</span> <span class="code-text-clr">body</span> <span class="tag-white">&gt;</span> <span class="tag-white">...&lt;/</span> <span class="code-text-clr">body</span> <span class="tag-white">&gt;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        This method can be useful for adding unique styles to a single page of
        a website, but it doesn’t keep things separate like the external
        method, and depending on how many rules and declarations there are it
        can cause the HTML file to get pretty big.
      </p>

      <h2 class="sub-heading">Inline CSS</h2>
      <p class="text-desc">
        Inline CSS makes it possible to add styles directly to HTML elements,
        though this method isn’t as recommended:
      </p>

      <div class="code-container">
        <pre>
          
            <code>
              <span class="tag-white">&lt;</span> <span class="code-text-clr">body</span> <span class="tag-white">&gt;</span>
            </code>
          
            <code>
              <span class="tag-white pl-space">&lt;</span> <span class="code-text-clr">div style</span> <span class="tag-white">="</span> <span class="class-clr">color</span> <span class="tag-white ">:</span> <span class="selector-clr pl-space-2">white</span> <span class="tag-white ">;</span> <span class="class-clr ">background-color</span> <span class="tag-white pl-space-2">:</span> <span class="selector-clr">black</span> <span class="tag-white">;"&lt;...&gt;/</span> <span class="color-text-clr">div</span> <span class="tag-white">&gt;</span>
            </code>
          
            <code>
              <span class="tag-white">&lt;/</span> <span class="code-text-clr">body</span> <span class="tag-white">&gt;</span>
            </code>
        </pre>
      </div>

      <p class="text-desc">
        The first thing to note is that we don’t actually use any selectors
        here, since the styles are being added directly to the opening
        <span class="tags">&lt;div&gt;</span> tag itself. Next, we have the
        <span class="tags">style=</span> attribute, with its value within the
        pair of quotation marks being the declarations
      </p>

      <p class="text-desc">
        If you need to add a unique style for a single element, this method
        can work just fine. Generally, though, this isn’t exactly a
        recommended way for adding CSS to HTML for a few reasons:
      </p>

      <ul>
        <li>
          It can quickly become pretty messy once you start adding a lot of
          declarations to a single element, causing your HTML file to become
          unnecessarily bloated.
        </li>
        <li>
          If you want many elements to have the same style, you would have to
          copy + paste the same style to each individual element, causing lots
          of unnecessary repetition and more bloat.
        </li>
        <li>
          Any inline CSS will override the other two methods, which can cause
          unexpected results. (While we won’t dive into it here, this can
          actually be taken advantage of).
        </li>
      </ul>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <div class="assignment-container">
        <ol>
          <li>
            Remember the Playlist page you created as practice from the
            previous lesson? Well, it’s rather plain looking, isn’t it? Let’s
            fix that by adding some CSS to it!
          </li>
        </ol>
        <ul>
          <li>
            How you actually style it is completely open, but you should use
            the external CSS method (for this practice and moving forward).
            You should also try to use several of the properties mentioned in
            the section above (color, background color, typography properties,
            etc). Take some time to play around with the various properties to
            get a feel for what they do. For now, don’t worry at all about
            making it look good. This is just to practice and get used to
            writing CSS, not to make something to show off on your resume, so
            feel free to go a little crazy for now.
          </li>
          <li>
            We haven’t covered how to use a custom font for the
            <span class="sub-tags">font-family</span> property yet, so for now
            take a look at
            <a
              href="https://www.w3schools.com/Css/css_font.asp"
              target="_blank"
              >CSS Fonts</a
            >
            for a list of generic font families to use, and
            <a
              href="https://www.w3schools.com/cssref/css_websafe_fonts.php"
              target="_blank"
              >CSS Web Safe Fonts</a
            >
            for a list of fonts that are web safe. Web safe means that these
            are fonts that are installed on basically every computer or device
            (but be sure to still include a generic font family as a
            fallback).
          </li>
        </ul>
      </div>
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
          <a href=""
            >What are the main differences between external, internal, and
            inline CSS?</a
          >
        </li>
        <li><a href="">What is the syntax for class and ID selectors?</a></li>
        <li>
          <a href=""
            >How would you apply a single rule to two different selectors?</a
          >
        </li>
        <li>
          <a href=""
            >Given an element that has an id of
            <span class="sub-tags">title</span> and a class of
            <span class="sub-tags">primary</span>, how would you use both
            attributes for a single rule?</a
          >
        </li>
        <li><a href="">What does the descendant combinator do?</a></li>
        <li>
          <a href=""
            >Between a rule that uses one class selector and a rule that uses
            three type selectors, which rule has the higher specificity?</a
          >
        </li>
      </ul>
    </section>

    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section provides additional resources and links to related
        content that can assist you in further understanding the material.
        While not mandatory, these resources serve as supplemental materials
        to enhance your learning experience.
      </p>

      <ul>
        <li>
          The
          <a
            href="https://2019.wattenberger.com/blog/css-cascade"
            target="_blank"
            >CSS Cascade</a
          >
          is a great, interactive read that goes a little more in detail about
          other factors that affect what CSS rules actually end up being
          applied.
        </li>
        <li>
          <a
            href="https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css#finding-and-loading-a-font-file-from-a-hosted-service"
            target="_blank"
            >Changing the Font Family</a
          >
          describes a few different approaches to using custom fonts.
        </li>
        <li>
          <a
            href="https://www.w3schools.com/css/css_specificity.asp"
            target="_blank"
            >CSS Specificity</a
          >
          from W3Schools goes over how you can calculate the specificity of
          rules. This page mentions some selectors that we will go over in a
          later lesson, so don’t worry about what they are or how to use them
          right now.
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index"
            target="_blank"
            >Mozilla CSS Properties Reference</a
          >
          can be used to learn if a particular CSS property is inherited or
          not; simply look for the Inherited field inside the Formal
          Definition section.
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition"
            target="_blank"
          >
            Here’s an example
          </a>
          for the CSS <span class="sub-tags">color</span> property.
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
            target="_blank"
            >Mozilla CSS values and units</a
          >
          can be used to learn the various types of values possible in
          absolute or relative terms.
        </li>
      </ul>
    </section>
  </div>
    </div>
   `;

  inspectingHtmlAndCss = `
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
      <h1 class="text-heading">Inspecting HTML and CSS</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Being able to inspect and debug your HTML and CSS is critical to
        frontend development. This lesson will take us through the Chrome Dev
        Tools, which allow you to see detailed information about your elements
        and CSS rules, as well as assist you in finding and fixing problems in
        your code.
      </p>
    </section>

    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will learn
        in this lesson.
      </p>
      <ul>
        <li>You will know how to access the element inspector.</li>
        <li>You will know how to select and inspect specific elements.</li>
        <li>You will know how to test out HTML and CSS in the inspector.</li>
      </ul>
    </section>

    <!-- THE INSPECTOR -->
    <section id="inspector">
      <h1 class="text-heading">The Inspector</h1>
      <p class="text-desc">
        To open up the inspector, you can right-click on any element of a
        webpage and click “Inspect” or press F12. Go ahead and do that right
        now to see the HTML and CSS used on this page.
      </p>

      <p class="text-desc">
        Don’t get overwhelmed with all the tools you’re now seeing! For this
        lesson, we want to focus on the Elements and Styles panes.
      </p>
    </section>

    <!-- INSPECTING ELEMENTS -->

    <section id="inspect-element">
      <h1 class="text-heading">Inspecting Elements</h1>
      <p class="text-desc">
        In the Elements pane, you can see the entire HTML structure of your
        page. You can click on any of the elements in this pane to select that
        specific element. Alternatively, you can click the blue-highlighted
        icon shown below on the left, and hover over any element on the page.
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/inspect-html.png" alt="" />
      </div>

      <p class="text-desc">
        When an element is selected, the Styles tab will show all the
        currently applied styles, as well as any styles that are being
        overwritten (indicated by a strikethrough of the text). For example,
        if you use the inspector to click on the “Your Career in Web
        Development Starts Here” header on the TOP homepage, on the right-hand
        side you’ll see all the styles that are currently affecting the
        element, as seen below:
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/inspect-css.jpg" alt="" />
      </div>
    </section>

    <!-- Testing Styles in the Inspector -->

    <section id="testing-styles">
      <h1 class="text-heading">Texting Styles in the Inspector</h1>
      <p class="text-desc">
        The Styles pane also allows you to edit styles directly in the
        browser. You can click inside of any individual selector to add a new
        rule or click on an existing attribute or value to alter it. When
        doing so, the webpage responds with the changes in real-time. This
        won’t affect the source code in your text editor, but it is extremely
        useful for quickly testing out various attributes and values without
        needing to reload the page over and over again.
      </p>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <p class="text-desc">
        Go through the following sections of the
        <a href="https://developer.chrome.com/docs/devtools/" target="_blank"
          >official Chrome DevTools docs</a
        >:
      </p>

      <ul>
        <li>
          <a
            href="https://developer.chrome.com/docs/devtools/overview/"
            target="_blank"
            >Overview</a
          >: don’t navigate to any other pages linked here; just get familiar
          with what tools are available in the DevTools, rather than how to
          use all of them right now.
        </li>
        <li>
          <a
            href="https://developer.chrome.com/docs/devtools/open/"
            target="_blank"
            >Open Chrome DevTools</a
          >: similar to what we went over above, but with some nice extras.
        </li>
        <li>
          <a
            href="https://developer.chrome.com/docs/devtools/css/"
            target="_blank"
            >View and change CSS</a
          >: be sure to follow along with any interactive instructions!
        </li>
        <li>
          <a
            href="https://developer.chrome.com/docs/devtools/dom/"
            target="_blank"
            >Get Started With Viewing And Changing The DOM</a
          >: skip through any part that uses the JavaScript console.
        </li>
      </ul>
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
          <a href="#inspect-element"
            >How do you select a specific element on your page with your
            browser’s developer tools?</a
          >
        </li>
        <li>
          <a href="#testing-styles"
            >What does a strikethrough in a CSS declaration mean in your
            browser’s developer tools?</a
          >
        </li>
        <li>
          <a href="#testing-styles"
            >How do you change CSS in real time on specific elements of a web
            page with your browser’s developer tools?</a
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
            href="https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/"
            target="_blank"
            >This article about how we can utilize css overview in the
            developer tools</a
          >
          to check the colors, font styles, media-queries, etc. used on a
          particular webpage.
        </li>
      </ul>
    </section>
  </div>
    </div>
   `;

  theBoxModedl = `
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
      <h1 class="text-heading">The Box Model</h1>
    </div>
  </div>

  <!-- INTRODUCTION -->
  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Now that you understand the basic syntax of HTML and CSS, we’re going
        to get serious. The most important skills you need to master with CSS
        are positioning and layout. Changing fonts and colors is a crucial
        skill, but being able to put things exactly where you want them on a
        webpage is even more crucial. After all, how many webpages can you
        find where absolutely every element is just stacked one on top of
        another?
      </p>
      <p class="text-desc">
        Learning to position elements on a webpage is not that difficult once
        you understand just a few key concepts. Unfortunately, many learners
        race through learning HTML and CSS to get to JavaScript and end up
        missing these fundamental concepts. This leads to frustration, pain,
        because all the JavaScript skills in the world are meaningless if you
        can’t stick your elements on the page where you need them to be. So
        with that in mind, let’s get started.
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
        <li>You’ll learn all about the <em>box model</em>.</li>
        <li>
          You’ll learn how to make sure elements are just the right size with
          <span class="tags">margin</span>, <span class="tags">padding</span>,
          and <span class="tags">borders</span>
        </li>
      </ul>
    </section>

    <!-- THE BOX MODEL -->

    <section id="box-model">
      <h1 class="text-heading">The Box Model</h1>
      <p class="text-desc">
        The first important concept that you need to understand to be
        successful in CSS is the box model. It isn’t complicated, but skipping
        over it now will cause you much frustration down the line.
      </p>
      <p class="text-desc">
        Every single thing on a webpage is a rectangular box. These boxes can
        have other boxes in them and can sit alongside one another. You can
        get a rough idea of how this works by sticking a border on every item
        on the page like this:
      </p>
      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">*</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="property-clr pl-space">border</span> <span class="tag-white">: 1px solid lavender;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <div class="img-container">
        <img src="/main-content-html/img/box-model.png" alt="" />
      </div>

      <p class="text-desc">
        The only real complication here is that there are many ways to
        manipulate the size of these boxes, and the space between them, using
        <span class="tags">padding</span>, <span class="tags">margin</span>,
        and <span class="tags">border</span>. The assigned articles go into
        more depth on this concept, but to sum it up briefly:
      </p>

      <ul>
        <li>
          <span class="tags">padding</span> increases the space between the
          border of a box and the content of the box.
        </li>
        <li>
          <span class="tags">margin</span> increases the space between the
          borders of a box and the borders of adjacent boxes.
        </li>
        <li>
          <span class="tags">border</span> adds space (even if it’s only a
          pixel or two) between the margin and the padding.
        </li>
      </ul>

      <p class="text-desc">Be sure to study the diagrams carefully.</p>
      <div class="img-container">
        <img src="/main-content-html/img/padding-border-margin.jpg" alt="" />
      </div>
    </section>
    <!-- ASSIGNMENT -->

    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <ol>
        <li>
          <a
            href="https://www.youtube.com/watch?v=rIO5326FgPE"
            target="_blank"
            >This video</a
          >
          is a straightforward overview of the box model, padding and margin.
          Go ahead and watch this now; it informs everything else
        </li>
        <li>
          Because the box model concept is so incredibly fundamental, check
          out
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
            target="_blank"
            >this lesson from MDN</a
          >. It covers the same material as the video above, but it goes a
          little further in-depth. Pay close attention to the examples and
          take the time to experiment with their in-browser editor!
        </li>
        <li>
          <a
            href="https://css-tricks.com/almanac/properties/m/margin/"
            target="_blank"
            >This CSS Tricks page</a
          >
          has some further information about the
          <span class="sub-tags">margin</span> property that you’ll find
          useful. Specifically, the sections about
          <span class="sub-tags">auto</span> and margin collapsing contain
          things you’ll want to know.
        </li>
      </ol>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-desc">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding of
        this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ul>
        <li>
          <a href="#box-model"
            >From inside to outside, what is the order of box-model
            properties?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model"
            target="_blank"
            >What does the <span class="sub-tags">box-sizing</span> CSS
            property do?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model"
            target="_blank"
            >What is the difference between the standard and alternative box
            model?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders"
            target="_blank"
            >Would you use <span class="sub-tags">margin</span> or
            <span class="sub-tags">padding</span> to create more space between
            2 elements?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders"
            target="_blank"
            >Would you use <span class="sub-tags">margin</span> or
            <span class="sub-tags">padding</span> to create more space between
            the contents of an element and its border?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders"
            target="_blank"
            >Would you use <span class="sub-tags">margin</span> or
            <span class="sub-tags">padding</span> if you wanted two elements
            to overlap each other?</a
          >
        </li>
      </ul>
    </section>

    <!-- Additional Resources -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to related content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          <a
            href="https://www.w3schools.com/css/css_boxmodel.asp"
            target="_blank"
            >This W3Schools tutorial on CSS Box Model</a
          >
          provides an interactive playground to test your box model skills
          with exercises.
        </li>
      </ul>
    </section>
  </div>
    </div>
   `;

  blockAndInline = `
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
      <h1 class="text-heading">Block and Inline</h1>
    </div>
  </div>

  <div class="container">
    <!-- INTRODUCTION -->
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        The MDN box model article linked in the previous lesson mentions that
        different display types have subtly different box models. It also
        mentions that you can change how a box is calculated by changing the
        <span class="tags">display</span> property. We will explore the
        different display values you can use further in this lesson.
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
        <li>You’ll learn about “Normal flow”.</li>
        <li>
          You’ll learn the difference between
          <span class="tags">block</span> and
          <span class="tags">inline</span> elements.
        </li>
        <li>
          You’ll learn which elements default to
          <span class="tags">block</span> and which elements default to
          <span class="tags">inline</span>.
        </li>
        <li>You’ll learn what divs and spans are.</li>
      </ul>
    </section>
    <!-- BLOCK VS INLINE -->
    <section id="block-inline">
      <h1 class="text-heading">Block vs Inline</h1>
      <p class="text-desc">
        Most of the elements that you have learned about so far are block
        elements. In other words, their default style is
        <span class="tags">display: block</span>. By default, block elements
        will appear on the page stacked atop each other, each new element
        starting on a new line.
      </p>
      <p class="text-desc">
        Inline elements, however, do not start on a new line. They appear in
        line with whatever elements they are placed beside. A clear example of
        an inline element is a link, or
        <span class="tags">&lt;a&gt;</span> tag. If you stick one of these in
        the middle of a paragraph of text, it will behave like a part of the
        paragraph. (<a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          >Like this…</a
        >) The link’s text will sit alongside other words in that paragraph.
        Additionally, padding and margin behave differently on inline
        elements. In general, you do not want to try to put extra padding or
        margin on inline elements.
      </p>
      <p class="text-desc">
        Inline-block elements behave like inline elements, but with
        block-style padding and margin. Inline-block is a useful tool to know
        about, but in practice, you’ll probably end up reaching for flexbox
        more often if you’re trying to line up a bunch of boxes. Flexbox will
        be covered in-depth in the next lesson.
      </p>
    </section>
    <!-- DIVS AND SPANS -->
    <section id="divs-spans">
      <h1 class="text-heading">Divs and Spans</h1>
      <p class="text-desc">
        We can’t talk about block and inline elements without discussing divs
        and spans. All the other HTML elements we have encountered so far give
        meaning to their content. For example, paragraph elements tell the
        browser to display the text it contains as a paragraph. Strong
        elements tell the browser which texts within are important and so on.
        Yet, divs and spans give no particular meaning to their content. They
        are just generic boxes that can contain anything.
      </p>
      <p class="text-desc">
        Having elements like this available to us is a lot more useful than it
        may first appear. We will often need elements that serve no other
        purpose than to be “hook” elements. We can give an id or class to
        target them for styling with CSS. Another use case we will face
        regularly is grouping related elements under one parent element to
        correctly position them on the page. Divs and spans provide us with
        the ability to do this.
      </p>
      <p class="text-desc">
        Div is a block-level element by default. It is commonly used as a
        container element to group other elements. Divs allow us to divide the
        page into different blocks and apply styling to those blocks.
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="VwEXaJG"
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
            <a href="https://codepen.io/janeobenidi/pen/VwEXaJG"> Block</a> by
            Janeo Benidi (<a href="https://codepen.io/janeobenidi"
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
        Span is an inline-level element by default. It can be used to group
        text content and inline HTML elements for styling and should only be
        used when no other semantic HTML element is appropriate.
      </p>

      <div class="embed-container">
        <p
          class="codepen"
          data-height="300"
          data-default-tab="html,result"
          data-slug-hash="LYgdNwr"
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
            <a href="https://codepen.io/janeobenidi/pen/LYgdNwr"> Inline</a>
            by Janeo Benidi (<a href="https://codepen.io/janeobenidi"
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
          The concept of “Normal flow” is implied in the box-model resources,
          but isn’t laid out very specifically. Read
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow"
            target="_blank"
            >“Normal Flow” from MDN</a
          >
          to make sure you understand how elements lay themselves out by
          default.
        </li>
        <li>
          W3 schools’
          <a
            href="https://www.w3schools.com/html/html_blocks.asp"
            target="_blank"
            >“HTML Block and Inline Elements”</a
          >
          has a description and a list of all the default block and inline
          elements.
        </li>
        <li>
          The Digital Ocean tutorial
          <a
            href="https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block"
            target="_blank"
            >“Inline vs Inline-block Display in CSS”</a
          >
          has a couple of great examples that clarify the difference between
          <span class="sub-tags">inline</span> and
          <span class="sub-tags">inline-block</span>.
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
          <a href="#block-inline"
            >What is the difference between a block element and an inline
            element?</a
          >
        </li>
        <li>
          <a
            href="https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block"
            target="_blank"
            >What is the difference between an inline element and an
            inline-block element?</a
          >
        </li>
        <li>
          <a
            href="https://www.w3schools.com/html/html_blocks.asp"
            target="_blank"
            >Is an <span class="sub-tags">h1</span> block or inline?</a
          >
        </li>
        <li>
          <a
            href="https://www.w3schools.com/html/html_blocks.asp"
            target="_blank"
            >Is <span class="sub-tags">button</span> block or inline?</a
          >
        </li>
        <li>
          <a
            href="https://www.w3schools.com/html/html_blocks.asp"
            target="_blank"
            >Is <span class="sub-tags">div</span> block or inline?</a
          >
        </li>
        <li>
          <a
            href="https://www.w3schools.com/html/html_blocks.asp"
            target="_blank"
            >Is <span class="sub-tags">span</span> block or inline?</a
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
          <a href="https://learnlayout.com/no-layout.html" target="_blank"
            >This tutorial</a
          >
          is a little dated at this point, but its examples are clear. The
          first 6 slides cover the material we’ve seen so far.
        </li>
      </ul>
    </section>
  </div>
    </div>
   `;
}

export default Css;
