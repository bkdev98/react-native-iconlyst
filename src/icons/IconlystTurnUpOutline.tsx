import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUpOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.267 4.864a.75.75 0 0 1 1.06 0l2.797 2.797a.75.75 0 1 1-1.06 1.06L6.797 6.456 4.53 8.722a.75.75 0 1 1-1.06-1.06zM14.836 7.6a2.956 2.956 0 1 1 5.912 0 2.956 2.956 0 0 1-5.912 0m2.956-1.456a1.456 1.456 0 1 0 0 2.913 1.456 1.456 0 0 0 0-2.913"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.797 4.649a.75.75 0 0 1 .75.75v7.218a5.236 5.236 0 1 0 10.473 0 .75.75 0 0 1 1.5 0 6.736 6.736 0 0 1-13.473 0V5.4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnUpOutline;
