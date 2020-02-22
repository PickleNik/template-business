<template>
  <v-app id="app" class="white">

    <v-navigation-drawer app right :value="menu" class="hidden-md-and-up z2">
      <v-layout column>
        <v-btn round class="my-2" flat @click="menu = false"><v-icon>close</v-icon></v-btn>
        <v-btn round class="my-2" flat @click="menu = false" v-scroll-to="{el:'#about', offset: -50}">About</v-btn>
        <v-btn round class="my-2" flat @click="menu = false" v-scroll-to="{el:'#soft', offset: -50}">Software</v-btn>
        <v-btn round class="my-2" flat @click="menu = false" v-scroll-to="{el:'#team', offset: -50}">Team</v-btn>
        <v-btn round class="my-2" flat @click="menu = false" v-scroll-to="{el:'#contacts', offset: -50}">Contact us</v-btn>
      </v-layout>
    </v-navigation-drawer>

    <v-toolbar app flat class="z2">
      <img height="48" v-scroll-to="'#home'" src="./assets/logo.png" class="fadeInLeft" />
      <v-spacer></v-spacer>
        <v-btn round class="bounceInDown my-2 mx-0 hidden-sm-and-down link link--kukuri" flat v-scroll-to="{el:'#about', offset: 0}" style="animation-delay: 0.5s"><b>About</b></v-btn>
        <v-btn round class="bounceInDown my-2 mx-0 hidden-sm-and-down link link--kukuri" flat v-scroll-to="{el:'#soft', offset: -50}" style="animation-delay: 0.55s"><b>Software</b></v-btn>
        <v-btn round class="bounceInDown my-2 mx-0 hidden-sm-and-down link link--kukuri" flat v-scroll-to="{el:'#team', offset: -50}" style="animation-delay: 0.6s"><b>Team</b></v-btn>
        <v-btn round class="bounceInDown my-2 mx-0 hidden-sm-and-down link link--kukuri" flat v-scroll-to="{el:'#contacts', offset: -50}" style="animation-delay: 0.65s"><b>Contact us</b></v-btn>
        <v-btn icon class="hidden-md-and-up" @click.stop="menu = !menu"><v-icon>menu</v-icon></v-btn>
    </v-toolbar>

    <vue-particles style="position: fixed; width: 100%; height: 100%; z-index: 0;"
    class="hidden-sm-and-down"
    color="#bac5f4"
    :particleOpacity="0.5"
    :particlesNumber="30"
    shapeType="circle"
    :particleSize="10"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="false"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="1"
    :hoverEffect="true"
    hoverMode="repulse"
    :clickEffect="false"
    >
  </vue-particles>
    <v-container fluid class="pa-0">
      <v-layout column>
        <v-flex id="home" class="height white text-xs-center" style="background: url('https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80') center no-repeat; background-size: cover;" >
          <h1 class="mx-auto hidden-xs-only text-pop-up-top" style="color: #666; position: relative; top: 50vh; transform: translateY( -50% );">Software Development</h1>
          <h1 class="mx-auto hidden-sm-and-up" style="color: #666; position: relative; top: 50vh; transform: translateY( -50% );">Software Development</h1>
          <v-btn large flat fab color="grey darken-4" style="position: absolute; top: 90vh; left: 50%; transform: translateX(-50%)" v-scroll-to="'#about'"><v-icon large class="bounceInUp">keyboard_arrow_down</v-icon></v-btn>
        </v-flex>
        <v-flex id="about" class="text-xs-center ">
          <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg6 offset-lg3 class="py-5 px-3 white z1">
            <v-flex xs12 md8 offset-md2 class="my-5 pb-5">
              <v-img data-aos="zoom-in-up" src="../static/assets/bg2.png">
                <v-layout column style="height: 100%;">
                  <h1 class="white--text shadow mx-auto my-auto">About</h1>
                </v-layout>
              </v-img>
            </v-flex>
            <p data-aos="zoom-in-up"style="text-align: justify; ">
              &emsp;&emsp;Savvy Tech LLC is a Software development startup based out of College Park, MD. Founded in 2017, Savvy Tech is determined to bring innovative tech solutions from ideas to realities. Over the past year the company has gone from a 4 person initiative to a 16 person operation. With the capacity to service clients and execute our own objectives, our flagship software project – “Project One” – stands at the cusp of fashion and technology. Project One uses facial recognition, machine learning, and 3D modeling to provide every user with a personalized shopping experience.
            </p>
          </v-flex>
        </v-flex>
        <!-- <v-flex id="marketing" class="text-xs-center height">
          <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2 class="py-5 px-3 white z1">
            <h1 class="grey--text my-4">Marketing</h1>
            <v-layout row wrap id="marketing-text">
              <v-flex xs12 md6 class=" my-auto px-3 hidden-sm-and-down">
                <v-img contain src="https://www.creative-tim.com/assets/ira-design/img/bg4-8146ff8d1d78146278ef70ee2d39c6416be6a1f7770aa6d1dc091abd07fb4946.png" alt="Couldn't upload an image"></v-img>
              </v-flex>
              <v-flex xs12 md6><p style="text-align: left;">
                <b>Consulting</b>
                <v-divider></v-divider>
                Offering hourly services over-the-phone or in-person for:
                <br>•    Facebook set up, optimization, development strategies
                <br>•    Instagram set up, optimization, development strategies
                <br>•    Social media growth strategies
                <br>•    Website development and growth strategies
                <br>•    Search Engine Optimization
                <br><br>
              </p></v-flex>
              <v-spacer></v-spacer>
              <v-flex xs12 md6><p style="text-align: left; ">
                <b>Digital Advertising</b>
                <v-divider></v-divider>
                  Social Media:
                  <br>•    Facebook & Instagram ad campaigns
                  <br>•    Brand awareness, traffic, sales conversion campaigns
                  <br>•    Audience discovery and detailed re-targeting
                  <br>Google Ads:
                  <br>•    Display and search advertising
                  <br>•    Maximizing your cost-per-click (CPC)
                  <br>•    Expanding advertising reach`
              </p></v-flex>
              <v-flex xs12 md6 class="my-auto px-3">
                <v-img contain src="https://www.creative-tim.com/assets/ira-design/img/bg6-fa10a2279acd0d6799697051a068f968a7962600bd67fa51864b6f750376056a.png" alt="Couldn't upload an image"></v-img>
              </v-flex>
              <p class="mt-5" style="text-align: center; ">We offer 3 main packages:</p>
                <v-flex xs12 class="hidden-sm-and-down">
                <v-data-table style="border: 1px solid #eee; border-radius: 3em;" hide-actions :headers="headers" :items="items" >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-left"><span style="font-size: 1.5em;">{{ props.item.name }}</span></td>
                    <td><v-icon :color="props.item.basic ? 'green' : 'red' ">{{ props.item.basic ? 'check' : 'close' }}</v-icon></td>
                    <td><v-icon :color="props.item.silver ? 'green' : 'red' ">{{ props.item.silver ? 'check' : 'close' }}</v-icon></td>
                    <td><v-icon :color="props.item.gold ? 'green' : 'red' ">{{ props.item.gold ? 'check' : 'close' }}</v-icon></td>
                  </template>
                </v-data-table>
                </v-flex>
                <v-list class="hidden-md-and-up" style="min-width: 100%; font-size: 1.2em;">
                  <v-list-group class="round" v-model="group1" no-action >
                    <v-list-tile slot="activator">
                      <v-list-tile-content>
                        <v-list-tile-title class="grey--text font-size: 2em;">Basic</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <div v-for="item in items" :key="item.name" class="px-2 mt-3 text-xs-left">
                      <v-icon :color="item.basic ? 'green' : 'red' ">{{ item.basic ? 'check' : 'close' }}</v-icon><span style="font-size: 0.8em;"> {{ item.name }}</span>
                      <v-divider class="my-3"></v-divider>
                    </div>
                  </v-list-group>

                  <v-list-group class="round" v-model="group2" no-action >
                    <v-list-tile slot="activator">
                      <v-list-tile-content>
                        <v-list-tile-title class="blue-grey--text font-size: 2em;">Silver</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <div v-for="item in items" :key="item.name" class="px-2 mt-3 text-xs-left">
                      <v-icon right :color="item.silver ? 'green' : 'red' ">{{ item.silver ? 'check' : 'close' }}</v-icon> <span style="font-size: 0.8em;">{{ item.name }}</span>
                      <v-divider class="my-3"></v-divider>
                    </div>
                  </v-list-group>

                  <v-list-group class="round" v-model="group3" no-action >
                    <v-list-tile slot="activator">
                      <v-list-tile-content>
                        <v-list-tile-title class="amber--text font-size: 2em;">Gold</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <div v-for="item in items" :key="item.name" class="px-2 mt-3 text-xs-left">
                      <v-icon right :color="item.gold ? 'green' : 'red' ">{{ item.gold ? 'check' : 'close' }}</v-icon> <span style="font-size: 0.8em;">{{ item.name }}</span>
                      <v-divider class="my-3"></v-divider>
                    </div>
                  </v-list-group>
                </v-list>
              </v-layout>
              <br>
              <p style="text-align: center; "><a v-scroll-to="{el:'#contacts', offset: 0}" class="pink--text">Contact us</a> for a free consultation!</p>
            </v-flex>
        </v-flex> -->
        <v-flex id="soft" class="text-xs-center height white z1">
          <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2 class="py-5 px-3 white z1">
            <v-flex xs12 md6 offset-md3 class="my-5">
              <v-img data-aos="zoom-in-up" src="../static/assets/bg6.png">
                <v-layout column style="height: 100%;">
                  <h1 class="white--text shadow mx-auto my-auto">Software</h1>
                </v-layout>
              </v-img>
            </v-flex>
              <v-layout row wrap class="mt-5 pt-5">
                <v-flex xs12 sm6 class="pr-3 my-auto">
                <p data-aos="zoom-in-right" style="text-align: justify; ">
                  <b>Project One</b> [Fashion-Tech]
                  <v-divider></v-divider>
                  By allowing you to try on clothing from your favorite designers without the hassle of ordering and shipping, we’re able to provide our users’ an international experience in-house. Our network of independent designers and fans will foster a social environment that gives up and coming designers the opportunity to share their work and grow.
                  Currently in the process of finishing our minimum viable product (MVP), pictures from NYFW2018 coming soon!
                </p>
                </v-flex>
                <v-flex xs12 sm6 class="mx-auto">
                <v-flex>
                  <!-- <iframe class="hidden-xs-only" src="https://enly-app.firebaseapp.com/" width="375" height="667" frameborder="0"></iframe> -->
                  <v-img data-aos="zoom-in-left" class="round mx-auto mt-5" style="max-height: 60vh;" contain src="../static/assets/mockup.png" alt="error"></v-img>
                </v-flex>
                </v-flex>
              </v-layout>
              <!-- <v-layout row wrap>
                <v-flex xs12 class="mt-5"><p style="text-align: justify; ">
                  <br><br><b>Bevvy USA</b> [Political Activism]
                  <v-divider></v-divider>
                  We’ve partnered with the Bevvy USA LLC team to bring direct SMS messaging to political campaigns. By giving politicians the ability to easily reach their constituents we encourage and empower the democratic process that our nation was built upon.
                </p></v-flex>
              </v-layout> -->
          </v-flex>
        </v-flex>
        <v-flex id="team" class="text-xs-center height white z1">
          <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2 class="py-5 px-3 white z1">
            <v-flex xs12 md6 offset-md3 class="my-5 pb-5">
              <v-img data-aos="zoom-in-up" src="../static/assets/bg15.png">
                <v-layout column style="height: 100%;">
                  <h1 class="white--text shadow mx-auto my-auto">Team</h1>
                </v-layout>
              </v-img>
            </v-flex>
            <v-layout row wrap class="pt-5 mt-5 mb-5">
              <v-flex v-for="m in members.slice(0, 2)" :key="m.name" class="ma-2">
                <v-card data-aos="zoom-in" class="ma-2 grey lighten-4 round elevation-0" style="height: 25em;">
                  <v-avatar class="mt-3" size="200">
                    <img :src="m.img" alt="alt">
                  </v-avatar>
                  <v-card-text>
                    <h3>{{ m.name }}</h3>
                    <span>{{ m.title }}</span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn round flat color="pink" class="mx-auto" :href="m.linkedin">LinkedIn <v-icon>keyboard_arrow_right</v-icon></v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <br>
            <v-layout row wrap>
            <v-hover data-aos="zoom-in-up" v-for="m in members.slice(2,17)" :key="m.name" class="hidden-sm-and-down" style="cursor: pointer;">
              <v-card slot-scope="{ hover }" class="my-3 mx-auto px-2 elevation-0" style="height: 12em; width:12em;">
                <v-img class="slave grey lighten-2" :aspect-ratio="1/1" :src="m.img" >
                  <v-expand-transition>
                    <div v-if="hover" class="d-flex white v-card v-card--reveal" style="height: 100%;" >
                      <v-layout column class="pt-5">
                        <b class="pink--text">{{ m.name }}</b>
                        <span>{{ m.title }}</span>
                        <v-btn v-if="m.linkedin" icon flat color="pink" class="mx-auto" :href="m.linkedin"><v-icon>link</v-icon></v-btn>
                      </v-layout>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
            <v-card data-aos="zoom-in-up" v-for="m in members.slice(3,17)" :key="m.name" class="hidden-md-and-up grey lighten-4 mx-auto my-2 elevation-0" style="cursor: pointer; height: 11em; width: 11em;">
                <div class="py-3" style="height: 100%;" >
                  <v-layout column>
                    <v-avatar class="mx-auto" size="50">
                      <img :src="m.img" alt="alt">
                    </v-avatar>
                    <b class="pink--text">{{ m.name }}</b>
                    <span>{{ m.title }}</span>
                    <v-btn v-if="m.linkedin" icon flat color="pink" class="mx-auto" :href="m.linkedin"><v-icon>link</v-icon></v-btn>
                  </v-layout>
                </div>
            </v-card>
            </v-layout>
          </v-flex>
        </v-flex>
        <v-flex id="contacts" class="height text-xs-center white z1">
          <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2 class="py-5 px-3 white z1">
            <v-flex xs12 md6 offset-md3 class="mb-5 pb-5">
              <v-img data-aos="zoom-in-up" src="../static/assets/bg4.png">
                <v-layout column style="height: 100%;">
                  <h1 class="white--text shadow mx-auto my-auto">Contact Us</h1>
                </v-layout>
              </v-img>
            </v-flex>
            <p data-aos="zoom-in-down" style="text-align: justify; " class="mx-auto px-3">
            We want to hear from you! Fill out the form below to let us know what you’re thinking.
            </p>
            <form method="POST" action="https://formspree.io/tsavransky@savvytechcompany.com">
              <v-layout row wrap class="mb-5">
                <v-flex xs12 sm6 md6 class="px-3">
                  <v-text-field  label="First Name" name="First Name" box></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6 class="px-3">
                  <v-text-field  label="Last Name" name="Last Name" box></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6 class="px-3">
                  <v-text-field  label="Company Name" name="Company Name" prepend-inner-icon="group" box></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6 class="px-3">
                  <v-text-field  label="Email" name="Email" type="email" prepend-inner-icon="email" box></v-text-field>
                </v-flex>
                <v-flex xs12 class="px-3">
                  <v-select box name="Subject"
                    :items="['Project One', 'Software Dev Inquiries']"
                    label="Why are you reaching out?"
                  ></v-select>
                </v-flex>
                <v-flex xs12 class="px-3">
                  <v-textarea box label="Tell us more:" name="More"></v-textarea>
                </v-flex>
                <v-btn @click="sent = true" type="submit" round large class="mx-auto" color="grey lighten-3" v-if="!sent">Send</v-btn>
                <h1 v-if="sent" class="mx-auto pink--text">Thank You!</h1>
              </v-layout>
            </form>
            <v-divider></v-divider>
            <h2 class="grey--text my-4">Contact Info</h2>
            <v-chip class="pa-2" color="grey lighten-3">
              <v-icon left>phone</v-icon>
              <h2>1(301)-351-60-63</h2>
            </v-chip>
            <v-chip class="pa-2" color="grey lighten-3">
              <v-icon left>email</v-icon>
              <span>tsavransky@savvytechcompany.com</span>
            </v-chip>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Typed from 'typed.js'

export default {
  data () {
    return {
      typedOptions: ['Software Development'],
      group1: false,
      group2: false,
      group3: false,
      members: [
        { name: 'Thomas Savransky', title: 'CEO / Co-Founder', linkedin: 'https://www.linkedin.com/in/thomas-savransky/', img: 'https://media.licdn.com/dms/image/C5603AQE36vI9jyT9yQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=Vsd_KKVGW09bCFo949cclQvUnwpynN_sKk30icFRNfA' },
        // { name: 'Jacob Nelson', title: 'Co-Founder / Adviser', linkedin: 'link', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Igor Savchenko', title: 'Driver', linkedin: 'https://www.linkedin.com/in/igor-savchenko-43427b126/', img: 'https://media.licdn.com/dms/image/C4E03AQFiIxaH63BWRQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=kNXwEADr_bcOUvtsh2Gs3YfrYkaaJT_ZAFiaj5_H8C4' },
        { name: 'Nikita Krupin', title: 'Web Developer', linkedin: 'https://nikita-krupin.firebaseapp.com', img: 'https://nikita-krupin.firebaseapp.com/static/img/me.854c609.jpg' },
        { name: 'Richard McHorgh', title: 'App Developer', linkedin: 'https://www.linkedin.com/in/richard-mchorgh-37360b125/', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Valentyn Bolotin', title: 'Big Gay', linkedin: '', img: 'https://scontent-sjc3-1.cdninstagram.com/vp/1d8bbc099d5eb29ce38526d33ec04505/5D164059/t51.2885-19/s150x150/50055471_619994218422235_7211194968373723136_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com' },
        { name: 'Hayden', title: '3D Development', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Matt', title: '3D Development', linkedin: 'https://www.linkedin.com/in/matthew-wong-48598b13a/', img: 'https://media.licdn.com/dms/image/C4D03AQGUoQH3LVgG7Q/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=F8OAgLYuvlTuUUXHQS-2W-dJQKrMA-OzzYieeSDIeis' },
        { name: 'Roman', title: '3D Development', linkedin: 'https://www.linkedin.com/in/roman-grigoryev-60901b152/', img: 'https://media.licdn.com/dms/image/C5603AQEbmm0tTprCJw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=oJ8xWUkMmgqkXur67iiMHfT-6704g8yrP_Jr_LaNk-I' },
        { name: 'Kirill', title: '3D Development', linkedin: 'https://www.linkedin.com/in/kirill-stakhovsky-102a6a157/', img: 'https://media.licdn.com/dms/image/C4D03AQFLaH-u6NEBiA/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=HYE7ODNqap1BEjzkFW4l_PVcBgsnWu_WLqYs6ZKc6so' },
        { name: 'Arthur', title: 'Business Development', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Daniel Z', title: 'Business Development', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Joseph', title: 'Business Development', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Jason Horbourt', title: 'Research', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Daniel Alborta', title: 'Research', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Nameer', title: 'Research', linkedin: 'https://www.linkedin.com/in/nameer-qureshi-13b2b393/', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Faraz Daneshpour', title: 'Research', linkedin: 'https://www.linkedin.com/in/faraz-daneshpour-21739793/', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' },
        { name: 'Wei Song', title: 'Visual Arts', linkedin: '', img: 'https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png' }
      ],
      onboarding: 0,
      menu: false,
      sent: false,
      headers: [
        { text: 'Marketing Services', sortable: false, align: 'center', class: 'headline grey--text' },
        { text: 'Basic', sortable: false, align: 'center', class: 'headline grey--text' },
        { text: 'Silver', sortable: false, align: 'center', class: 'headline blue-grey--text' },
        { text: 'Gold', sortable: false, align: 'center', class: 'headline amber--text' }
      ],
      items: [
        {
          name: 'Website Audit & In Depth Review',
          basic: true,
          silver: true,
          gold: true
        },
        {
          name: 'Google AdWords Recommendation',
          basic: true,
          silver: true,
          gold: true
        },
        {
          name: 'Monthly Progress Report & Review Session',
          basic: true,
          silver: true,
          gold: true
        },
        {
          name: 'Keyword Research, Recommendations, & Optimization',
          basic: true,
          silver: true,
          gold: true
        },
        {
          name: 'Backlinking Recommendations & Optimization',
          basic: true,
          silver: true,
          gold: true
        },
        {
          name: 'AdWords Campaign & Strategy Recommendations',
          basic: false,
          silver: true,
          gold: true
        },
        {
          name: 'Bimonthly Comprehensive Competitor Analysis',
          basic: false,
          silver: true,
          gold: true
        },
        {
          name: 'Social Media Strategy & Content Creation',
          basic: false,
          silver: false,
          gold: true
        },
        {
          name: 'Web Content Creation with Tag Optimization',
          basic: false,
          silver: false,
          gold: true
        }
      ]
    }
  },
  mounted () {
    new Typed('#greeting', {// eslint-disable-line no-new
      strings: this.typedOptions,
      loop: true,
      typeSpeed: 20,
      backSpeed: 10,
      startDelay: 2000,
      backDelay: 2000,
      smartBackspace: true,
      showCursor: false
    })
  },
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 === team
        ? 0
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 < 0
        ? this.team - 1
        : this.onboarding - 1
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');
*{
  font-family: 'Roboto Mono', sans-serif;
}
#app{
  background: white;
}
.shadow{
  text-shadow: 0 0 1em #98a3d2, 0 0 0.2em #98a3d2;
}
.v-list{
  border-radius: 2em !important;
}
.v-list__tile{
  border-radius: 2em !important;
}
.v-list__group{
  border-radius: 2em !important;
}
.v-card{
  border-radius: 50% !important;
}
.v-card--reveal {
  align-items: center;
  opacity: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  border-radius: 0 !important;
  transition-property: none;
}
.v-card--reveal:hover{
  opacity: 0.8;
}
.slave{
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-property: all;
}
.slave:hover{
  box-shadow: 0 0 5em -0.5em #bac5f4;
  transform: scale(1.2);
}
table.v-table{
  border-radius: 2em !important;
  font-size: 1.5em;
}
.v-toolbar__content {
  padding-left: 5px;
}
@media only screen and (min-width: 960px) {
  .z1 {
    z-index: 10 !important;
    position:sticky;
  }
  .z2 {
    background: transparent !important;
    z-index: 20 !important;
  }
  p{
    font-size: 1.5em;
  }
  h1{
    font-size: 3em;
  }
}
@media only screen and (max-width: 960px) {
  .z1 {

  }
  .z2 {
    background: white !important;
  }
  p{
    font-size: 1em;
  }
  h1{
    font-size: 2.5em;
  }
}
.round{
  border-radius: 2em !important;
}
.height {
  min-height: 100vh !important;
}

::-webkit-scrollbar{
  width: 0;
}
::selection{
  background:transparent;
  color:#eee;
}
.member {
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
}
.member:hover{
  box-shadow: 0 0 8em -1em #bbb;
}
.video {
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); /*ios 7 border-radius-bug */
  -webkit-transform: rotate(0.000001deg); /*mac os 10.6 safari 5 border-radius-bug */
  -webkit-border-radius: 3em;
  -moz-border-radius: 3em;
  border-radius: 3em;
  overflow: hidden;
  z-index: 9;
	position: relative;
}
.video iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.link {
  text-decoration: none;
  position: relative;
}
/* Kukuri */
.link--kukuri {
  text-transform: uppercase;
  font-weight: 900;
  overflow: hidden;
  line-height: 0.75;
}

.link--kukuri:hover {
  color: #bac5f4 !important;
}

.link--kukuri::after {
  content: '';
  position: absolute;
  height: 6px;
  width: 100%;
  top: 50%;
  margin-top: -4px;
  right: 0;
  background: #bac5f4 !important;
  border-radius:1em;
  -webkit-transform: translate3d(-111%,0,0);
  transform: translate3d(-111%,0,0);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform .3s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}

.link--kukuri:hover::after {
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}
.link--kukuri:hover::before {
  width: 100%;
}
.text-pop-up-top{-webkit-animation:tracking-in-expand .7s 1s both;animation:tracking-in-expand .7s 1s both}
@keyframes tracking-in-expand{0%{letter-spacing:-.5em;opacity:0}40%{opacity:.6}100%{opacity:1}}@keyframes tracking-in-expand{0%{letter-spacing:-.5em;opacity:0}40%{opacity:.6}100%{opacity:1}}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }
}

.fadeInLeft {
  opacity: 0;
  animation: fadeInLeft 1s ease 1 forwards;
}
@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
            transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
            transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
            transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
            transform: translate3d(0, 5px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
            transform: none;
  }
}

.bounceInDown{
  opacity: 0;
  animation: bounceInDown 1s ease 1 forwards;
}
@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
            transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
            transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
            transform: translate3d(0, -5px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
.bounceInUp {
  opacity: 0;
  animation: bounceInUp 1s 2s ease 1 forwards;
}
</style>
