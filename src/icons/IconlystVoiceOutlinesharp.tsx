import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13 17.464v5.89h-1.5v-5.89z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.72 23.354H8.78v-1.5h6.94zM21.505 7.964v5.89h-1.5v-5.89zM4.495 7.964v5.89h-1.5v-5.89zM12.25 4.354a3.546 3.546 0 0 0-3.535 3.555v6a3.545 3.545 0 0 0 3.535 3.555 3.544 3.544 0 0 0 3.536-3.554v-6a3.545 3.545 0 0 0-3.536-3.556M7.215 7.909c0-2.788 2.251-5.055 5.035-5.055 2.786 0 5.036 2.267 5.036 5.055v6c0 2.79-2.25 5.055-5.036 5.055-2.783 0-5.035-2.266-5.035-5.054z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoiceOutlinesharp;
