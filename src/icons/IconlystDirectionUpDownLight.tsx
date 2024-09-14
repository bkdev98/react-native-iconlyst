import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionUpDownLight = ({
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
      d="M6.305 4.238 9.11 7.043M6.305 4.238 3.5 7.043m2.805-2.805v15.524m0 0 2.805-2.805m-2.805 2.805L3.5 16.957M16.136 19.347a.843.843 0 0 0 1.3 0l2.908-3.693c.387-.491.008-1.181-.65-1.181h-5.816c-.658 0-1.037.69-.65 1.181zM16.136 4.654a.843.843 0 0 1 1.3 0l2.908 3.692c.387.492.008 1.182-.65 1.182h-5.816c-.658 0-1.037-.69-.65-1.182z"
    />
  </Svg>
);
export default IconlystDirectionUpDownLight;
