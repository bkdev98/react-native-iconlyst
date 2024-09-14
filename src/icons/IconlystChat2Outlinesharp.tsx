import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChat2Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.268 6.643c-3.307-3.307-8.68-3.307-11.986 0a8.44 8.44 0 0 0-2.484 6c.001 1.679-.01 3.981-.023 5.862l-.017 2.378-.002.204.194-.001c.594-.004 1.42-.008 2.35-.01 1.857-.004 4.134 0 5.79.037a8.44 8.44 0 0 0 6.178-2.482 8.48 8.48 0 0 0 0-11.988M3 21.843l-.75-.007.008-.965.017-2.376c.012-1.88.024-4.178.023-5.851a9.94 9.94 0 0 1 2.923-7.06m0 0c3.892-3.894 10.215-3.895 14.107-.002 3.9 3.9 3.892 10.217 0 14.11a9.94 9.94 0 0 1-7.27 2.92c-1.637-.035-3.898-.04-5.755-.036a561 561 0 0 0-2.344.01l-.698.005-.253.002-.008-.75.007.75-.764.007.007-.764.75.007"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.716 12.27h1.599v1.5h-1.6zM11.45 12.27h1.599v1.5H11.45zM15.185 12.27h1.598v1.5h-1.599z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChat2Outlinesharp;
