import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikeBadgeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.467 7.19a2.2 2.2 0 0 1 2.199-2.2h1c.581 0 1.137-.23 1.55-.639l.699-.7a2.2 2.2 0 0 1 3.111-.01l.001.001.009.008.7.7c.412.41.969.64 1.55.64h1.002a2.2 2.2 0 0 1 2.2 2.199v1c0 .581.23 1.138.639 1.55l.7.7a2.2 2.2 0 0 1 .01 3.111l-.71.71c-.409.412-.638.969-.638 1.549v1.003a2.2 2.2 0 0 1-2.201 2.196h-1.005c-.58 0-1.138.23-1.549.64l-.7.7a2.2 2.2 0 0 1-3.11.013l-.71-.71a2.2 2.2 0 0 0-1.55-.64h-.998a2.2 2.2 0 0 1-2.2-2.199m-1.338-3.254a2.2 2.2 0 0 1-.015-3.108l.004-.004.708-.709c.41-.411.64-.969.64-1.55V7.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.998 11.966c.415-1.293-.067-2.776-1.42-3.211a2.3 2.3 0 0 0-1.086-.077c-.362.061-.705.311-1 .533-.294-.22-.638-.468-1-.53a2.3 2.3 0 0 0-1.084.074c-1.354.44-1.839 1.918-1.425 3.21.64 2.05 3.51 3.39 3.51 3.39s.822-.383 1.687-1.062"
    />
  </Svg>
);
export default IconlystLikeBadgeBroken;
