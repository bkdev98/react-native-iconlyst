import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperFailBulk = ({
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
        d="M18.809 9.021c-.452 0-1.05-.01-1.794-.01-1.816 0-3.31-1.503-3.31-3.336V2.459A.457.457 0 0 0 13.253 2H7.963C5.496 2 3.5 4.026 3.5 6.509v10.775C3.5 19.889 5.591 22 8.17 22h7.876c2.46 0 4.454-2.013 4.454-4.498V9.471a.454.454 0 0 0-.453-.458c-.423.003-.93.008-1.238.008"
        opacity={0.4}
      />
      <Path
        d="M16.084 2.567a.477.477 0 0 0-.821.334v2.637c0 1.106.911 2.016 2.017 2.016.697.008 1.665.01 2.487.008a.477.477 0 0 0 .343-.808z"
        opacity={0.4}
      />
      <Path d="m12.935 12.985 1.221-1.222a.744.744 0 1 0-1.053-1.052l-1.221 1.22-1.221-1.22a.745.745 0 0 0-1.054 1.052l1.222 1.222-1.222 1.221a.743.743 0 0 0 .527 1.271.74.74 0 0 0 .527-.219l1.221-1.22 1.221 1.22a.74.74 0 0 0 1.053 0 .743.743 0 0 0 0-1.052z" />
    </G>
  </Svg>
);
export default IconlystPaperFailBulk;
