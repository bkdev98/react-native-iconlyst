import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M18.809 9.021c-.452 0-1.05-.01-1.794-.01-1.816 0-3.31-1.503-3.31-3.336V2.459A.456.456 0 0 0 13.254 2h-5.29C5.496 2 3.5 4.026 3.5 6.509v10.775C3.5 19.889 5.59 22 8.17 22h7.876c2.46 0 4.454-2.013 4.454-4.498V9.471a.453.453 0 0 0-.453-.458c-.422.003-.93.008-1.238.008"
        opacity={0.4}
      />
      <Path
        d="M16.084 2.567a.477.477 0 0 0-.821.334v2.637c0 1.106.911 2.016 2.017 2.016.697.008 1.665.01 2.487.008a.477.477 0 0 0 .343-.808z"
        opacity={0.4}
      />
      <Path d="M14.418 14.893a.746.746 0 0 1 0 1.489H8.974a.744.744 0 1 1 0-1.49zm-2.06-4.994a.746.746 0 0 1 0 1.489H8.975a.744.744 0 1 1 0-1.49z" />
    </G>
  </Svg>
);
export default IconlystPaperBulk;
