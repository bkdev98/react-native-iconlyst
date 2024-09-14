import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3Outline = ({
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
      d="M8.25 15.997a.25.25 0 0 0-.25-.25l-2.674.005a.75.75 0 1 1-.003-1.5l2.673-.006A1.75 1.75 0 0 1 9.75 16l-.007 2.673a.75.75 0 1 1-1.5-.004zM15.006 4.574a.75.75 0 0 1 .748.752l-.006 2.672c0 .139.112.251.25.25l2.673-.005a.75.75 0 1 1 .003 1.5l-2.672.006a1.75 1.75 0 0 1-1.754-1.754l.006-2.672a.75.75 0 0 1 .752-.749M6.004 5.75a.25.25 0 0 0-.25.25l.006 2.673a.75.75 0 1 1-1.5.003l-.006-2.672A1.75 1.75 0 0 1 6.008 4.25l2.672.006a.75.75 0 0 1-.003 1.5zM18.99 14.57a.75.75 0 0 1 .751.749l.006 2.672a1.75 1.75 0 0 1-1.754 1.754l-2.672-.006a.75.75 0 1 1 .003-1.5l2.673.006a.25.25 0 0 0 .25-.25l-.006-2.673a.75.75 0 0 1 .749-.752"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.53 4.47a.75.75 0 0 1 0 1.06l-3.56 3.56a.75.75 0 0 1-1.06-1.06l3.56-3.56a.75.75 0 0 1 1.06 0M9.03 14.968a.75.75 0 0 1 0 1.06l-3.499 3.5a.75.75 0 1 1-1.06-1.061l3.498-3.499a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize3Outline;
