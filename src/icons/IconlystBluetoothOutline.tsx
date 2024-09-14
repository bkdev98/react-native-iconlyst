import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothOutline = ({
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
      d="M11.72 2.324a.75.75 0 0 1 .794.09l5.62 4.496a.75.75 0 0 1 .001 1.171L13.245 12l4.89 3.91a.75.75 0 0 1 0 1.171l-5.62 4.504a.75.75 0 0 1-1.22-.585v-7.44l-3.47 2.771a.75.75 0 0 1-.936-1.172l3.956-3.16-3.956-3.167a.75.75 0 0 1 .937-1.171l3.47 2.778V3a.75.75 0 0 1 .424-.676m1.075 11.236 3.671 2.937-3.67 2.941zm0-3.122V4.56l3.671 2.937z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.853 10.998a1 1 0 0 1 1 1v.094a1 1 0 1 1-2 0v-.094a1 1 0 0 1 1-1m12.795 0a1 1 0 0 1 1 1v.094a1 1 0 1 1-2 0v-.094a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothOutline;
