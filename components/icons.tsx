import * as React from "react";
import { IconSvgProps } from "@/types";

export const MoonIcon = (props: any) => (
  <svg aria-hidden="true" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunIcon = (props: any) => (
  <svg aria-hidden="true" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
    <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" fill="currentColor" />
    <path
      d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"
      fill="currentColor"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 44 } = props;

  return (
    <svg fill="none" height={height} viewBox="0 0 161 32" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};

export const VercelIcon: React.FC<IconSvgProps> = ({ width, height = 44, ...props }) => {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 4438 1000"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const BackIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="11386"
      width="14"
      height="14"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M482.7 249.9V106.1c0-37.4-45.3-56.2-71.7-29.7L140.3 347c-16.4 16.4-16.4 43 0 59.4L410.9 677c26.5 26.5 71.7 7.7 71.7-29.7v-155c96.1-0.3 271.5-10.7 271.5 227.7 0 118.1-92.8 216.8-216 239.6 198.1-24.4 326-236 326-361.9 0.1-292.6-309.4-346.3-381.4-347.8z"
        p-id="14274"
        fill="currentColor"
      />
    </svg>
  );
};

export const MoreIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
      <path
        clipRule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
      />
    </svg>
  );
};

export const MoreOpenIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
      <path
        clipRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
      />
    </svg>
  );
};

export const BornIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="9126"
      width="18"
      height="18"
      {...props}
    >
      <path
        d="M624 512c26.5 0 48-28.6 48-64s-21.3-64-48-64-48 28.4-48 64 21.3 64 48 64z m-224 0c26.7 0 48-28.8 48-64s-21.3-64-48-64-48 28.6-48 64 21.5 64 48 64z m-23 103c17.2 76.1 62.4 114.1 135.5 114.1s119-37.8 137.6-113.3c4.4-17.1-6-34.5-23.1-38.9-2.7-0.7-5.5-1-8.2-1H408.1c-17.7 0-32 14.4-31.9 32.1 0 2.4 0.2 4.8 0.8 7zM542.3 96.9c57.4 0 159.1-4.3 213.3-35 59.3-33.1 62.7 56.7 23.5 131.8 175.7 148.1 198 410.5 50 586.2s-410.5 198-586.2 50-198-410.5-50-586.2C272.2 149.6 389 95.5 512 95.8c10.2 0 20.3 0.3 30.3 1.1z"
        fill="#d81e06"
        p-id="9127"
      />
    </svg>
  );
};

export const UniversityIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="10249"
      width="18"
      height="18"
      {...props}
    >
      <path
        d="M510.543324 126.388549 62.385351 351.059518l64.021106 42.158169 0 405.41345 64.021106 32.007995L190.427562 434.199053l319.821049 204.374714 264.381389-170.96479 184.074366-119.685893L510.543324 126.388549zM510.543324 126.388549"
        fill="#1296db"
        p-id="10250"
      />
      <path
        d="M778.900258 510.524392 510.543324 686.124759 239.508397 510.524392l-17.065677 163.115008c32.014134 24.921599 224.078475 156.99973 288.104697 221.020836 64.022129-64.021106 256.087493-196.007139 288.100604-220.952274L778.900258 510.524392 778.900258 510.524392zM778.900258 510.524392"
        fill="#1296db"
        p-id="10251"
      />
    </svg>
  );
};

export const FutureIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1722 1024"
      version="1.1"
      p-id="14273"
      width="18"
      height="18"
      {...props}
    >
      <path
        d="M422.59090924 540.76420462m-153.40909077 0a153.40909075 153.40909075 0 1 0 306.81818152 0 153.40909075 153.40909075 0 1 0-306.81818152 0Z"
        fill="#139b1c"
        p-id="14274"
      />
      <path
        d="M863.64204537 540.76420462m-153.40909076 0a153.40909075 153.40909075 0 1 0 306.81818151 0 153.40909075 153.40909075 0 1 0-306.81818151 0Z"
        fill="#139b1c"
        p-id="14275"
      />
      <path
        d="M1304.69318151 540.76420462m-153.40909076 0a153.40909075 153.40909075 0 1 0 306.81818234 0 153.40909075 153.40909075 0 1 0-306.81818234 0Z"
        fill="#139b1c"
        p-id="14276"
      />
    </svg>
  );
};

export const CongratulationIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1" p-id="25013" width="18" height="18">
      <path
        d="M800.479218 694.613322l-167.259836 99.201903L131.353872 934.859087l-21.23198-21.261979-21.105979-21.16398 139.947863-499.827511 113.953889-156.341848 221.443784 221.833784z"
        fill="#CE4963"
        p-id="25014"
      />
      <path
        d="M800.479218 694.613322l-167.259836 99.201903L131.353872 934.859087l-21.23198-21.261979 454.239557-455.499555z"
        fill="#AD1E55"
        p-id="25015"
      />
      <path
        d="M885.295135 722.965294L633.219382 793.815225l-0.002-91.461911h-154.563849l-1.441999-156.325847h-0.538l-152.58585 1.445998-0.014-154.867848h-95.109908l71.543931-255.569751 292.125714 292.709714z"
        fill="#FF6969"
        p-id="25016"
      />
      <path
        d="M153.56185 997.643026c-35.071966 35.141966-92.12591 35.141966-127.197876 0l-0.028-0.028C9.357991 980.591042 0 957.967064 0 933.897088c0-24.097976 9.357991-46.749954 26.363974-63.775938 35.057966-35.125966 92.06991-35.139966 127.155876-0.042l0.07 0.07c16.977983 17.023983 26.335974 39.647961 26.335974 63.747938 0 24.067976-9.357991 46.721954-26.363974 63.745938z"
        fill="#FDE56F"
        p-id="25017"
      />
      <path
        d="M555.359458 0l-57.997944 15.315985c0.254 0.967999 24.495976 97.697905-55.893945 173.64983l41.12796 43.771958C588.643425 132.541871 556.767456 5.363995 555.359458 0z"
        fill="#00874A"
        p-id="25018"
      />
      <path d="M659.477356 79.185923h59.973941v60.139941h-59.973941z" fill="#FDE56F" p-id="25019" />
      <path
        d="M908.839112 267.373739h59.973942v60.139941H908.839112zM878.851142 550.717462h59.975941v60.141941h-59.975941z"
        fill="#FFD371"
        p-id="25020"
      />
      <path
        d="M1023.999 417.937592c-94.073908-32.193969-169.721834-15.279985-216.615788 4.579995-51.20795 21.687979-80.377922 51.69995-81.593921 52.965949l43.093958 41.825959c0.23-0.234 23.473977-23.655977 64.177937-40.363961 53.601948-22.001979 111.325891-22.703978 171.567833-2.087998z"
        fill="#006635"
        p-id="25021"
      />
      <path
        d="M902.367119 0.601999c-22.549978 99.807903-77.543924 183.145821-163.453841 247.699759-65.197936 48.989952-124.707878 68.209933-125.301877 68.397933l8.997991 28.685972 8.943991 28.701972c2.753997-0.861999 68.277933-21.757979 141.435862-76.243926 97.309905-72.477929 162.273842-170.665833 187.867817-283.953723z"
        fill="#FF6969"
        p-id="25022"
      />
      <path
        d="M179.925824 933.897088c0 24.069976-9.357991 46.721954-26.363974 63.747938-35.071966 35.141966-92.12591 35.141966-127.197876 0l-0.028-0.028L153.51985 870.07915l0.07 0.07c16.977983 17.023983 26.335974 39.647961 26.335974 63.747938z"
        fill="#FFD371"
        p-id="25023"
      />
      <path
        d="M885.295135 722.965294L633.219382 793.815225l-0.002-91.461911h-154.563849l-1.441999-156.325847h-0.538l115.959887-116.281887z"
        fill="#CE4963"
        p-id="25024"
      />
    </svg>
  );
};

export const SendEmailIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" p-id="4242" width="16" height="16" {...props}>
      <path
        d="M1008.00076 6.285714q18.857143 13.714286 15.428571 36.571429l-146.285714 877.714286q-2.857143 16.571429-18.285714 25.714285-8 4.571429-17.714286 4.571429-6.285714 0-13.714286-2.857143l-258.857142-105.714286-138.285715 168.571429q-10.285714 13.142857-28 13.142857-7.428571 0-12.571428-2.285714-10.857143-4-17.428572-13.428572T365.715046 987.428571v-199.428571l493.714285-605.142857-610.857142 528.571428-225.714286-92.571428q-21.142857-8-22.857143-31.428572-1.142857-22.857143 18.285714-33.714285L969.143617 5.142857q8.571429-5.142857 18.285714-5.142857 11.428571 0 20.571429 6.285714z"
        p-id="4243"
        fill="currentColor"
      />
    </svg>
  );
};

export const MessageIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
      <path
        clipRule="evenodd"
        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
      />
    </svg>
  );
};

export const SuccessIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FailIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        clipRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
      />
    </svg>
  );
};

export const UpdateIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={14} height={14} {...props}>
      <path
        fillRule="evenodd"
        d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const HomeOutlineIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
};

export const ProjectOutlineIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
};

export const AboutOutlineIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};

export const ContactOutlineIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </svg>
  );
};

export const HomeSolidIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
  );
};

export const ProjectSolidIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path
        fillRule="evenodd"
        d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 00-.722-1.952l-3.285-3.832A3 3 0 0016.215 3h-8.43a3 3 0 00-2.278 1.048L2.222 7.88A3 3 0 001.5 9.832zM7.785 4.5a1.5 1.5 0 00-1.139.524L3.881 8.25h3.165a3 3 0 012.496 1.336l.164.246a1.5 1.5 0 001.248.668h2.092a1.5 1.5 0 001.248-.668l.164-.246a3 3 0 012.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 00-1.139-.524h-8.43z"
        clipRule="evenodd"
      />
      <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 003 3h15a3 3 0 003-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 00-2.496 1.336l-.164.246a1.5 1.5 0 01-1.248.668h-2.092a1.5 1.5 0 01-1.248-.668l-.164-.246A3 3 0 007.046 15H2.812z" />
    </svg>
  );
};

export const AboutSolidIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ContactSolidIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const PreviewIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
};

export const SourceCodeIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
};

export const HeartIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F21260" className="w-6 h-6" {...props}>
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
};
