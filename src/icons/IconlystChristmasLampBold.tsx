import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasLampBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.677 9.334a1.393 1.393 0 0 0 .138-1.843 1.38 1.38 0 0 0-.914-.532l-3.002-.431a.4.4 0 0 1-.302-.216l-1.34-2.68q-.003-.002-.004-.006a1.4 1.4 0 0 0-.603-.602 1.4 1.4 0 0 0-1.074-.092 1.4 1.4 0 0 0-.828.7L9.406 6.31a.4.4 0 0 1-.306.219l-2.995.43a1.388 1.388 0 0 0-.78 2.376l2.173 2.087a.38.38 0 0 1 .112.34l-.515 2.95c-.047.303.002.605.145.879a1.404 1.404 0 0 0 1.89.582l1.213-.628-2.201 5.446a1 1 0 0 0 .927 1.375h5.859a1 1 0 0 0 .928-1.375l-2.204-5.451 1.215.629c.267.143.58.197.88.147a1.403 1.403 0 0 0 1.16-1.611l-.514-2.944a.38.38 0 0 1 .114-.342z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasLampBold;
