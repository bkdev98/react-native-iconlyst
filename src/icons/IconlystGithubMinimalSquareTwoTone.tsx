import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubMinimalSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.947C21 18.92 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.973V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.159 10.07c.534.561.832 1.305.832 2.08 0 3.18-3.05 3.885-4.99 3.885s-4.991-.712-4.991-3.87a3 3 0 0 1 .831-2.095 2.8 2.8 0 0 1 .05-2.09s.654-.194 2.168.82a7.4 7.4 0 0 1 3.881 0c1.514-1.014 2.169-.82 2.169-.82.284.664.302 1.413.05 2.09"
    />
  </Svg>
);
export default IconlystGithubMinimalSquareTwoTone;
