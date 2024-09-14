import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowCircleTwoTone = ({
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
    <Circle
      cx={12.114}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.614 6.959 1.5 1.5 1.5-1.5M10.614 16.786l1.5-1.5 1.5 1.5M12.114 6v12M15.73 15.756l-.55-2.05 2.05-.548M7.22 10.842l2.049-.549-.55-2.049M17.31 14.937l-10.392-6M15.73 8.244l-.55 2.05 2.05.548M7.22 13.158l2.049.549-.55 2.049M17.31 9.063l-10.392 6"
    />
  </Svg>
);
export default IconlystSnowCircleTwoTone;
