import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSongBold = ({
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
      d="M2.001 8.47a1 1 0 0 0 2 0V6.893A2.896 2.896 0 0 1 6.894 4h1.289a1 1 0 1 0 0-2H6.894a4.9 4.9 0 0 0-4.893 4.893zM6.893 22H8.15a1 1 0 0 0 0-2H6.893a2.896 2.896 0 0 1-2.892-2.893V15.53a1 1 0 0 0-2 0v1.577A4.9 4.9 0 0 0 6.893 22M17.106 22h-1.289a1 1 0 0 1 0-2h1.289a2.897 2.897 0 0 0 2.893-2.892V15.53a1 1 0 0 1 2 0v1.577A4.9 4.9 0 0 1 17.106 22M12.923 15.56a3.8 3.8 0 0 1-.968-.125 3.82 3.82 0 0 1-2.343-1.773 3.82 3.82 0 0 1-.403-2.91 3.82 3.82 0 0 1 1.774-2.344 3.81 3.81 0 0 1 2.91-.403 3.8 3.8 0 0 1 1.673.931l1.614-6.189a1.014 1.014 0 0 1 1.04-.745 1 1 0 0 1 .921.886c.01.069.25 1.844 1.82 2.614a1 1 0 1 1-.883 1.795 5 5 0 0 1-1.672-1.326l-1.782 6.831a1 1 0 0 1-.092.233 3.85 3.85 0 0 1-3.61 2.525"
    />
  </Svg>
);
export default IconlystScanSongBold;
