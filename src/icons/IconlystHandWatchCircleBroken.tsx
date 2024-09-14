import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandWatchCircleBroken = ({
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
      d="M18.96 11.999a6.96 6.96 0 1 0-.825 3.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.197 17.04.723 3.444A1.91 1.91 0 0 0 9.789 22h4.164c.9 0 1.678-.628 1.866-1.508l.68-3.183M16.8 6.961l-.724-3.448A1.905 1.905 0 0 0 14.213 2h-4.166c-.901 0-1.68.63-1.868 1.511l-.681 3.18M14.168 13.602l-2.24-1.336V9.385"
    />
  </Svg>
);
export default IconlystHandWatchCircleBroken;
