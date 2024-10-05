<template>
  <div class="horizontal-grid">
    <div class="grid-animation-reverse" :class="gridAnimation">
      <div class="grid-animation">
        <div class="horizontal-grid-1">
          <div v-for="element in grid1" :key="element.id" class="elements">
            {{ element.name }}
          </div>
          <div v-for="element in grid1" :key="element.id" class="elements">
            {{ element.name }}
          </div>
          <div v-for="element in grid1" :key="element.id" class="elements">
            {{ element.name }}
          </div>
        </div>
        <div class="horizontal-grid-2">
          <div v-for="element in grid2" :key="element.id" class="elements">
            {{ element.name }}
          </div>
          <div v-for="element in grid2" :key="element.id" class="elements">
            {{ element.name }}
          </div>
          <div v-for="element in grid2" :key="element.id" class="elements">
            {{ element.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grid1: [
        {
          id: 1,
          name: "element1",
        },
        {
          id: 2,
          name: "element2",
        },
        {
          id: 3,
          name: "element3",
        },
        {
          id: 4,
          name: "element4",
        },
        {
          id: 5,
          name: "element5",
        },
      ],
      grid2: [
        {
          id: 1,
          name: "element1",
        },
        {
          id: 2,
          name: "element2",
        },
        {
          id: 3,
          name: "element3",
        },
        {
          id: 4,
          name: "element4",
        },
        {
          id: 5,
          name: "element5",
        },
      ],
      lastScrollY: 0,
      gridAnimation: "",
    };
  },
  methods: {
    scrollHandler() {
      let diff = window.scrollY - this.lastScrollY;
      //scroll up
      if (diff < 0) {
        this.gridAnimation = "grid-animation-reverse-running";
      } else {
        this.gridAnimation = "";
      }
      this.lastScrollY = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style scoped>
.horizontal-grid {
  overflow-x: hidden;
  overflow-y: auto;
  height: 500px;
}
.horizontal-grid-1,
.horizontal-grid-2 {
  display: flex;
}
.horizontal-grid-1 {
  margin-left: 160px;
}
.elements {
  border: 1px solid #e2e2e2;
  border-radius: 16px;
  padding: 16px;
  margin: 32px 0 0 32px;
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@keyframes scroll {
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(-1760px);
  }
}
.grid-animation {
  animation: scroll 10s linear infinite;
}
@keyframes scroll-reverse {
  0% {
    transform: translate(-1760px);
  }
  100% {
    transform: translate(0px);
  }
}
.grid-animation-reverse {
  animation: scroll-reverse 5s linear infinite;
  animation-play-state: paused;
}
.grid-animation-reverse-running {
  animation-play-state: running;
}
.grid-animation:hover,
.grid-animation-reverse:hover {
  animation-play-state: paused;
}
.elements:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2) !important;
  transform: scale(0.97);
}
</style>