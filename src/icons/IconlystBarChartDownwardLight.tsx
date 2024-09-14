import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartDownwardLight = ({
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
      d="M19.143 21.118c.954 0 1.727-.773 1.727-1.727v-3.31a1.727 1.727 0 1 0-3.454 0v3.31c0 .954.773 1.727 1.727 1.727M12.5 21.118c.955 0 1.727-.772 1.727-1.727v-5.8a1.727 1.727 0 1 0-3.454 0v5.8c0 .955.774 1.727 1.727 1.727M5.857 21.118c.954 0 1.727-.772 1.727-1.727V9.381a1.727 1.727 0 1 0-3.454 0v10.01c0 .955.773 1.727 1.727 1.727"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.87 10.688 15.053 6.53l-2.182 2.3-6.994-5.712"
    />
  </Svg>
);
export default IconlystBarChartDownwardLight;
