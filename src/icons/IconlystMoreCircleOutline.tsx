import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2m0 1.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5m3.948 7.514a1 1 0 1 1 0 2 1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .995-1zm-4.01 0a1 1 0 1 1 0 2 1.003 1.003 0 0 1-1.004-1c0-.553.443-1 .996-1zm-4.008 0a1 1 0 1 1 0 2 1.003 1.003 0 0 1-1.005-1c0-.553.443-1 .996-1z"
    />
  </Svg>
);
export default IconlystMoreCircleOutline;
