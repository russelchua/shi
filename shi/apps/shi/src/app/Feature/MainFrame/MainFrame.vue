<script lang="ts">
import HeaderFrame from '../Header/Header.vue';
import FooterFrame from '../FooterFrame/FooterFrame.vue';

export default {
  name: 'MainFrame',
  data() {
    return {
      ggg: 0,
    };
  },
  methods: {
    scaleUp() {
      const html = document.querySelector('html');
      const fontSize = window.getComputedStyle(html).fontSize;
      const fontSizeNumber = parseFloat(fontSize);
      const newFontSize = fontSizeNumber + 1;
      html.style.fontSize = `${newFontSize}px`;
    },
    scaleDown() {
      const html = document.querySelector('html');
      const fontSize = window.getComputedStyle(html).fontSize;
      const fontSizeNumber = parseFloat(fontSize);
      const newFontSize = fontSizeNumber - 1;
      html.style.fontSize = `${newFontSize}px`;
    },
    aaa() {
      this.ggg = this.ggg + 1;
    },
  },
  components: {
    HeaderFrame,
    FooterFrame,
  },
}

</script>

<template>
  <main class="mainContainer">
    <header class="headerContainer">
      <div class="maxWidth">
        <div class="top-container flex justify-content-between align-items-center">
          <HeaderFrame />
        </div>
      </div>
    </header>

    <section class="middleContainer">
      <div class="maxWidth">
        <div class="functional-button-container flex justify-content-between">
          <div class="scaleButtonContainer flex justify-content-center align-items-center">
            <div class="scaleButton flex justify-content-center align-items-center">
              <button value="text-decrerase" type="button" @click="scaleDown()">
                <img src="../../../assets/icons/text_decrease.png" alt="縮小字型" width="1" height="1" style="width: auto; height: auto;"/>
              </button>
              <div class="scaleButtonBackground"></div>
            </div>

            <div class="scaleButton flex justify-content-center align-items-center">
              <button value="text-increase" type="button" @click="scaleUp()">
                <img src="../../../assets/icons/text_increase.png" alt="放大字型" width="1" height="1" style="width: auto; height: auto;"/>
              </button>
              <div class="scaleButtonBackground"></div>
            </div>
          </div>
        </div>
        <RouterView />
      </div>
    </section>

    <footer class="footerContainer">
      <div class="lineContainer"></div>
      <div class="maxWidth">
        <FooterFrame />
      </div>
    </footer>
  </main>
</template>

<style scoped>
.mainContainer {
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}

.labelContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;

  position: absolute;
  width: 15.5rem;
  height: 5.5rem;
  left: 99.375rem;
  top: 1.9375rem;
}

.tourLinkContainer {
  padding: 0.75rem;

  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.625rem;
  letter-spacing: 0.0625rem;
  text-align: left;
  cursor: pointer;
}

.buttonContainer {
  gap: 0.5rem;

  .tour {
    width: fit-content;
    height: fit-content;
    padding: 0.75rem;
    gap: 0.75rem;

    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.625rem;
    letter-spacing: 0.0625rem;
    text-align: left;
    cursor: pointer;
  }

  .line {
    height: 1.5rem;
    border: 0.0625rem solid #7f7667;
  }

  .logout {
    width: fit-content;
    height: fit-content;
    padding: 0.75rem;
    gap: 0.75rem;
    cursor: pointer;

    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.625rem;
    letter-spacing: 0.0625rem;
    text-align: left;
  }
}

.headerContainer {
  position: relative;
  min-height: 9.375rem;
  padding-top: 2.625rem;
  width: 100vw;
  background: #ffffff;
  box-shadow: 0 0.25rem 0.625rem 0 #00000026;
}

.maxWidth {
  max-width: 95rem;
  position: relative;
  margin: 0 auto;
}

.tab-menu-on {
  min-height: 11.25rem;
}

.middleContainer {
  position: relative;
  width: 100vw;

  .titleContainer {
    margin-top: 0.87rem;

    .title {
      display: inline-flex;
      padding: 0.5rem;
      align-items: flex-start;

      color: var(--material-theme-sys-light-on-surface, #1E1B16);
      font-family: Noto Sans TC;
      font-size: 2rem;
      font-weight: 400;
      line-height: 3rem;
      letter-spacing: 0.1875rem;
    }

    .title-card {
      display: inline-flex;
      padding: 0.5rem;
      align-items: flex-start;
      margin-left: 2rem;

      color: var(--material-theme-sys-light-on-surface, #1E1B16);
      font-family: Noto Sans TC;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.875rem;
      letter-spacing: 0.125rem;
    }

    .tour-title {
      display: inline-flex;
      padding-left: 1.5rem;
      color: var(--material-theme-sys-light-on-surface, #1E1B16);
      text-align: right;
      /* Kong/Headline04 */
      font-family: var(--kong-headline04-font-family);
      font-size: var(--kong-headline04-font-size);
      font-style: var(--kong-headline04-font-style);
      font-weight: var(--kong-headline04-font-weight);
      line-height: var(--kong-headline04-line-height);
      /* 200% */
      letter-spacing: var(--kong-headline04-letter-spacing);
    }
  }

  .countdownContainer {
    margin-top: 1rem;
    padding: 0.5rem;
    gap: 0.75rem;

    .countdown {
      min-width: 15.5625rem;
      min-height: 1.875rem;

      color: var(--material-theme-sys-light-on-surface, #1E1B16);
      font-family: var(--kong-headline04-font-family);
      font-size: var(--kong-headline04-font-size);
      font-weight: var(--kong-headline04-font-weight);
      font-style: var(--kong-headline04-font-style);
      line-height: var(--kong-headline04-line-height);
      letter-spacing: var(--kong-headline04-letter-spacing);
      text-align: left;

      a {
        color: var(--material-theme-sys-light-error, #BA1A1A);
      }
    }
  }

  .scaleButtonContainer {
    width: 9rem;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 1rem;
    gap: 3rem;

    .scaleButton {
      position: relative;
      width: 2rem;
      height: 2rem;

      .scaleButtonBackground {
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: -0.5rem;
        left: -0.5rem;
        background: #f2f2f2;
        border-radius: 999em;
        z-index: -1;
      }
    }
  }

  .topLineContainer {
    padding-top: 1.5rem;
    max-width: 100%;

    .topLine {
      max-width: 100%;
    }
  }
}

.footerContainer {
  position: relative;
  width: 100vw;
  min-height: 11.0625rem;
  background: #f2f2f2;

  .lineContainer {
    width: 100vw;
    height: 0.3125rem;
    background: #dbdbdb;
  }
}

.dialogContent {
  .secureImage {
    padding-top: 1.5rem;
    width: 9.375rem;
  }

  .secureWording {
    max-width: 41.875rem;
    word-wrap: break-word;
    padding-top: 1.5rem;
    color: #000;
    font-family: Noto Sans TC;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem;
    letter-spacing: 0.1875rem;

    .secure-wording-error-code {
      max-width: 41.875rem;
    }
  }
}

.dialogFooter {
  position: relative;
  top: 1.5rem;
  gap: 2.3125rem;
}
</style>
