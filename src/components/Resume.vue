<template>
  <div class="resume">
    <div v-for="section in sections" :key="section.header" class="resume--section">
      <h1>{{ section.header }}</h1>
      <div v-if="section.header === 'Technical Skills'">
        <div v-for="skill in section.skills" :key="skill.header" class="resume--section--skills">
          <span class="resume--section--skills--header">
            <h2>{{ skill.header }}</h2>
          </span>
          <ul>
            <li v-for="item in skill.items" :key="item.name">
              <i :class="item.class"></i>
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div v-else-if="section.header === 'Work Experience'">
        <div v-for="workplace in section.workplaces" :key="workplace.header">
          <h2>{{ workplace.header }}</h2>
          <h3>{{ workplace.title }}</h3>
          <h3>{{ workplace.dates }}</h3>
          <ul>
            <li v-for="duty in workplace.duties" :key="duty">{{ duty }}</li>
          </ul>
        </div>
      </div>
      <div v-else-if="section.header === 'Education'">
        <div v-for="school in section.schools" :key="school.header">
          <h2>{{ school.header }}</h2>
          <h3>{{ school.degree }}</h3>
          <h3>{{ school.year }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          header: 'Technical Skills',
          skills: [
            {
              header: 'Languages',
              items: [
                {
                  name: 'JavaScript (ES6)',
                  class: 'fab fa-js',
                },
                {
                  name: 'HTML5',
                  class: 'fab fa-html5',
                },
                {
                  name: 'CSS3',
                  class: 'fab fa-css3',
                },
                {
                  name: 'Sass',
                  class: 'fab fa-sass',
                },
              ],
            },
            {
              header: 'Libraries & Frameworks',
              items: [
                {
                  name: 'Vue',
                  class: 'fab fa-vuejs',
                },
                {
                  name: 'React',
                  class: 'fab fa-react',
                },
                {
                  name: 'jQuery',
                  class: '',
                },
                {
                  name: 'Node/Express',
                  class: 'fab fa-node',
                },
              ],
            },
            {
              header: 'Other Technologies',
              items: [
                {
                  name: 'Git/Github',
                  class: 'fab fa-git',
                },
                {
                  name: 'JSON',
                  class: '',
                },
                {
                  name: 'MongoDB/Mongoose',
                  class: '',
                },
                {
                  name: 'JIRA',
                  class: 'fab fa-jira',
                },
                {
                  name: 'Adobe Creative Cloud',
                  class: 'fab fa-adobe',
                },
              ],
            },
            {
              header: 'Other Skills',
              items: [
                {
                  name: 'Video Production',
                  class: 'fas fa-video',
                },
                {
                  name: 'Social Media Strategy',
                  class: 'fas fa-comments',
                },
              ],
            },
          ],
        },
        {
          header: 'Work Experience',
          workplaces: [
            {
              header: 'Net eSolutions (NETE)',
              title: 'Web Developer',
              dates: 'June 2018 - Present',
              duties: [
                'Maintain web content for large National Institute of Environmental Health Sciences (NIEHS) websites',
                'Update web content using Precussion Rhythmyx CMS',
                'Collaborate with web design and back-end development teams',
                'Create graphics for web and video content using Adobe applications',
                'Ensure Section 508 compliance for web content',
                'Lead video workshops for NIEHS communications staff',
                'Produce webcasts of meetings and scientific lectures',
              ],
            },
            {
              header: 'Elon University',
              title:
                'Coordinating Producer, Maroon Sports; Director of Video Production for Athletics',
              dates: 'November 2014 - June 2018',
              duties: [
                'Mentor students in live sports production',
                'Oversee video production and content for 17 Division I sports',
                'Manage video production budget',
                'Serve on technology committee during construction of new basketball arena',
                'Conceptualize and create video content to promote fan engagement',
              ],
            },
            {
              header: 'High Point University',
              title: 'Athletics Multimedia Coordinator',
              dates: 'February 2012 - November 2014',
              duties: [
                'Oversee video production for 16 Division I sports',
                'Expanded student opportunities in live video production',
                'Increased production quality, viewership, and engagement with athletics video content',
              ],
            },
            {
              header: 'Cleveland Browns',
              title: 'Content & Production Intern',
              dates: 'May 2011 - February 2012',
              duties: [
                'Produced feature videos relating to team’s on and off the field efforts',
                'Assisted in production of Emmy-nominated “Browns Insider” pregame show',
              ],
            },
          ],
        },
        {
          header: 'Education',
          schools: [
            {
              header: 'Thinkful',
              degree: 'Full Stack Web Development Program',
              year: 'June 2018',
            },
            {
              header: 'Loyola University Maryland',
              degree: 'Emerging Media',
              year: 'December 2017',
            },
            {
              header: 'Ball State University',
              degree: 'Telecommunications - Production',
              year: 'May 2011',
            },
          ],
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped lang="scss">
@import 'main.scss';

.resume {
  padding-top: 20vh;
  width: 85%;
  margin: 0 auto;
  h1 {
    text-align: center;
  }

  &--section {
    div:nth-child(odd) {
      background-color: $gray1;
    }

    div:nth-child(even) {
      background-color: $gray2;
    }

    &--skills {
    position: relative;
    mix-blend-mode: multiply;
      ul {
        padding: 0;
        text-align: center;
        color: rgba($color: $green, $alpha: 1);
      }
      li {
        list-style: none;
        display: inline-block;
        padding: 1vh 3vw;

        i {
          font-size: 4vw;
        }
      }
      &--header {
          position: absolute;
          color: rgba($color: white, $alpha: 0.5);
          filter: blur(1px);
          font-size: 5vw;
          width: 100%;
          bottom: -10vh;
          z-index: -1;
          

      }
    }
  }
}
</style>
