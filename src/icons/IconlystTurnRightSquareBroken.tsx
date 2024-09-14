import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightSquareBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.82 12.512 1.944 1.944L13.82 16.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.77 14.453h-4.618a2.92 2.92 0 0 1 0-5.84h4.284"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.198 21.25h.776c2.945 0 5.026-1.835 5.026-4.783V8.032c0-2.94-2.081-4.782-5.026-4.782H8.026C5.081 3.25 3 5.084 3 8.032v8.434c0 2.949 2.081 4.784 5.026 4.784h3.736"
    />
  </Svg>
);
export default IconlystTurnRightSquareBroken;
