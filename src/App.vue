<template>
  <div id="app">
    <h1>UI 모듈 제작</h1>
    <section class="card-vertical">
      <h2>과제 1. 카드 UI - 세로형</h2>
      <ul>
        <li v-for="(card, index) in cardItemList" :key="index">
          <CardItem
            :label="card.label"
            :title="card.title"
            :hilight="card.Hilight"
            :crossOut="card.crossOut"
            :useRating="card.useRating"
            :rating="card.rating"
            :comment="card.comment"
          />
        </li>
      </ul>
    </section>
    <br />
    <section class="card-horizontal">
      <h2>과제 1. 카드 UI - 가로형</h2>
      <ul>
        <li v-for="(card, index) in cardItemRowList" :key="index">
          <CardItemRow
            :label="card.label"
            :title="card.title"
            :useRating="card.useRating"
            :rating="card.rating"
            :comment="card.comment"
          />
        </li>
      </ul>
    </section>
    <br />
    <section class="textarea-list">
      <h2>과제 2. 입력 폼 UI</h2>
      <ul>
        <li>
          <InputForm initText="초기값이 있을수 있습니다" :maxLength="500"></InputForm>
        </li>
        <li>
          <InputForm></InputForm>
        </li>
        <li>
          <InputForm disabled></InputForm>
        </li>
        <li>
          <InputForm initText="읽기전용 입니다" readonly></InputForm>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import CardItem from "./components/CardItem.vue";
import InputForm from "./components/InputForm.vue";
import CardItemRow from "./components/CardItemRow.vue";

export default {
  name: "App",
  components: {
    CardItem,
    CardItemRow,
    InputForm,
  },
  data() {
    return {
      cardItemList: [
        {
          label: "Card Label",
          title: "Card Title인데용",
          hilight: "Hilight",
          crossOut: "Cross Out",
          useRating: true,
          rating: 5,
          comment: "Lorem ipsum dolor sit amet blur blur blur blur blur blur",
        },
        {
          label: "Card Label",
          title:
            "Card Title인데용 그러신데용 맞는데용 그런데용 인데용 그러신데용 맞는데용 그런데용 인데용",
          hilight: "Hilight",
          crossOut: "Cross Out",
          useRating: true,
          rating: 0,
          comment: "",
        },
        {
          label: "Card Label",
          title: "Card Title인데용 그러신데용 맞는데용 그런데용 인데용 그러신데용",
          hilight: "Hilight",
          crossOut: "Cross Out",
          useRating: false,
        },
        {
          label: "Card Label",
          title: "Card Title인데용 그러신데용 맞는데용 그런데용 인데용 그러신데용",
          hilight: "Hilight",
          crossOut: "Cross Out",
          useRating: true,
          rating: 4,
        },
        {
          label: "Card Label",
          title: "Card Title인데용 그러신데용 맞는데용 그런데용 인데용 그러신데용",
          hilight: "Hilight",
          crossOut: "Cross Out",
          useRating: true,
          rating: 4,
          comment: "",
        },
        {
          label: "Card Label",
          title: "Card Title인데용 그러신데용 맞는데용 그런데용 인데용 그러신데용",
          hilight: "Hilight",
          crossOut: "Cross Out",
          useRating: false,
        },
      ],
      cardItemRowList: [
        {
          label: "Card Label",
          title:
            "Card Title인데용 그런데용 맞는데용 그러신데용 그런데용 맞는데용 그러신데용 그런데용 맞는데용 그러신데용 그런데용 맞는데용 그러신데용 그런데용 맞는데용 그러신데용 그런데용 맞는데용 그러신데용",
          useRating: true,
          rating: 5,
          comment: "John Doe",
        },
        {
          label: "Card Label",
          title: "Card Title인데용 그런데용 맞는데용 그러신데용 그런데용 맞는데용 그러신데용",
          useRating: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#app {
  font-family: "Nanum Barun Gothic", sans-serif;
  font-size: 12px;
  padding: 30px;
  h1 {
    width: 1056px;
    margin: 0 auto;
  }
  section {
    margin: 0 auto;
  }
  .card-vertical {
    width: 1056px;
    @media (max-width: 720px) {
      width: 100%;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 20%;
        padding-left: 10px;
        padding-top: 10px;
        @media (max-width: 720px) {
          width: 50%;
        }
      }
    }
  }
  .card-horizontal {
    width: 1056px;
    @media (max-width: 720px) {
      width: 100%;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        padding-left: 10px;
        padding-top: 10px;
        @media (max-width: 720px) {
          width: 100%;
        }
      }
    }
  }
  .textarea-list {
    width: 1056px;
    @media (max-width: 720px) {
      width: 100%;
    }
    ul {
      display: flex;
      flex-direction: column;
      li {
        padding: 15px;
      }
    }
  }
}
</style>
