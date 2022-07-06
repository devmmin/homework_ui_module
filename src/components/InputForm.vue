<template>
  <form class="form">
    <div class="editor">
      <textarea
        class="editor-textarea"
        placeholder="주문 요청사항을 입력해주세요"
        aria-label="textarea"
        v-model="inputText"
        :maxlength="maxLength"
        :readonly="readonly"
        :disabled="disabled"
      ></textarea>
      <span class="editor-max-length">{{ maxLength - inputText.length }}</span>
    </div>
    <div class="button-box" v-if="!disabled && !readonly">
      <button type="submit" class="button" :disabled="initText === inputText">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "InputForm",
  data() {
    return {
      inputText: "",
    };
  },
  props: {
    initText: {
      type: String,
      default: "",
      required: false,
    },
    maxLength: {
      type: Number,
      default: 30,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  created() {
    if (this.initText) {
      this.inputText = this.initText;
    }
  },
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  .editor {
    display: inline-block;
    width: 100%;
    height: 80px;
    overflow: hidden;
    position: relative;
    .editor-textarea {
      resize: none;
      width: 100%;
      height: 100%;
      padding: 12px;
      border-radius: 2px;
      border: 1px solid $border-color-light-gray;
      &:focus {
        border: 1px solid skyblue;
      }
      &:disabled {
        &::placeholder {
          color: orangered;
        }
      }
    }
    .editor-max-length {
      color: $font-color-light-gray;
      position: absolute;
      bottom: 4px;
      right: 8px;
    }
  }
  .button-box {
    width: 75px;
    margin-left: 5px;
    .button {
      cursor: pointer;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      background: white;
      border: 1px solid $border-color-light-gray;
      color: skyblue;
      &:disabled {
        color: $common-color-light-gray;
        background: $btn-color-disabled;
        cursor: default;
      }
    }
  }
}
</style>
