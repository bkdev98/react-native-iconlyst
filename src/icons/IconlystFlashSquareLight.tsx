import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashSquareLight = ({
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
      d="M2.999 14.12v-3.964M20.999 14.12v-3.964M13.978 3.137h-3.963M13.978 21.137h-3.963M3.024 17.05c.313 2.234 1.795 3.804 4.047 4.067M16.89 21.117c2.252-.264 3.724-1.833 4.037-4.066M3.024 7.232C3.337 4.999 4.82 3.42 7.071 3.156M16.89 3.156c2.252.264 3.724 1.843 4.037 4.076"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.633 7.604-3.534 4.867a.525.525 0 0 0 .425.834h2.89v3.056c0 .508.652.72.95.308l3.534-4.867a.525.525 0 0 0-.424-.834h-2.891V7.913a.525.525 0 0 0-.95-.309"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashSquareLight;
