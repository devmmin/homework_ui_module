<template>
  <div class="card row">
    <div class="card-img">
      <a class="card-img-link">
        <img alt="card_image" src="../assets/logo.png" />
      </a>
    </div>
    <div class="card-content">
      <div class="card-info">
        <a class="card-label">{{ label }}</a>
        <a class="card-title line-clamp-3">{{ title }}</a>
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
        <div class="card-rating-comment" v-if="comment">&nbsp;| {{ comment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CardMixin from "../mixins/CardMixin";

export default {
  name: "CardItemRow",
  mixins: [CardMixin],
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/card.scss";
</style>
