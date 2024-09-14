import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRScanBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 15.408c0-.965.781-1.746 1.746-1.746H7.62c.963 0 1.745.781 1.745 1.746v2.874c0 .964-.782 1.746-1.745 1.746H4.746A1.745 1.745 0 0 1 3 18.282M6.182 16.845v-.01M6.182 6.236v-.01M9.366 7.675c0 .963-.781 1.746-1.746 1.746H4.746A1.746 1.746 0 0 1 3 7.675V4.8c0-.964.782-1.746 1.746-1.746H7.62c.965 0 1.746.782 1.746 1.746M18.228 3.053c.964 0 1.745.782 1.745 1.746v2.874c0 .965-.781 1.746-1.745 1.746h-2.875a1.745 1.745 0 0 1-1.746-1.746V4.8c0-.964.782-1.746 1.746-1.746M16.791 6.237v.01M16.993 13.383a3.385 3.385 0 1 0 2.63 1.255M19.297 19.248l1.704 1.7"
    />
  </Svg>
);
export default IconlystQRScanBroken;
