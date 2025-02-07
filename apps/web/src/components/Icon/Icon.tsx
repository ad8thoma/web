export type IconProps = {
  name: keyof typeof ICONS;
  color?: 'white' | 'black' | 'currentColor';
  width?: string | number;
  height?: string | number;
};

type SvgProps = {
  color?: 'white' | 'black' | 'currentColor';
  width?: string | number;
  height?: string | number;
};

const ICONS: Record<string, (props: SvgProps) => JSX.Element> = {
  discord: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3303 2.50578C18.7535 1.78387 17.0888 1.27172 15.3789 0.982422C15.1449 1.40071 14.9332 1.83107 14.7446 2.27171C12.9232 1.99724 11.071 1.99724 9.24961 2.27171C9.06095 1.83112 8.84924 1.40076 8.61535 0.982422C6.90433 1.27417 5.2386 1.78753 3.66019 2.50955C0.526644 7.14569 -0.322811 11.6667 0.101917 16.1235C1.937 17.4793 3.99098 18.5105 6.17458 19.1721C6.66626 18.5108 7.10134 17.8093 7.47519 17.0749C6.76511 16.8097 6.07975 16.4825 5.42706 16.0971C5.59884 15.9725 5.76684 15.8441 5.92918 15.7195C7.82837 16.6127 9.90124 17.0758 12 17.0758C14.0987 17.0758 16.1715 16.6127 18.0707 15.7195C18.235 15.8536 18.403 15.9819 18.5729 16.0971C17.9189 16.4831 17.2323 16.8109 16.5209 17.0768C16.8943 17.8108 17.3294 18.5118 17.8216 19.1721C20.007 18.5131 22.0626 17.4825 23.898 16.1254C24.3963 10.9569 23.0467 6.47746 20.3303 2.50578ZM8.01318 13.3826C6.82961 13.3826 5.85179 12.3085 5.85179 10.9871C5.85179 9.66575 6.79563 8.58222 8.0094 8.58222C9.22318 8.58222 10.1934 9.66575 10.1727 10.9871C10.1519 12.3085 9.21941 13.3826 8.01318 13.3826ZM15.9867 13.3826C14.8013 13.3826 13.8272 12.3085 13.8272 10.9871C13.8272 9.66575 14.7711 8.58222 15.9867 8.58222C17.2024 8.58222 18.1651 9.66575 18.1444 10.9871C18.1236 12.3085 17.193 13.3826 15.9867 13.3826Z"
        fill={color}
      />
    </svg>
  ),
  twitter: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0979642 0.136564C0.151854 0.211665 1.39988 1.9859 2.87137 4.0793C4.34285 6.17269 5.70383 8.10863 5.89579 8.38141C6.08774 8.65419 6.24478 8.88284 6.24478 8.88953C6.24478 8.89623 6.1733 8.98231 6.08595 9.08081C5.99859 9.17931 5.75253 9.45815 5.53917 9.70044C5.3258 9.94273 4.96611 10.3511 4.73985 10.6079C4.51361 10.8648 4.11558 11.3167 3.85534 11.6123C3.59511 11.9079 3.12714 12.4394 2.8154 12.7933C1.85126 13.888 1.71212 14.0461 0.978182 14.8811C0.586289 15.3269 0.210488 15.7531 0.143086 15.8283C0.0756833 15.9035 0.020531 15.9729 0.020531 15.9825C0.020531 15.9938 0.266687 16 0.714057 16H1.40757L2.17001 15.1322C2.58936 14.6548 3.00303 14.185 3.08927 14.0881C3.27576 13.8786 4.69796 12.2623 4.8175 12.1241C4.86327 12.0711 4.92975 11.9958 4.96524 11.9567C5.00075 11.9175 5.28055 11.6 5.58703 11.2511C5.8935 10.9022 6.15268 10.6082 6.16295 10.5977C6.17323 10.5873 6.33548 10.4029 6.5235 10.1881C6.71153 9.97318 6.87118 9.79736 6.87827 9.79736C6.88538 9.79736 7.85124 11.1632 9.02466 12.8326C10.1981 14.502 11.1791 15.8974 11.2047 15.9335L11.2512 15.9992L13.6301 15.9996C15.5864 15.9999 16.0074 15.9959 15.9999 15.9769C15.992 15.9566 14.8522 14.3329 11.9283 10.1762C9.82332 7.18386 9.54342 6.78174 9.55145 6.76134C9.55925 6.7415 9.84596 6.41397 11.7309 4.27167C12.0542 3.90419 12.4999 3.39736 12.7213 3.14537C12.9428 2.89339 13.1663 2.63965 13.2181 2.5815C13.27 2.52335 13.5424 2.2141 13.8236 1.89427C14.1048 1.57445 14.5828 1.03101 14.8859 0.686643C15.1889 0.342273 15.448 0.0469077 15.4616 0.0302557C15.4849 0.0017623 15.4453 0 14.7819 0H14.0775L13.7642 0.356828C13.3472 0.831718 12.5934 1.68809 12.3794 1.93008C12.2848 2.037 12.1668 2.17138 12.1172 2.22869C12.0676 2.28599 11.9697 2.39674 11.8997 2.4748C11.8297 2.55286 11.4768 2.95374 11.1155 3.36564C10.7543 3.77753 10.4538 4.1185 10.4477 4.12335C10.4416 4.12819 10.3642 4.21589 10.2757 4.31825C10.1208 4.49729 9.96312 4.67649 9.24013 5.49542C8.92278 5.85489 8.90651 5.87033 8.87976 5.83729C8.86437 5.81825 7.93435 4.49715 6.81309 2.90152L4.77442 0.000369975L2.38721 0.000176384L0 0L0.0979642 0.136564ZM1.96115 1.08796C1.97908 1.1147 2.4251 1.73921 2.95232 2.47577C3.95222 3.8727 7.88144 9.36539 10.4084 12.8987C11.2159 14.0278 11.8864 14.9615 11.8984 14.9737C11.9157 14.9911 12.1508 14.9949 12.9971 14.9913L14.0738 14.9868L11.2562 11.0485C9.70657 8.88238 7.46293 5.74626 6.27037 4.0793L4.10205 1.04846L3.01532 1.04391L1.92858 1.03937L1.96115 1.08796Z"
        fill={color}
      />
    </svg>
  ),
  github: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0099 0.277344C5.36875 0.277344 0 5.68567 0 12.3765C0 17.7249 3.43994 22.2521 8.21205 23.8545C8.80869 23.9749 9.02724 23.5941 9.02724 23.2738C9.02724 22.9933 9.00757 22.0318 9.00757 21.0301C5.6667 21.7514 4.97099 19.5878 4.97099 19.5878C4.43409 18.1855 3.63858 17.8252 3.63858 17.8252C2.54511 17.084 3.71823 17.084 3.71823 17.084C4.93117 17.1641 5.56763 18.3259 5.56763 18.3259C6.64118 20.1687 8.37111 19.648 9.06706 19.3274C9.16638 18.5462 9.48473 18.0054 9.82275 17.7049C7.15817 17.4244 4.35469 16.3829 4.35469 11.7354C4.35469 10.4133 4.8316 9.33162 5.58729 8.49038C5.46807 8.18997 5.0504 6.94778 5.70677 5.28521C5.70677 5.28521 6.72083 4.96464 9.00732 6.52716C9.98625 6.26231 10.9958 6.12758 12.0099 6.12645C13.024 6.12645 14.0577 6.26682 15.0123 6.52716C17.299 4.96464 18.3131 5.28521 18.3131 5.28521C18.9695 6.94778 18.5515 8.18997 18.4323 8.49038C19.2079 9.33162 19.6652 10.4133 19.6652 11.7354C19.6652 16.3829 16.8617 17.4043 14.1772 17.7049C14.6148 18.0855 14.9924 18.8065 14.9924 19.9484C14.9924 21.5709 14.9727 22.8731 14.9727 23.2736C14.9727 23.5941 15.1915 23.9749 15.7879 23.8547C20.56 22.2519 23.9999 17.7249 23.9999 12.3765C24.0196 5.68567 18.6312 0.277344 12.0099 0.277344Z"
        fill={color}
      />
    </svg>
  ),
  'more-menu': ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="32" y1="2" x2="9" y2="2" stroke={color} strokeWidth="4" />
      <line x1="32" y1="12" y2="12" stroke={color} strokeWidth="4" />
      <line x1="32" y1="22" x2="9" y2="22" stroke={color} strokeWidth="4" />
    </svg>
  ),
  close: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.82845 0.272185L25.4559 22.8996L22.6274 25.728L2.28882e-05 3.10061L2.82845 0.272185Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6274 0.272185L3.33786e-06 22.8996L2.82843 25.728L25.4558 3.10061L22.6274 0.272185Z"
        fill={color}
      />
    </svg>
  ),
  caret: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4199 7.52002L11.9999 14.94L4.57994 7.52002L2.80994 9.29002L11.9999 18.48L21.1899 9.29002L19.4199 7.52002Z"
        fill={color}
      />
    </svg>
  ),
  'external-link': ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4437 2.49805H19.8102L8.65655 14.0648L10.4562 15.8002L21.5021 4.34514V9.06774H24.0021V-0.00195312H14.4437V2.49805Z"
        fill={color}
      />
      <path
        d="M-0.00207138 5.86301V24.0024H19.1147V11.9666H16.6147V21.5024H2.49793V8.36301H12.3258V5.86301H-0.00207138Z"
        fill={color}
      />
    </svg>
  ),
  farcaster: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.11859 0.043457H19.5979V21.9565H17.3257V11.9189H17.3034C17.0523 9.14476 14.7103 6.97081 11.8582 6.97081C9.00619 6.97081 6.66419 9.14476 6.41307 11.9189H6.39078V21.9565H4.11859V0.043457Z"
        fill={color}
      />
      <path
        d="M0.000244141 3.1537L0.923321 6.26393H1.70439V18.8463C1.31223 18.8463 0.994327 19.1627 0.994327 19.5531V20.4014H0.852315C0.46016 20.4014 0.142256 20.7179 0.142256 21.1083V21.9565H8.09492V21.1083C8.09492 20.7179 7.77702 20.4014 7.38486 20.4014H7.24285V19.5531C7.24285 19.1627 6.92494 18.8463 6.53279 18.8463H5.68072V3.1537H0.000244141Z"
        fill={color}
      />
      <path
        d="M17.4677 18.8463C17.0755 18.8463 16.7576 19.1627 16.7576 19.5531V20.4014H16.6156C16.2235 20.4014 15.9056 20.7179 15.9056 21.1083V21.9565H23.8582V21.1083C23.8582 20.7179 23.5403 20.4014 23.1482 20.4014H23.0062V19.5531C23.0062 19.1627 22.6883 18.8463 22.2961 18.8463V6.26393H23.0772L24.0002 3.1537H18.3198V18.8463H17.4677Z"
        fill={color}
      />
    </svg>
  ),
  copy: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 0V3H7V2H14V10H13V12H16V0H5Z" fill={color} />
      <path d="M10 6V14H3V6H10ZM12 4H1V16H12V4Z" fill={color} />
    </svg>
  ),
  spinner: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
        fill={color}
      />
      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        fill={color}
      />
    </svg>
  ),
  backArrow: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.82271 15.414L8.29702 14.0626L3.65737 9.00113L15.8841 9.00113V7.00113L3.79835 7.00113L8.79835 2.00113L7.38414 0.586914L0 7.97105L6.82271 15.414Z"
        fill={color}
      />
    </svg>
  ),
  search: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 21.4785L18.0768 15.5553C19.0856 14.0709 19.6765 12.2694 19.6765 10.3382C19.6765 5.1644 15.4826 0.970581 10.3088 0.970581C5.13499 0.970581 0.941162 5.1644 0.941162 10.3382C0.941162 15.5121 5.13499 19.7059 10.3088 19.7059C12.24 19.7059 14.0415 19.115 15.5403 18.1062L21.4491 24.0294L24 21.4785ZM10.3088 16.1029C7.12381 16.1029 4.5441 13.5232 4.5441 10.3382C4.5441 7.15323 7.12381 4.57352 10.3088 4.57352C13.4938 4.57352 16.0735 7.15323 16.0735 10.3382C16.0735 13.5232 13.4938 16.1029 10.3088 16.1029Z"
        fill={color}
      />
    </svg>
  ),
  chevronRight: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.60986 3.05001L9.55986 8.00001L4.60986 12.95L6.02986 14.36L12.3899 8.00001L6.02986 1.64001L4.60986 3.05001Z"
        fill={color}
      />
    </svg>
  ),
  blueCircle: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1"
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill={color} />
    </svg>
  ),
  plus: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.9 0H5.1V5.09998H0V6.89998H5.1V12H6.9V6.89998H12V5.09998H6.9V0Z" fill={color} />
    </svg>
  ),
  cross: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.04795 1L1 2.04795L4.95205 6L1 9.95205L2.04795 11L6 7.04795L9.95205 11L11 9.95205L7.04795 6L11 2.04795L9.95205 1L6 4.95205L2.04795 1Z"
        fill={color}
      />
    </svg>
  ),
  arrowRight: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.06143 0.586914L7.58712 1.93836L12.2268 6.99979H0V8.99979H12.0858L7.08579 13.9998L8.5 15.414L15.8841 8.02987L9.06143 0.586914Z"
        fill={color}
      />
    </svg>
  ),
  website: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58667 0 0 3.58667 0 8C0 12.4133 3.58667 16 8 16C12.4133 16 16 12.4133 16 8C16 3.58667 12.4133 0 8 0ZM13.8933 7H11.6267C11.5467 5.36 11.2133 3.86667 10.7333 2.69333C12.3867 3.54667 13.5733 5.12 13.8933 7ZM8 13.9733C7.52 13.64 6.56 11.9333 6.37333 9H9.62667C9.44 11.92 8.48 13.64 8 13.9733ZM6.37333 7C6.56 4.08 7.52 2.36 8 2.02667C8.48 2.36 9.44 4.06667 9.62667 7H6.37333ZM5.26667 2.69333C4.78667 3.86667 4.46667 5.36 4.37333 7H2.10667C2.42667 5.12 3.61333 3.54667 5.26667 2.69333ZM2.10667 9H4.37333C4.45333 10.64 4.78667 12.1333 5.26667 13.3067C3.61333 12.4533 2.42667 10.88 2.10667 9ZM10.7333 13.3067C11.2133 12.1333 11.5333 10.64 11.6267 9H13.8933C13.5733 10.88 12.3867 12.4533 10.7333 13.3067Z"
        fill={color}
      />
    </svg>
  ),
  checkmark: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 1.73441L5.47931 12.8854L0 7.0778L1.50605 5.65687L5.47931 9.86816L14.4939 0.313477L16 1.73441Z"
        fill={color}
      />
    </svg>
  ),
  info: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM9 12.5H7V10.5H9V12.5ZM9 9H7V3.5H9V9Z"
        fill={color}
      />
    </svg>
  ),
  pen: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 2L12.5 0L16 3.5L14 5.5L10.5 2Z" fill={color} />
      <path d="M0.5 12L9.5 3L13 6.5L4 15.5L0 16.0016L0.5 12Z" fill={color} />
    </svg>
  ),
  diagonalUpArrow: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5858 4H3.00001V2H14V13H12V5.41422L2.70712 14.7071L1.29291 13.2929L10.5858 4Z"
        fill={color}
      />
    </svg>
  ),
  baseOrgDiagonalUpArrow: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.414 6.908L5.972 1.35H1.338L2.472 0.215999H7.974V5.732L6.84 6.852V2.218L1.282 7.79L0.414 6.908Z"
        fill={color}
      />
    </svg>
  ),
  basenamesIcon: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.59193 15.3012C1.50194 14.547 1.45383 13.779 1.45383 13C1.45383 12.221 1.50194 11.4545 1.59193 10.6988C-0.211134 9.64368 -0.685953 6.91115 1.2366 5.43859C2.03882 4.82412 2.8907 4.27016 3.78603 3.78604C4.27171 2.89226 4.82412 2.03883 5.43859 1.2366C6.91115 -0.684399 9.64368 -0.211132 10.6988 1.59194C11.453 1.50194 12.221 1.45384 13 1.45384C13.779 1.45384 14.5455 1.50194 15.3012 1.59194C16.3563 -0.211132 19.0889 -0.685951 20.5614 1.2366C21.1759 2.03883 21.7298 2.89071 22.214 3.78604C23.1077 4.27172 23.9612 4.82412 24.7634 5.43859C26.6844 6.91115 26.2111 9.64368 24.4081 10.6988C24.4981 11.453 24.5462 12.221 24.5462 13C24.5462 13.779 24.4981 14.5455 24.4081 15.3012C26.2111 16.3563 26.686 19.0889 24.7634 20.5614C23.9612 21.1759 23.1093 21.7298 22.214 22.214C21.7283 23.1077 21.1759 23.9612 20.5614 24.7634C19.0889 26.6844 16.3563 26.2111 15.3012 24.4081C14.547 24.4981 13.779 24.5462 13 24.5462C12.221 24.5462 11.4545 24.4981 10.6988 24.4081C9.64368 26.2111 6.91115 26.686 5.43859 24.7634C4.82412 23.9612 4.27016 23.1093 3.78603 22.214C2.89226 21.7283 2.03882 21.1759 1.2366 20.5614C-0.684401 19.0889 -0.211134 16.3563 1.59193 15.3012ZM14.1018 13C14.1018 16.0844 15.4639 18.5848 17.1441 18.5848C18.8243 18.5848 20.1864 16.0844 20.1864 13C20.1864 10.0937 18.9771 7.70589 17.4318 7.43983C18.0096 7.6937 18.4392 8.64766 18.4392 9.78571C18.4392 11.1179 17.8506 12.1978 17.1245 12.1978C16.3984 12.1978 15.8098 11.1179 15.8098 9.78571C15.8098 8.66624 16.2254 7.72488 16.7891 7.45282C15.2761 7.77563 14.1018 10.1361 14.1018 13ZM5.8224 13C5.8224 16.0844 7.18449 18.5848 8.86471 18.5848C10.5449 18.5848 11.907 16.0844 11.907 13C11.907 10.1167 10.7168 7.74376 9.18901 7.44658C9.75931 7.71023 10.1815 8.65752 10.1815 9.78571C10.1815 11.1179 9.59286 12.1978 8.86676 12.1978C8.14067 12.1978 7.55205 11.1179 7.55205 9.78571C7.55205 8.65557 7.97567 7.70696 8.54746 7.44523C7.01633 7.73646 5.8224 10.1123 5.8224 13Z"
        fill={color}
      />
    </svg>
  ),
  clock: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12ZM18.5 12V14.5H10.5V4H13V12H18.5Z"
        fill={color}
      />
    </svg>
  ),
  blockchainNetwork: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0H0V8H8V0Z" fill={color} />
      <path d="M8 16H0V24H8V16Z" fill={color} />
      <path d="M10 2.5H14V5.5H10V2.5Z" fill={color} />
      <path d="M14 18.5H10V21.5H14V18.5Z" fill={color} />
      <path d="M21.5 10V14H18.5V10H21.5Z" fill={color} />
      <path d="M5.5 14V10H2.5L2.5 14H5.5Z" fill={color} />
      <path d="M16 0H24V8H16V0Z" fill={color} />
      <path d="M24 16H16V24H24V16Z" fill={color} />
    </svg>
  ),
  cash: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6C18 8.20914 19.7909 10 22 10V14C19.7909 14 18 15.7909 18 18H6C6 15.7909 4.20914 14 2 14L2 18V10C4.20914 10 6 8.20914 6 6H18ZM0 4V20H24V4H0ZM15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
        fill={color}
      />
    </svg>
  ),
  questionMark: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.38 0 0 5.38 0 12C0 18.62 5.38 24 12 24C18.62 24 24 18.62 24 12C24 5.38 18.62 0 12 0ZM11.64 18.76C10.72 18.76 9.98 18.08 9.98 17.2C9.98 16.32 10.72 15.64 11.64 15.64C12.54 15.64 13.28 16.32 13.28 17.2C13.26 18.06 12.54 18.76 11.64 18.76ZM14.74 11.32C13.88 12.14 12.96 12.88 12.86 13.84V14.28H10.44V13.74C10.44 12.34 11.38 11.46 12.22 10.62C12.88 10 13.44 9.42 13.44 8.7C13.44 7.88 13 7.36 12.06 7.36C11.06 7.36 10.4 8.08 10.28 9.22H7.78C7.88 6.72 9.68 5.24 12.22 5.24C14.86 5.24 16.22 6.58 16.22 8.48C16.22 9.74 15.52 10.56 14.74 11.32Z"
        fill={color}
      />
    </svg>
  ),
  dotGrid: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99998 4.99999C6.99998 6.10455 6.10455 6.99998 4.99999 6.99998C3.89543 6.99998 3 6.10455 3 4.99999C3 3.89543 3.89543 3 4.99999 3C6.10455 3 6.99998 3.89543 6.99998 4.99999Z"
        fill={color}
      />
      <path
        d="M6.99998 12C6.99998 13.1046 6.10455 14 4.99999 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 4.99999 10C6.10455 10 6.99998 10.8954 6.99998 12Z"
        fill={color}
      />
      <path
        d="M6.99998 19C6.99998 20.1046 6.10455 21 4.99999 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 4.99999 17C6.10455 17 6.99998 17.8954 6.99998 19Z"
        fill={color}
      />
      <path
        d="M14 4.99999C14 6.10455 13.1046 6.99998 12 6.99998C10.8954 6.99998 10 6.10455 10 4.99999C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 4.99999Z"
        fill={color}
      />
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill={color}
      />
      <path
        d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z"
        fill={color}
      />
      <path
        d="M21 4.99999C21 6.10455 20.1046 6.99998 19 6.99998C17.8954 6.99998 17 6.10455 17 4.99999C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 4.99999Z"
        fill={color}
      />
      <path
        d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
        fill={color}
      />
      <path
        d="M21 19C21 20.1046 20.1046 21 19 21C17.8954 21 17 20.1046 17 19C17 17.8954 17.8954 17 19 17C20.1046 17 21 17.8954 21 19Z"
        fill={color}
      />
    </svg>
  ),
  people: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5835 6.58333C16.5835 9.11464 14.5315 11.1667 12.0002 11.1667C9.46887 11.1667 7.41684 9.11464 7.41684 6.58333C7.41684 4.05203 9.46887 2 12.0002 2C14.5315 2 16.5835 4.05203 16.5835 6.58333ZM15.3 12C17.35 12.1002 19.15 13.4357 19.8083 15.4057L22 22H2L4.19167 15.4057C4.85 13.4357 6.65 12.1002 8.7 12C8.88333 12.1002 10.2833 12.818 12 12.818C13.7167 12.818 15.1167 12.1002 15.3 12ZM6 9C6 10.6569 4.65685 12 3 12C1.34315 12 0 10.6569 0 9C0 7.34315 1.34315 6 3 6C4.65685 6 6 7.34315 6 9ZM21 12C22.6569 12 24 10.6569 24 9C24 7.34315 22.6569 6 21 6C19.3431 6 18 7.34315 18 9C18 10.6569 19.3431 12 21 12Z"
        fill={color}
      />
    </svg>
  ),
  builderHammer: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3 11.45L14.3 12.72L12.78 13.69L18.49 22.63C19.06 23.52 20.02 24.01 21.01 24.01C21.58 24.01 22.15 23.85 22.65 23.51C24 22.61 24.39 20.79 23.52 19.42L17.82 10.48L16.3 11.45Z"
        fill={color}
      />
      <path
        d="M11.16 11.16L12.68 10.19L14.69 8.92L16.21 7.95L24 3C24 3 19.96 0 14.28 0C11.02 0 8.88 0.78 6.5 2.25L0 6.5L5.5 14.75L11.16 11.15V11.16Z"
        fill={color}
      />
    </svg>
  ),
  eye: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.131956 12.5505C2.58714 17.4562 7.13762 20.5 12 20.5C16.8624 20.5 21.4049 17.4481 23.868 12.5505C24.044 12.2024 24.044 11.7976 23.868 11.4495C21.4129 6.54381 16.8624 3.5 12 3.5C7.13762 3.5 2.58714 6.54381 0.131956 11.4495C-0.0439853 11.7976 -0.0439853 12.2024 0.131956 12.5505ZM15.5987 11.9999C15.5987 14.0118 13.9875 15.6428 11.9999 15.6428C10.0124 15.6428 8.40117 14.0118 8.40117 11.9999C8.40117 9.98802 10.0124 8.35706 11.9999 8.35706C13.9875 8.35706 15.5987 9.98802 15.5987 11.9999Z"
        fill={color}
      />
    </svg>
  ),

  map: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4424 23.8252L11.5273 23.8726L11.5612 23.8916C11.6958 23.9627 11.8464 24 11.9994 24C12.1524 24 12.303 23.9627 12.4376 23.8916L12.4715 23.8738L12.5576 23.8252C13.0317 23.5503 13.4943 23.2569 13.9442 22.9457C15.1092 22.1415 16.1976 21.2362 17.1964 20.2409C19.5527 17.8822 22 14.3383 22 9.77851C22 7.18509 20.9464 4.69789 19.0711 2.86406C17.1957 1.03023 14.6522 0 12 0C9.34784 0 6.8043 1.03023 4.92893 2.86406C3.05357 4.69789 2 7.18509 2 9.77851C2 14.3371 4.44848 17.8822 6.80364 20.2409C7.80199 21.2362 8.89003 22.1414 10.0545 22.9457C10.5049 23.2569 10.9679 23.5503 11.4424 23.8252ZM12 13.3343C12.9644 13.3343 13.8893 12.9597 14.5713 12.2929C15.2532 11.626 15.6364 10.7216 15.6364 9.77851C15.6364 8.83545 15.2532 7.93101 14.5713 7.26416C13.8893 6.59732 12.9644 6.22269 12 6.22269C11.0356 6.22269 10.1107 6.59732 9.4287 7.26416C8.74675 7.93101 8.36364 8.83545 8.36364 9.77851C8.36364 10.7216 8.74675 11.626 9.4287 12.2929C10.1107 12.9597 11.0356 13.3343 12 13.3343Z"
        fill={color}
      />
    </svg>
  ),
  list: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0.75H5.5V3.25H16V0.75Z" fill={color} />
      <path
        d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
        fill={color}
      />
      <path
        d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"
        fill={color}
      />
      <path
        d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"
        fill={color}
      />
      <path d="M16 6.75H5.5V9.25H16V6.75Z" fill={color} />
      <path d="M16 12.75H5.5V15.25H16V12.75Z" fill={color} />
    </svg>
  ),
  verticalDots: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        fill={color}
      />
    </svg>
  ),
  transfer: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.43483 1.93433L5.5662 3.0657L3.93188 4.70001H10.2505V6.30001H3.93188L5.5662 7.93433L4.43483 9.0657L0.869141 5.50001L4.43483 1.93433ZM11.5662 7.93433L15.1319 11.5L11.5662 15.0657L10.4348 13.9343L12.0691 12.3H5.75051V10.7H12.0691L10.4348 9.0657L11.5662 7.93433Z"
        fill={color}
      />
    </svg>
  ),
  terminal: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.90625 10.8562C0.90625 11.409 1.2795 11.8562 1.74084 11.8562H13.0717C13.533 11.8562 13.9062 11.409 13.9062 10.8562C13.9062 10.3034 13.533 9.8562 13.0717 9.8562H1.74084C1.2795 9.8562 0.90625 10.3034 0.90625 10.8562Z"
        fill={color}
      />
      <path
        d="M1.22239 7.27804C1.43312 7.48877 1.7081 7.59339 1.9831 7.59339C2.25809 7.59339 2.53309 7.48877 2.74381 7.27804L5.434 4.58785C5.85547 4.16788 5.85547 3.48637 5.434 3.06639L2.82751 0.459902C2.40604 0.0384311 1.72602 0.0384311 1.30605 0.459902C0.884577 0.879874 0.884577 1.56139 1.30605 1.98136L3.15033 3.82564L1.22235 5.75512C0.800882 6.17509 0.800882 6.8566 1.22235 7.27657L1.22239 7.27804Z"
        fill={color}
      />
    </svg>
  ),
  wallet: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M0.98877 7.99512C0.98877 11.8607 4.12321 14.9951 7.98877 14.9951C11.8543 14.9951 14.9888 11.8607 14.9888 7.99512C14.9888 4.12956 11.8543 0.995117 7.98877 0.995117C4.12321 0.995117 0.98877 4.12956 0.98877 7.99512ZM6.19988 5.73956H9.77766C10.0363 5.73956 10.2443 5.94762 10.2443 6.20623V9.78401C10.2443 10.0426 10.0363 10.2507 9.77766 10.2507H6.19988C5.94127 10.2507 5.73321 10.0426 5.73321 9.78401V6.20623C5.73321 5.94762 5.94127 5.73956 6.19988 5.73956Z"
      />
    </svg>
  ),
  hamburger: ({ color, width, height }: SvgProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.9883 4.59512H0.988292V2.99512H14.9883V4.59512Z" fill={color} />
      <path d="M14.9883 8.79511H0.988281V7.19511H14.9883V8.79511Z" fill={color} />
      <path d="M0.988292 12.9951H14.9883V11.3951H0.988292V12.9951Z" fill={color} />
    </svg>
  ),
};

export function Icon({ name, color = 'white', width = '24', height = '24' }: IconProps) {
  const icon = ICONS[name];
  if (icon) {
    return icon({ color, width, height });
  }
  return null;
}
