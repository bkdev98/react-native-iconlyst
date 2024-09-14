import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferRightOutline = ({
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
      d="M11.713 4.307a.75.75 0 0 1 .817.163l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.28-.53v-3.25H5a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 .75.75v2.19L17.94 12l-5.19-5.19V9a.75.75 0 0 1-.75.75H5a.75.75 0 1 1 0-1.5h6.25V5a.75.75 0 0 1 .463-.693"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferRightOutline;
