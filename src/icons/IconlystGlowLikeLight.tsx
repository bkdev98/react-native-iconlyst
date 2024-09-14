import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowLikeLight = ({
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
      d="m19.477 5.5-1 1M6.499 18.522l1-1m-1.022-12 1 1M19.499 18.5l-1-1M21.977 12h-1.045m-15.91 0H3.976m9 8v1m0-18v1M11.06 9.392c-1.24.4-1.682 1.752-1.304 2.935.61 1.895 3.221 3.316 3.221 3.316s2.632-1.443 3.22-3.316c.38-1.183-.066-2.535-1.307-2.935a2.13 2.13 0 0 0-1.913.323 2.12 2.12 0 0 0-1.916-.323"
    />
  </Svg>
);
export default IconlystGlowLikeLight;
