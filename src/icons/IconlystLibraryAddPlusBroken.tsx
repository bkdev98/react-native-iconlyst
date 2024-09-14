import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLibraryAddPlusBroken = ({
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
      d="M3.25 19.148h3.644M3.25 14.383h6.27M3.25 9.617h9.143M10.729 4.852H21.25M3.25 4.852h3.828M20.257 16.07h-6.155M17.179 16.07v3.078M17.179 12.992v1.032"
    />
  </Svg>
);
export default IconlystLibraryAddPlusBroken;
