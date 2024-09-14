import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleepingBroken = ({
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
      d="M12.25 3a9 9 0 0 0-9 9c0 1.574.404 3.054 1.114 4.34M21.25 12a9 9 0 0 1-9 9 8.96 8.96 0 0 1-5.377-1.782M9.37 14.29c.701.911 1.734 1.48 2.88 1.48 1.147 0 2.18-.569 2.88-1.48M9.32 10.005v-.051M9.273 9.8a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.78 10.005v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M19.35 3.043l-.095.154a7 7 0 0 1-2.251 2.25l-.154.096.154.095a7 7 0 0 1 2.25 2.251l.096.154.095-.154a7 7 0 0 1 2.252-2.25l.153-.096-.154-.095a7 7 0 0 1-1.1-.846"
    />
  </Svg>
);
export default IconlystSleepingBroken;
