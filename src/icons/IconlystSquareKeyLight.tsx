import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareKeyLight = ({
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
      d="M10.217 3.453H7.782C4.842 3.453 3 5.533 3 8.479v7.947c0 2.945 1.834 5.027 4.782 5.027h8.434c2.949 0 4.784-2.082 4.784-5.027V14.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.165 12.589 3.732-3.733a4 4 0 0 1-.106-.876 4.108 4.108 0 1 1 2.845 3.91l-.846.845h-.983v1.498h-1.522v.974a.5.5 0 0 1-.5.5H9.518a.5.5 0 0 1-.5-.5v-2.265a.5.5 0 0 1 .147-.353"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.043 8.022A1.066 1.066 0 0 0 16.95 6.77"
    />
  </Svg>
);
export default IconlystSquareKeyLight;
