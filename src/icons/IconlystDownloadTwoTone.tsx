import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownloadTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.008 8.598h.908a3.585 3.585 0 0 1 3.584 3.584v4.753a3.576 3.576 0 0 1-3.576 3.575H7.085A3.585 3.585 0 0 1 3.5 16.925v-4.753a3.575 3.575 0 0 1 3.575-3.574h.916"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 15.708V3.992m0 11.715 2.836-2.848m-2.836 2.848L9.664 12.86"
    />
  </Svg>
);
export default IconlystDownloadTwoTone;
