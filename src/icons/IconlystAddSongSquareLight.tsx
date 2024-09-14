import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddSongSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.89 3.404H7.591C4.77 3.404 3 5.403 3 8.231v7.632c0 2.829 1.761 4.828 4.592 4.828h8.1c2.832 0 4.594-2 4.594-4.828v-4.828"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.451 14.224a2.073 2.073 0 1 1-4.117-.495 2.073 2.073 0 0 1 4.117.495"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.664 3.309V7.98M21 5.644h-4.672M12.451 14.224l.744-6.181s.367 1.457 1.772 1.923"
    />
  </Svg>
);
export default IconlystAddSongSquareLight;
