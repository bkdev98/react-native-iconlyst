import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCardOutline = ({
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
      d="M3.24 13.195c.503-.54 1.209-.828 2.008-.828h5.078c.801 0 1.508.288 2.01.828.497.534.738 1.252.738 2.023v3.321c0 .77-.241 1.49-.738 2.023-.502.54-1.209.828-2.01.828H5.248c-.8 0-1.507-.288-2.01-.828-.496-.534-.738-1.253-.738-2.023v-3.321c0-.771.243-1.49.74-2.024m1.097 1.022c-.195.21-.337.541-.337 1v3.322c0 .46.142.792.336 1.001.19.203.482.35.912.35h5.078c.43 0 .723-.147.912-.35.195-.209.336-.54.336-1v-3.322c0-.46-.141-.792-.336-1.001-.189-.203-.481-.35-.912-.35H5.248c-.428 0-.72.147-.91.35"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 15.787a.75.75 0 0 1 .75-.75h9.074a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.72 7.036a.75.75 0 0 1 1.06 0l.829.828.828-.828a.75.75 0 1 1 1.06 1.06L5.14 9.456a.75.75 0 0 1-1.061 0l-1.36-1.358a.75.75 0 0 1 0-1.06M19.361 14.585a.75.75 0 0 1 1.06 0l1.36 1.358a.75.75 0 0 1-1.06 1.061l-.83-.828-.827.828a.75.75 0 1 1-1.061-1.06zM13.3 4.297a.75.75 0 0 1 .75-.75h3.868a2.198 2.198 0 0 1 .028 4.398h-3.1889999999999996a.75.75 0 0 1 0-1.5h3.174a.699.699 0 0 0-.013-1.398h-3.867a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.059 7.193a.75.75 0 0 1 .75-.75h.3a2.532 2.532 0 0 1 0 5.064h-4.06a.75.75 0 0 1 0-1.5h4.06a1.032 1.032 0 0 0 0-2.064h-.3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.596 3.547a.75.75 0 0 1 .75.75v6.461a.75.75 0 0 1-1.5 0V4.297a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.459 10.01a.75.75 0 0 1 .75.75v.934a.75.75 0 0 1-1.5 0v-.934a.75.75 0 0 1 .75-.75m2.48 0a.75.75 0 0 1 .75.75v.934a.75.75 0 0 1-1.5 0v-.934a.75.75 0 0 1 .75-.75M15.459 2.611a.75.75 0 0 1 .75.75v.936a.75.75 0 0 1-1.5 0v-.936a.75.75 0 0 1 .75-.75m2.48 0a.75.75 0 0 1 .75.75v.936a.75.75 0 0 1-1.5 0v-.936a.75.75 0 0 1 .75-.75M6.83 4.15a1.47 1.47 0 0 0-1.47 1.47v3.227a.75.75 0 0 1-1.5 0V5.62a2.97 2.97 0 0 1 2.97-2.97h1.176a.75.75 0 0 1 0 1.5zM19.89 14.443a.75.75 0 0 1 .75.75v3.227a2.97 2.97 0 0 1-2.97 2.97h-1.176a.75.75 0 0 1 0-1.5h1.176a1.47 1.47 0 0 0 1.47-1.47v-3.227a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinCardOutline;
