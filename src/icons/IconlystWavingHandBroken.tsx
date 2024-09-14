import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWavingHandBroken = ({
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
      d="M10.23 20.292a7.06 7.06 0 0 1-3.96-3.63L3.16 9.98c-.4-.868-.02-1.93.85-2.335a1.77 1.77 0 0 1 2.33.85l1.64 3.5M15.07 10.62l-.59-1.27a2.125 2.125 0 0 1 1.02-2.811 1.407 1.407 0 0 1 1.87.673c.52 1.098 1.22 2.6 1.45 3.178.74 1.81 1.15 3.667.41 5.705a6.99 6.99 0 0 1-3.63 3.96c-.73.343-1.52.553-2.31.627M6.34 8.49 5.16 5.949c-.36-.856.04-1.872.88-2.264a1.773 1.773 0 0 1 2.3.78l2.52 5.409"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.92 5.71c-.34-.848.06-1.845.89-2.232a1.773 1.773 0 0 1 2.3.78l.64 1.392M13.38 15.282c-.81-1.728-.02-3.864 1.69-4.66M5.63 20.548c-1.57-1.049-1.96-2.386-2.17-3.146M21 7.842c.01-2.36-1.78-3.229-1.78-3.229"
    />
  </Svg>
);
export default IconlystWavingHandBroken;
