import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.13 11.24-3.6 3.6a.75.75 0 0 1-1.061 0l-3.6-3.6a.75.75 0 1 1 1.061-1.062l3.07 3.07 3.069-3.07a.75.75 0 1 1 1.061 1.061m3.071-7.332H4.798A2.3 2.3 0 0 0 2.5 6.21v5.4c0 5.237 4.261 9.5 9.5 9.5s9.5-4.263 9.5-9.5v-5.4a2.303 2.303 0 0 0-2.299-2.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPocketBold;
