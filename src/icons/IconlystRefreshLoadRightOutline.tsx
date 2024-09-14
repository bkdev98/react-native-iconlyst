import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshLoadRightOutline = ({
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
      d="M12.898 3.26a.75.75 0 0 1 .865.614l.007.043a.75.75 0 1 1-1.479.252l-.007-.043a.75.75 0 0 1 .614-.865m3.443 1.77a.75.75 0 0 1 1.06 0l.008.007a.75.75 0 1 1-1.06 1.06l-.008-.007a.75.75 0 0 1 0-1.06m2.505 3.31a.75.75 0 0 1 1.058-.07l.007.006a.75.75 0 1 1-.987 1.129l-.008-.007a.75.75 0 0 1-.07-1.058m.605 4.06a.75.75 0 0 1 1.06 0l.008.008a.75.75 0 1 1-1.06 1.06l-.008-.007a.75.75 0 0 1 0-1.06m-1.593 3.885a.75.75 0 0 1 1.059-.07l.007.006a.75.75 0 1 1-.988 1.129l-.007-.007a.75.75 0 0 1-.07-1.058M9.496 4.34a.75.75 0 0 1-.387.988 7.264 7.264 0 0 0-3.81 9.388c1.516 3.722 5.76 5.51 9.47 3.994a.75.75 0 1 1 .567 1.389c-4.48 1.83-9.598-.33-11.427-4.818-1.79-4.409.259-9.428 4.599-11.327a.75.75 0 0 1 .988.386"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.39 4.29a.75.75 0 0 1 .76-.74l4.674.065a.75.75 0 0 1 .74.76L9.5 9.023a.75.75 0 1 1-1.5-.02l.053-3.899-3.924-.053a.75.75 0 0 1-.74-.76"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshLoadRightOutline;
