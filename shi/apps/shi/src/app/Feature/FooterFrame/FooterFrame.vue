<script lang="ts">
// defineProps<{}>()
</script>

<template>
  <div class="statementContainer flex align-items-center">

    <div class="privactStatementContainer flex align-items-center">
      <a :href="'/main/' + 'login' + '#footer'" accesskey="B" id="footer">
        <img class="dragIndicator" src="../../../assets/icons/drag_indicator.png" alt="導盲磚" />
      </a>
      <a href="">
        <p class="privactStatement">隱私權聲明</p>
      </a>
    </div>

    <div class="divider"></div>

    <div class="securityStatementContainer flex align-items-center">
      <a href="">
        <p class="securityStatement">安全宣告</p>
      </a>
    </div>
  </div>

  <div class="bottom-container flex justify-content-between">

    <div class="copyrightContainer" tabindex="0">
      <span class="copyright">COPYRIGHT 2008 Shi International Commercial Bank, ALL RIGHTS
        RESERVED. 恃 Shi Holdings</span>
    </div>

    <div class="a11yLogoContainer" tabindex="0">
      <img class="a11yLogo" src="../../../assets/images/a11y_logo.png" alt="無障礙標章" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/styles/rwd.scss';

.statementContainer {
  padding-top: 2.25rem;
  gap: 0.5rem;

  .privactStatementContainer {
    padding-left: 0.75rem;
    gap: 0.75rem;

    .privactStatement {
      padding: 0.75rem;
      font-family: Roboto;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.625rem;
      letter-spacing: 0.0625rem;
      color: #6c5c3f;
      cursor: pointer;
    }
  }

  .divider {
    width: 0.125rem;
    height: 1.5rem;
    background: #7f7667;
    border: 0.0.8125rem;
  }

  .securityStatementContainer {
    padding: 0.75rem;
    gap: 0.75rem;

    .securityStatement {
      font-family: Roboto;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.625rem;
      letter-spacing: 0.0625rem;
      text-align: left;
      color: #6c5c3f;
      cursor: pointer;
    }
  }
}

.copyrightContainer {
  display: inline-flex;
  padding: 0.5rem 0.75rem;
  align-items: flex-start;

  .copyright {
    min-height: 2rem;
    font-family: Noto Sans TC;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.125rem;
    text-align: left;
    color: #1e1b16;
  }
}

.a11yLogoContainer {
  // width: 6.875rem;
  // height: 2.5rem;
  margin-top: 0.5rem;

  .a11yLogo {
    // width: 6.875rem;
    // height: 2.5rem;
  }
}
</style>
