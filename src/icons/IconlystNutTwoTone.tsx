import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNutTwoTone = ({
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
      d="M11.451 11.267H3.085C2.841 9.66 3.07 8.083 4.442 6.962c1.909-1.304 5.938-1.293 7.842 0a3.87 3.87 0 0 1 1.355 2.15"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.979 14.464c-.428-2.272-3.284-5.114-5.545-5.545-1.765-.178-3.078.74-4.03 2.057l7.49 7.49c1.308-.962 2.262-2.24 2.085-4.003"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M8.388 5.988c-.241-1.077.492-2.824 2.065-2.824M3.908 11.267c0 4.483.197 5.445 4.435 7.238.433-.183.635-.28.988-.45M18.878 10.985c.932-.592 1.648-2.345.536-3.457" />
      <Path d="M18.313 17.885c-3.17 3.17-3.99 3.711-8.254 1.982-1.73-4.264-1.188-5.084 1.982-8.254" />
    </G>
  </Svg>
);
export default IconlystNutTwoTone;
