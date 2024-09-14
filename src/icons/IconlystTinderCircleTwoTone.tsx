import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTinderCircleTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.604 10.25c1.333 2.622.26 6.134-2.802 6.645-4.012.888-6.688-4.061-3.674-6.963.16-.16.604-.576.79-.71 0 .41.238 1.667.52 1.667 1.683 0 2.083-2.222 1.868-3.889 1.407.743 2.598 1.777 3.298 3.25Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTinderCircleTwoTone;
