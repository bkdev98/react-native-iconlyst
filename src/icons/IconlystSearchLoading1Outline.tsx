import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoading1Outline = ({
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
      d="M4.682 7.002a.75.75 0 0 1-.161-1.048A9.2 9.2 0 0 1 6 4.374a.75.75 0 1 1 .968 1.145A7.7 7.7 0 0 0 5.73 6.841a.75.75 0 0 1-1.048.161M9.314 19.466a.75.75 0 0 1 .896-.568 7.6 7.6 0 0 0 2.254.165 7.62 7.62 0 0 0 4.139-1.595l.016-.013.496-.436a.75.75 0 0 1 1.024.033l3.425 3.417a.75.75 0 0 1 0 1.06.75.75 0 0 1-1.06.002l-2.928-2.922-.031.026a9.13 9.13 0 0 1-6.289 1.928 9 9 0 0 1-1.373-.201.75.75 0 0 1-.57-.896M7.682 18.73a.75.75 0 0 1-1.044.19 9.2 9.2 0 0 1-3.177-3.852.75.75 0 0 1 1.372-.605 7.7 7.7 0 0 0 2.658 3.224.75.75 0 0 1 .191 1.043M3.965 8.399a.75.75 0 0 1 .526.92 7.7 7.7 0 0 0-.255 2.585.75.75 0 1 1-1.496.111 9 9 0 0 1 .059-1.883q.083-.617.245-1.206a.75.75 0 0 1 .921-.527M19.373 15.3a.75.75 0 0 1-.406-.98 7.542 7.542 0 0 0 .572-3.19 7.675 7.675 0 0 0-7.965-7.374.751.751 0 0 1-.058-1.5 9.175 9.175 0 0 1 9.522 8.818 9 9 0 0 1-.685 3.821.75.75 0 0 1-.98.406"
    />
  </Svg>
);
export default IconlystSearchLoading1Outline;
