import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshOutline = ({
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
      d="M8.615 5.824a4.865 4.865 0 0 0-3.731 7.986.75.75 0 0 1-1.15.964 6.365 6.365 0 0 1 4.88-10.45h6.772a6.364 6.364 0 0 1 0 12.73H8.615a.75.75 0 0 1 0-1.5h6.771a4.864 4.864 0 0 0 0-9.729z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.767 13.15a.75.75 0 0 1 0 1.06l-2.093 2.093 2.093 2.093a.75.75 0 1 1-1.061 1.06l-2.623-2.623a.75.75 0 0 1 0-1.06l2.623-2.624a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshOutline;
