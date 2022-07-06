<template>
  <div class="card">
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
.card {
  display: flex;
  background-color: #f8f9fb;
  border: 1px solid $common-color-light-gray;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 hsl(0deg 0% 86% / 30%);

  .card-img {
    min-width: 40%;

    .card-img-link {
      display: flex;
      img {
        width: 100%;
        height: auto;
        border-top-right-radius: initial;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background-color: orangered;
      }
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-info {
      padding: 0 20px;
      min-height: 85px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      a {
        display: block;
      }
    }

    .card-label {
      padding: 15px 0;
      font-size: 14px;
      font-weight: bold;
      color: $font-color-black;
    }

    .card-title {
      font-size: 14px;
      color: $font-color-gray;
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

    .card-rating {
      height: 55px;
      padding: 0 20px;
      border-top: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;

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
}
</style>
