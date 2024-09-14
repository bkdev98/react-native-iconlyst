import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovie2Broken = ({
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
      d="M3.7 11.758V7.776C3.7 4.978 5.444 3 8.245 3h8.012C19.058 3 20.8 4.978 20.8 7.776v8.45c0 2.797-1.75 4.774-4.543 4.774H8.244c-2.8 0-4.544-1.977-4.544-4.775v-1.278"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.513 13.121c-.79 0-1.431.64-1.431 1.43v1.317c0 .79.64 1.43 1.43 1.43h2.177c.79 0 1.431-.64 1.431-1.43v-1.316c0-.79-.64-1.43-1.43-1.43M9.273 7.476V3m5.954 4.476v-2.03M3.707 7.477h17.086"
    />
  </Svg>
);
export default IconlystMovie2Broken;
