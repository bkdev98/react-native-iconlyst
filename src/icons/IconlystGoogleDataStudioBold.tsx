import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDataStudioBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.03 16.519h-6.44c-1.58 0-2.87 1.29-2.87 2.87a2.87 2.87 0 0 0 2.87 2.87h6.53a3.81 3.81 0 0 1-1.34-2.91c0-1.12.48-2.13 1.25-2.83"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.61 16.519c-.37 0-.72.07-1.04.2a2.83 2.83 0 0 0-1.79 2.63c0 1.24.79 2.29 1.9 2.67.29.11.6.16.93.16 1.56 0 2.83-1.26 2.83-2.83 0-1.56-1.27-2.83-2.83-2.83M9.6 12.549c0-1.16.52-2.21 1.34-2.91H4.41c-1.58 0-2.87 1.29-2.87 2.87a2.87 2.87 0 0 0 2.87 2.87h6.44c-.77-.7-1.25-1.71-1.25-2.83"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 9.879c-1.11.38-1.9 1.44-1.9 2.67 0 1.2.74 2.22 1.79 2.63a2.827 2.827 0 0 0 3.87-2.63c0-1.56-1.27-2.83-2.83-2.83-.33 0-.64.06-.93.16M10.61 8.499h6.53a3.81 3.81 0 0 1-1.34-2.91c0-1.12.48-2.13 1.25-2.83h-6.44c-1.58 0-2.87 1.29-2.87 2.87a2.87 2.87 0 0 0 2.87 2.87"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.7 8.259c.29.11.6.16.93.16 1.56 0 2.83-1.26 2.83-2.83 0-1.56-1.27-2.83-2.83-2.83-.37 0-.72.07-1.04.2a2.83 2.83 0 0 0-1.79 2.63c0 1.24.79 2.29 1.9 2.67"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleDataStudioBold;
