import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageTickBulk = ({
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
      d="M10.72 4.072q0-.353.04-.696a.31.31 0 0 0-.304-.345H7.632c-3.163 0-5.288 2.218-5.288 5.521v6.065a.3.3 0 0 0 .477.243l3.192-2.318a4.915 4.915 0 0 1 6.166.287l2.814 2.525c.1.09.25.103.363.03a30 30 0 0 1 1.736-1.02c1.521-.819 2.789-.452 3.754.148.21.13.498-.013.498-.261v-3.332c0-.227-.243-.373-.45-.28A7.206 7.206 0 0 1 10.72 4.073"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.436 2.8a.75.75 0 0 0-1.061 0l-3.542 3.542-1.505-1.506a.75.75 0 0 0-1.061 1.06l2.036 2.036a.746.746 0 0 0 1.06 0l4.073-4.071a.75.75 0 0 0 0-1.061M6.87 13.805l-4.327 3.14-.003.002c-.114.08-.21.196-.194.335.314 2.859 2.319 4.74 5.22 4.74H16c1.064 0 2.009-.257 2.795-.72a.283.283 0 0 0 .037-.457l-7.628-6.843a3.46 3.46 0 0 0-4.336-.197M17.879 15.75c-.425.23-.82.46-1.162.668a.297.297 0 0 0-.043.476l3.26 2.926a.285.285 0 0 0 .432-.05c.518-.797.83-1.774.888-2.893a.3.3 0 0 0-.096-.231c-1.053-.955-1.984-1.592-3.28-.896"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageTickBulk;
