import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketPlusLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.023 14.881H11.06M13.043 16.861v-3.963"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.086 20.647c-1.131 0-2.608-.774-2.979-2.795l-.97-4.653c-.645-2.778.57-4.078 2.876-4.078h11.903c2.307 0 3.523 1.3 2.876 4.078l-.97 4.653c-.37 2.021-1.847 2.795-2.979 2.795z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.252 9.076-3.78-4.973a1.894 1.894 0 0 0-3.015 0l-3.78 4.973"
    />
  </Svg>
);
export default IconlystShoppingBasketPlusLight;
