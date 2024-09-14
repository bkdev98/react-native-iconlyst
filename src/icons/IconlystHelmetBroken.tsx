import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHelmetBroken = ({
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
      d="M5.355 6.622a8.74 8.74 0 0 0-1.62 4.687c-.096 2.776 1.278 6.13 4.432 6.347a4.03 4.03 0 0 0 2.9-.947 7.58 7.58 0 0 0 2.14-4.026c.076-.5.332-.954.72-1.279.29-.173.612-.286.947-.332 1.478-.265 2.955-.55 4.433-.824 1.137-.218 1.07-1.307.787-2.245-.597-1.857-2.88-3.77-5.069-4.547a8.37 8.37 0 0 0-7.425.987M8.357 17.893A5.2 5.2 0 0 1 6.879 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.09 17.325s5.532 4.233 8.118.34a6.63 6.63 0 0 0 1.073-5.12M13.424 19.134V21M9.995 12.683a1.639 1.639 0 1 1-1.638-1.64"
    />
  </Svg>
);
export default IconlystHelmetBroken;
