<template>
  <div class="container-fluid home">
    <div class="front-container">
      <h1 class="main-title">
        Welcome to <brand-name style="color: #ffba5e" />
      </h1>

      <event-countdown
        :title="$store.getters.nextMilestone.name"
        :time="$store.getters.nextMilestone.timeRemaining"
      />

      <div class="has-text-centered">
        <!-- <h2>Wanna join the fourth edition?</h2> -->
        <router-link
          class="button svs-evolving-gradient is-large"
          style="text-decoration: none"
          to="/main-event/server-application"
        >
          Apply here!
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'}
</script>

<style scoped lang='scss'>


.home {

  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-content: center;
  justify-content: center;

  .front-container {
    /* align-self: flex; */
  }

  h1 {
    margin-top: 30px;
    text-align: center;
  }

  .main-title {
    text-transform: uppercase;
    font-family: "Montserrat", "Jost", sans-serif;
    font-size: 3em;
    &, * { font-weight: 500 !important; }
    letter-spacing: 5px;
    text-shadow: 3px 4px 0px rgb(255, 186, 94, 0.2);
  }

}


</style>
