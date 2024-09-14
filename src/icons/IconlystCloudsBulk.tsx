import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudsBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.867 9.845c-.223-1.824-1.675-4.923-5.367-4.923S7.356 8.02 7.134 9.845C4.677 10.07 3 11.912 3 14.462a4.67 4.67 0 0 0 2.752 4.245 5.2 5.2 0 0 0 1.848.375h9.794c.351 0 1.059-.05 1.879-.384A4.66 4.66 0 0 0 22 14.462c0-2.55-1.677-4.391-4.133-4.617"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudsBulk;
