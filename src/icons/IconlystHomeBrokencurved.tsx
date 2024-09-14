import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeBrokencurved = ({
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
      d="M9.343 16.135h5.815M12.25 22c-7.627 0-9.586 0-9.586-8.287 0-5.631.614-5.238 3.92-8.303C8.028 4.246 10.278 2 12.221 2c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303 0 6.515-1.21 7.908-5.434 8.206"
    />
  </Svg>
);
export default IconlystHomeBrokencurved;
