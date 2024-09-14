import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorBold = ({
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
      d="M13.674 9.195h-3.345c-1.017 0-1.135.595-1.135 1.043v3.494c0 .462.118 1.076 1.135 1.076h3.34c1.019 0 1.137-.596 1.137-1.046v-3.524q0-.517-.246-.765c-.23-.23-.608-.278-.886-.278"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.31 13.76c0 1.55-1.04 2.55-2.64 2.55h-3.34c-1.6 0-2.64-1.01-2.64-2.58v-3.49c0-1.55 1.04-2.55 2.64-2.55h3.34c.81 0 1.48.25 1.95.72.45.45.69 1.09.69 1.83zM21 12.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.04V8.7H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.16c-.16-.78-.49-1.46-1-1.97-.52-.52-1.22-.86-2.04-1.04V3a.749.749 0 1 0-1.5 0v1.04h-2.55V3a.749.749 0 1 0-1.5 0v1.04H8.7V3c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.19C5.56 4.54 4.48 5.6 4.15 7.2H3c-.41 0-.75.34-.75.75s.34.75.75.75h1.04v2.55H3c-.41 0-.75.34-.75.75s.34.75.75.75h1.04v2.55H3a.749.749 0 1 0 0 1.5h1.17c.34 1.6 1.4 2.66 3.03 3.01V21c0 .41.34.75.75.75s.75-.34.75-.75v-1.04h2.55V21a.749.749 0 1 0 1.5 0v-1.04h2.55V21a.749.749 0 1 0 1.5 0v-1.18c1.64-.36 2.72-1.42 3.04-3.02H21a.749.749 0 1 0 0-1.5h-1.04v-2.55z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessorBold;
