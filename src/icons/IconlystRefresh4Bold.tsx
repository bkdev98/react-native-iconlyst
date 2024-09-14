import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefresh4Bold = ({
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
      d="M19.422 10.142a.999.999 0 0 0 .707-1.707l-.007-.007a.996.996 0 0 0-1.411.004 1.003 1.003 0 0 0 .71 1.71M17.59 5.16l-.007-.006a.997.997 0 0 0-1.411.004 1.003 1.003 0 0 0 1.418 1.417 1 1 0 0 0 0-1.414M13.034 5.343q.077 0 .158-.012a1 1 0 0 0 .83-1.145l-.007-.043a.98.98 0 0 0-1.14-.809c-.546.087-.914.621-.827 1.166a1 1 0 0 0 .986.843M19.058 16.305a.996.996 0 0 0-1.404.148 1.004 1.004 0 0 0 .78 1.634 1 1 0 0 0 .631-1.776zM20.746 12.581l-.007-.008a.997.997 0 0 0-1.408-.09 1.006 1.006 0 0 0 .662 1.757 1 1 0 0 0 .753-1.659M14.679 18.778a6.95 6.95 0 0 1-5.366-.032 7 7 0 0 1-3.778-3.824 6.98 6.98 0 0 1 .732-6.649l.985 1.151a1 1 0 0 0 1.73-.41l1.036-4.219a1 1 0 0 0-1.08-1.233l-4.247.462a1.002 1.002 0 0 0-.652 1.644l.889 1.04c-1.937 2.455-2.514 5.841-1.245 8.967a8.97 8.97 0 0 0 4.853 4.914 9 9 0 0 0 3.499.713 9 9 0 0 0 3.4-.672 1 1 0 1 0-.756-1.852"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefresh4Bold;
