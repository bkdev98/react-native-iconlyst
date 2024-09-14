import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarCoolerLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.25 19.748c-.014 1.08.676 1.825 1.713 2.034 4.681.941 7.41-4.81 3.204-7.394-1.127-.772-2.726-1.26-1.702-2.008 1.467-1.07 2.148.484 3.648.504 1.081.015 1.825-.675 2.034-1.712.942-4.681-4.809-7.41-7.394-3.204-.771 1.127-1.26 2.726-2.008 1.701-1.07-1.467.484-2.147.505-3.647.015-1.081-.676-1.826-1.713-2.034-4.681-.942-7.41 4.809-3.204 7.394 1.127.771 2.726 1.26 1.702 2.007-1.467 1.071-2.148-.483-3.648-.504-1.081-.015-1.825.675-2.034 1.713-.942 4.68 4.809 7.41 7.394 3.204.772-1.128 1.26-2.726 2.008-1.702 1.07 1.467-.484 2.148-.505 3.648Z"
    />
    <Circle
      cx={12.25}
      cy={12.885}
      r={2.877}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystCarCoolerLight;
