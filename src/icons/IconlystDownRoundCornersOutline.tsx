import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownRoundCornersOutline = ({
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
      d="M11.998 7.379a.75.75 0 0 1 .75.75v5.927l1.74-1.746a.75.75 0 1 1 1.062 1.06l-3.02 3.03a.75.75 0 0 1-1.063 0l-3.018-3.031a.75.75 0 1 1 1.063-1.058l1.736 1.744V8.129a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75c-1.801 0-3.508 1.226-4.606 3.33a.75.75 0 0 1-.318.318C4.975 8.496 3.75 10.202 3.75 12.002s1.226 3.508 3.33 4.606a.75.75 0 0 1 .316.317C8.496 19.026 10.2 20.25 12 20.25s3.505-1.224 4.604-3.325a.75.75 0 0 1 .317-.317c2.103-1.099 3.329-2.805 3.329-4.606s-1.224-3.505-3.326-4.604a.75.75 0 0 1-.317-.318C15.508 4.976 13.8 3.75 12 3.75M6.175 6.18C7.45 3.87 9.535 2.25 12 2.25s4.55 1.62 5.825 3.93c2.307 1.275 3.925 3.36 3.925 5.822 0 2.465-1.62 4.55-3.928 5.825-1.275 2.306-3.36 3.923-5.822 3.923s-4.547-1.617-5.822-3.923c-2.309-1.275-3.928-3.36-3.928-5.825 0-2.463 1.618-4.547 3.925-5.822"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownRoundCornersOutline;
