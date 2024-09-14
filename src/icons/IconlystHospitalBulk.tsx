import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalBulk = ({
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
      fillRule="evenodd"
      d="M20.412 7.96h-4.374V3.59A1.09 1.09 0 0 0 14.95 2.5h-5.9c-.6 0-1.088.489-1.088 1.09v4.37H3.588c-.6 0-1.088.489-1.088 1.09v5.9c0 .601.488 1.09 1.088 1.09h4.374v4.37c0 .601.488 1.09 1.088 1.09h5.9c.6 0 1.088-.489 1.088-1.09v-4.37h4.374c.6 0 1.088-.489 1.088-1.09v-5.9a1.09 1.09 0 0 0-1.088-1.09"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHospitalBulk;
