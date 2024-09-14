import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieBroken = ({
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
      d="M12.083 20.436h4.516c2.764 0 4.484-1.951 4.484-4.712v-7.45c0-2.761-1.72-4.711-4.483-4.711H7.566c-2.755 0-4.482 1.95-4.482 4.711v7.45c0 2.76 1.718 4.712 4.482 4.712h1.195M3.084 8.5h18M8.33 8.496 6.04 3.794m6.731 4.702-2.417-4.93m6.868 4.93-2.417-4.93"
    />
  </Svg>
);
export default IconlystMovieBroken;
