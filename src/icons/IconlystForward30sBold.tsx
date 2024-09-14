import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward30sBold = ({
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
      fillRule="evenodd"
      d="M22.186 9.152a.75.75 0 0 0-.753-.188l-.633.194C19.597 5.593 16.2 3 12.266 3c-4.962 0-9 4.037-9 9s4.038 9 9 9a9 9 0 0 0 7.41-3.895.75.75 0 1 0-1.236-.851 7.5 7.5 0 0 1-6.174 3.246c-4.136 0-7.5-3.365-7.5-7.5 0-4.136 3.364-7.5 7.5-7.5 3.267 0 6.087 2.145 7.099 5.099l-.784.24a.75.75 0 0 0-.247 1.305l2.06 1.634a.752.752 0 0 0 1.18-.361l.795-2.51a.75.75 0 0 0-.183-.755"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.237 8.36a2.2 2.2 0 0 0-2.196 2.2.75.75 0 0 0 1.5 0c0-.387.312-.7.696-.7s.696.313.696.7a.694.694 0 0 1-.696.69.75.75 0 0 0 0 1.5c.383 0 .695.314.695.7 0 .38-.312.69-.695.69a.693.693 0 0 1-.696-.69.75.75 0 0 0-1.5 0 2.195 2.195 0 1 0 3.847-1.448 2.18 2.18 0 0 0 .545-1.443A2.2 2.2 0 0 0 9.237 8.36M15.34 10.84v2.318a.94.94 0 0 1-.934.941.94.94 0 0 1-.935-.94v-2.32c0-.519.419-.94.935-.94s.935.421.935.94m-3.37 0v2.318a2.44 2.44 0 0 0 2.436 2.441 2.44 2.44 0 0 0 2.435-2.44v-2.32a2.44 2.44 0 0 0-2.435-2.44 2.44 2.44 0 0 0-2.435 2.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward30sBold;
