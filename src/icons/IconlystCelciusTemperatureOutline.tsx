import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelciusTemperatureOutline = ({
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
      d="M9.822 3.75A2.25 2.25 0 0 0 7.572 6v6.022a.75.75 0 0 1-.297.599c-1.033.78-1.703 2-1.703 3.379a4.25 4.25 0 0 0 8.5 0c0-1.38-.668-2.598-1.701-3.38a.75.75 0 0 1-.298-.598V6a2.25 2.25 0 0 0-2.25-2.25M6.072 6a3.75 3.75 0 1 1 7.501 0v5.665a5.71 5.71 0 0 1 2 4.335 5.75 5.75 0 0 1-11.5 0c0-1.743.786-3.287 2-4.335z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.821 15.276a.724.724 0 1 0 0 1.449.724.724 0 0 0 0-1.449M7.597 16a2.224 2.224 0 1 1 4.448.001A2.224 2.224 0 0 1 7.597 16"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.821 9.731a.75.75 0 0 1 .75.75v4.046a.75.75 0 0 1-1.5 0V10.48a.75.75 0 0 1 .75-.75M19.862 7.004c-.568-.6-1.47-.6-2.037 0a1.685 1.685 0 0 0 0 2.276c.567.6 1.47.6 2.037 0a.75.75 0 1 1 1.09 1.031 2.877 2.877 0 0 1-4.218 0c-1.136-1.202-1.136-3.136 0-4.338a2.877 2.877 0 0 1 4.218 0 .75.75 0 1 1-1.09 1.03M14.357 4.983a.906.906 0 1 1 1.812 0 .906.906 0 0 1-1.812 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelciusTemperatureOutline;
