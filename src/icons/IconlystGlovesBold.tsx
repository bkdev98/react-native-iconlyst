import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlovesBold = ({
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
      d="m3.476 12.79.818-.861 8.209 7.807-.819.861a1.296 1.296 0 0 1-1.832.046l-6.33-6.023a1.295 1.295 0 0 1-.046-1.83m10.06 5.86 5.785-6.081a5.664 5.664 0 1 0-8.209-7.808L9.331 6.635l.002-1.341a2.247 2.247 0 1 0-4.49.128l.312 5.26.001.037a.8.8 0 0 1 .172.123z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlovesBold;
