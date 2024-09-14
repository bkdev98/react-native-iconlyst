import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnvatoLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.26 9.947c-.04 1.197.108 2.523.61 3.641.253.563.38.845.605.806.225-.04.248-.392.294-1.096.304-4.624 4.287-9.56 8.942-10.238.47-.069.705-.103.982.035.276.137.396.36.635.808C22.33 11.384 19.325 21 11.623 21c-6.06 0-9.676-7.027-6.61-11.625.489-.733.733-1.099 1.014-1.013s.265.586.232 1.585Z"
    />
  </Svg>
);
export default IconlystEnvatoLight;
