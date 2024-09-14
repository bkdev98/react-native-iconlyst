import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorPaletteLight = ({
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
      d="M3.186 18a3.5 3.5 0 1 0 7 0V7a3.5 3.5 0 1 0-7 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.16 20.476 8.65-8.65a3.5 3.5 0 0 0 0-4.95 3.5 3.5 0 0 0-4.95 0l-2.674 2.676"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.686 21.5h11a3.5 3.5 0 1 0 0-7h-2.55M6.686 18.043v.036m.15-.029a.15.15 0 1 1-.301 0 .15.15 0 0 1 .3 0"
    />
  </Svg>
);
export default IconlystColorPaletteLight;
