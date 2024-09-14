import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovie2Light = ({
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
      d="M16.008 21H7.995c-2.8 0-4.544-1.977-4.544-4.775v-8.45C3.451 4.979 5.195 3 7.996 3h8.012c2.8 0 4.543 1.978 4.543 4.776v8.45c0 2.797-1.75 4.774-4.543 4.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.44 17.299h-2.177c-.79 0-1.431-.64-1.431-1.431v-1.316c0-.79.64-1.43 1.43-1.43h2.177c.79 0 1.431.64 1.431 1.43v1.316c0 .79-.64 1.43-1.43 1.43"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.023 7.476V3m5.954 4.476V3M3.457 7.477h17.086"
    />
  </Svg>
);
export default IconlystMovie2Light;
