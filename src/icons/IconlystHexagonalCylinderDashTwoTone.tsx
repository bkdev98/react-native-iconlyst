import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalCylinderDashTwoTone = ({
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
      d="m9.384 20.656-3.199-2.239a1.9 1.9 0 0 1-.81-1.556V7.139c0-.62.302-1.2.81-1.556l3.199-2.24c.32-.223.7-.343 1.09-.343h4.052c.39 0 .77.12 1.09.344l3.198 2.239c.508.355.81.937.81 1.556v9.722c0 .62-.302 1.2-.81 1.556l-3.198 2.24c-.32.222-.7.343-1.09.343h-4.052c-.39 0-.77-.12-1.09-.344"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.426 17.704-1.167-.817m-7.123-2.037H9.65l-.913.638m7.353-.12-.74-.518h-1.46m-7.15 2.036-1.168.817"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.427 6.297-3.586 2.51c-.32.224-.7.344-1.09.344h-4.502c-.39 0-.77-.12-1.09-.343l-3.585-2.51M9.65 9.053v11.76M15.35 9.054v11.758"
    />
  </Svg>
);
export default IconlystHexagonalCylinderDashTwoTone;
