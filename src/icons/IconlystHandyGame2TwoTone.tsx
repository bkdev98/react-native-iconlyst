import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandyGame2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.207 3h6.586c2.302 0 3.735 1.625 3.735 3.925v10.15c0 2.3-1.433 3.925-3.736 3.925H9.207c-2.302 0-3.734-1.625-3.734-3.925V6.925C5.473 4.625 6.912 3 9.207 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.3 14.673v2.611m1.332-1.305H8.967M14.715 15.137h.01M16.244 17.245h.01M16.3 7.965v1.821c0 .972-.686 1.577-1.657 1.577H10.36c-.97 0-1.656-.605-1.656-1.577V7.965c0-.972.686-1.576 1.656-1.576h4.284c.971 0 1.657.608 1.657 1.576"
    />
  </Svg>
);
export default IconlystHandyGame2TwoTone;
