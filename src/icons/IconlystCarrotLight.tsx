import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarrotLight = ({
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
      strokeWidth={1.5}
      d="M9.313 7.757c-2.14 2.14-7.702 11.126-5.99 12.838 1.71 1.711 10.697-3.852 12.837-5.991 2.14-2.14 1.89-4.956 0-6.847-1.89-1.89-4.707-2.14-6.847 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.582 9.292 2.8 2.8M8.582 15.699l2.443 2.443M20.923 7.95l-4.713-.205V3.083M16.205 7.75l3.811-3.695"
    />
  </Svg>
);
export default IconlystCarrotLight;
