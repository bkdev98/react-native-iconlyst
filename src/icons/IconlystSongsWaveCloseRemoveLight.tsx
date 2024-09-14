import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCloseRemoveLight = ({
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
      d="M12 3.117v17.764M3.033 10.035v4.212M7.516 6.443v11.252M16.482 6.303v5.696M20.967 9.752v1.907M18.83 18.506l2.103 2.102m-2.103-2.102-2.103-2.104m2.103 2.104 2.103-2.104m-2.103 2.104-2.103 2.102"
    />
  </Svg>
);
export default IconlystSongsWaveCloseRemoveLight;
