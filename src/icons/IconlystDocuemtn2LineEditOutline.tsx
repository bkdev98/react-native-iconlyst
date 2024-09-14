import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemtn2LineEditOutline = ({
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
      d="M10.7 21.473H8.15a4.81 4.81 0 0 1-4.806-4.806V7.056A4.81 4.81 0 0 1 8.15 2.25h6.988a4.81 4.81 0 0 1 4.806 4.806v3.313a.75.75 0 1 1-1.5 0V7.056a3.31 3.31 0 0 0-3.306-3.306H8.15a3.31 3.31 0 0 0-3.306 3.306v9.611a3.31 3.31 0 0 0 3.306 3.306h2.552a.75.75 0 0 1 0 1.5zM15.151 21.75a1.563 1.563 0 0 1-1.548-1.733l.08-.746a2.47 2.47 0 0 1 .618-1.388l3.163-3.454a1.75 1.75 0 0 1 2.467-.1l.667.618a1.746 1.746 0 0 1 .094 2.464l-3.119 3.4a2.47 2.47 0 0 1-1.437.789l-.723.123a2 2 0 0 1-.262.027m3.6-6.384a.25.25 0 0 0-.18.078l-3.154 3.445a.97.97 0 0 0-.239.544l-.08.746.793-.052a1 1 0 0 0 .572-.315l3.129-3.416a.244.244 0 0 0-.01-.348l-.667-.617a.24.24 0 0 0-.164-.065"
    />
    <Path
      fill={props.color}
      d="M11.749 14.662H9.137a.75.75 0 0 1 0-1.5h2.612a.75.75 0 1 1 0 1.5m2.392-4.369h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystDocuemtn2LineEditOutline;
