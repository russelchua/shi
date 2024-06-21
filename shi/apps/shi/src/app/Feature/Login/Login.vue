<script lang="ts">
// defineProps<{}>()

export interface ReaderInfo {
  label: string;
  value: string;
  index: number;
}

export default {
  name: 'Login',
  data() {
    return {
      options: [
        { label: '帳號1', value: '帳號1', index: 0 },
        { label: '帳號2', value: '帳號2', index: 1 },
      ] as ReaderInfo[],
      selectedOption: { label: '帳號1', value: '1', index: 0 },
      ppwwdd: '', // 壓碼作業時需要從UI上打入的密碼
      is2ndGReader: false,
      isLogin: false,
      isShowTestMessage: false,
    };
  },
  methods: {
    login(ppwwdd: string, readerIndex: number) {
      this.isShowTestMessage = true;
      console.log(ppwwdd, readerIndex);
    },
  },
};
</script>

<template>
  <div class="contentContainer">
    <div class="content flex justify-content-between">
      <div
        class="left-container flex flex-column"
      >
        <div class="dropdownContainer">
          <Dropdown
            v-model="selectedOption"
            :options="options"
            optionLabel="label"
            placeholder="請選擇帳號(必填)"
            class="w-full md:w-14rem"
          />
        </div>

        <!-- [TOOP] 密碼的mask要變很大 -->
        <template v-if="!is2ndGReader">
          <div class="ppwwddContainer">
            <Password
              v-model="ppwwdd"
              :feedback="false"
              toggleMask
            />
          </div>
        </template>

        <div class="loginButtonContainer">
          <PButton
            class="loginButton p-button-rounded"
            type="button"
            label="登入"
            @click="login(ppwwdd, (selectedOption?.index) ?? 0)"
          ></PButton>
        </div>

        <div class="bottomLineContainer"></div>

        <div class="notificationTitleContainer">
          <span class="notificationTitle" tabindex="0">注意事項</span>
        </div>

        <div class="notificationContentContainer">
          <p class="notificationContent" tabindex="0">
            為確保您帳號的安全，未使用本服務時，請務必登出。
          </p>
        </div>
      </div>

      <div class="right-container">
        <img
          class="illustration"
          src="../../../assets/images/illustration 1.png"
          alt="illustration"
        />
      </div>
    </div>
  </div>
  <template v-if="isShowTestMessage">
    {{ selectedOption }}
    {{ ppwwdd}}
  </template>
</template>

<style lang="scss" scoped>
@import '../../../assets/styles/rwd.scss';

.contentContainer {
  min-height: 42.943125rem;

  .right-container {
    width: 43.875rem;
    height: 32.9375rem;
    margin-top: 2.44rem;

    @include pad {
      width: 0;
      height: 0;
      top: 0;
      left: 0;
    }
  }

  .left-container {
    max-width: 47rem;

    .dropdownContainer {
      margin-top: 5rem;
    }

    .ppwwddContainer {
      margin-top: 3rem;
    }
  }

  .loginButtonContainer {
    margin-top: 3.5rem;
    margin-left: 16.25rem;
    padding: 1rem 0.625rem 1rem 0.625rem;
    gap: 0.625rem;

    .loginButton {
      height: 3.5rem;
      padding: 0.5rem 3rem 0.5rem 3rem;
      border-radius: 3.125rem;
      gap: 0.25rem;
      background: #6c5c3f;
    }
  }

  .bottomLineContainer {
    max-width: 47rem;
    margin-top: 3rem;
    border: 0.0625rem solid #d1c5b4;
  }

  .notificationTitleContainer {
    height: 1.875rem;
    margin-top: 3rem;
    padding-left: 0.8125rem;
    color: #000000;

    .notificationTitle {
      font-family: Noto Sans TC;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.875rem;
      letter-spacing: 0.1875rem;
      text-align: left;
    }
  }

  .notificationContentContainer {
    max-width: 45.75rem;
    height: 4.5rem;
    margin-top: 1.5rem;
    margin-left: 0.8125rem;
    color: #000000;

    .notificationContent {
      width: 100%;
      font-family: Noto Sans TC;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 2.25rem;
      letter-spacing: 0.25rem;
      text-align: left;
    }
  }
}
</style>
