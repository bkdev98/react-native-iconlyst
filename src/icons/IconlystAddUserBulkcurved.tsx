import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserBulkcurved = ({
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
      d="M10 11.737h.033a5.04 5.04 0 0 0 5.033-5.033 5.037 5.037 0 0 0-5.033-5.032A5.04 5.04 0 0 0 5 6.702a5.023 5.023 0 0 0 5 5.034M21.289 9.404h-1.297V8.15a.75.75 0 0 0-1.5 0v1.255h-1.293a.75.75 0 0 0 0 1.5h1.293v1.255a.75.75 0 0 0 1.5 0v-1.255h1.297a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.033 14.03c-4.104 0-7.572 2.25-7.572 4.911 0 3.036 4.321 3.387 7.572 3.387 1.873 0 7.572 0 7.572-3.407 0-2.652-3.468-4.89-7.572-4.89"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAddUserBulkcurved;
