import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHatBold = ({
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
      d="M20 14.786c-.236-3.477-3.03-7.272-6.757-7.984a2.06 2.06 0 0 0 .883-1.689c0-1.14-.926-2.067-2.066-2.067s-2.067.927-2.067 2.067c0 .69.342 1.297.862 1.672C7.08 7.45 4.239 11.28 4 14.787c6.174 1.102 9.78 1.101 16 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.79 15.787c-.033.013-.063.03-.1.037-3.422.623-6.07.935-8.708.935-2.64 0-5.273-.312-8.672-.935-.036-.007-.066-.024-.1-.037-.884.448-1.19 1.171-1.21 2.71-.02 1.63.463 2.42 1.779 2.911 1.564.586 4.308.731 8.229.776 3.907-.045 6.65-.19 8.214-.776 1.317-.492 1.798-1.28 1.778-2.91-.018-1.54-.324-2.264-1.21-2.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHatBold;
