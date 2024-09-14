import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLeftOutline = ({
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
      d="M12.287 19.693a.75.75 0 0 1-.817-.163l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.28.53v3.25H19a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75V6.81L6.06 12l5.19 5.19V15a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-6.25V19a.75.75 0 0 1-.463.693"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferLeftOutline;
