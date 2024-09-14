import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeAfterEffectsCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.936 14.573c-.885.387-1.927.383-2.63-.374a2.53 2.53 0 0 1-.65-1.535c-.029-.488.094-.99.38-1.38.34-.465.88-.749 1.439-.76.454-.009.903.164 1.245.477a1.97 1.97 0 0 1 .637 1.496c0 .102-.08.186-.178.186h-3.524M11.884 14.807l-2.62-6.37-2.621 6.37M7.58 12.531h3.367"
    />
  </Svg>
);
export default IconlystAdobeAfterEffectsCircleTwoTone;
