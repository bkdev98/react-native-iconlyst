import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketTwoTone = ({
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
      d="M14.824 15.572h-4.72M15.664 12.276h-6.4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.586 19.725c-1.131 0-2.608-.774-2.979-2.795l-.97-4.653c-.645-2.778.57-4.078 2.876-4.078h11.903c2.307 0 3.523 1.3 2.876 4.078l-.97 4.653c-.37 2.021-1.847 2.795-2.979 2.795z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.758 4.273 7.71 8.198M17.219 8.198l-2.048-3.925"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShoppingBasketTwoTone;
