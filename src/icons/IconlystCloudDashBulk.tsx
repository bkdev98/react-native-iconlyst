import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudDashBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.597 18.496a8.2 8.2 0 0 1-4.47 1.729 8.2 8.2 0 0 1-2.425-.177.75.75 0 0 0-.895.569.75.75 0 0 0 .567.895 9.8 9.8 0 0 0 2.865.21 9.7 9.7 0 0 0 5.284-2.046.75.75 0 1 0-.926-1.18M4.918 15.275a.75.75 0 1 0-1.373.604 9.75 9.75 0 0 0 3.38 4.097.749.749 0 1 0 .853-1.233 8.26 8.26 0 0 1-2.86-3.468M3.583 13.329a.75.75 0 0 0 .692-.805 8.3 8.3 0 0 1 .275-2.78.75.75 0 0 0-.527-.922.744.744 0 0 0-.92.526 9.7 9.7 0 0 0-.324 3.288.75.75 0 0 0 .747.695zM5.276 7.383a.75.75 0 0 0 .605-.306c.383-.522.83-1 1.332-1.423a.752.752 0 0 0-.969-1.146A9.8 9.8 0 0 0 4.672 6.19a.75.75 0 0 0 .604 1.194M12.114 2.256a.75.75 0 0 0-.721.778c.016.415.383.75.778.721 4.595-.183 8.395 3.385 8.57 7.936a8.2 8.2 0 0 1-1.232 4.637.748.748 0 0 0 .636 1.145.75.75 0 0 0 .639-.356 9.7 9.7 0 0 0 1.456-5.484c-.207-5.377-4.778-9.567-10.126-9.377" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.891 15.212c.33 0 .687-.07 1.024-.208a2.53 2.53 0 0 0 1.484-2.3c0-1.319-.822-2.288-2.05-2.488-.204-1.11-1.123-2.43-2.849-2.43-1.725 0-2.645 1.32-2.849 2.43-1.228.2-2.05 1.17-2.05 2.487 0 .99.583 1.892 1.504 2.307.32.13.676.202 1 .202z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudDashBulk;
