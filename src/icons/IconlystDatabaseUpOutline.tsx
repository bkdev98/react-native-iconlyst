import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseUpOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.83 13.827a.75.75 0 0 1 1.061 0l2.81 2.81a.75.75 0 0 1-1.06 1.06l-2.28-2.279-2.28 2.28a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.361 13.607a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-6.642a.75.75 0 0 1 .75-.75M4.328 5.324a.75.75 0 0 1 .75.75v5.966l.003.018a1 1 0 0 0 .057.182c.07.165.229.437.601.732.757.6 2.45 1.336 6.154 1.336a.75.75 0 0 1 0 1.5c-3.861 0-5.95-.761-7.085-1.66-.573-.453-.886-.93-1.053-1.326a2.4 2.4 0 0 1-.15-.497 2 2 0 0 1-.026-.223v-.037000000000000005c0-.001 0-.002.75-.002h-.75V6.074a.75.75 0 0 1 .75-.75M19.458 5.324a.75.75 0 0 1 .75.75v4.99a.75.75 0 0 1-1.5 0v-4.99a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.328 11.313a.75.75 0 0 1 .75.75v5.966l.003.018c.006.033.02.097.057.182.07.165.229.437.601.732.757.599 2.45 1.335 6.154 1.335a.75.75 0 1 1 0 1.5c-3.861 0-5.95-.76-7.085-1.659-.573-.453-.886-.93-1.053-1.326a2.4 2.4 0 0 1-.15-.497 2 2 0 0 1-.026-.223v-.037000000000000005c0-.001 0-.002.75-.002h-.75v-5.99a.75.75 0 0 1 .75-.75M5.44 5.357c-.29.275-.362.493-.362.643s.073.368.361.644c.291.277.751.561 1.382.816 1.258.507 3.047.838 5.061.838 2.015 0 3.803-.331 5.061-.838.63-.255 1.091-.539 1.382-.816.289-.276.361-.493.361-.644 0-.15-.072-.368-.361-.643-.29-.277-.751-.561-1.382-.816-1.258-.507-3.047-.838-5.06-.838-2.015 0-3.804.33-5.062.838-.63.255-1.091.539-1.382.816m.82-2.207c1.476-.595 3.464-.947 5.622-.947s4.146.352 5.622.947c.736.297 1.382.67 1.856 1.122.476.453.826 1.037.826 1.728s-.35 1.276-.826 1.73c-.474.451-1.12.824-1.856 1.12-1.476.596-3.464.948-5.622.948S7.736 9.446 6.26 8.85c-.736-.297-1.382-.67-1.856-1.122-.476-.453-.826-1.038-.826-1.729 0-.69.35-1.275.826-1.728.474-.452 1.12-.825 1.856-1.122"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseUpOutline;