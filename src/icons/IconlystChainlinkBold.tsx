import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChainlinkBold = ({
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
      d="m19.153 6.182-5.684-3.28a2.91 2.91 0 0 0-2.937 0L4.848 6.18a2.93 2.93 0 0 0-1.47 2.544v6.56a2.93 2.93 0 0 0 1.468 2.543l5.684 3.279a2.91 2.91 0 0 0 2.937 0l5.684-3.279a2.93 2.93 0 0 0 1.469-2.543v-6.56a2.93 2.93 0 0 0-1.467-2.543"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChainlinkBold;
