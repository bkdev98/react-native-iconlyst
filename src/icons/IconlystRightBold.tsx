import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightBold = ({
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
    <Path fill={props.color} d="M17 18.25a1 1 0 1 0 2 0v-12a1 1 0 1 0-2 0z" />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.24 18.902a.997.997 0 0 0 1.41.108L13.652 13a1 1 0 0 0-.001-1.519L6.686 5.522A1 1 0 0 0 5 6.25v12a1 1 0 0 0 .24.652"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightBold;
