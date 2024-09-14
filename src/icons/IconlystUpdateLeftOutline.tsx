import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdateLeftOutline = ({
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
      d="M2.582 8.57a.75.75 0 0 1 1.041.205l1.464 2.184 2.168-1.453a.75.75 0 0 1 .835 1.246l-2.791 1.87a.75.75 0 0 1-1.04-.205L2.376 9.611a.75.75 0 0 1 .205-1.04M19.264 11.26a.75.75 0 0 1 .478.319l1.881 2.806a.75.75 0 1 1-1.245.835l-1.464-2.183-2.168 1.453a.75.75 0 1 1-.835-1.246l2.79-1.87a.75.75 0 0 1 .563-.114"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 5.656a6.34 6.34 0 0 0-6.339 6.206.75.75 0 0 1-1.5-.031 7.841 7.841 0 0 1 14.294-4.286.75.75 0 1 1-1.234.853A6.33 6.33 0 0 0 12 5.656M19.105 11.403a.75.75 0 0 1 .734.765 7.841 7.841 0 0 1-14.294 4.285.75.75 0 0 1 1.234-.852 6.341 6.341 0 0 0 11.56-3.464.75.75 0 0 1 .766-.734"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpdateLeftOutline;
