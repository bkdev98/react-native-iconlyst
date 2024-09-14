import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCombineBold = ({
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
      d="M17.578 3.009h-6.036c-2.27 0-3.767 1.687-3.895 3.837-.01.165.125.3.291.3h4.633c2.865 0 4.79 2.013 4.79 5.008v4.417c0 .165.135.3.3.291 2.244-.13 3.84-1.711 3.84-4.07V7.105c0-2.45-1.577-4.096-3.923-4.096"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.716 16.526a.3.3 0 0 0 .3-.3v-4.044c0-2.242-1.37-3.691-3.49-3.691H8.282a.3.3 0 0 0-.3.3v4.044c0 2.242 1.37 3.69 3.49 3.69z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.638 12.863V8.446a.287.287 0 0 0-.3-.291c-2.244.13-3.838 1.712-3.838 4.07v5.687c0 2.451 1.576 4.097 3.92 4.097h6.036c2.27 0 3.77-1.688 3.897-3.839a.287.287 0 0 0-.291-.3h-4.636c-2.864 0-4.788-2.012-4.788-5.007"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCombineBold;
