import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchRefreshBold = ({
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
      d="M14.134 11.648c-.41 0-.75-.34-.75-.75a2.3 2.3 0 0 0-2.3-2.3c-.55 0-1.09.2-1.52.57a.748.748 0 1 1-.98-1.13 3.798 3.798 0 0 1 6.3 2.86c0 .41-.33.75-.75.75m-.53 2.09c-.69.61-1.58.95-2.52.95-2.09 0-3.8-1.7-3.8-3.79a.749.749 0 1 1 1.5 0c0 1.26 1.03 2.29 2.3 2.29.57 0 1.11-.2 1.52-.57.31-.28.78-.25 1.06.06.27.31.25.78-.06 1.06m-2.47-11.24a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.992 19.795l-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchRefreshBold;
