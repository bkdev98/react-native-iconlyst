import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshLoadLeftLight = ({
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
      d="m10.977 4-.007.006M7.13 5.56l-.008.008M4.59 8.833l-.007.007m-.564 4.09-.007.008m1.566 3.841-.008.006M19.86 4.3l-4.672.065.063 4.648"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.187 4.64c3.968 1.728 5.851 6.327 4.205 10.358a8.01 8.01 0 0 1-10.449 4.407"
    />
  </Svg>
);
export default IconlystRefreshLoadLeftLight;
