import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOpenVpnOutline = ({
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
      d="M2.25 12.387c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.75 9.75 0 0 1-5.789 8.911.75.75 0 0 1-1-.404l-2.198-5.453a.75.75 0 0 1 .346-.944 2.383 2.383 0 1 0-2.218 0c.34.18.49.587.346.944L9.04 20.893a.75.75 0 0 1-1 .405 9.75 9.75 0 0 1-5.79-8.911M12 4.137a8.25 8.25 0 0 0-4.047 15.44l1.662-4.125a3.883 3.883 0 1 1 4.769 0l1.663 4.126A8.25 8.25 0 0 0 12 4.138"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOpenVpnOutline;
