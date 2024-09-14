import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpChartBroken = ({
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
      d="M14.914 3.79H8.103c-2.824 0-4.573 2-4.573 4.82v7.576C3.53 19.01 5.245 21 8.103 21h.47M20.737 9.59v6.597c0 2.822-1.752 4.813-4.574 4.813h-4.03"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.715 14.719 2.805-3.645 3.2 2.512 2.745-3.543M21.47 4.802A1.802 1.802 0 1 1 19.67 3"
    />
  </Svg>
);
export default IconlystUpChartBroken;
