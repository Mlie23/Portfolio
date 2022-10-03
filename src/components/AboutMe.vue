<template>
  <div class="relative overflow-hidden bg-grayy">
    <div class="mx-auto max-w-7xl">
      <main
        class="
          mx-auto
          mt-10
          max-w-7xl
          px-4
          sm:mt-12 sm:px-6
          md:mt-10
          lg:mt-15 lg:px-8
          xl:mt-18
        "
      >
        <div class="sm:text-center lg:text-left">
          <div class="grid grid-cols-3">
            <div class="col-span-2">
              <h1
                class="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-gray-900
                  sm:text-5xl
                  md:text-6xl
                "
              >
                <span class="block xl:inline">Hi There! I'm Michael Lie</span>
              </h1>
              <p
                class="
                  mt-3
                  text-white
                  sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg
                  md:mt-5 md:text-xl
                  lg:mx-0
                "
              >
                I am an Undergraduate student majoring in Computer Science and
                Mathematics at Whitworth University.
              </p>
            </div>
            <div class="col-span-1">
              <img src="../assets/Headshot.jpg" />
            </div>
          </div>
          <div class="mt-3 sm:mt-5 flex justify-center">
            <!-- Verify an asset w/ a href link -->
            <div>
              <button
                href="https://github.com/Mlie23"
                class="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  border border-transparent
                  px-8
                  py-3
                  text-base
                  font-medium
                  text-white
                  hover:bg-gray-600
                  md:py-4 md:px-10 md:text-lg
                "
              >
                <img class="h-6" src="../assets/github_logo.png" />
              </button>
            </div>
            <!-- learn more w/ href link -->
            <div>
              <a
                href="https://www.linkedin.com/in/mlie23"
                class="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-md
                  border border-transparent
                  px-8
                  py-3
                  text-base
                  font-medium
                  text-white
                  hover:bg-gray-600
                  md:py-4 md:px-10 md:text-lg
                "
              >
                <img class="h-6 w-full" src="../assets/linkedin.png" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <div class="relative overflow-hidden bg-grayy">
    <div class="mx-auto max-w-7xl">
      <div
        class="
          pl-3
          text-left text-3xl
          font-bold
          tracking-tight
          text-gray-900
          sm:text-3xl
          md:text-4xl
        "
      >
        Recent Projects
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-1">
      <main
        class="
          mx-auto
          max-w-7xl
          px-4
          bg-gray-600
          border-2
          rounded-lg
          border-gray-500
        "
      >
        <div
          class="
            text-center text-2xl
            font-bold
            tracking-tight
            text-gray-900
            sm:text-xl
          "
        >
          <a href=""> University Recreation Center Mobile Application </a>
        </div>
        <div class="text-center">Algorithm</div>
        <div>
          ● Collaborated with 3 teammates to develop a working mobile
          application for Whitworth University Recreation Center
        </div>
        <div>
          ● Designed a backend API console through .NET to allow users to
          reserve equipment and access real-time information about the
          Recreation Center.
        </div>
        <div>
          ● Generated a reminder system to notify users of future events and
          rental due dates.
        </div>
        <div>
          ● Utilized Firebase database to store users’ generated QR-code and
          authentication to the application.
        </div>
        ● Created a heatmap system that allows users to see which zones are
        available to use based on the capacity limit and gears being rented.

        <div></div>
      </main>

      <main
        class="
          mx-auto
          max-w-7xl
          px-4
          bg-gray-600
          border-2
          rounded-lg
          border-gray-500
        "
      >
        <div
          class="
            text-center text-2xl
            font-bold
            tracking-tight
            text-gray-900
            sm:text-xl
          "
        >
        <a href="">
          Automatic Intramural Scheduling
        </a>
        </div>
        <div class="text-center">Algorithm</div>
        <div>
          ● Imported and classified JSON data from 6 different sports and 50
          different intramural teams.
        </div>
        <div>
          ● Modified Network Flow algorithm to find the best possible schedule
          for each week.
        </div>
        <div>
          ● Utilized stacks and priority queues to make sure each team will play
          at least once a week without conflicts in schedule.
        </div>
        <div>
          ● Pushed and displayed the weekly schedule in easy, readable XLS data.
        </div>
        <div>
          ● Increased management productivity by reducing manual repetition
          and redundancy for the team by 4 hours/week.
        </div>
      </main>

      <main
        class="
          mx-auto
          max-w-7xl
          px-4
          bg-gray-600
          border-2
          rounded-lg
          border-gray-500
        "
      >
        <div
          class="
            text-center text-2xl
            font-bold
            tracking-tight
            text-gray-900
            sm:text-xl
          "
        >
        <a href="">
          Avoid the Pika – Side-Scrolling Game
        </a>
        </div>
        <div class="text-center">Algorithm</div>

                <div>
          ● Created a 2D game where the player can move the character using keyboard input while dodging
flying Pikachu.
        </div>
        <div>
          ● Modified Network Flow algorithm to find the best possible schedule
          for each week.
        </div>
        <div>
● Designed and implemented the website using CSS and HTML to improve the user experience.
        </div>
        <div>
● Coded in JavaScript and used object-oriented design to create different components of the games
such as obstacles, the player(s), and health points.
        </div>
        <div>
● Implemented firebase database to store account information and match history.
        </div>
      </main>
      <main
        class="
          mx-auto
          max-w-7xl
          px-4
          bg-gray-600
          border-2
          rounded-lg
          border-gray-500
        "
      >
        <div
          class="
            text-center text-2xl
            font-bold
            tracking-tight
            text-tan
            sm:text-xl
          "
        >
          Automatic Intramural Scheduling
        </div>
        <div class="text-center">Algorithm</div>
      </main>
    </div>
  </div>
</template>