import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCoinOutline = ({
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
      d="M19.36 14.585a.75.75 0 0 1 1.06 0l1.359 1.358a.75.75 0 1 1-1.06 1.061l-.83-.828-.827.828A.75.75 0 0 1 18 15.944zM2.72 7.034a.75.75 0 0 1 1.06 0l.83.828.827-.828a.75.75 0 0 1 1.061 1.06L5.14 9.455a.75.75 0 0 1-1.06 0L2.72 8.094a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.83 4.225a1.47 1.47 0 0 0-1.47 1.47v3.227a.75.75 0 0 1-1.5 0V5.695a2.97 2.97 0 0 1 2.97-2.97h1.176a.75.75 0 0 1 0 1.5zM19.891 14.365a.75.75 0 0 1 .75.75v3.227a2.97 2.97 0 0 1-2.97 2.97h-1.177a.75.75 0 0 1 0-1.5h1.177a1.47 1.47 0 0 0 1.47-1.47v-3.227a.75.75 0 0 1 .75-.75M12.568 7.16a4.55 4.55 0 1 1 9.102 0 4.55 4.55 0 0 1-9.102 0m4.551-3.05a3.05 3.05 0 1 0 0 6.101 3.05 3.05 0 0 0 0-6.102M4.996 13.244a.75.75 0 0 1 .75-.75h3.867a2.199 2.199 0 0 1 .028 4.398H6.452a.75.75 0 0 1 0-1.5h3.175a.699.699 0 0 0-.014-1.398H5.746a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.754 16.14a.75.75 0 0 1 .75-.75h.3a2.532 2.532 0 0 1 .001 5.064h-4.06a.75.75 0 0 1 0-1.5h4.06a1.032 1.032 0 0 0 0-2.063h-.3a.75.75 0 0 1-.751-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.291 12.494a.75.75 0 0 1 .75.75v6.461a.75.75 0 0 1-1.5 0v-6.46a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.154 18.957a.75.75 0 0 1 .75.75v.934a.75.75 0 0 1-1.5 0v-.934a.75.75 0 0 1 .75-.75m2.48 0a.75.75 0 0 1 .75.75v.934a.75.75 0 0 1-1.5 0v-.934a.75.75 0 0 1 .75-.75M7.154 11.559a.75.75 0 0 1 .75.75v.936a.75.75 0 1 1-1.5 0v-.936a.75.75 0 0 1 .75-.75m2.48 0a.75.75 0 0 1 .75.75v.936a.75.75 0 1 1-1.5 0v-.936a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinCoinOutline;
