import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandWatchCircleTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.499 5.04a6.96 6.96 0 1 1 .001 13.92A6.96 6.96 0 0 1 12.5 5.04"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.697 17.04.724 3.444A1.91 1.91 0 0 0 10.288 22h4.164c.9 0 1.678-.628 1.866-1.508l.68-3.183M17.3 6.961l-.724-3.448A1.905 1.905 0 0 0 14.713 2h-4.166c-.901 0-1.68.63-1.868 1.511l-.681 3.18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.668 13.602-2.24-1.336V9.385"
    />
  </Svg>
);
export default IconlystHandWatchCircleTwoTone;
