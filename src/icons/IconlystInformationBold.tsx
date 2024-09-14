import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInformationBold = ({
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
      d="M14.45 10.05h2.2v-1.7h-2.2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.15 10.2a.8.8 0 0 1-.022.182c-.271 1.084-1.084 1.168-1.328 1.168h-2.5a1.32 1.32 0 0 1-1.35-1.35v-2c0-.77.581-1.35 1.35-1.35h2.5c.77 0 1.35.58 1.35 1.35zM13 16.65H6.7a.75.75 0 0 1 0-1.5H13a.75.75 0 0 1 0 1.5m-6.3-4.4h2.7a.75.75 0 0 1 0 1.5H6.7a.75.75 0 0 1 0-1.5m9.7-8.85H7.6c-2.955 0-5.1 2.314-5.1 5.5v6.2c0 3.135 2.192 5.5 5.1 5.5h8.8c2.955 0 5.1-2.314 5.1-5.5V8.9c0-3.136-2.193-5.5-5.1-5.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInformationBold;
