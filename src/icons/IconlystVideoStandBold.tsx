import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoStandBold = ({
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
      d="M10.189 3.75h4.196a.75.75 0 0 0 0-1.5h-4.196a.75.75 0 0 0 0 1.5M12.828 10.355c-.56 0-1-.44-1-1 0-.55.44-1 1-1 .55 0 1 .45 1 1 0 .56-.45 1-1 1m8.805-2.472a1.6 1.6 0 0 0-1.097-.587 1.6 1.6 0 0 0-1.182.366L17.714 9c-.196.16-.496.02-.528-.23-.257-2.026-1.717-3.346-3.798-3.346h-5.89c-2.29 0-3.83 1.61-3.83 4v3.75c0 2.4 1.54 4.01 3.83 4.01H9.99l-2.453 3.373a.75.75 0 1 0 1.212.883l2.529-3.477 2.469 3.397a.75.75 0 0 0 1.212-.883l-2.393-3.293h.822c2.064 0 3.533-1.315 3.797-3.335.033-.25.333-.388.528-.228l1.622 1.328a1.55 1.55 0 0 0 1.052.369 1.603 1.603 0 0 0 1.601-1.609l.011-4.8a1.62 1.62 0 0 0-.366-1.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoStandBold;
