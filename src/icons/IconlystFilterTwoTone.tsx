import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterTwoTone = ({
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
      d="M3.605 8.181v-1.92C3.605 4.458 5.065 3 6.865 3h11.269c1.8 0 3.259 1.46 3.259 3.26v2.076c0 .97-.424 1.89-1.162 2.52l-4.654 3.979a2.6 2.6 0 0 0-.909 1.973v1.33c0 .968-.61 1.833-1.523 2.16l-1.69.602A1.688 1.688 0 0 1 9.2 19.31v-2.646c0-.677-.252-1.33-.708-1.83l-4.024-4.421a3.32 3.32 0 0 1-.863-2.232"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.215 8.424h6.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFilterTwoTone;
