import * as React from "react";
import { IconSvgProps } from "@/types";

export const MoonIcon = (props: any) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunIcon = (props: any) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" fill="currentColor" />
    <path
      d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"
      fill="currentColor"
    />
  </svg>
);

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const AddNoteIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M7.37 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.37A4.87 4.87 0 0 0 2.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88Z"
      fill="currentColor"
      opacity={0.4}
    />
    <path
      d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM12 14.75h-1.69V13c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill="currentColor"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 44 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
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

export const VercelIcon: React.FC<IconSvgProps> = ({
  width,
  height = 44,
  ...props
}) => {
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
      width="16"
      height="16"
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="4254"
      data-spm-anchor-id="a313x.search_index.0.i2.54473a81Vr48K6"
      width="16"
      height="16"
      {...props}
    >
      <path
        d="M512 343.04c87.64416 0 158.72 71.04512 158.72 158.72 0 87.64416-71.07584 158.72-158.72 158.72-87.64416 0-158.72-71.07584-158.72-158.72 0-87.67488 71.07584-158.72 158.72-158.72z m417.28 81.92c46.64832 0 84.48 37.8112 84.48 84.48 0 46.64832-37.83168 84.48-84.48 84.48S844.8 556.08832 844.8 509.44c0-46.6688 37.83168-84.48 84.48-84.48zM179.2 511.14496c0 46.65344-37.83168 84.48-84.48 84.48S10.24 557.7984 10.24 511.14496c0-46.66368 37.83168-84.48 84.48-84.48S179.2 464.4864 179.2 511.14496z"
        fill="currentColor"
        p-id="4255"
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="25013"
      width="18"
      height="18"
    >
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
      <path
        d="M659.477356 79.185923h59.973941v60.139941h-59.973941z"
        fill="#FDE56F"
        p-id="25019"
      />
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

export const EmailIcon: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="35410"
      width="14"
      height="14"
      {...props}
    >
      <path
        d="M1022.08 716.928V300.48l-217.28 217.344 217.28 199.04M655.36 667.2a188.16 188.16 0 0 1-133.888 55.488c-50.56 0-98.176-19.712-133.952-55.488L270.976 550.592 20.864 779.84v38.4c0 50.24 40.832 91.072 91.008 91.072h819.2c50.176 0 91.008-40.832 91.008-91.008v-39.68l-249.536-228.608-117.12 117.12"
        fill="currentColor"
        p-id="35411"
      ></path>
      <path
        d="M932.928 128h-819.2C63.616 128 22.848 168.832 22.848 219.008v19.008l398.784 398.912c27.2 27.136 63.36 42.112 101.76 42.112 38.464 0 74.624-14.976 101.76-42.112L1024 238.016v-19.008C1024 168.832 983.04 128 932.928 128M20.864 300.48v417.6L238.72 518.4 20.864 300.48"
        fill="currentColor"
        p-id="35412"
      ></path>
    </svg>
  );
};
