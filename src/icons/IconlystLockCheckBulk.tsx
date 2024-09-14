import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockCheckBulk = ({
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
      d="M19.56 11.074c-.34-.71-.92-1.29-1.64-1.64-.22-.1-.45-.18-.72-.23-.4-.07-.88-.1-1.5-.1-.3-.01-.63-.01-1-.01H9.3c-.37 0-.7 0-1 .01-.62 0-1.1.03-1.5.1-.27.05-.5.13-.72.23a3.5 3.5 0 0 0-1.64 1.65c-.35.72-.35 1.55-.35 3.22v2.13c0 1.67 0 2.5.35 3.23.35.72.93 1.3 1.64 1.63.72.35 1.55.35 3.22.35h5.4c1.67 0 2.5 0 3.22-.35a3.46 3.46 0 0 0 1.64-1.63c.35-.73.35-1.56.35-3.23v-2.13c0-1.67 0-2.5-.35-3.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.2 9.205v-1.72c-.03-2.84-2.36-5.13-5.2-5.13h-.06a5.186 5.186 0 0 0-5.14 5.12v1.73c.4-.07.88-.1 1.5-.1v-1.62c.04-2.01 1.64-3.6 3.66-3.63H12c2.02 0 3.67 1.63 3.7 3.64v1.61c.62 0 1.1.03 1.5.1M11.655 17.497l3.417-3.421a.751.751 0 0 0-1.062-1.061l-2.885 2.889-1.128-1.137a.751.751 0 0 0-1.065 1.057l1.66 1.67a.75.75 0 0 0 1.063.003"
    />
  </Svg>
);
export default IconlystLockCheckBulk;
