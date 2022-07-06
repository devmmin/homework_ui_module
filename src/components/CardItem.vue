<template>
  <div class="card">
    <div class="card-img">
      <a class="card-img-link">
        <img alt="card_image" src="../assets/logo.png" />
      </a>
    </div>
    <div class="card-info">
      <a class="card-label">{{ label }}</a>
      <a class="card-title">{{ title }}</a>
      <div class="card-hilight">
        <span>{{ hilight }}</span>
        <s class="card-cross-out">{{ crossOut }}</s>
      </div>
    </div>
    <div class="card-rating" v-if="useRating">
      <div class="card-rating-circles">
        <div
          class="card-rating-circle"
          :class="{ active: i <= rating }"
          v-for="i in ratingTotal"
          :key="i"
        ></div>
      </div>
      <div class="card-rating-comment" v-if="comment">{{ comment }}</div>
    </div>
  </div>
</template>

<script>
import CardMixin from "../mixins/CardMixin";

export default {
  name: "CardItem",
  mixins: [CardMixin],
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/card.scss";
</style>
