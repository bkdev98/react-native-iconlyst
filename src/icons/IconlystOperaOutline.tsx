import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOperaOutline = ({
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
      d="M14.466 4.93c-3.067 0-5.783 3.064-5.783 7.157s2.716 7.157 5.783 7.157 5.784-3.064 5.784-7.157-2.717-7.157-5.784-7.157m-7.283 7.157c0-4.64 3.133-8.657 7.283-8.657s7.284 4.016 7.284 8.657c0 4.64-3.133 8.657-7.284 8.657s-7.283-4.016-7.283-8.657"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.203 7.082a.75.75 0 0 1 1.047.172 8.3 8.3 0 0 1 1.567 4.833 8.3 8.3 0 0 1-1.567 4.834.75.75 0 0 1-1.219-.875 6.8 6.8 0 0 0 1.286-3.959c0-1.455-.474-2.829-1.286-3.958a.75.75 0 0 1 .172-1.047"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOperaOutline;
