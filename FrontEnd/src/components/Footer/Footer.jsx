import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/CompanyLogo.svg'

function Footer() {
  return (
    <footer className="bg-[#0F40A8] text-white text-center py-8">
      <div className="mb-4 flex justify-center space-x-4">
        <img src={logo}></img>
      </div>

      <div className="mb-4 flex justify-center space-x-4 py-4">
        <ul className="flex justify-evenly w-[620px]">
          <li>
            <Link to="/contactus" className="hover:underline text-sm">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/distribute" className="hover:underline text-sm">
              Distribute
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline text-sm">
              Order
            </Link>
          </li>
          <li>
            <Link to="/advertise" className="hover:underline text-sm">
              Advertise
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:underline text-sm">
              FAQs
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-4 flex justify-center space-x-4 py-6">
        <ul className="flex justify-evenly w-[468px]">
          <li>
            <a href="/contactus">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.12587 5.39026C0 7.55764 0 10.4051 0 16.1V31.9C0 37.5949 0 40.4424 1.12587 42.6097C2.07462 44.4362 3.56382 45.9254 5.39026 46.8741C7.55764 48 10.4051 48 16.1 48H31.9C37.5949 48 40.4424 48 42.6097 46.8741C44.4362 45.9254 45.9254 44.4362 46.8741 42.6097C48 40.4424 48 37.5949 48 31.9V16.1C48 10.4051 48 7.55764 46.8741 5.39026C45.9254 3.56382 44.4362 2.07462 42.6097 1.12587C40.4424 0 37.5949 0 31.9 0H16.1C10.4051 0 7.55764 0 5.39026 1.12587C3.56382 2.07462 2.07462 3.56382 1.12587 5.39026ZM34.4 24L33.3333 30.6666H28V48H20V30.6666H14V24H20V18.6666C20 12.6666 23.8667 9.33331 29.3333 9.33331C31.0667 9.33331 32.9333 9.59998 34.6667 9.86665V16H31.6C28.6667 16 28 17.4666 28 19.3333V24H34.4Z"
                  fill="#F7F7FC"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="/contactus">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_46_155)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.15321 5.39026C0.0273438 7.55764 0.0273438 10.4051 0.0273438 16.1V31.9C0.0273438 37.5949 0.0273438 40.4424 1.15321 42.6097C2.10196 44.4362 3.59117 45.9254 5.4176 46.8741C7.58498 48 10.4324 48 16.1273 48H31.9273C37.6222 48 40.4697 48 42.6371 46.8741C44.4635 45.9254 45.9527 44.4362 46.9015 42.6097C48.0273 40.4424 48.0273 37.5949 48.0273 31.9V16.1C48.0273 10.4051 48.0273 7.55764 46.9015 5.39026C45.9527 3.56382 44.4635 2.07462 42.6371 1.12587C40.4697 0 37.6222 0 31.9273 0H16.1273C10.4324 0 7.58498 0 5.4176 1.12587C3.59117 2.07462 2.10196 3.56382 1.15321 5.39026ZM16.8038 6.65093C18.6656 6.5662 19.2604 6.54547 24.0007 6.54547H23.9952C28.7369 6.54547 29.3296 6.5662 31.1914 6.65093C33.0495 6.73602 34.3185 7.0302 35.4312 7.46183C36.5803 7.90729 37.5512 8.50365 38.522 9.47456C39.4929 10.4447 40.0893 11.4186 40.5365 12.5666C40.9656 13.6764 41.2601 14.9447 41.3474 16.8029C41.431 18.6647 41.4529 19.2597 41.4529 24C41.4529 28.7404 41.431 29.3338 41.3474 31.1957C41.2601 33.0531 40.9656 34.3218 40.5365 35.432C40.0893 36.5797 39.4929 37.5535 38.522 38.5237C37.5523 39.4946 36.5799 40.0924 35.4323 40.5382C34.3218 40.9698 33.052 41.264 31.1939 41.3491C29.3321 41.4338 28.7391 41.4546 23.9985 41.4546C19.2586 41.4546 18.6641 41.4338 16.8023 41.3491C14.9446 41.264 13.6759 40.9698 12.5654 40.5382C11.4181 40.0924 10.4444 39.4946 9.47456 38.5237C8.50405 37.5535 7.9077 36.5797 7.46153 35.4317C7.03027 34.3218 6.7361 33.0535 6.65065 31.1953C6.56629 29.3335 6.5452 28.7404 6.5452 24C6.5452 19.2597 6.56701 18.6644 6.65028 16.8026C6.73392 14.9451 7.02845 13.6764 7.46117 12.5662C7.90843 11.4186 8.50477 10.4447 9.47565 9.47456C10.4458 8.50402 11.4196 7.90765 12.5676 7.46183C13.6773 7.0302 14.9457 6.73602 16.8038 6.65093ZM23.4189 9.69075C23.066 9.6906 22.7389 9.69045 22.4349 9.69093V9.68656C19.1819 9.6902 18.5579 9.71202 16.9478 9.78474C15.246 9.86293 14.3221 10.1466 13.7068 10.3866C12.8923 10.7037 12.3105 11.0818 11.6996 11.6927C11.0887 12.3037 10.7098 12.8855 10.3934 13.7C10.1545 14.3153 9.87019 15.2389 9.79237 16.9407C9.70874 18.7807 9.69201 19.3306 9.69201 23.9917C9.69201 28.6527 9.70874 29.2055 9.79237 31.0455C9.86982 32.7473 10.1545 33.6709 10.3934 34.2855C10.7105 35.1004 11.0887 35.6807 11.6996 36.2917C12.3105 36.9026 12.8923 37.2807 13.7068 37.5971C14.3224 37.836 15.246 38.1204 16.9478 38.1989C18.7877 38.2826 19.3401 38.3007 24.0007 38.3007C28.6609 38.3007 29.2136 38.2826 31.0535 38.1989C32.7553 38.1211 33.6796 37.8375 34.2942 37.5975C35.1091 37.2811 35.689 36.9029 36.2999 36.292C36.9108 35.6815 37.2897 35.1015 37.6061 34.2869C37.845 33.6724 38.1293 32.7487 38.2071 31.0469C38.2908 29.2069 38.309 28.6542 38.309 23.996C38.309 19.3378 38.2908 18.7851 38.2071 16.9451C38.1297 15.2433 37.845 14.3197 37.6061 13.7051C37.289 12.8906 36.9108 12.3087 36.2999 11.6978C35.6894 11.0869 35.1087 10.7087 34.2942 10.3924C33.6789 10.1535 32.7553 9.86911 31.0535 9.79129C29.2132 9.70765 28.6609 9.69093 24.0007 9.69093C23.7992 9.69093 23.6055 9.69084 23.4189 9.69075ZM31.223 14.6829C31.223 13.5262 32.1611 12.5891 33.3175 12.5891V12.5884C34.4738 12.5884 35.412 13.5266 35.412 14.6829C35.412 15.8393 34.4738 16.7775 33.3175 16.7775C32.1611 16.7775 31.223 15.8393 31.223 14.6829ZM15.0373 24C15.0373 19.05 19.0504 15.0366 24.0003 15.0364C28.9503 15.0364 32.9626 19.0498 32.9626 24C32.9626 28.9502 28.9507 32.9618 24.0007 32.9618C19.0506 32.9618 15.0373 28.9502 15.0373 24ZM29.8187 24C29.8187 20.7866 27.2137 18.1818 24.0007 18.1818C20.7873 18.1818 18.1827 20.7866 18.1827 24C18.1827 27.2131 20.7873 29.8182 24.0007 29.8182C27.2137 29.8182 29.8187 27.2131 29.8187 24Z"
                    fill="url(#paint0_radial_46_155)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.15321 5.39026C0.0273438 7.55764 0.0273438 10.4051 0.0273438 16.1V31.9C0.0273438 37.5949 0.0273438 40.4424 1.15321 42.6097C2.10196 44.4362 3.59117 45.9254 5.4176 46.8741C7.58498 48 10.4324 48 16.1273 48H31.9273C37.6222 48 40.4697 48 42.6371 46.8741C44.4635 45.9254 45.9527 44.4362 46.9015 42.6097C48.0273 40.4424 48.0273 37.5949 48.0273 31.9V16.1C48.0273 10.4051 48.0273 7.55764 46.9015 5.39026C45.9527 3.56382 44.4635 2.07462 42.6371 1.12587C40.4697 0 37.6222 0 31.9273 0H16.1273C10.4324 0 7.58498 0 5.4176 1.12587C3.59117 2.07462 2.10196 3.56382 1.15321 5.39026ZM16.8038 6.65093C18.6656 6.5662 19.2604 6.54547 24.0007 6.54547H23.9952C28.7369 6.54547 29.3296 6.5662 31.1914 6.65093C33.0495 6.73602 34.3185 7.0302 35.4312 7.46183C36.5803 7.90729 37.5512 8.50365 38.522 9.47456C39.4929 10.4447 40.0893 11.4186 40.5365 12.5666C40.9656 13.6764 41.2601 14.9447 41.3474 16.8029C41.431 18.6647 41.4529 19.2597 41.4529 24C41.4529 28.7404 41.431 29.3338 41.3474 31.1957C41.2601 33.0531 40.9656 34.3218 40.5365 35.432C40.0893 36.5797 39.4929 37.5535 38.522 38.5237C37.5523 39.4946 36.5799 40.0924 35.4323 40.5382C34.3218 40.9698 33.052 41.264 31.1939 41.3491C29.3321 41.4338 28.7391 41.4546 23.9985 41.4546C19.2586 41.4546 18.6641 41.4338 16.8023 41.3491C14.9446 41.264 13.6759 40.9698 12.5654 40.5382C11.4181 40.0924 10.4444 39.4946 9.47456 38.5237C8.50405 37.5535 7.9077 36.5797 7.46153 35.4317C7.03027 34.3218 6.7361 33.0535 6.65065 31.1953C6.56629 29.3335 6.5452 28.7404 6.5452 24C6.5452 19.2597 6.56701 18.6644 6.65028 16.8026C6.73392 14.9451 7.02845 13.6764 7.46117 12.5662C7.90843 11.4186 8.50477 10.4447 9.47565 9.47456C10.4458 8.50402 11.4196 7.90765 12.5676 7.46183C13.6773 7.0302 14.9457 6.73602 16.8038 6.65093ZM23.4189 9.69075C23.066 9.6906 22.7389 9.69045 22.4349 9.69093V9.68656C19.1819 9.6902 18.5579 9.71202 16.9478 9.78474C15.246 9.86293 14.3221 10.1466 13.7068 10.3866C12.8923 10.7037 12.3105 11.0818 11.6996 11.6927C11.0887 12.3037 10.7098 12.8855 10.3934 13.7C10.1545 14.3153 9.87019 15.2389 9.79237 16.9407C9.70874 18.7807 9.69201 19.3306 9.69201 23.9917C9.69201 28.6527 9.70874 29.2055 9.79237 31.0455C9.86982 32.7473 10.1545 33.6709 10.3934 34.2855C10.7105 35.1004 11.0887 35.6807 11.6996 36.2917C12.3105 36.9026 12.8923 37.2807 13.7068 37.5971C14.3224 37.836 15.246 38.1204 16.9478 38.1989C18.7877 38.2826 19.3401 38.3007 24.0007 38.3007C28.6609 38.3007 29.2136 38.2826 31.0535 38.1989C32.7553 38.1211 33.6796 37.8375 34.2942 37.5975C35.1091 37.2811 35.689 36.9029 36.2999 36.292C36.9108 35.6815 37.2897 35.1015 37.6061 34.2869C37.845 33.6724 38.1293 32.7487 38.2071 31.0469C38.2908 29.2069 38.309 28.6542 38.309 23.996C38.309 19.3378 38.2908 18.7851 38.2071 16.9451C38.1297 15.2433 37.845 14.3197 37.6061 13.7051C37.289 12.8906 36.9108 12.3087 36.2999 11.6978C35.6894 11.0869 35.1087 10.7087 34.2942 10.3924C33.6789 10.1535 32.7553 9.86911 31.0535 9.79129C29.2132 9.70765 28.6609 9.69093 24.0007 9.69093C23.7992 9.69093 23.6055 9.69084 23.4189 9.69075ZM31.223 14.6829C31.223 13.5262 32.1611 12.5891 33.3175 12.5891V12.5884C34.4738 12.5884 35.412 13.5266 35.412 14.6829C35.412 15.8393 34.4738 16.7775 33.3175 16.7775C32.1611 16.7775 31.223 15.8393 31.223 14.6829ZM15.0373 24C15.0373 19.05 19.0504 15.0366 24.0003 15.0364C28.9503 15.0364 32.9626 19.0498 32.9626 24C32.9626 28.9502 28.9507 32.9618 24.0007 32.9618C19.0506 32.9618 15.0373 28.9502 15.0373 24ZM29.8187 24C29.8187 20.7866 27.2137 18.1818 24.0007 18.1818C20.7873 18.1818 18.1827 20.7866 18.1827 24C18.1827 27.2131 20.7873 29.8182 24.0007 29.8182C27.2137 29.8182 29.8187 27.2131 29.8187 24Z"
                    fill="#F7F7FC"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_46_155"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.7774 51.697) rotate(-90) scale(47.5715 44.2453)"
                  >
                    <stop stop-color="#FFDD55" />
                    <stop offset="0.1" stop-color="#FFDD55" />
                    <stop offset="0.5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </radialGradient>
                  <clipPath id="clip0_46_155">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a href="/contactus">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.12587 5.39026C0 7.55764 0 10.4051 0 16.1V31.9C0 37.5949 0 40.4424 1.12587 42.6097C2.07462 44.4362 3.56382 45.9254 5.39026 46.8741C7.55764 48 10.4051 48 16.1 48H31.9C37.5949 48 40.4424 48 42.6097 46.8741C44.4362 45.9254 45.9254 44.4362 46.8741 42.6097C48 40.4424 48 37.5949 48 31.9V16.1C48 10.4051 48 7.55764 46.8741 5.39026C45.9254 3.56382 44.4362 2.07462 42.6097 1.12587C40.4424 0 37.5949 0 31.9 0H16.1C10.4051 0 7.55764 0 5.39026 1.12587C3.56382 2.07462 2.07462 3.56382 1.12587 5.39026ZM36.6254 11.5794C33.6016 8.55351 29.6426 6.80146 25.3938 6.59265L24.5404 6.57153C15.124 6.57153 7.4602 14.2311 7.45642 23.6458C7.45519 26.6554 8.24186 29.5927 9.73689 32.1823L7.31317 41.0307L16.3696 38.6562C18.8649 40.0166 21.6743 40.7335 24.5336 40.7345H24.5407C33.9561 40.7345 41.6206 33.0742 41.6245 23.6593C41.6262 19.0969 39.8508 14.8068 36.6254 11.5794ZM17.3078 35.8725L16.7892 35.5649L11.415 36.974L12.8495 31.7368L12.5119 31.1997C11.0905 28.9402 10.3398 26.3285 10.3409 23.6467C10.344 15.8217 16.7139 9.45553 24.5463 9.45553C28.3389 9.45676 31.904 10.935 34.585 13.6178C37.2659 16.3004 38.7414 19.8661 38.7399 23.6583C38.7368 31.4839 32.367 37.8508 24.5406 37.8508H24.5348C21.9869 37.8498 19.4879 37.1656 17.3078 35.8725ZM32.5627 27.3356C32.8604 27.4794 33.0615 27.5764 33.1473 27.7198C33.2541 27.8977 33.2541 28.7519 32.8984 29.7487C32.5427 30.7452 30.8373 31.6549 30.0172 31.7774C29.2816 31.8873 28.3511 31.933 27.3285 31.6083C26.7086 31.4117 25.9134 31.1492 24.895 30.7096C20.8933 28.9824 18.1889 25.1059 17.6777 24.3731C17.6419 24.3217 17.6169 24.2858 17.6029 24.2672L17.5991 24.2622C17.3722 23.9595 15.8598 21.9419 15.8598 19.8536C15.8598 17.8881 16.8259 16.8579 17.2704 16.3838C17.3008 16.3514 17.3288 16.3216 17.3539 16.2943C17.7451 15.867 18.2076 15.7603 18.4922 15.7603C18.7767 15.7603 19.0616 15.763 19.3103 15.7754C19.3409 15.7769 19.3729 15.7767 19.4058 15.7765C19.6546 15.7751 19.9648 15.7733 20.2708 16.5078C20.3884 16.7902 20.5604 17.2089 20.7419 17.6506C21.1093 18.5446 21.5154 19.5328 21.5869 19.6758C21.6936 19.8894 21.7647 20.1385 21.6225 20.4232C21.6011 20.4661 21.5813 20.5065 21.5623 20.545C21.4555 20.7631 21.3769 20.9234 21.1956 21.135C21.1245 21.2181 21.051 21.3075 20.9774 21.397C20.8304 21.576 20.6833 21.755 20.5552 21.8825C20.3415 22.0952 20.1191 22.3262 20.3681 22.7533C20.6171 23.1804 21.4738 24.5775 22.7428 25.7089C24.1071 26.9251 25.2928 27.4392 25.8937 27.6997C26.0109 27.7505 26.1059 27.7917 26.1756 27.8266C26.6024 28.0401 26.8514 28.0045 27.1003 27.7198C27.3494 27.435 28.1675 26.4739 28.452 26.0468C28.7365 25.6198 29.0212 25.691 29.4124 25.8332C29.8037 25.9757 31.9024 27.0078 32.3293 27.2214C32.4126 27.2631 32.4905 27.3007 32.5627 27.3356Z"
                  fill="#F7F7FC"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-white pt-4">
        <p className="text-sm">&copy; Adura 2023-2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
