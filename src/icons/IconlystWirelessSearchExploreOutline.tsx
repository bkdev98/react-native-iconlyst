import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSearchExploreOutline = ({
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
      d="M20.337 8.265C15.682 3.638 8.921 3.632 4.26 8.244a.7.7 0 0 0-.05.948l8.651 10.286a.75.75 0 1 1-1.148.965L3.063 10.158a2.2 2.2 0 0 1 .143-2.98m17.132 1.087c.26.258.28.662.062.936l-.998 1.25a.75.75 0 1 0 1.173.935l.997-1.249a2.204 2.204 0 0 0-.176-2.936c-5.24-5.207-12.943-5.215-18.19-.023M17.17 13.79a1.718 1.718 0 1 0-2.43 2.429m0 0a1.718 1.718 0 0 0 2.43-2.43m1.06-1.06a3.218 3.218 0 1 0-.592 5.019l.869.87a.75.75 0 1 0 1.06-1.061l-.869-.87a3.22 3.22 0 0 0-.468-3.958"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessSearchExploreOutline;
