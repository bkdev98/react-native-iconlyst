import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileTouchIdTwoTone = ({
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
      d="M9.63 3.283h-.81A3.62 3.62 0 0 0 5.2 6.903l.001 10.763a3.62 3.62 0 0 0 3.618 3.617h5.515a3.62 3.62 0 0 0 3.618-3.618l-.001-4.464"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.736 5.195a3.774 3.774 0 0 1 4.74-1.622M19.11 4.88a3.76 3.76 0 0 1 .688 2.176V9.86M17.476 9.82V7.197a1.487 1.487 0 1 0-2.974 0v.398M14.502 10.72V9.38m-2.256-.39V7.525zM11.576 17.55v-.064zm-.26-.014a.261.261 0 1 1 .523 0 .261.261 0 0 1-.523 0"
    />
  </Svg>
);
export default IconlystMobileTouchIdTwoTone;
