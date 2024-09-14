import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsVideoAiOutline = ({
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
      d="M21.751 7.995v3.93a.75.75 0 1 1-1.5 0v-3.93c0-1.215-.424-2.145-1.1-2.774-.682-.635-1.682-1.02-2.926-1.02h-8.45c-1.243 0-2.243.385-2.925 1.02-.675.63-1.099 1.558-1.099 2.773v8.013c0 1.21.423 2.14 1.1 2.77.681.636 1.681 1.023 2.925 1.023h4.692a.75.75 0 0 1 0 1.5H7.776c-1.555 0-2.942-.488-3.948-1.426-1.012-.943-1.577-2.285-1.577-3.867V7.994c0-1.585.565-2.928 1.577-3.87C4.834 3.185 6.222 2.7 7.776 2.7h8.45c1.553 0 2.941.486 3.948 1.423 1.012.943 1.577 2.286 1.577 3.872"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.524 2.706a.75.75 0 0 1 .75.75v7.193a.75.75 0 0 1-1.5 0V3.456a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.751 9.023a.75.75 0 0 1-.75.75h-4.476a.75.75 0 0 1 0-1.5h4.476a.75.75 0 0 1 .75.75M7.478 2.706a.75.75 0 0 0-.75.75v17.086a.75.75 0 1 0 1.5 0V3.456a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.251 9.023c0 .414.336.75.75.75h4.476a.75.75 0 1 0 0-1.5H3a.75.75 0 0 0-.75.75m0 5.953c0 .414.336.75.75.75h4.476a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0-.75.75M18.277 14.344a.75.75 0 0 0-.704.49l-.105.287a3.2 3.2 0 0 1-1.89 1.891l-.286.106a.75.75 0 0 0 0 1.407l.287.106a3.2 3.2 0 0 1 1.889 1.892l.105.287a.75.75 0 0 0 1.407 0l.107-.287a3.2 3.2 0 0 1 1.888-1.892l.287-.106a.75.75 0 0 0 0-1.406l-.287-.107a3.2 3.2 0 0 1-1.889-1.891l-.105-.287a.75.75 0 0 0-.704-.49m0 4.537a4.7 4.7 0 0 1 1.058-1.06 4.7 4.7 0 0 1-1.058-1.059 4.7 4.7 0 0 1-1.058 1.06c.407.294.764.652 1.058 1.059M12.704 11.99a.75.75 0 0 0-.718.533c-.107.354-.384.63-.736.737a.75.75 0 0 0 0 1.435c.352.107.629.384.736.737a.75.75 0 0 0 1.435 0c.108-.353.384-.63.736-.737a.75.75 0 0 0 0-1.435 1.1 1.1 0 0 1-.736-.737.75.75 0 0 0-.717-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReelsVideoAiOutline;
