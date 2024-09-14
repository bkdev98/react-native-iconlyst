import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayLeftTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.317 20.014c-2.791-1.125-6.465-3.484-8.495-5.322q-2.778-2.441 0-4.882c2.03-1.838 5.704-4.197 8.495-5.322"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.318 20.016c2.27.72 3.594-.223 3.992-2.79a43 43 0 0 0 .258-4.974 43 43 0 0 0-.258-4.972c-.412-2.558-1.72-3.527-3.992-2.79"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlayLeftTwoTone;
