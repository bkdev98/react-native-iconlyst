import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendLight = ({
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
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.832 8.175-5.723 5.784-6.51-4.071c-.932-.584-.738-2 .317-2.31L19.37 3.054c.966-.283 1.862.62 1.575 1.589l-4.573 15.445c-.313 1.056-1.722 1.245-2.3.308l-3.967-6.435"
    />
  </Svg>
);
export default IconlystSendLight;
