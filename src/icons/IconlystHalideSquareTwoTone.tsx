import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHalideSquareTwoTone = ({
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
      d="M8.19 13.415a2 2 0 0 1 0-2.828l2.396-2.396a2 2 0 0 1 2.828 0l2.396 2.396a2 2 0 0 1 0 2.828l-2.396 2.396a2 2 0 0 1-2.828 0z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.417 8.191 21 15.774M8.19 10.586 15.776 3M15.81 13.414 8.223 21M10.589 15.811 3 8.223"
    />
    <Rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
      rx={5}
    />
  </Svg>
);
export default IconlystHalideSquareTwoTone;
