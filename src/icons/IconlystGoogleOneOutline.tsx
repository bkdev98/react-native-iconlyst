import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOneOutline = ({
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
      d="M12.755 3.108a3.125 3.125 0 1 1 4.303 4.536l-5.811 5.514a3.127 3.127 0 0 1-4.304-4.535zm1.032 1.089L7.975 9.71a1.626 1.626 0 0 0 2.239 2.36l5.81-5.515a1.625 1.625 0 1 0-2.237-2.36"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.76 5.4a3.126 3.126 0 1 1 6.25 0v13.225a3.125 3.125 0 1 1-6.25 0zm3.126-1.627c-.898 0-1.626.728-1.626 1.627v13.225a1.626 1.626 0 1 0 3.25 0V5.4c0-.9-.726-1.627-1.624-1.627"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleOneOutline;
