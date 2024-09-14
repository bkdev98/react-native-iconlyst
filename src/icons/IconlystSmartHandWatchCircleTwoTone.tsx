import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartHandWatchCircleTwoTone = ({
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
      d="M19.46 11.999a6.96 6.96 0 1 0-13.92 0 6.96 6.96 0 0 0 13.92 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.7 17.04.722 3.444A1.91 1.91 0 0 0 10.29 22h4.163c.901 0 1.68-.63 1.868-1.511l.68-3.18M17.302 6.961l-.724-3.445A1.91 1.91 0 0 0 14.711 2H10.55c-.901 0-1.68.63-1.868 1.511L8 6.691"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSmartHandWatchCircleTwoTone;
