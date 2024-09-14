import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartCheckOutline = ({
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
      d="M7.952 17.121a2.515 2.515 0 0 1-2.49-2.3L4.572 4.236l-1.453-.25a.75.75 0 0 1 .256-1.479l2.024.35a.75.75 0 0 1 .619.677l.233 2.71c13.875.005 13.918.011 13.988.021a2.053 2.053 0 0 1 1.741 2.33l-.923 6.38a2.514 2.514 0 0 1-2.475 2.146zM6.373 7.745l.583 6.955a1.01 1.01 0 0 0 1 .921h10.622a1.01 1.01 0 0 0 .992-.86l.923-6.383a.553.553 0 0 0-.47-.628c-.201.003-8.615-.004-13.646-.005z"
    />
    <Path
      fill={props.color}
      d="M12.714 13.726a.75.75 0 0 1-.53-.22l-1.339-1.337a.75.75 0 0 1 1.06-1.062l.81.808L14.86 9.77a.75.75 0 1 1 1.06 1.06l-2.676 2.673a.75.75 0 0 1-.53.223M7.54 21.501a1.23 1.23 0 1 1 .003-2.462 1.23 1.23 0 0 1-.002 2.462M18.562 21.501a1.23 1.23 0 1 1 .002-2.462 1.23 1.23 0 0 1-.002 2.462"
    />
  </Svg>
);
export default IconlystShoppingCartCheckOutline;
