import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneChargeOutline = ({
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
      d="M6.711 20.542h-.1a4.255 4.255 0 0 1-3.968-3.181 4.3 4.3 0 0 1 2.009-4.847 2.188 2.188 0 0 1 3.213 1.392l.943 3.936a2.19 2.19 0 0 1-.445 1.913 2.13 2.13 0 0 1-1.652.787m-1.3-6.729a2.82 2.82 0 0 0-1.307 3.175 2.79 2.79 0 0 0 2.575 2.054.63.63 0 0 0 .535-.24.7.7 0 0 0 .139-.612l-.943-3.936a.69.69 0 0 0-.704-.53.7.7 0 0 0-.296.088zM17.79 20.542a2.13 2.13 0 0 1-1.652-.787 2.19 2.19 0 0 1-.445-1.912l.942-3.937a2.187 2.187 0 0 1 3.213-1.392 4.3 4.3 0 0 1 2.009 4.847 4.255 4.255 0 0 1-4.067 3.181m.976-6.819a.7.7 0 0 0-.672.532l-.942 3.935a.7.7 0 0 0 .143.608.68.68 0 0 0 .528.241q.23-.009.456-.054a2.78 2.78 0 0 0 2.125-2 2.82 2.82 0 0 0-1.307-3.175.66.66 0 0 0-.331-.087"
    />
    <Path
      fill={props.color}
      d="M19.878 14.183a.75.75 0 0 1-.75-.75v-1.92a6.875 6.875 0 1 0-13.75 0v1.92a.75.75 0 0 1-1.5 0v-1.92a8.375 8.375 0 1 1 16.75 0v1.92a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.243 16.418a.75.75 0 0 1-.658-1.109l.863-1.586h-1.655a.75.75 0 0 1-.66-1.108l1.467-2.7a.75.75 0 0 1 1.318.717l-.864 1.588h1.656a.75.75 0 0 1 .659 1.11l-1.467 2.693a.75.75 0 0 1-.66.395"
    />
  </Svg>
);
export default IconlystHeadphoneChargeOutline;
