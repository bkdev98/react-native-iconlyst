import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinSwap2Bulk = ({
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
      d="M20.646 6.96a3.958 3.958 0 1 0-7.917 0c0 2.18 1.773 3.96 3.959 3.96a3.963 3.963 0 0 0 3.958-3.96M7.312 13.08a3.963 3.963 0 0 0-3.958 3.96 3.958 3.958 0 1 0 7.917 0c0-2.18-1.773-3.96-3.96-3.96"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4.425 9.799c.224 0 .436-.1.578-.271l1.415-1.709A.751.751 0 0 0 5.84 6.59h-.665v-.05a2.793 2.793 0 0 1 2.788-2.79.75.75 0 0 0 0-1.5 4.294 4.294 0 0 0-4.288 4.29v.05h-.666a.75.75 0 0 0-.577 1.229l1.416 1.709a.75.75 0 0 0 .577.271M21.57 16.182l-1.417-1.714c-.285-.346-.87-.346-1.156 0l-1.415 1.714a.75.75 0 0 0 .578 1.228h.665v.05a2.793 2.793 0 0 1-2.788 2.79.75.75 0 0 0 0 1.5 4.294 4.294 0 0 0 4.288-4.29v-.05h.666a.752.752 0 0 0 .578-1.228" />
    </G>
  </Svg>
);
export default IconlystCoinSwap2Bulk;
