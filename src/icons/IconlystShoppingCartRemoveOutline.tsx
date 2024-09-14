import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartRemoveOutline = ({
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
      d="M7.95 17.121a2.515 2.515 0 0 1-2.49-2.3L4.57 4.236l-1.453-.25a.75.75 0 0 1 .256-1.479l2.024.35a.75.75 0 0 1 .62.677l.232 2.71c13.875.005 13.918.011 13.988.021a2.054 2.054 0 0 1 1.742 2.328l-.924 6.381a2.51 2.51 0 0 1-2.475 2.147zM6.371 7.745l.583 6.955a1.02 1.02 0 0 0 1 .921h10.62a1.006 1.006 0 0 0 .991-.86l.924-6.383a.554.554 0 0 0-.469-.628c-.196.001-8.613-.003-13.645-.005z"
    />
    <Path
      fill={props.color}
      d="M14.88 12.305h-3.142a.75.75 0 1 1 0-1.5h3.141a.75.75 0 1 1 0 1.5M7.485 21.501a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462M18.511 21.501a1.231 1.231 0 1 1 .002-2.462 1.231 1.231 0 0 1-.002 2.462"
    />
  </Svg>
);
export default IconlystShoppingCartRemoveOutline;
