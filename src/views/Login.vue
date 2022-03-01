<template>
  <div :class="$style.formStructor">
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <div :class="[$style.signup, { [$style.slideUp]: !isSignupForm }]">
        <h2 :class="$style.formTitle" @click="isSignupForm = true">
          <span>or</span>Sign up
        </h2>
        <div
          :class="[
            $style.formHolder,
            { [$style.invalid]: isValidSignUpForm(errors) },
          ]"
        >
          <div
            :class="[
              $style.inputWrapper,
              { [$style.invalid]: isValidSignUpForm(errors) },
            ]"
          >
            <Field
              type="text"
              v-model="name"
              name="required"
              :class="$style.input"
              placeholder="Name"
            />
            <div
              v-if="isValidSignUpForm(errors)"
              :class="$style.invalidFeedback"
            >
              {{ errors.required }}
            </div>
          </div>
          <div
            :class="[
              $style.inputWrapper,
              { [$style.invalid]: isValidSignUpForm(errors) },
            ]"
          >
            <Field
              type="email"
              v-model="email"
              name="email"
              :class="$style.input"
              placeholder="Email"
            />
            <div
              v-if="isValidSignUpForm(errors)"
              :class="$style.invalidFeedback"
            >
              {{ errors.email }}
            </div>
          </div>
          <div
            :class="[
              $style.inputWrapper,
              { [$style.invalid]: isValidSignUpForm(errors) },
            ]"
          >
            <Field
              type="password"
              v-model="password"
              name="password"
              :class="$style.input"
              placeholder="Password"
            />
            <div
              v-if="isValidSignUpForm(errors)"
              :class="$style.invalidFeedback"
            >
              {{ errors.password }}
            </div>
          </div>
          <div
            :class="[
              $style.inputWrapper,
              { [$style.invalid]: isValidSignUpForm(errors) },
            ]"
          >
            <Field
              type="password"
              v-model="confirmPassword"
              name="confirmPassword"
              :class="$style.input"
              placeholder="Confirm Password"
            />
            <div
              v-if="isValidSignUpForm(errors)"
              :class="$style.invalidFeedback"
            >
              {{ errors.confirmPassword }}
            </div>
          </div>
        </div>
        <button type="submit" @click="onSubmit" :class="$style.submitBtn">
          Sign up
        </button>
      </div>
      <div :class="[$style.login, { [$style.slideUp]: isSignupForm }]">
        <div :class="$style.center">
          <h2 :class="$style.formTitle" @click="isSignupForm = false">
            <span>or</span>Log in
          </h2>
          <div
            :class="[
              $style.formHolder,
              { [$style.invalid]: isInvalidForm(errors) },
            ]"
          >
            <div
              :class="[
                $style.inputWrapper,
                { [$style.invalid]: isInvalidForm(errors) },
              ]"
            >
              <Field
                type="email"
                v-model="email"
                name="email"
                :class="$style.input"
                placeholder="Email"
              />
              <div v-if="isInvalidForm(errors)" :class="$style.invalidFeedback">
                {{ errors.email }}
              </div>
            </div>
            <div
              :class="[
                $style.inputWrapper,
                { [$style.invalid]: isInvalidForm(errors) },
              ]"
            >
              <Field
                type="password"
                v-model="password"
                name="password"
                :class="$style.input"
                placeholder="Password"
              />
              <div v-if="isInvalidForm(errors)" :class="$style.invalidFeedback">
                {{ errors.password }}
              </div>
            </div>
          </div>
          <div :class="$style.mt3">
            <label :class="$style.checkboxContainer"
              >Save Password?
              <input type="checkbox" value="savepassword" :class="$style.mr1" />
              <span :class="$style.checkmark"></span>
            </label>
          </div>
          <button type="submit" @click="onSubmit" :class="$style.submitBtn">
            Log in
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Form, Field } from "vee-validate";
import * as Validation from "@/utils/validator/validator";

@Options({
  components: { Form, Field },
  setup() {
    const schema = Validation.schema;

    return {
      schema,
    };
  },
})
export default class Login extends Vue {
  public isSignupForm = false;
  public email = "";
  public password = "";
  public confirmPassword = "";
  public name = "";
  public schema = Validation.schema;

  isInvalidForm(errors: any): boolean {
    if (errors.password || errors.email) {
      return true;
    } else return false;
  }

  isValidSignUpForm(errors: any): boolean {
    if (
      errors.password ||
      errors.email ||
      errors.required ||
      errors.confirmPassword
    ) {
      return true;
    } else return false;
  }

  onSubmit(): void {
    window.open("/home");
  }
}
</script>

<style lang="scss" scoped module>
@import "@/styles/common.scss";

.formStructor {
  background-color: $color-lighter-veri-peri;
  border-radius: 15px;
  margin: auto;
  height: 550px;
  width: 350px;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 500px;
    background-image: url("https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100");
  }
  .formHolder {
    border-radius: 15px;
    background-color: #fff;
    border: 1px solid #eee;
    overflow: hidden;
    margin-top: 50px;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
    &.invalid {
      border: 1px solid red;
    }
    .invalidFeedback {
      color: red;
      padding: 0px 15px 8px;
      font-size: 8px;
      display: block;
    }
    .inputWrapper {
      border-bottom: 1px solid #eee;
      width: 100%;
      &.invalid {
        border-bottom: 1px solid red;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
    .input {
      border: 0;
      outline: none;
      box-shadow: none;
      display: block;
      height: 30px;
      line-height: 30px;
      padding: 8px 15px;
      width: 100%;
      font-size: 12px;
      &::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
  .submitBtn {
    background-color: $color-veri-peri;
    color: white;
    border: 0;
    border-radius: 15px;
    display: block;
    margin: 15px auto;
    padding: 15px 45px;
    width: 100%;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
    &.signup {
      background-color: $color-dark-veri-peri;
    }
    &:hover {
      transition: all 0.3s ease;
      background-color: $color-dark-veri-peri;
    }
  }
  .signup {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    width: 65%;
    z-index: 5;
    -webkit-transition: all 0.3s ease;
    &.slideUp {
      top: 5%;
      -webkit-transform: translate(-50%, 0%);
      -webkit-transition: all 0.3s ease;
    }
    &.slideUp .formHolder,
    &.slideUp .submitBtn {
      opacity: 0;
      visibility: hidden;
    }
    &.slideUp .formTitle {
      font-size: 1em;
      cursor: pointer;
    }
    &.slideUp .formTitle span {
      margin-right: 5px;
      opacity: 1;
      visibility: visible;
      -webkit-transition: all 0.3s ease;
    }
    .formTitle {
      color: #fff;
      font-size: 1.7em;
      text-align: center;

      span {
        color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.3s ease;
      }
    }
  }

  .login {
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 5;
    -webkit-transition: all 0.3s ease;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: -20px;
      -webkit-transform: translate(-50%, 0);
      background-color: #fff;
      width: 200%;
      height: 250px;
      border-radius: 50%;
      z-index: 4;
      -webkit-transition: all 0.3s ease;
    }

    .center {
      position: absolute;
      top: calc(50% - 10%);
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      width: 65%;
      z-index: 5;
      -webkit-transition: all 0.3s ease;

      .formTitle {
        color: #000;
        font-size: 1.7em;
        text-align: center;

        span {
          color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease;
        }
      }
    }

    &.slideUp {
      top: 90%;
      -webkit-transition: all 0.3s ease;
    }

    &.slideUp .center {
      top: 10%;
      -webkit-transform: translate(-50%, 0%);
      -webkit-transition: all 0.3s ease;
    }

    &.slideUp .formHolder,
    &.slideUp .submitBtn {
      opacity: 0;
      visibility: hidden;
      -webkit-transition: all 0.3s ease;
    }

    &.slideUp .formTitle {
      font-size: 1em;
      margin: 0;
      padding: 0;
      cursor: pointer;
      -webkit-transition: all 0.3s ease;
    }

    &.slideUp .formTitle span {
      margin-right: 5px;
      opacity: 1;
      visibility: visible;
      -webkit-transition: all 0.3s ease;
    }
  }
}
</style>
