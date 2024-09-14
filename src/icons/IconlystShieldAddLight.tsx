import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldAddLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.324 13.628c0 6.114-7.324 8.331-7.324 8.331s-7.324-2.216-7.324-8.33c0-6.115-.266-6.593.322-7.18.588-.589 6.042-2.49 7.002-2.49S18.413 5.855 19 6.449c.588.592.322 1.066.322 7.18M9.464 12.738h5.073M12 15.274v-5.073z"
    />
  </Svg>
);
export default IconlystShieldAddLight;
