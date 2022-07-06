const CardMixin = {
  data() {
    return {
      ratingTotal: 5,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    hilight: {
      type: String,
      default: "Hilight",
      required: false,
    },
    crossOut: {
      type: String,
      default: "Cross Out",
      required: false,
    },
    useRating: {
      type: Boolean,
      default: false,
      required: false,
    },
    rating: {
      type: Number,
      default: 5,
      required: false,
    },
    comment: {
      type: String,
      default: "",
      required: false,
    },
  },
};

export default CardMixin;
