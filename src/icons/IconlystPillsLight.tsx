import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsLight = ({
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
      d="m9.102 5.52-5.33 6.548a3.445 3.445 0 0 0 .468 4.82 3.374 3.374 0 0 0 4.777-.472l5.33-6.548a3.445 3.445 0 0 0-.467-4.82 3.373 3.373 0 0 0-4.778.472M17.272 19.733c-2.058 0-3.727-1.684-3.727-3.76 0-2.078 1.668-3.762 3.727-3.762S21 13.895 21 15.972s-1.67 3.76-3.728 3.76M19.936 13.36l-5.258 5.307M6.438 8.79l5.245 4.347"
    />
  </Svg>
);
export default IconlystPillsLight;
