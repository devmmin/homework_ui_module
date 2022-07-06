<template>
  <div class="card">
    <div class="card-img">
      <a class="card-img-link">
        <img alt="card_image" src="../assets/logo.png" />
      </a>
    </div>
    <div class="card-info">
      <a class="card-label">{{ label }}</a>
      <a class="card-title line-clamp-2">{{ title }}</a>
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
.card {
  border: 1px solid $common-color-light-gray;
  background-color: #f8f9fb;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);

  .card-img {
    .card-img-link {
      display: flex;

      img {
        width: 100%;
        height: auto;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background-color: orangered;
      }
    }
  }

  .card-info {
    padding: 8px 10px;
    min-height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-label {
      color: $font-color-light-gray;
    }

    a {
      display: block;
    }

    .card-title {
      font-size: 14px;
      color: $font-color-black;
      min-height: 40px;
    }

    .card-hilight {
      color: orangered;

      .card-cross-out {
        padding-left: 5px;
        font-size: 10px;
        color: $font-color-light-gray;
      }
    }
  }

  .card-rating {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 55px;
    padding: 0 10px;
    border-top: 1px solid $common-color-light-gray;

    .card-rating-circle {
      margin: 2px;
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: $common-color-light-gray;

      &.active {
        background-color: #ffc801;
      }
    }

    .card-rating-comment {
      color: $font-color-gray;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
