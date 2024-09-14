import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoneBulk = ({
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
      d="M13.778 13.37c-.68 0-1.32.286-1.778.766a2.46 2.46 0 0 0-1.778-.766 2.47 2.47 0 0 0-2.465 2.47c0 1.185.845 2.177 1.965 2.41V21a.5.5 0 0 0 .5.5h3.556a.5.5 0 0 0 .484-.624v-2.624a2.465 2.465 0 0 0 1.982-2.412 2.47 2.47 0 0 0-2.466-2.47M14.263 5.75V3.124a.5.5 0 0 0-.484-.624h-3.556a.5.5 0 0 0-.5.5v2.751A2.466 2.466 0 0 0 7.758 8.16a2.47 2.47 0 0 0 2.465 2.47c.679 0 1.319-.286 1.777-.766.458.48 1.099.766 1.779.766a2.47 2.47 0 0 0 2.465-2.47 2.464 2.464 0 0 0-1.981-2.41"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M6.893 20.25a3.145 3.145 0 0 1-3.143-3.14.75.75 0 0 0-1.5 0 4.647 4.647 0 0 0 4.643 4.64.75.75 0 0 0 0-1.5M21 16.36a.75.75 0 0 0-.75.75c0 1.731-1.41 3.14-3.143 3.14a.75.75 0 0 0 0 1.5 4.647 4.647 0 0 0 4.643-4.64.75.75 0 0 0-.75-.75M6.893 2.25A4.647 4.647 0 0 0 2.25 6.89a.75.75 0 0 0 1.5 0 3.145 3.145 0 0 1 3.143-3.14.75.75 0 0 0 0-1.5M17.107 3.75a3.145 3.145 0 0 1 3.143 3.14.75.75 0 0 0 1.5 0 4.647 4.647 0 0 0-4.643-4.64.75.75 0 0 0 0 1.5" />
    </G>
  </Svg>
);
export default IconlystBoneBulk;
