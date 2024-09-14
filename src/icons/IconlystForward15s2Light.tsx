import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward15s2Light = ({
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
      d="M20.2 15.613c0 2.678-1.667 4.57-4.348 4.57H8.184c-2.681 0-4.35-1.892-4.35-4.57V8.387c0-2.678 1.669-4.57 4.35-4.57h7.668c2.673 0 4.349 1.892 4.349 4.57v3.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.834 10.465-1.652 1.652-1.643-1.642M11.443 14.556h1.815a1.314 1.314 0 1 0 0-2.628h-1.815V9.441h2.88M8.836 14.556V9.441"
    />
  </Svg>
);
export default IconlystForward15s2Light;
