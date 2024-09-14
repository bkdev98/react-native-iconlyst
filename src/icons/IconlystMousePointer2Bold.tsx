import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointer2Bold = ({
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
      fill={props.color}
      d="M4.59 4.595a1.78 1.78 0 0 1 1.935-.404l10.9 4.298a1.79 1.79 0 0 1 1.14 1.685 1.79 1.79 0 0 1-1.16 1.671l-3.002 1.144 5.242 5.241a1 1 0 0 1-1.415 1.414l-.096-.096-.028-.027-5.118-5.119-1.143 3.003a1.79 1.79 0 0 1-1.67 1.16h-.012a1.79 1.79 0 0 1-1.676-1.14L4.191 6.526a1.78 1.78 0 0 1 .4-1.931"
    />
  </Svg>
);
export default IconlystMousePointer2Bold;
