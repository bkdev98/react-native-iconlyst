import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartOutline = ({
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
      d="M7.95 17.121a2.514 2.514 0 0 1-2.49-2.3L4.571 4.236l-1.453-.25a.75.75 0 0 1 .256-1.479l2.024.35a.75.75 0 0 1 .62.677l.232 2.71c13.876 0 13.92.011 13.99.021a2.056 2.056 0 0 1 1.74 2.328l-.924 6.381a2.51 2.51 0 0 1-2.475 2.147zM6.371 7.745l.583 6.955a1.01 1.01 0 0 0 1 .921h10.622a1 1 0 0 0 .992-.86l.924-6.383a.546.546 0 0 0-.466-.628z"
    />
    <Path
      fill={props.color}
      d="M15.523 17.122h-.052a.75.75 0 0 1-.7-.8l.65-9.37a.752.752 0 0 1 1.5.1l-.649 9.369a.75.75 0 0 1-.749.7M11.158 17.12a.75.75 0 0 1-.747-.7l-.648-9.368a.752.752 0 1 1 1.5-.1l.648 9.37a.75.75 0 0 1-.7.8zM7.485 21.501a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462M18.508 21.501a1.231 1.231 0 1 0 0-2.462 1.231 1.231 0 0 0 0 2.462"
    />
  </Svg>
);
export default IconlystShoppingCartOutline;
