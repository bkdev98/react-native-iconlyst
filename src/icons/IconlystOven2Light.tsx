import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven2Light = ({
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
      d="M8.213 3h7.575c2.647 0 4.294 1.87 4.294 4.514v8.972c0 2.646-1.647 4.514-4.295 4.514H8.213c-2.647 0-4.295-1.868-4.295-4.514V7.514C3.918 4.869 5.573 3 8.213 3M8.235 6.03h-.01M15.785 6.03h-.01M12.01 6.03H12M3.918 8.481h16.165M15.077 12.677H8.93m-.005 3.503h6.152"
    />
  </Svg>
);
export default IconlystOven2Light;
