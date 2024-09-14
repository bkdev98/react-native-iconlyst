import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWifiControllerBulk = ({
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
      d="M10.27 6.044a.75.75 0 1 0 1.06 1.061c.406-.408.934-.408 1.34 0a.75.75 0 0 0 1.06-1.06c-.985-.987-2.475-.987-3.46 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.13 5.005c1.014-1.014 2.727-1.014 3.74 0a.751.751 0 0 0 1.06-1.062c-1.587-1.586-4.273-1.586-5.861 0a.751.751 0 0 0 1.06 1.062"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.499 17.234c0-.07-.15-7.35-3.31-9 0 0-.01-.01-.02-.01l-.11-.05c-.67-.31-2.45-1.13-4.47.13-1.43.89-1.82.81-3.18-.01-2.08-1.23-3.74-.46-4.44-.13l-.16.07c-3.14 1.64-3.31 8.92-3.31 8.97-.01.74-.07 2.98 1.85 3.76.5.19 1 .28 1.48.28.72 0 1.39-.21 1.94-.62.36-.26.56-.54.74-.78.23-.32.45-.62 1.06-.97 1.04-.6 3.95-.51 4.87 0 .52.29.74.59 1.01.93.21.27.43.55.79.82.91.68 2.16.81 3.43.34 1.9-.78 1.85-3.02 1.83-3.73"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.359 14.364c-.41 0-.75-.33-.75-.74s.34-.74.75-.74.74.33.74.74-.33.74-.74.74m-1.46 1.46c-.41 0-.75-.33-.75-.74s.34-.74.75-.74.74.33.74.74-.33.74-.74.74m-1.46-1.46c-.41 0-.75-.33-.75-.74s.34-.74.75-.74.74.33.74.74-.33.74-.74.74m1.46-2.95c.41 0 .74.34.74.75s-.33.74-.74.74-.75-.33-.75-.74.34-.75.75-.75m-6.61 3.01h-.65v.65c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.65h-.75a.749.749 0 1 1 0-1.5h.75v-.75a.749.749 0 1 1 1.5 0v.75h.65a.749.749 0 1 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWifiControllerBulk;
