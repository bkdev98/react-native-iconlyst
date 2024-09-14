import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotDrinkTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.873 19.881A6.373 6.373 0 0 1 4.5 13.51v-3.08c0-1.085.879-1.963 1.962-1.963h8.82c1.084 0 1.963.878 1.963 1.963v3.08a6.373 6.373 0 0 1-6.372 6.372"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.676 19.88h13.493M17.246 10.367h1.19a2.063 2.063 0 1 1 0 4.127h-1.262"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.61 4.119v1.51m3.224-1.51v1.51m3.225-1.51v1.51"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHotDrinkTwoTone;
