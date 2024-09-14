import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLemonSliceLight = ({
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
      d="M10.97 18.254a7.5 7.5 0 0 1-3.948-.334c-1.047-.481-2.037.654-3.127-.436s.045-2.08-.436-3.127c-1.05-2.825-.264-6.092 1.992-8.284 2.186-2.249 5.44-3.037 8.261-2 1.085.48 2.08-.801 3.238.356s-.124 2.153.356 3.238a7.45 7.45 0 0 1 .394 3.473"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.335 9.489a6.378 6.378 0 0 0 9.02 9.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.162 11.67c2.475 2.474 3.5 5.498 2.28 6.72-1.222 1.22-4.246.195-6.721-2.28s-3.5-5.5-2.28-6.72c1.222-1.222 4.246-.196 6.721 2.28M20.442 18.39l-9-9m4.5 8.478V9.912m-3.979 3.978h7.957"
    />
  </Svg>
);
export default IconlystLemonSliceLight;
