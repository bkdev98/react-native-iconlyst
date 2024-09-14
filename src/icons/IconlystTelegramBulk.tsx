import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.988 10.12-2.036 5.51a1.74 1.74 0 0 1-1.656 1.144c-.62 0-1.188-.32-1.508-.862L9.741 14.12l-1.796-1.053a1.75 1.75 0 0 1-.862-1.669 1.75 1.75 0 0 1 1.137-1.5l5.511-2.033a1.74 1.74 0 0 1 1.852.403c.49.49.646 1.2.405 1.852m-7.244 1.184 5.508-2.032a.25.25 0 0 1 .27.058.24.24 0 0 1 .059.27l-2.035 5.508a.25.25 0 0 1-.221.165.24.24 0 0 1-.244-.12l-1.128-1.933a.8.8 0 0 0-.306-.306v-.002l-1.942-1.139a.25.25 0 0 1-.127-.245.25.25 0 0 1 .166-.225"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelegramBulk;
