import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlipVerticalOutline = ({
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
      d="M13.75 5.766a.75.75 0 0 1 .75-.75h1.27a.75.75 0 0 1 .694.466l5.73 14a.75.75 0 0 1-.694 1.034h-7a.75.75 0 0 1-.75-.75zm1.5.75v12.5h5.133l-5.117-12.5zM11.25 5.766a.75.75 0 0 0-.75-.75H9.23a.75.75 0 0 0-.694.466l-5.73 14a.75.75 0 0 0 .694 1.034h7a.75.75 0 0 0 .75-.75zm-1.5.75v12.5H4.617l5.117-12.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlipVerticalOutline;
