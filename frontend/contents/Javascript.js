'use strict';

class Javascript {
  part1 = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <rect width="630" height="630" fill="#f7df1e" />
        <path
          d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
        />
      </svg>
      <h1 class="text-heading">Fundamentals Part 1</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">Let's dive right into JavaScript</p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will
        learn in this lesson.
      </p>
      <ul>
        <li>How do you declare a variable?</li>
        <li>What are three different ways to declare a variable?</li>
        <li>Which one should you use when?</li>
        <li>What are the rules for naming variables?</li>
        <li>What are operators, operands, and operations?</li>
        <li>
          What is concatenation and what happens when you add numbers and
          strings together?
        </li>
        <li>What are the different types of operators in JavaScript?</li>
        <li>What is the difference between == and ===?</li>
        <li>What are operator precedence values?</li>
        <li>What are the increment/decrement operators?</li>
        <li>
          What is the difference between prefixing and postfixing them?
        </li>
        <li>What are assignment operators?</li>
        <li>What is the Unary Plus Operator?</li>
      </ul>
    </section>

    <!-- HOW TO RUN JAVASCRIPT CODE -->
    <section id="javascript-code">
      <h1 class="text-heading">How to Run JavaScript Code</h1>
      <p class="text-desc">
        All JavaScript we will be writing in the majority of the Foundations
        course will be run via the browser. Later lessons in Foundations and
        the NodeJS path will show you how to run JavaScript outside of the
        browser environment. Outside of these lessons, for now you should
        always default to running your JavaScript in the browser unless
        otherwise specified, otherwise you may run into unexpected errors.
      </p>

      <p class="text-desc">
        The simplest way to get started is to simply create an HTML file
        with the JavaScript code inside of it. Type the basic HTML skeleton
        into a file on your computer somewhere:
      </p>

      <div class="code-container">
        <pre>
        <code>
          <span class="tag-white">&lt;!</span><span class="comment-clr">DOCTYPE html</span><span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white">&lt;</span> <span class="code-text-clr">html</span> <span class="tag-white">&gt;</span>
        </code>
        <code>
          <span class="tag-white">&lt;</span> <span class="code-text-clr">head</span> <span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white pl-space">&lt;</span> <span class="code-text-clr">meta charset</span> <span class="tag-white">="</span> <span class="class-clr">UTF-8</span> <span class="tag-white">&gt;</span>
        </code>
        <code>
          <span class="tag-white pl-space">&lt;</span> <span class="code-text-clr">title</span> <span class="tag-white">&gt;</span> <span class="tag-white">Page Title</span> <span class="tag-white">&lt;/</span> <span class="code-text-clr">title</span> <span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="tag-white">&lt;/</span> <span class="code-text-clr">head</span> <span class="tag-white">&gt;</span>
        </code>
        <code>
          <span class="tag-white">&lt;</span> <span class="code-text-clr">body</span> <span class="tag-white">&gt;</span>
        </code>
        <code>
          <span class="tag-white pl-space">&lt;</span> <span class="code-text-clr">script</span> <span class="tag-white">&gt;</span>
        </code>

        <code>
          <span class="comment-clr pl-space">// Your JavaScript goes here!</span>
        </code>

        <code>
          <span class="pl-space tag-white">console.</span> <span class="selector-clr">log</span> <span class="tag-white">&#40;</span> <span class="class-clr">"Hello, World!"</span> <span class="tag-white">&#41;</span>
        </code>

        <code>
          <span class="tag-white">&lt;/</span> <span class="code-text-clr">body</span> <span class="tag-white">&gt;</span>
        </code>
        <code>
          <span class="tag-white">&lt;/</span> <span class="code-text-clr">html</span> <span class="tag-white">&gt;</span>
        </code>
      </pre>
      </div>

      <p class="text-desc">
        Save and open this file up in a web browser (you can use
        <a
          href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
          target="_blank"
          >“Live Server” on Visual Studio Code</a
        >
        to do this!) and then open up the browser’s console by
        right-clicking on the blank webpage and selecting “Inspect” or
        “Inspect Element”. In the ‘Developer Tools’ pane find and select the
        ‘Console’ tab, where you should see the output of our
        <span class="tags">console.log</span> statement.
      </p>

      <div class="note-container">
        <p class="text-desc">
          "<span class="tags">console.log()</span> is the command to print
          something to the developer console in your browser. You can use
          this to print the results from any of the following articles and
          exercises to the console. We encourage you to code along with all
          of the examples in this and future lessons"
        </p>
      </div>

      <p class="text-desc">
        Another way to include JavaScript in a webpage is through an
        external script. This is very similar to linking external CSS docs
        to your website.
      </p>

      <div class="code-container">
        <pre>
            <code>
              <span class="tag-white pl-space-4">&lt;</span> <span class="code-text-clr">script src</span> <span class="tag-white">="</span> <span class="class-clr">javascript.js</span> <span class="tag-white">"&gt;</span> <span class="tag-white">&lt;/</span> <span class="code-text-clr">script</span> <span class="tag-white">&gt;</span>
            </code>
          </pre>
      </div>

      <p class="text-desc">
        JavaScript files have the extension
        <span class="tags">.js</span> similar to
        <span class="tags">.css</span> for stylesheets. External JavaScript
        files are used for more complex scripts.
      </p>
    </section>

    <!-- VARIABLES -->
    <section id="variables">
      <h1 class="text-heading">Variables</h1>
      <p class="text-desc">
        You can think of variables as simply “storage containers” for data
        in your code.
      </p>

      <p class="text-desc">
        Until recently there was only one way to create a variable in
        JavaScript — the <span class="tags">var</span> statement. But in the
        newest JavaScript versions we have two more ways —
        <span class="tags">let</span> and <span class="tags">const</span>.
      </p>
      <ol>
        <li>
          <a href="https://javascript.info/variables" target="_blank"
            >This variable tutorial</a
          >
          will explain everything you need to know! Be sure to do the
          <strong>Tasks</strong> at the end. Information won’t stick without
          practice!
        </li>
      </ol>

      <p class="text-desc">
        The above tutorial mentioned this, but it’s important enough to note
        again: <span class="tags">let</span> and
        <span class="tags">const</span> are both relatively new ways to
        declare variables in JavaScript. In many tutorials (and code) across
        the internet you’re likely to encounter
        <span class="tags">var</span> statements. Don’t let it bother you!
        There’s nothing inherently wrong with <span class="tags">var</span>,
        and in most cases <span class="tags">var</span> and
        <span class="tags">let</span> behave the same way. But sometimes the
        behavior of <span class="tags">var</span> is not what you would
        expect. Just stick to <span class="tags">let</span> (and
        <span class="tags">const</span>) for now.
      </p>
    </section>

    <!-- NUMBERS -->
    <section id="numbers">
      <h1 class="text-heading">Numbers</h1>
      <p class="text-desc">
        Numbers are the building blocks of programming logic! In fact, it’s
        hard to think of any useful programming task that doesn’t involve at
        least a little basic math… so knowing how numbers work is obviously
        quite important. Luckily, it’s also fairly straightforward.
      </p>
      <ol>
        <li>
          <a
            href="https://www.w3schools.com/js/js_arithmetic.asp"
            target="_blank"
            >This W3Schools lesson</a
          >
          followed by
          <a
            href="https://www.w3schools.com/js/js_numbers.asp"
            target="_blank"
            >this one</a
          >, are good introductions to what you can accomplish with numbers
          in JavaScript.
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math"
            target="_blank"
            >This MDN article</a
          >
          covers the same info from a slightly different point of view,
          while also teaching you how to apply some basic math in
          JavaScript. There’s much more that you can do with numbers, but
          this is all you need at the moment.
        </li>
        <li>
          Read through (and code along with!)
          <a href="https://javascript.info/operators" target="_blank"
            >this article</a
          >
          about operators in Javascript. Don’t forget to do the “Tasks” at
          the bottom of the page! It will give you a pretty good idea of
          what you can accomplish with numbers (among other things!) in
          JavaScript.
        </li>
      </ol>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>

      <p class="text-desc">
        Try the following exercises (and don’t forget to use
        <span class="sub-tags">console.log()</span>!):
      </p>

      <ol>
        <li>
          Add 2 numbers together! (just type
          <span class="sub-tags">console.log(23 + 97)</span> into your html
          file)
        </li>
        <li>Add a sequence of 6 different numbers together.</li>
        <li>
          Print the solution to the following equation:
          <span class="sub-tags">(4 + 6 + 9) / 77</span>
          <ul>
            <li>
              Answer should be approximately
              <span class="sub-tags">0.24675</span>
            </li>
          </ul>
        </li>
        <li>
          Let’s use variables!
          <ul>
            <li>
              Type this statement at the top of the script tag:
              <span class="sub-tags">let a = 10</span>
            </li>
            <li>
              In the console
              <span class="sub-tags">console.log(a)</span> should print
              <span class="sub-tags">10</span>
            </li>
            <li>
              Try the following in the console:
              <span class="sub-tags">9 * a</span>
            </li>
            <li>
              and this: <span class="sub-tags">let b = 7 * a</span> (returns
              <span class="sub-tags">undefined</span> *) and then
              <span class="sub-tags">console.log(b)</span>
            </li>
          </ul>
        </li>
        <li>
          You should be getting the hang of this by now… try this sequence:
          <ul>
            <li>
              Declare a constant variable
              <span class="sub-tags">max</span> with the value
              <span class="sub-tags">57</span>
            </li>
            <li>
              Set another variable <span class="sub-tags">actual</span> to
              <span class="sub-tags">max - 13</span>
            </li>
            <li>
              Set another variable
              <span class="sub-tags">percentage</span> to
              <span class="sub-tags">actual / max</span>
            </li>
            <li>
              If you type <span class="sub-tags">percentage</span> in the
              console and press enter you should see a value like
              <span class="sub-tags">0.7719</span>
            </li>
          </ul>
        </li>
        <li>
          Take a few minutes to keep playing around with various things in
          your script tag. Eventually, we will learn how to actually make
          those numbers and things show up on the webpage, but all of this
          logic will remain the same, so make sure you’re comfortable with
          it before moving on.
        </li>
        <p class="text-desc">
          <em
            >* As you might have noticed by running Javascript code in the
            console, the console prints the result of the code it executes
            (called a return statement). You will learn more about these in
            the next lessons, however for now it is good to remember that a
            declaration with an assignment (such as
            <span class="sub-tags">let b = 7 * a</span>) returns
            <span class="sub-tags">undefined</span> and so you cannot
            declare and assign a value to a variable and read its value in
            the same line.</em
          >
        </p>
      </ol>
    </section>

    <!-- Additional Resources -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to other content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          The precise differences between <span class="tags">var</span> and
          <span class="tags">let</span> is explained in
          <a href="https://javascript.info/var" target="_blank"
            >javascript.info</a
          >.
        </li>
      </ul>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding
        of this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>

      <ul>
        <li>
          <a href="#variable"
            >This section contains questions for you to check your
            understanding of this lesson on your own. If you’re having
            trouble answering a question, click it and review the material
            it links to.</a
          >
        </li>
        <li>
          <a href="#variable"
            >Which of the three variable declarations should you avoid and
            why?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/variables#variable-naming"
            target="_blank"
            >What rules should you follow when naming variables?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/operators#string-concatenation-with-binary"
            target="_blank"
            >What happens when you add numbers and strings together?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/operators#remainder"
            target="_blank"
            >How does the Modulo (%), or Remainder, operator work?</a
          >
        </li>
        <li>
          <a
            href="https://www.w3schools.com/js/js_numbers.asp"
            target="_blank"
            >Explain the difference between
            <span class="sub-tags">==</span> and
            <span class="sub-tags">===</span>.</a
          >
        </li>
        <li>
          <a href="https://www.w3schools.com/js/js_numbers.asp"
            >When would you receive a
            <span class="sub-tags">NaN</span> result?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/operators#increment-decrement"
            target="_blank"
            >How do you increment and decrement a number?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/operators#increment-decrement"
            target="_blank"
            >Explain the difference between prefixing and postfixing
            increment/decrement operators.</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/operators#operator-precedence"
            target="_blank"
            >What is operator precedence and how is it handled in JS?</a
          >
        </li>
        <li>
          <a href="#javascript-code"
            >How do you access developer tools and the console?</a
          >
        </li>
        <li>
          <a href="#javascript-code"
            >How do you log information to the console?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/operators#numeric-conversion-unary"
            target="_blank"
            >What does unary plus operator do to string representations of
            integers? eg. +”10”</a
          >
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  part2 = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <rect width="630" height="630" fill="#f7df1e" />
        <path
          d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
        />
      </svg>
      <h1 class="text-heading">Fundamentals Part 2</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        There are a few extremely common types of data that you will
        encounter in JavaScript, and these lessons on fundamentals will give
        us a really strong foundation in all of them. Before we start
        digging deep, however, <span class="tags">this article</span> will
        give you a quick overview of the most common ones.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        There are a few extremely common types of data that you will
        encounter in JavaScript, and these lessons on fundamentals will give
        us a really strong foundation in all of them. Before we start
        digging deep, however, this article will give you a quick overview
        of the most common ones.
      </p>
      <ul>
        <li>Name the eight data types in JavaScript.</li>
        <li>
          Understand the difference between single, double, and backtick
          quotes.
        </li>
        <li>Embed a variable/expression in a string.</li>
        <li>Understand what a method is.</li>
        <li>Name the three logical operators.</li>
        <li>Understand what the comparison operators are.</li>
        <li>Understand what conditionals are.</li>
        <li>Understand what nesting is.</li>
        <li>Understand what truthy and falsy values are.</li>
      </ul>
    </section>

    <!-- STRINGS -->
    <section id="strings">
      <h1 class="text-heading">Strings</h1>
      <p class="text-desc">
        Depending on what kind of work you’re doing, you might end up
        working more with pieces of text rather than numbers. A
        <strong>string</strong> is simply a piece of text… and is a
        fundamental building block of the language.
      </p>

      <ol>
        <li>
          Read and code along with
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings"
            target="_blank"
            >yet another MDN tutoria</a
          >l on the topic.
        </li>
        <li>
          Go through
          <a
            href="https://www.w3schools.com/js/js_string_methods.asp"
            target="_blank"
            >this lesson</a
          >
          to learn a bit more about what you can do with strings… be sure to
          take a peek at
          <a
            href="https://www.w3schools.com/jsref/jsref_obj_string.asp"
            target="_blank"
            >the String Reference</a
          >
          page near the bottom, and do the exercises at the end!
        </li>
        <li>
          Vocabulary time: a <strong>method</strong> is a bit of
          functionality that is built into the language or into specific
          data types. In
          <a
            href="https://www.w3schools.com/js/js_string_methods.asp"
            target="_blank"
            >the previous W3Schools exercise</a
          >, you learned a few methods that can be used on strings, such as
          <span class="tags">replace</span> and
          <span class="tags">slice</span>. An exhaustive list of methods
          that can be used on strings can be found
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
            target="_blank"
            >here</a
          >.
        </li>
      </ol>
    </section>

    <!-- CONDITIONALS -->
    <section id="conditionals">
      <h1 class="text-heading">Conditionals</h1>
      <p class="text-desc">
        Now it’s time for the fun stuff… So far we haven’t done much with
        our programming that you couldn’t do with simple math skills. Sure,
        we’ve told our computer how to do the math, so that makes it
        quicker, but the essence of programming is teaching the computer how
        to make decisions in order to do more involved things. Conditionals
        are how we do that.
      </p>

      <ol>
        <li>
          Step one in learning about conditionals is making sure you have a
          good grasp on
          <a href="https://javascript.info/comparison" target="_blank"
            >comparisons</a
          >.
        </li>
        <li>
          <a
            href="https://www.w3schools.com/js/js_if_else.asp"
            target="_blank"
            >This tutorial</a
          >
          is a great first glance at conditionals in JavaScript.
        </li>
        <li>
          <a
            href="https://javascript.info/logical-operators"
            target="_blank"
            >This tutorial</a
          >
          will teach you about logical operators. A little heads up
          regarding this reading’s tasks; there will be questions where you
          see alert() (with a number or string inside of the parenthesis),
          what’s happening here will be discussed later in the curriculum.
          Some of the answers may not make sense now but they are accurate
          and will come to be understood as you progress in the curriculum.
          Don’t worry too much about it now!
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals"
            target="_blank"
            >This article</a
          >
          reinforces the concept and provides several interesting examples
          of how you could use it building websites.
        </li>
        <li>
          <a href="https://javascript.info/ifelse" target="_blank"
            >This article</a
          >
          covers the same basic concept (read through it as a review!) and -
          more importantly - offers the usual ‘tasks’ at the bottom of the
          page!
        </li>
        <li>
          <a href="https://javascript.info/switch" target="_blank"
            >This article</a
          >
          teaches you about the switch statement, which comes in handy when
          you have multiple conditions.
        </li>
      </ol>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <ol>
        <li>
          <p class="text-desc">
            To give you a good bit of practice, we have created some
            exercises from codepen for you to play with
          </p>
        </li>
        <li>
          <p class="text-desc">
            Read all directions, watch the terminal, and read all the
            errors. Don’t forget to use ‘console.log’ extensively. (The
            console is at the bottom left of the editor.)
          </p>
        </li>
        <li>
          <p class="text-desc">
            To get started, create a free codepen account and in order to
            have access to the exercises and save your solution.
          </p>
        </li>
        <ul>
          <li>
            <a
              href="https://codepen.io/webhead-project/pen/gOBdbwJ?editors=0011"
              target="_blank"
              >Exercise 1</a
            >
          </li>
          <li>
            <a
              href="https://codepen.io/webhead-project/pen/MWPqYpp"
              target="_blank"
              >Exercise 2</a
            >
          </li>
          <li>
            <a
              href="https://codepen.io/webhead-project/pen/zYmJxZP"
              target="_blank"
              >Exercise 3</a
            >
          </li>
        </ul>
      </ol>
    </section>

    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to other content. It isn’t
        required, so consider it supplemental.
      </p>

      <ul>
        <li>
          Regular expressions, commonly known as regex, are a tool that
          matches or locates patterns in strings for string validation.
          Although it shouldn’t be your immediate solution this early on,
          you can still use this resource to understand how websites know
          that <span class="tags">myemail@com</span> isn’t a valid email
          address. On top of that, other solutions to filter out strings
          exist, and regex is considered a slow operation.
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD"
            target="_blank"
            >The Net Ninja’s Regular Expressions Tutorial</a
          >.
        </li>
        <li>
          <a
            href="https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions"
            target="_blank"
            >When to avoid regular expressions</a
          >.
        </li>
      </ul>
    </section>

    <!-- Knowledge Check -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding
        of this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ul>
        <li>
          <a href="https://javascript.info/types#summary" target="_blank"
            >What are the eight data types in JavaScript?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/types#objects-and-symbols"
            target="_blank"
            >Which data type is NOT primitive?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/types#the-null-value"
            target="_blank"
            >What is the relationship between null and undefined?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#single_quotes_vs._double_quotes"
            target="_blank"
            >What is the difference between single, double, and backtick
            quotes for strings?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings"
            target="_blank"
            >What is the term for joining strings together?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings"
            target="_blank"
            >Which type of quote lets you embed variables/expressions in a
            string?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings"
            target="_blank"
            >How do you embed variables/expressions in a string?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#escaping_characters_in_a_string"
            target="_blank"
            >How do you use escape characters in a string?</a
          >
        </li>
        <li>
          <a
            href="https://www.w3schools.com/js/js_string_methods.asp"
            target="_blank"
            >What is the difference between the slice/substring/substr
            string methods?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/logical-operators"
            target="_blank"
            >What are the three logical operators and what do they stand
            for?</a
          >
        </li>
        <li>
          <a href="https://javascript.info/comparison" target="_blank"
            >What are the comparison operators?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/ifelse#boolean-conversion"
            target="_blank"
            >What are truthy and falsy values?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/ifelse#boolean-conversion"
            target="_blank"
            >What are the falsy values in JavaScript?</a
          >
        </li>
        <li>
          <a
            href="https://www.w3schools.com/js/js_if_else.asp"
            target="_blank"
            >What are conditionals?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#basic_if...else_syntax"
            target="_blank"
            >What is the syntax for an if/else conditional?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements"
            target="_blank"
            >What is the syntax for a switch statement?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#ternary_operator"
            target="_blank"
            >What is the syntax for a ternary operator?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#nesting_if...else"
            target="_blank"
            >What is nesting?</a
          >
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  devTools = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <rect width="630" height="630" fill="#f7df1e" />
        <path
          d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
        />
      </svg>
      <h1 class="text-heading">JavaScript Developer Tools</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Knowing how to use the Developer Tools inside your browser is an
        important skill for any web developer. The Developer Tools are
        useful for running JavaScript code, editing HTML and CSS styles
        without having to refresh the page, and viewing performance data.
        They also save you lots of time. Getting started couldn’t be any
        easier. You should already be familiar with using them for debugging
        and working on HTML and CSS, so let’s take a look at how they can
        benefit us when writing JavaScript.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will
        learn in this lesson.
      </p>
      <ul>
        <li>Change screen size of a website with developer tools</li>
        <li>View and change the DOM</li>
        <li>Debug JavaScript</li>
        <li>Use breakpoints</li>
        <li>View and edit HTML in the Elements tab</li>
        <li>
          View the Resources Panel to check the scripts running on a website
        </li>
        <li>Add CSS Pseudostate to a Class</li>
        <li>View CSS Properties in Alphabetical Order</li>
        <li>
          View and edit the Box Model of any Element in Chrome DevTools
        </li>
        <li>View a page in print mode</li>
        <li>Enable or Disable CSS Classes</li>
        <li>Simulate media queries in Device Mode</li>
      </ul>
    </section>

    <!-- OPENING DEV TOOLS -->
    <section id="dev-tools">
      <h1 class="text-heading">Opening Dev Tools</h1>
      <p class="text-desc">
        There are three ways to open the Chrome Developer Tools menu:
      </p>
      <ol>
        <li>
          From the <span class="tags">Chrome Menu</span> >
          <span class="tags">More Tools</span> >
          <span class="tags">Developer Tools</span>
        </li>
        <li>Right-click anywhere on a webpage and select Inspect</li>
        <li>
          Use the keyboard shortcut <span class="tag">F12</span> or
          <span class="tags">CTRL + Shift + C</span> (<span class="tags"
            >option + command + C</span
          >
          on Mac)
        </li>
      </ol>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <ol>
        <p class="text-desc">
          Google has updated some of the required sections in the below
          tutorials and some elements have changed or no longer exist, but
          you can still follow along using the same functionality and tools
          that they cover. For example, you may be asked to inspect a button
          that is no longer on the page- you can still follow along and
          inspect existing elements without issue.
        </p>
        <li>
          Head to the
          <a
            href="https://developer.chrome.com/docs/devtools/"
            target="_blank"
            >Chrome DevTools Documentation</a
          >
          by Google. The following subsections cover what you’ll be using
          the Developer Tools for 95% of the time. Feel free to skip the
          elements you are already familiar with:
          <ul>
            <li>
              CSS
              <ol>
                <li>
                  <a
                    href="https://developer.chrome.com/docs/devtools/css/"
                    target="_blank"
                    >View and change CSS</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.chrome.com/docs/devtools/css/reference/"
                    target="_blank"
                    >CSS features reference</a
                  >
                </li>
              </ol>
            </li>
            <li>
              <a
                href="https://developer.chrome.com/docs/devtools/dom/"
                target="_blank"
                >Get Started With Viewing And Changing The DOM</a
              >
            </li>
            <li>Mobile Simulation</li>
            <ol>
              <li>
                <a
                  href="https://developer.chrome.com/docs/devtools/device-mode/"
                  target="_blank"
                  >Simulate mobile devices with Device Mode</a
                >
              </li>
            </ol>
            <li>JavaScript</li>
            <ol>
              <li>
                <a
                  href="https://developer.chrome.com/docs/devtools/javascript/"
                  target="_blank"
                  >Debug JavaScript</a
                >
              </li>
              <li>
                <a
                  href="https://developer.chrome.com/docs/devtools/javascript/breakpoints/"
                  target="_blank"
                  >Pause your code with breakpoints</a
                >
              </li>
            </ol>
          </ul>
        </li>
        <li>
          Then, watch
          <a
            href="https://developer.chrome.com/docs/devtools/console/"
            target="_blank"
            >the console overview video and read through the page</a
          >
          to familiarize yourself with the console and its usage.
        </li>
      </ol>
    </section>
    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to other content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          Learn 14 tips and tricks in this
          <a
            href="https://www.youtube.com/watch?v=xkzDaKwinA8"
            target="_blank"
            >JavaScript 30</a
          >
          Video by Wes Bos
        </li>
      </ul>
    </section>
    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding
        of this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ul>
        <li><a href="#dev-tools">How do you open developer tools?</a></li>
        <li>
          <a
            href="https://developer.chrome.com/docs/devtools/device-mode/"
            target="_blank"
            >How do you change screen size of a website using developer
            tools?</a
          >
        </li>
        <li>
          <a
            href="https://developer.chrome.com/docs/devtools/javascript/breakpoints/"
            target="_blank"
            >What is a breakpoint?</a
          >
        </li>
        <li>
          <a
            href="https://developer.chrome.com/docs/devtools/javascript/breakpoints/#loc"
            target="_blank"
            >What is a breakpoint?</a
          >
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  part3 = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <rect width="630" height="630" fill="#f7df1e" />
        <path
          d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
        />
      </svg>
      <h1 class="text-heading">JavaScript Developer Tools</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Things are about to get really exciting. So far you have been
        writing an impressive amount of code to solve various problems, but
        that code has not been as useful as it could be. Imagine taking one
        of your scripts and bundling it into a little package that you could
        use over and over again without having to rewrite or change the
        code. That’s the power of functions, and they’re used constantly in
        JavaScript.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will
        learn in this lesson.
      </p>
      <ul>
        <li>How to define and invoke different kinds of functions.</li>
        <li>How to use the return value.</li>
        <li>What function scope is.</li>
      </ul>
    </section>

    <!-- FUNCTIONS -->
    <section id="functions">
      <h1 class="text-heading">Functions</h1>
      <ol>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions"
            target="_blank"
            >This lengthy MDN article</a
          >
          is a good place to start. Don’t worry as there may be some
          functions that can be beyond the reach of this particular lesson,
          but do pay special attention to the sections on ‘Function Scope’.
          Scope is a topic that commonly trips up both beginner and
          intermediate coders, so it pays to spend some time with it
          upfront. Note that this article also has its own exercises
          attached, which you should not do, as they involve knowledge we
          haven’t touched yet.
        </li>
        <li>
          Read this article about
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values"
            target="_blank"
            >return values</a
          >.
        </li>
        <li>
          Let’s discuss parameters and arguments in the context of the
          following example function:
        </li>
        <div class="code-container">
          <pre>
            <code>
              <span class="en-clr pl-space-2">function</span>
              <span class="property-clr pl-space-2">favoriteAnimal</span>
              <span class="tag-white">&#40;animal&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
            </code>
            <code>
              <span class="en-clr pl-space">return</span> <span class="tag-white pl-space-2">animal</span> <span class="selector-clr pl-space-2">+</span> <span class="class-clr pl-space-2">" is my favorite animal!" </span>
            </code>
            <code>
              <span class="tag-white">&#125;</span>
            </code>
            <code></code>
            <code>
              <span class="tag-white pl-space-2">console.</span><span class="property-clr">log</span><span class="tag-white">&#40;</span><span class="property-clr">favoriteAnimal</span><span class="tag-white">&#40;</span><span class="class-clr">'Goat'</span><span class="tag-white">&#41;&#41;</span>
            </code>
          </pre>
        </div>
        <p class="text-desc">
          In JavaScript, parameters are the items listed between the
          parentheses in the function declaration. Function arguments are
          the actual values we decide to pass to the function. In the
          example above, the function definition is written on the first
          line:
          <span class="tags">function favoriteAnimal(animal)</span>. The
          parameter, <span class="tags">animal</span>, is found inside the
          parentheses. We could just as easily replace
          <span class="tags">animal</span> with
          <span class="tags">pet</span>, <span class="tags">x</span>, or
          <span class="tags">blah</span>. But in this case, naming the
          parameter <span class="tags">animal</span> gives someone reading
          our code a bit of context so that they don’t have to guess what
          <span class="tags">animal</span> may eventually contain. By
          putting <span class="tags">animal</span> inside the parentheses of
          the <span class="tags">favoriteAnimal()</span> function, we are
          telling JavaScript that we will send some value to our
          favoriteAnimal function. This means that animal is just a
          placeholder for some future value. But what value are we sending?
          The last line, <span class="tags">favoriteAnimal('Goat')</span>,
          is where we are calling our
          <span class="tags">favoriteAnimal</span> function and passing the
          value <span class="tags">'Goat'</span> inside that function. Here,
          <span class="tags">'Goat'</span> is our argument. We are telling
          the <span class="tags">favoriteAnimal</span> function, “Please
          send <span class="tags">'Goat'</span> to the favoriteAnimal
          function and use <span class="tags">'Goat'</span> wherever the
          ‘animal’ placeholder is.” Because of the flexibility that using a
          parameter provides, we can declare any animal to be our favorite.
        </p>

        <p class="text-desc">
          Make note of the fact that by calling
          <span class="tags">favoriteAnimal()</span> inside of
          <span class="tags">console.log()</span> with the argument
          <span class="tags">'Goat'</span> we get the return value of the
          function, string of
          <span class="tags">"Goat is my favorite animal!"</span>, printed
          to the console. We’re passing in a function call
          <span class="tags">favoriteAnimal('Goat')</span> as an argument in
          a different function call - <span class="tags">log()</span>. Keep
          this possibility in mind because you’ll be passing in function
          calls as arguments somewhat often. If we just called the function
          without console.logging what it returns, nothing would appear in
          the console but nonetheless the function would return that string.
        </p>

        <p class="text-desc">
          Feel free to experiment with the code on your own and replace
          <span class="tags">'Goat'</span> with your favorite animal. Notice
          how we can change the argument to anything we like? Try changing
          <span class="tags">animal</span> in the function declaration and
          in the function body, too. What happens when you do?
        </p>
        <li>
          Next, read
          <a href="https://javascript.info/function-basics" target="_blank"
            >this article</a
          >
          from Javascript.info. We’ve mentioned this before, but JavaScript
          has changed a bit over the years and functions have recently
          received some innovation. This article covers one of the more
          useful new abilities: ‘default parameters’. (NOTE: The last “task”
          at the end of this lesson uses loops, which you will learn about
          in the next lesson. Don’t worry about that one.)
        </li>
        <li>
          Now, read
          <a
            href="https://javascript.info/function-expressions"
            target="_blank"
            >this article</a
          >
          about functions in JavaScript to give you a little more context,
          and read
          <a
            href="https://javascript.info/arrow-functions-basics"
            target="_blank"
            >this article</a
          >
          for an introduction to a relatively new feature in modern
          JavaScript called the <span class="tags">arrow function</span>.
          Arrow functions are useful but not crucial, so don’t worry about
          them too much just yet. We include them here because you are
          likely to encounter them as you move forward, and it’s better that
          you have at least some idea of what you’re looking at whenever
          they crop up.
        </li>
        <li>
          Finally, read
          <a
            href="https://www.javascripttutorial.net/javascript-call-stack/"
            target="_blank"
            >this article</a
          >
          about call stacks and how <span class="tags">return</span> works
          in the context of chained function calls. Don’t worry if you don’t
          fully understand this yet, but it’s important to keep in mind
          where your returned values are going. This doubles as a bit of
          early computer science as well.
        </li>
      </ol>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <ol>
        <p class="text-desc">
          Let’s write some functions! Write these in the
          <span class="sub-tags">script</span> tag of a skeleton HTML file.
          If you’ve forgotten how to set it up, review the instructions from
          <a href="#javascript-code">Fundamentals Part 1.</a>
        </p>
        <p class="text-desc">
          For now, just write each function and test the output with
          <span class="sub-tags">console.log</span>.
        </p>
        <li>
          Write a function called <span class="sub-tags">add7</span> that
          takes one number and returns that number + 7.
        </li>
        <li>
          Write a function called
          <span class="sub-tags">multiply</span> that takes 2 numbers and
          returns their product.
        </li>
        <li>
          Write a function called
          <span class="sub-tags">capitalize</span> that takes a string and
          returns that string with only the first letter capitalized. Make
          sure that it can take strings that are lowercase, UPPERCASE or
          BoTh.
        </li>
        <li>
          Write a function called
          <span class="sub-tags">lastLetter</span> that takes a string and
          returns the very last letter of that string:
          <ul>
            <li>
              <span class="sub-tags">lastLetter("abcd")</span> should return
              <span class="sub-tags">"d"</span>
            </li>
          </ul>
        </li>
      </ol>
    </section>
    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding
        of this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ol>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions"
            target="_blank"
            >What are functions useful for?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#invoking_functions"
            target="_blank"
            >How do you invoke a function?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_functions_and_arrow_functions"
            target="_blank"
            >What are anonymous functions?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts"
            target="_blank"
            >What is function scope?</a
          >
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values"
            target="_blank"
            >What are return values?</a
          >
        </li>
        <li>
          <a
            href="https://javascript.info/arrow-functions-basics"
            target="_blank"
            >What are arrow functions?</a
          >
        </li>
      </ol>
    </section>
    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to other content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          <a
            href="https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope)"
            target="_blank"
            >What’s the difference between using “let” and “var”? -
            stackoverflow</a
          >
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=iLWTnMzWtj4"
            target="_blank"
            >How JavaScript Code is executed?</a
          >
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  problemSovling = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <rect width="630" height="630" fill="#f7df1e" />
        <path
          d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
        />
      </svg>
      <h1 class="text-heading">Problem Solving</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Before we start digging into some pretty nifty JavaScript, we need
        to begin talking about problem solving: the most important skill a
        developer needs.
      </p>
      <p class="text-desc">
        Problem solving is the core thing software developers do. The
        programming languages and tools they use are secondary to this
        fundamental skill.
      </p>
      <p class="text-desc">
        The set of tasks can range from solving small coding exercises all
        the way up to building a social network site like Facebook or a
        search engine like Google. Each problem has its own set of
        constraints, for example, high performance and scalability may not
        matter too much in a coding exercise but it will be vital in apps
        like Google that need to service billions of search queries each
        day.
      </p>
      <p class="text-desc">
        New programmers often find problem solving the hardest skill to
        build. It’s not uncommon for budding programmers to breeze through
        learning syntax and programming concepts, yet when trying to code
        something on their own, they find themselves staring blankly at
        their text editor not knowing where to start.
      </p>

      <p class="text-desc">
        The best way to improve your problem solving ability is by building
        experience by making lots and lots of programs. The more practice
        you have the better you’ll be prepared to solve real world problems.
      </p>

      <p class="text-desc">
        In this lesson we will walk through a few techniques that can be
        used to help with the problem solving process.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will
        learn in this lesson.
      </p>
      <ul>
        <li>Explain the three steps in the problem solving process</li>
        <li>
          Explain what pseudocode is and be able to use it to solve
          problems.
        </li>
        <li>Be able to break a problem down into subproblems.</li>
      </ul>
    </section>

    <!-- UNDERSTAND THE PROBLEM -->
    <section id="understand-the-prob">
      <h1 class="text-heading">Understand the Problem</h1>
      <p class="text-desc">
        The first step to solving a problem is understanding exactly what
        the problem is. If you don’t understand the problem, you won’t know
        when you’ve successfully solved it and may waste a lot of time on a
        wrong solution.
      </p>
      <p class="text-desc">
        To gain clarity and understanding of the problem, write it down on
        paper, reword it in plain English until it makes sense to you, and
        draw diagrams if that helps. When you can explain the problem to
        someone else in plain English, you understand it.
      </p>
    </section>

    <!-- PLAN -->
    <section id="plan">
      <h1 class="text-heading">Plan</h1>
      <p class="text-desc">
        Now that you know what you’re aiming to solve, don’t jump into
        coding just yet. It’s time to plan out how you’re going to solve it
        first. Some of the questions you should answer at this stage of the
        process:
      </p>
      <ul>
        <li>
          Does your program have a user interface? What will it look like?
          What functionality will the interface have? Sketch this out on
          paper.
        </li>
        <li>
          What inputs will your program have? Will the user enter data or
          will you get input from somewhere else?
        </li>
        <li>What’s the desired output?</li>
        <li>
          Given your inputs, what are the steps necessary to return the
          desired output?
        </li>
      </ul>
      <p class="text-desc">
        The last question is where you will write out an algorithm to solve
        the problem. You can think of an algorithm as a recipe for solving a
        particular problem. It defines the steps that need to be taken by
        the computer to solve a problem in pseudocode.
      </p>
    </section>

    <!-- PSEUDOCODE -->
    <section id="pseudo-code">
      <h1 class="text-heading">Pseudocode</h1>
      <p class="text-desc">
        Pseudocode is writing out the logic for your program in natural
        language instead of code. It helps you slow down and think through
        the steps your program will have to go through to solve the problem.
      </p>
      <p class="text-desc">
        Here’s an example of what the pseudocode for a simple program that
        prints all numbers up to an inputted number might look like:
      </p>
      <div class="code-container">
        <pre>
          <code><span class="tag-white">When the user inputs a number</span></code>
          <code><span class="tag-white">Initialize a counter variable and set its value to zero</span></code>
          <code><span class="tag-white">While counter is smaller than user inputted number increment the counter by one</span></code>
          <code><span class="tag-white">Print the value of the counter variable</span></code>
        </pre>
      </div>
      <p class="text-desc">
        This is a very simple program to demonstrate how pseudocode looks.
        There will be more examples of pseudocode included in the
        assignments.
      </p>
    </section>
    <!-- DIVIDE AND CONQUER -->
    <section id="divide-conquer">
      <h1 class="text-heading">Divide and Conquer</h1>
      <p class="text-desc">
        From your planning, you should have identified some subproblems of
        the big problem you’re solving. Each of the steps in the algorithm
        we wrote out in the last section are subproblems. Pick the smallest
        or simplest one and start there with coding.
      </p>
      <p class="text-desc">
        It’s important to remember that you might not know all the steps
        that you might need up front, so your algorithm may be incomplete -—
        this is fine. Getting started with and solving one of the
        subproblems you have identified in the planning stage often reveals
        the next subproblem you can work on. Or, if you already know the
        next subproblem, it’s often simpler with the first subproblem
        solved.
      </p>
      <p class="text-desc">
        Many beginners try to solve the big problem in one go.
        <strong>Don’t do this</strong>. If the problem is sufficiently
        complex, you’ll get yourself tied in knots and make life a lot
        harder for yourself. Decomposing problems into smaller and easier to
        solve subproblems is a much better approach. Decomposition is the
        main way to deal with complexity, making problems easier and more
        approachable to solve and understand.
      </p>
      <p class="text-desc">
        In short, break the big problem down and solve each of the smaller
        problems until you’ve solved the big problem.
      </p>
    </section>

    <!-- SOLVING FIZZBUZZ -->
    <section id="fizzbuzz">
      <h1 class="text-heading">Solving FizzBuzz</h1>
      <p class="text-desc">
        To demonstrate this workflow in action, let’s solve a common
        programming exercise:
        <a href="https://en.wikipedia.org/wiki/Fizz_buzz" target="_blank"
          >FizzBuzz</a
        >
      </p>
      <h2 class="sub-heading">Understanding the Problem</h2>
      <div class="note-container">
        <p class="text-desc">
          Write a program that takes a user’s input and prints the numbers
          from one to the number the user entered. However, for multiples of
          three print <span class="sub-tags">Fizz</span> instead of the
          number and for the multiples of five print
          <span class="sub-tags">Buzz</span>. For numbers which are
          multiples of both three and five print
          <span class="sub-tags">FizzBuzz</span>.
        </p>
      </div>
      <p class="text-desc">
        This is the big picture problem we will be solving. It’s pretty
        simple so we may not need to reword it. But we can always make it
        clearer by rewording it.
      </p>
      <p class="text-desc">
        Write a program that allows the user to enter a number, print each
        number between one and the number the user entered, but for numbers
        that divide by 3 without a remainder print
        <span class="tags">Fizz</span> instead. For numbers that divide by 5
        without a remainder print <span class="tags">Buzz</span> and finally
        for numbers that divide by both 3 and 5 without a remainder print
        <span class="tags">FizzBuzz</span>.
      </p>
      <h2 class="sub-heading">Plan</h2>
      <p class="text-desc">
        Does your program have an interface? What will it look like? Our
        FizzBuzz solution will be a browser console program, so we don’t
        need an interface. The only user interaction will be allowing users
        to enter a number.
      </p>
      <p class="text-desc">
        What inputs will your program have? Will the user enter data or will
        you get input from somewhere else? The user will enter a number from
        a prompt (popup box).
      </p>
      <p class="text-desc">
        What’s the desired output? The desired output is a list of numbers
        from 1 to the number the user entered. But each number that is
        divisible by 3 will output <span class="tags">Fizz</span>, each
        number that is divisible by 5 will output
        <span class="tags">Buzz</span> and each number that is divisible by
        both 3 and 5 will output <span class="tags">FizzBuzz</span>.
      </p>
      <p class="text-desc">
        Given your inputs, what are the steps necessary to return the
        desired output? The algorithm in pseudocode for this problem:
      </p>

      <div class="code-container">
        <pre>
          <code><span class="tag-white">When a user inputs a number</span></code>
          <code><span class="tag-white">Loop from 1 to the entered number</span></code>
          <code><span class="tag-white">If the current number is divisible by 3 then print "Fizz"</span></code>
          <code><span class="tag-white">If the current number is divisible by 5 then print "Buzz"</span></code>
          <code><span class="tag-white">If the current number is divisible by 3 and 5 then print "FizzBuzz"</span></code>
          <code><span class="tag-white">Otherwise print the current number</span></code>
        </pre>
      </div>

      <h2 class="sub-heading">Divide and Conquer (Implement)</h2>
      <p class="text-desc">
        As we can see from the algorithm we developed, the first subproblem
        we can solve is getting input from the user. So let’s start there
        and verify it works by printing the entered number.
      </p>
      <p class="text-desc">
        With JavaScript, we’ll use the “prompt” method.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">let</span> <span class="tag-white pl-space-2">answer</span><span class="en-clr pl-space-2">=</span> 
          </code>
          <code><span class="selector-clr">parseInt</span><span class="tag-white">&#40;</span><span class="selector-clr">prompt</span><span class="tag-white">&#40;</span> <span class="class-clr">"Please enter the number you would like to FizzBuzz up to:"</span><span class="tag-white">&#41;&#41;;</span></code>
          <code></code>
          <code>
            <span class="code-text-clr">for</span> <span class="tag-white pl-space-2">&#40;</span> <span class="code-text-clr">let</span> <span class="tag-white pl-space-2">i</span> <span class="en-clr pl-space-2">=</span> <span class="selector-clr pl-space-2">1</span> <span class="tag-white">; i</span> <span class="en-clr pl-space-2"><=</span> <span class="tag-white pl-space-2">answer; i</span> <span class="en-clr">++</span> <span class="tag-white">&#41; &#123;</span>
          </code>
          <code>
            <span class="tag-white pl-space">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;i&#41;;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        If you haven’t seen this before and it looks strange, it’s actually
        straightforward. We declare a variable
        <span class="tags">i</span> and assign it 1: the initial value of
        the variable <span class="tags">i</span> in our loop
        (<strong>NOTE</strong>: Most of the time, programmers find
        themselves looping from 0. Due to the needs of our program, we’re
        starting from 1). The second clause,
        <span class="tags">i <= answer</span> is our condition. We want to
        loop until <span class="tags">i</span> is greater than
        <span class="tags">answer</span>. The third clause,
        <span class="tags">i++</span>, tells our loop to increment
        <span class="tags">i</span> by 1 every iteration. As a result, if
        the user inputs 10, this loop would print numbers 1 - 10 to the
        console.
      </p>

      <p class="text-desc">
        With that working, let’s move on to the next problem: If the current
        number is divisible by 3, then print <span class="tags">Fizz</span>.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">let</span> <span class="tag-white pl-space-2">answer</span><span class="en-clr pl-space-2">=</span> 
          </code>
          <code><span class="selector-clr">parseInt</span><span class="tag-white">&#40;</span><span class="selector-clr">prompt</span><span class="tag-white">&#40;</span> <span class="class-clr">"Please enter the number you would like to FizzBuzz up to:"</span><span class="tag-white">&#41;&#41;;</span></code>
          <code></code>
          <code>
            <span class="code-text-clr">for</span> <span class="tag-white pl-space-2">&#40;</span> <span class="code-text-clr">let</span> <span class="tag-white pl-space-2">i</span> <span class="en-clr pl-space-2">=</span> <span class="selector-clr">1</span> <span class="tag-white">; i</span> <span class="en-clr pl-space-2">&lt;=</span> <span class="tag-white pl-space-2">answer; i</span> <span class="selector-clr">++</span> <span class="tag-white">&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="code-text-clr pl-space">if</span> <span class="tag-white pl-space-2">&#40;i</span> <span class="en-clr pl-space-2">%</span> <span class="selector-clr pl-space-2">3</span> <span class="en-clr pl-space-2">===</span> <span class="selector-clr pl-space-2">0</span> <span class="tag-white">&#41;</span>
          </code> 
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="class-clr">"Fizz"</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&#125;</span> <span class="code-text-clr pl-space-2">else</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="tag-white">i</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&#125;</span> 
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        We are using the modulus operator (<span class="tags">%</span>) here
        to divide the current number by three. If you recall from a previous
        lesson, the modulus operator returns the remainder of a division. So
        if a remainder of 0 is returned from the division, it means the
        <span class="tags">current</span> number is divisible by 3.
      </p>

      <p class="text-desc">
        After this change the program will now output this when you run it
        and the user inputs 10:
      </p>

      <div class="code-container">
        <pre>
          <code><span class="tag-white">1</span></code>
          <code><span class="tag-white">2</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">4</span></code>
          <code><span class="tag-white">5</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">7</span></code>
          <code><span class="tag-white">8</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">10</span></code>
        </pre>
      </div>

      <p class="text-desc">
        The program is starting to take shape. The final few subproblems
        should be easy to solve as the basic structure is in place and they
        are just different variations of the condition we’ve already got in
        place. Let’s tackle the next one: If the current number is divisible
        by 5 then print <span class="tags">Buzz</span>.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">let</span> <span class="tag-white pl-space-2">answer</span><span class="en-clr pl-space-2">=</span> 
          </code>
          <code><span class="selector-clr">parseInt</span><span class="tag-white">&#40;</span><span class="selector-clr">prompt</span><span class="tag-white">&#40;</span> <span class="class-clr">"Please enter the number you would like to FizzBuzz up to:"</span><span class="tag-white">&#41;&#41;;</span></code>
          <code></code>
          <code>
            <span class="code-text-clr">for</span> <span class="tag-white pl-space-2">&#40;</span> <span class="code-text-clr">let</span> <span class="tag-white pl-space-2">i</span> <span class="en-clr pl-space-2">=</span> <span class="selector-clr">1</span> <span class="tag-white">; i</span> <span class="en-clr pl-space-2">&lt;=</span> <span class="tag-white pl-space-2">answer; i</span> <span class="selector-clr">++</span> <span class="tag-white">&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="code-text-clr pl-space">if</span> <span class="tag-white pl-space-2">&#40;i</span> <span class="en-clr pl-space-2">%</span> <span class="selector-clr pl-space-2">3</span> <span class="en-clr pl-space-2">===</span> <span class="selector-clr pl-space-2">0</span> <span class="tag-white">&#41;</span>
          </code> 
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="class-clr">"Fizz"</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&#125;</span> <span class="code-text-clr pl-space-2">else if</span> <span class="tag-white pl-space-2">&#40;i</span> <span class="en-clr pl-space-2">%</span> <span class="selector-clr pl-space-2">5</span> <span class="en-clr pl-space-2">===</span> <span class="selector-clr pl-space-2">0</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="class-clr">"Buzz"</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&#125;</span> <span class="code-text-clr pl-space-2">else</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="tag-white">i</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&#125;</span> 
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        When you run the program now, you should see this output if the user
        inputs 10:
      </p>
      <div class="code-container">
        <pre>
          <code><span class="tag-white">1</span></code>
          <code><span class="tag-white">2</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">4</span></code>
          <code><span class="tag-white">Buzz</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">7</span></code>
          <code><span class="tag-white">8</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">Buzz</span></code>
        </pre>
      </div>

      <p class="text-desc">
        We have one more subproblem to solve to complete the program: If the
        current number is divisible by 3 and 5 then print
        <span class="tags">FizzBuzz</span>.
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">let</span> <span class="tag-white pl-space-2">answer</span><span class="en-clr pl-space-2">=</span> 
          </code>
          <code><span class="selector-clr">parseInt</span><span class="tag-white">&#40;</span><span class="selector-clr">prompt</span><span class="tag-white">&#40;</span> <span class="class-clr">"Please enter the number you would like to FizzBuzz up to:"</span><span class="tag-white">&#41;&#41;;</span></code>
          <code></code>
          <code>
            <span class="code-text-clr">for</span> <span class="tag-white pl-space-2">&#40;</span> <span class="code-text-clr">let</span> <span class="tag-white pl-space-2">i</span> <span class="en-clr pl-space-2">=</span> <span class="selector-clr">1</span> <span class="tag-white">; i</span> <span class="en-clr pl-space-2">&lt;=</span> <span class="tag-white pl-space-2">answer; i</span> <span class="selector-clr">++</span> <span class="tag-white">&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="code-text-clr pl-space">if</span> <span class="tag-white pl-space-2">&#40;i</span> <span class="en-clr pl-space-2">%</span> <span class="selector-clr pl-space-2">3</span> <span class="en-clr pl-space-2">===</span> <span class="selector-clr pl-space-2">0</span> <span class="en-clr pl-space-2">&&</span> <span class="tag-white pl-space-2">i</span> <span class="en-clr pl-space-2">%</span> <span class="property-clr pl-space-2">5</span> <span class="en-clr pl-space-2">===</span> <span class="selector-clr pl-space-2">0</span> <span class="tag-white">&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
          </code> 
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="class-clr">"FizzBuzz"</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
           <span class="tag-white pl-space">&#125;</span>  <span class="code-text-clr pl-space">else if</span> <span class="tag-white pl-space-2">&#40;i</span> <span class="en-clr pl-space-2">%</span> <span class="selector-clr pl-space-2">3</span> <span class="en-clr pl-space-2">===</span> <span class="selector-clr pl-space-2">0</span> <span class="tag-white">&#41;</span> <span class="tag-white pl-space">&#123;</span>
          </code> 
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="class-clr">"Fizz"</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&#125;</span> <span class="code-text-clr pl-space-2">else if</span> <span class="tag-white pl-space-2">&#40;i</span> <span class="en-clr pl-space-2">%</span> <span class="selector-clr pl-space-2">5</span> <span class="en-clr pl-space-2">===</span> <span class="selector-clr pl-space-2">0</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="class-clr">"Buzz"</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&#125;</span> <span class="code-text-clr pl-space-2">else</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="tag-white pl-space-4">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;</span><span class="tag-white">i</span> <span class="tag-white">&#41;;</span>
          </code>
          <code>
            <span class="tag-white pl-space">&#125;</span> 
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        We’ve had to move the conditionals around a little to get it to
        work. The first condition now checks if
        <span class="tags">i</span> is divisible by 3 and 5 instead of
        checking if <span class="tags">i</span> is just divisible by 3.
        We’ve had to do this because if we kept it the way it was, it would
        run the first condition <span class="tags">if (i % 3 === 0)</span>,
        so that if <span class="tags">i</span> was divisible by 3, it would
        print <span class="tags">Fizz</span> and then move on to the next
        number in the iteration, even if <span class="tags">i</span> was
        divisible by 5 as well.
      </p>

      <p class="text-desc">
        With the condition if
        <span class="tags">(i % 3 === 0 && i % 5 === 0)</span> coming first,
        we check that <span class="tags">i</span> is divisible by both 3 and
        5 before moving on to check if it is divisible by 3 or 5
        individually in the <span class="tags">else if</span> conditions.
      </p>
      <p class="text-desc">
        The program is now complete! If you run it now you should get this
        output when the user inputs 20:
      </p>

      <div class="code-container">
        <pre>
          <code><span class="tag-white">1</span></code>
          <code><span class="tag-white">2</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">4</span></code>
          <code><span class="tag-white">Buzz</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">7</span></code>
          <code><span class="tag-white">8</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">Buzz</span></code>
          <code><span class="tag-white">11</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">13</span></code>
          <code><span class="tag-white">14</span></code>
          <code><span class="tag-white">FizzBuzz</span></code>
          <code><span class="tag-white">16</span></code>
          <code><span class="tag-white">17</span></code>
          <code><span class="tag-white">Fizz</span></code>
          <code><span class="tag-white">19</span></code>
          <code><span class="tag-white">Buzz</span></code>
        </pre>
      </div>
    </section>
    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <ol>
        <li>
          Read
          <a
            href="https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/"
            target="_blank"
            >How to Think Like a Programmer - Lessons in Problem Solving</a
          >
          by Richard Reis.
        </li>
        <li>
          Watch
          <a
            href="https://www.youtube.com/watch?v=azcrPFhaY9k"
            target="_blank"
            >How to Begin Thinking Like a Programmer by Coding Tech</a
          >. It’s an hour long but packed full of information and definitely
          worth your time watching.
        </li>
        <li>
          Read this
          <a
            href="https://web.archive.org/web/20211229231605/https://www.vikingcodeschool.com/software-engineering-basics/what-is-pseudo-coding"
            target="_blank"
            >What is Pseudocoding</a
          >
          article from The Viking Code School.
        </li>
      </ol>
    </section>

    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to other content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          Read the first chapter in
          <a
            href="https://nostarch.com/thinklikeaprogrammer"
            target="_blank"
            >Think Like a Programmer: An Introduction to Creative Problem
            Solving</a
          >
          (not free). This book’s examples are in C++, but you will
          understand everything since the main idea of the book is to teach
          programmers to better solve problems. It’s an amazing book and
          worth every penny. It will make you a better programmer.
        </li>
        <li>
          Watch this
          <a
            href="https://ocw.mit.edu/courses/res-tll-004-stem-concept-videos-fall-2013/resources/basic-programming-techniques/"
            target="_blank"
            >video on repetitive programming techniques</a
          >.
        </li>
      </ul>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding
        of this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ul>
        <li>
          <a href="#understand-the-prob"
            >What are the three stages in the problem solving process?</a
          >
        </li>
        <li>
          <a href="#plan"
            >Why is it important to clearly understand the problem first?</a
          >
        </li>
        <li>
          <a href="#plan"
            >What can you do to help get a clearer understanding of the
            problem?</a
          >
        </li>
        <li>
          <a href="#plan"
            >What are some of the things you should do in the planning stage
            of the problem solving process?</a
          >
        </li>
        <li><a href="#pseudocode">What is an algorithm?</a></li>
        <li><a href="#pseudocode">What is pseudocode?</a></li>
        <li>
          <a href="#fizzbuzz"
            >What are the advantages of breaking a problem down and solving
            the smaller problems?</a
          >
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  understandingErrors = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <rect width="630" height="630" fill="#f7df1e" />
        <path
          d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
        />
      </svg>
      <h1 class="text-heading">Understanding Errors</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        Reading and understanding error messages is a requirement as a
        developer. At first glance, many beginners shrink away from error
        messages as they appear to be “scary” and difficult to understand
        because they include terms one may not be familiar with. However,
        error messages provide developers with a treasure trove of
        knowledge, and tell you everything you need to know about how to
        resolve them! Being able to parse error messages and warnings
        without fear will enable you to effectively debug your applications,
        receive meaningful help from others, and empower yourself to push
        forward when faced with an error.
      </p>
    </section>

    <!-- LESSON OVERVIEW -->
    <section id="lesson-overview">
      <h1 class="text-heading">Lesson Overview</h1>
      <p class="text-desc">
        This section contains a general overview of topics that you will
        learn in this lesson.
      </p>
      <ul>
        <li>Name at least three kinds of Javascript errors</li>
        <li>
          Identify two parts of an error message that help you find where
          the error originates
        </li>
        <li>Be able to understand how to research and resolve errors</li>
      </ul>
    </section>
    <!-- THE ANATOMY OF AN ERROR -->
    <section id="anatomy">
      <h1 class="text-heading">The Anatomy of an Error</h1>
      <p class="text-desc">
        An error is a type of object built into the JS language, consisting
        of a name/type and a message. Errors contain crucial information
        that can assist you in locating the code responsible for the error,
        determining why you have this error, and resolving the error.
        <strong>Note</strong>: For all examples in this lesson, you should
        run the code in the browser’s console.
      </p>
      <p class="text-desc">
        Let’s assume we have written the following code:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">a</span> <span class="en-clr pl-space-2">=</span> <span class="class-clr pl-space-2">"Hello"</span>
          </code>
          <code>
            <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">b</span> <span class="en-clr pl-space-2">=</span> <span class="class-clr pl-space-2">"World"</span>
          </code>
          <code></code>
          <code>
            <span class="tag-white">console.</span> <span class="selector-clr">log</span><span class="tag-white">&#40;c&#41;</span>
          </code>
        </pre>
      </div>

      <p class="text-desc">
        This code will run, but it will generate an error. In technical
        terms, this is called “throwing” an error. The first part of an
        error displays the type of error. This provides the first clue as to
        what you’re dealing with. We’ll learn more about the different error
        types later in the lesson. In this example, we have a
        <span class="tags">ReferenceError</span>.
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/00 - Error.png" alt="" />
      </div>

      <p class="text-desc">
        A <span class="tags">ReferenceError</span> is thrown when one refers
        to a variable that is not declared and/or initialized within the
        current scope. In our case, the error message explains that the
        error has occurred because
        <span class="tags">c is not defined</span>. Different errors of this
        type have different messages based on what is causing the
        <span class="tags">ReferenceError</span>. For example, another
        message you may run into is
        <span class="tags"
          >ReferenceError: can't access lexical declaration 'X' before
          initialization</span
        >. As we can see, this points to a completely different reason than
        our original <span class="tags">ReferenceError</span> above.
        Understanding both the error type and the error message is crucial
        to comprehending why you are receiving the error.
      </p>

      <p class="text-desc">
        The next part of an error gives us the name of the file in which you
        can find the error (in this case, our
        <span class="tags">script.js</span>), and also the line number. This
        allows you to easily navigate to the problematic line in your code.
        Here, the error originates from the fourth line of
        <span class="tags">script.js</span>, which is displayed as a link
        under the error message with the text
        <span class="tags">at script.js:4</span>. If you click this link,
        most browsers will navigate to the exact line of code and the rest
        of your script in the Sources tab of the Developer Tools. Sometimes
        your browser’s console will also display the column (or character)
        in the line at which the error is occurring. In our example, this
        would be <span class="tags">at script.js:4:13</span>.
      </p>

      <p class="text-desc">
        Another important part of an error is the stack trace. This helps
        you understand when the error was thrown in your application, and
        what functions were called that led up to the error. So, for
        example, if we have the following code:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">a</span> <span class="en-clr pl-space-2">=</span> <span class="selector-clr pl-space-2">5</span> <span class="tag-white">;</span>
          </code>
          <code>
            <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">a</span> <span class="en-clr pl-space-2">=</span> <span class="selector-clr pl-space-2">10</span> <span class="tag-white">;</span>
          </code>
          <code></code>
          <code>
            <span class="code-text-clr">function</span> <span class="selector-clr pl-space-2">add</span><span class="tag-white">&#40;&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="code-text-clr pl-space">return</span> <span class="tag-white pl-space-2">c;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="code-text-clr">function</span> <span class="selector-clr pl-space-2">print</span><span class="tag-white">&#40;&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="selector-clr pl-space">add</span><span class="tag-white">&#40;&#41;;</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
          <code></code>
          <code>
            <span class="selector-clr">print</span> <span class="tag-white">&#40;&#41;;</span>
          </code>
        </pre>
      </div>
      <p class="text-desc">
        Our function <span class="tags">print()</span> should call on
        <span class="tags">add()</span>, which returns a variable named
        <span class="tags">c</span>, which currently has not been declared.
        The corresponding error is as follows:
      </p>
      <div class="img-container">
        <img src="/main-content-html/img/01 - Error.png" alt="" />
      </div>

      <p class="text-desc">The stack trace tells us that:</p>
      <ol>
        <li>
          <span class="tags">c is not defined</span> in scope of
          <span class="tags">add()</span>, which is declared on line 5
        </li>
        <li>
          <span class="tags">add()</span> was called by
          <span class="tags">print()</span>, which was declared on line 9
        </li>
        <li>
          <span class="tags">print()</span> itself was called on line 12.
        </li>
      </ol>

      <p class="text-desc">
        Thus the stack trace lets you trace the evolution of an error back
        to its origin, which here is the declaration of
        <span class="tags">add()</span>.
      </p>
    </section>

    <!-- COMMON TYPES OF ERROE -->
    <section id="common-types">
      <h1 class="text-heading">Common Types of Error</h1>
      <p class="text-desc">
        These are some of the most common errors you will encounter, so it’s
        important to understand them.
      </p>

      <h2 class="sub-heading">Syntax Error</h2>
      <p class="text-desc">
        A syntax error occurs when the code you are trying to run is not
        written correctly, i.e., in accordance with the grammatical rules of
        JavaScript. For example this:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">function</span> <span class="selector-clr pl-space-2">helloWorld</span> <span class="tag-white">&#40;&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
          </code>
          <code>
            <span class="tag-white pl-space">console.log</span> <span class="class-clr pl-space-2">"Hello World!"</span>
          </code>
          <code>
            <span class="tag-white">&#125;</span>
          </code>
        </pre>
      </div>
      <p class="text-desc">
        will throw the following error, because we forgot the parentheses
        for <span class="tags">console.log()</span>!
      </p>

      <div class="img-container">
        <img src="/main-content-html/img/02 - Error.png" alt="" />
      </div>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"
        target="_blank"
        >MDN - Syntax Error</a
      >

      <h2 class="sub-heading">Reference Error</h2>
      <p class="text-desc">
        We covered reference errors in the first example in this lesson, but
        it’s important to remember that these arise because whatever
        variable you are trying to reference does not exist (within the
        current scope) - or it has been spelled incorrectly!
      </p>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"
        target="_blank"
        >MDN - Reference Error</a
      >

      <h2 class="sub-heading" id="type-error">Type Error</h2>
      <p class="text-desc">
        These errors are thrown for a few different reasons:
      </p>
      <p class="text-desc">
        Per MDN, a <span class="tags">TypeError</span> may be thrown when:
      </p>
      <div class="note-container">
        <ul>
          <li>
            <em
              >an operand or argument passed to a function is incompatible
              with the type expected by that operator or function;</em
            >
          </li>
          <li>
            <em
              >an operand or argument passed to a function is incompatible
              with the type expected by that operator or function;</em
            >
          </li>
          <li>
            <em
              >or when attempting to use a value in an inappropriate
              way.</em
            >
          </li>
        </ul>
      </div>

      <p class="text-desc">
        Say we have two strings that you would like to combine to create one
        message, such as below:
      </p>

      <div class="code-container">
        <pre>
          <code>
            <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">str1</span> <span class="en-clr pl-space-2">=</span> <span class="class-clr pl-space-2">"Hello"</span>
          </code>
          <code>
            <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">str2</span> <span class="en-clr pl-space-2">=</span> <span class="class-clr pl-space-2">"World!"</span>
          </code>
          <code>
            <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">message</span> <span class="en-clr pl-space-2">=</span> <span class="class-clr pl-space-2">str1.</span><span class="selector-clr">push</span><span class="tag-white">&#40;str2&#41;;</span>
          </code>
        </pre>
      </div>
      <div class="img-container">
        <img src="/main-content-html/img/03 - Error.png" alt="" />
      </div>
      <p class="text-desc">
        Here, we get a <span class="tags">TypeError</span> with a message
        stating that <span class="tags">str1.push is not a function</span>.
        This is a common error message that confuses learners, because we
        know that <span class="tags">.push()</span> is certainly a function!
        You’ve probably used it to add items to arrays before, but that’s
        the key- <span class="tags">.push()</span> is not a String method,
        it’s an Array method. Hence, it is “not a function” that you can
        find as a String method. If we change
        <span class="tags">.push()</span> to
        <span class="tags">.concat()</span>, a proper String method, our
        code runs as intended! A good note to keep in mind when faced with a
        <span class="tags">TypeError</span> is to consider the data type you
        are trying to run a method or operation against. You’ll likely find
        that it is not what you think, or the operation or method is not
        compatible with that type.
      </p>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"
        target="_blank"
        >MDN - TypeError</a
      >
    </section>

    <!-- TIPS FOR RESOLVING ERRORS -->
    <section id="resolving-errors">
      <h1 class="text-heading">Tips for Resolving Errors</h1>
      <p class="text-desc">
        At this point, you might be wondering how we can resolve these
        errors.
      </p>
      <ol>
        <li>
          Read the error carefully and try to understand it on your own.
        </li>
        <li>
          Next, Google the error! Chances are, you can find a fix or
          explanation on StackOverflow or in the documentation. If nothing
          else, you will receive more clarity as to why you are receiving
          this error.
        </li>
        <li>
          Use the debugger! As previously mentioned, the debugger is great
          for more involved troubleshooting, and is a critical tool for a
          developer. You can set breakpoints, view the value of any given
          variable at any point in your application’s execution, step
          through code line by line, and more! It is an extremely valuable
          tool and every programmer should know how to use it.
          <a
            href="https://developer.chrome.com/docs/devtools/javascript/"
            target="_blank"
            >This tutorial dives into the Chrome Debugger</a
          >.
        </li>
        <li>
          Make use of the console!
          <span class="tags">console.log()</span> is a popular choice for
          quick debugging. For more involved troubleshooting, using the
          debugger might be more appropriate, but using
          <span class="tags">console.log()</span> is great for getting
          immediate feedback without needing to step through your functions.
          There are also other useful methods such as
          <span class="tags">console.table()</span>,
          <span class="tags">console.trace()</span>, and more! You can find
          additional methods
          <a
            href="https://www.w3schools.com/jsref/obj_console.asp"
            target="_blank"
            >here</a
          >.
        </li>
      </ol>
    </section>

    <!-- ERRORS VS. WARNING -->
    <section id="errors-vs-warning">
      <h1 class="text-heading">Errors VS. Warning</h1>
      <p class="text-desc">
        Lastly, many people are met with warnings and treat them as errors.
        Errors will stop the execution of your program or whatever process
        you may be attempting to run and prevent further action. Warnings,
        on the other hand, are messages that provide you insight on
        potential problems that may not necessarily crash your program at
        runtime, or at all! While you should address these warnings if
        possible and as soon as possible, warnings are not as significant as
        errors and are more likely to be informational. Warnings are
        typically shown in yellow, while errors are typically shown in red.
        Though these colors are not a rule, frequently there will be a
        visual differentiation between the two, regardless of the platform
        you are encountering them on.
      </p>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-desc">Task</h1>
      <ol>
        <li>
          Work through
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong"
            target="_blank"
            >this lesson on MDN</a
          >. Be sure to download their starter code that has intentional
          errors.
        </li>
      </ol>
    </section>

    <!-- ADDITIONAL RESOURCES -->
    <section id="additional-sources">
      <h1 class="text-heading">Additional Resources</h1>
      <p class="text-desc">
        This section contains helpful links to other content. It isn’t
        required, so consider it supplemental.
      </p>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors"
            target="_blank"
            >MDN Javascript Errors Reference</a
          >
        </li>
      </ul>
    </section>

    <!-- KNOWLEDGE CHECK -->
    <section id="knowledge">
      <h1 class="text-heading">Knowledge Check</h1>
      <p class="text-desc">
        This section contains questions for you to check your understanding
        of this lesson on your own. If you’re having trouble answering a
        question, click it and review the material it links to.
      </p>
      <ul>
        <li>
          <a href="#type-error"
            >What are three reasons why you may see a TypeError?</a
          >
        </li>
        <li>
          <a href="#error-vs-warning"
            >What is the key difference between an error and a warning?</a
          >
        </li>
        <li>
          <a href="#resolving-errors"
            >What is one method you can use to resolve an error?</a
          >
        </li>
      </ul>
    </section>
  </div>
    </div>
    `;

  PROJECT = `
    <div>
    <div class="container main-content">
    <div class="logo--title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
        class="html-logo"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        <rect width="630" height="630" fill="#f7df1e" />
        <path
          d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
        />
      </svg>
      <h1 class="text-heading">Project: Rock Paper Scissors</h1>
    </div>
  </div>

  <div class="container">
    <section id="introduction">
      <h1 class="text-heading">Introduction</h1>
      <p class="text-desc">
        We’re going to make a simple implementation of grade-school classic
        “rock paper scissors”. If you don’t know what that is check the
        <a
          href="https://en.wikipedia.org/wiki/Rock_paper_scissors"
          target="_blank"
          >Wikipedia article</a
        >
        or
        <a
          href="https://www.wikihow.com/Play-Rock,-Paper,-Scissors"
          target="_blank"
          >this</a
        >
        detailed step-by-step. For the moment we’re just going to play the
        game from the browser console.
      </p>
    </section>

    <!-- QUICK EXERCISES BEFORE STARTING -->
    <section id="quick-exercises">
      <h1 class="text-heading">Quick Exercises Before Starting</h1>
      <ol>
        <li>Identify three ways to include JavaScript in a page.</li>
        <li>
          Test it out! Write
          <span class="tags">console.log("Hello World");</span> in
          JavaScript and check to see if it displays in the browser’s
          console.
        </li>
      </ol>
      <p class="text-desc">
        Finally, this is your first JavaScript program built from scratch,
        so don’t forget the previous lesson on problem solving. Plan your
        solution out before writing any code, and test each piece as you
        build to ensure it is working before moving on to the next!
      </p>
    </section>

    <!-- ASSIGNMENT -->
    <section id="assignment">
      <h1 class="text-heading">Task</h1>
      <ol>
        <li>
          Create a blank HTML document with a script tag (Hint: it is best
          practice to link an external .js file). This game is going to be
          played completely from the console, so don’t worry about putting
          anything else in there.
        </li>
        <li>
          Your game is going to play against the computer, so begin with a
          function called
          <span class="sub-tags">getComputerChoice</span> that will randomly
          return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this
          function in the game to make the computer’s play. Tip: use the
          console to make sure this is returning the expected output before
          moving to the next step!
        </li>
        <li>
          Write a function that plays a single round of Rock Paper Scissors.
          The function should take two parameters - the
          <span class="sub-tags">playerSelection</span> and
          <span class="sub-tags">computerSelection</span> - and then return
          a string that declares the winner of the round like so:
          <span class="sub-tags">"You Lose! Paper beats Rock"</span>
          <ul>
            <li>
              Make your function’s playerSelection parameter
              case-insensitive (so users can input
              <span class="sub-tags">rock</span>,
              <span class="sub-tags">ROCK</span>,
              <span class="sub-tags">RocK</span> or any other variation).
            </li>
          </ul>
        </li>
        <li>
          <p class="text-desc">
            <strong>Important note</strong>: you want to
            <span class="sub-tags">return</span> the results of this
            function call, not
            <span class="sub-tags">console.log()</span> them. You’re going
            to use what you <span class="sub-tags">return</span> later on,
            so let’s test this function by using console.log to see the
            results:
          </p>

          <div class="code-container">
            <pre>
              <code>
                <span class="code-text-clr">function</span> <span class="selector-clr pl-space-2">playRound</span><span class="tag-white">&#40;playerSelection, computerSelection&#41;</span> <span class="tag-white pl-space-2">&#123;</span>
              </code>
              <code>
                <span class="comment-clr pl-space">// your code here!</span>
              </code>
              <code>
                <span class="tag-white">&#125;</span>
              </code>
              <code></code>
              <code>
                <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">playerSelector</span> <span class="en-clr pl-space-2">=</span> <span class="class-clr pl-space-2">"rock"</span> <span class="tag-white">;</span>
              </code>
              <code>
                <span class="code-text-clr">const</span> <span class="tag-white pl-space-2">playerSelector</span> <span class="en-clr pl-space-2">=</span> <span class="selector-clr pl-space-2">getComputerChoice</span> <span class="tag-white">&#40;&#41;;</span>
              </code>
              <code>
                <span class="tag-white">console.</span><span class="selector-clr">log</span><span class="tag-white">&#41;</span><span class="selector-clr">playRound</span><span class="tag-white">&#40;playerSelection, computerSelection&#41;&#41;;</span>
              </code>
            </pre>
          </div>
        </li>
        <li>
          Write a NEW function called <span class="sub-tags">game()</span>.
          Use the previous function <em>inside</em> of this one to play a 5
          round game that keeps score and reports a winner or loser at the
          end.
          <ul>
            <li>
              You have not officially learned how to “loop” over code to
              repeat function calls… if you already know about loops from
              somewhere else (or if you feel like doing some more learning)
              feel free to use them. If not, don’t worry! Just call your
              <span class="sub-tags">playRound</span> function 5 times in a
              row. Loops are covered in the next lesson.
            </li>
            <li>
              At this point you should be using
              <span class="sub-tags">console.log()</span> to display the
              results of each round and the winner at the end.
            </li>
            <li>
              Use <span class="sub-tags">prompt()</span> to get input from
              the user.
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"
                target="_blank"
                >Read the docs here if you need to</a
              >.
            </li>
            <li>
              Feel free to re-work your previous functions if you need to.
              Specifically, you might want to change the return value to
              something more useful.
            </li>
            <li>
              Feel free to create more “helper” functions if you think it
              would be useful.
            </li>
          </ul>
        </li>
      </ol>
    </section>
  </div>
    </div>
    `;
}

export default Javascript;
