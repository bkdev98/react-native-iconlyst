import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFigmaBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 11.488h-1.018a1.021 1.021 0 0 0 0 2.04h1.018zM12.75 9.988h1.019a1.02 1.02 0 0 0 0-2.04H12.75zM9.213 16.049c0 .562.457 1.02 1.02 1.02a1.02 1.02 0 0 0 1.018-1.02v-1.021h-1.018c-.563 0-1.02.459-1.02 1.02M10.232 9.988h1.018v-2.04h-1.018a1.021 1.021 0 0 0 0 2.04"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.288 12.509c0 1.39-1.13 2.52-2.52 2.52-.362 0-.705-.081-1.017-.22v1.24c0 1.39-1.13 2.52-2.519 2.52a2.52 2.52 0 0 1-2.519-2.52c0-.69.279-1.315.729-1.77a2.51 2.51 0 0 1 0-3.54 2.5 2.5 0 0 1-.729-1.77c0-1.39 1.13-2.521 2.519-2.521h3.536c1.39 0 2.52 1.13 2.52 2.52 0 .69-.279 1.315-.729 1.77.45.456.729 1.08.729 1.77m-.071-9.5H7.782c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.768 11.488a1.021 1.021 0 0 0 0 2.04 1.02 1.02 0 0 0 0-2.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFigmaBold;
