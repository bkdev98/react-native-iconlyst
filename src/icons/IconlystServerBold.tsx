import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerBold = ({
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
      d="M7.35 4.687h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5m5.7 0h3.6a.75.75 0 0 1 0 1.5h-3.6a.75.75 0 0 1 0-1.5m8.25 3.271a.2.2 0 0 0 .2-.2V6.9c0-2.467-1.933-4.4-4.4-4.4H6.9c-2.467 0-4.4 1.933-4.4 4.4v.858c0 .11.09.2.2.2zM16.65 12.73h-3.6a.75.75 0 0 1 0-1.5h3.6a.75.75 0 0 1 0 1.5m-8.8 0h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5M2.5 14.302c0 .11.09.2.2.2h18.6a.2.2 0 0 0 .2-.2V9.659a.2.2 0 0 0-.2-.2H2.7a.2.2 0 0 0-.2.2zM16.65 19.273h-3.6a.75.75 0 0 1 0-1.5h3.6a.75.75 0 0 1 0 1.5m-8.8 0h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5M2.7 16.002a.2.2 0 0 0-.2.2v.898c0 2.427 1.974 4.4 4.4 4.4h10.2c2.467 0 4.4-1.932 4.4-4.4v-.898a.2.2 0 0 0-.2-.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerBold;
