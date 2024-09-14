import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenu3Broken = ({
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
      d="M8.91 17.997A7.573 7.573 0 0 0 19.476 7.963M8.771 5.04a7.54 7.54 0 0 1 3.994-1.137 7.54 7.54 0 0 1 4.745 1.67M17.918 17.023 21 20.097M3 15.697h2.638M3 11.925h1.934M7.345 11.925h3.131M3 8.18h3.368"
    />
  </Svg>
);
export default IconlystSearchMenu3Broken;
