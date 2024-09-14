import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandyGame2Light = ({
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
      d="M8.707 3h6.586c2.302 0 3.735 1.625 3.735 3.925v10.15c0 2.3-1.433 3.925-3.736 3.925H8.707c-2.302 0-3.734-1.625-3.734-3.925V6.925C4.973 4.625 6.412 3 8.707 3M9.8 14.673v2.611m1.332-1.305H8.467M14.215 15.137h.01M15.744 17.245h.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.8 7.965v1.821c0 .972-.686 1.577-1.657 1.577H9.86c-.97 0-1.656-.605-1.656-1.577V7.965c0-.972.686-1.576 1.656-1.576h4.284c.971 0 1.657.608 1.657 1.576"
    />
  </Svg>
);
export default IconlystHandyGame2Light;
