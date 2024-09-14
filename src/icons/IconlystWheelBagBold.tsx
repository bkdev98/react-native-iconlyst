import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelBagBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.158 17.121a.75.75 0 0 1-1.5 0v-5.18a.75.75 0 0 1 1.5 0zm-1.873-9.22H9.717v-2.4a.88.88 0 0 1 .879-.88h2.809c.485 0 .88.395.88.88zm-1.533 9.22a.75.75 0 0 1-1.5 0v-5.18a.75.75 0 0 1 1.5 0zm-3.4 0a.75.75 0 0 1-1.5 0v-5.18a.75.75 0 0 1 1.5 0zm6.433-9.189v-2.43a2.38 2.38 0 0 0-2.38-2.38h-2.809a2.38 2.38 0 0 0-2.379 2.38v2.43c-2.296.161-3.716 1.724-3.716 4.19v4.68c0 2.337 1.268 3.871 3.349 4.166v.903a.75.75 0 0 0 1.5 0v-.84h5.306v.84a.75.75 0 0 0 1.5 0v-.903c2.078-.295 3.343-1.826 3.343-4.158v-4.689c0-2.466-1.419-4.029-3.714-4.189"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWheelBagBold;
