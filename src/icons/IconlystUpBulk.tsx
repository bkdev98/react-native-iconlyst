import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpBulk = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      d="m9.723 3.43 3.363 4.286a1.125 1.125 0 0 1-.885 1.82H5.476A1.127 1.127 0 0 1 4.351 8.41c0-.247.081-.493.24-.694l3.362-4.285a1.122 1.122 0 0 1 1.77 0"
    />
    <Path
      fill={props.color}
      d="M9.965 13.545v-4.01h-2.25v4.01c0 4.112 3.343 7.455 7.453 7.455h3.356a1.125 1.125 0 1 0 0-2.25h-3.356a5.21 5.21 0 0 1-5.203-5.205"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUpBulk;
