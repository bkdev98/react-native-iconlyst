import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolarGridOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 3.869a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 16.514a4.395 4.395 0 1 1 0-8.791 4.395 4.395 0 0 1 0 8.79m-5.895-4.396a5.895 5.895 0 1 0 11.79 0 5.895 5.895 0 0 0-11.79 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 21.869a.75.75 0 0 0 .75-.75v-9a.75.75 0 1 0-1.5 0v9c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.81 15.005a.75.75 0 0 0-.494-.938l-8.59-2.665a.75.75 0 1 0-.444 1.433l8.59 2.664a.75.75 0 0 0 .939-.494"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.023 12.694a.75.75 0 0 0 1.056-.102l5.716-6.94a.75.75 0 0 0-1.158-.953l-5.716 6.939a.75.75 0 0 0 .102 1.056"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.186 15.006a.75.75 0 0 1 .493-.94l8.598-2.672a.75.75 0 0 1 .446 1.433l-8.598 2.672a.75.75 0 0 1-.94-.493"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.98 12.701a.75.75 0 0 1-1.055-.101L6.201 5.653a.75.75 0 1 1 1.158-.954l5.724 6.947a.75.75 0 0 1-.102 1.055"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolarGridOutline;
