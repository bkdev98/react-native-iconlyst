import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCloseRemoveBroken = ({
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
      d="M12.25 3.118V11M12.25 15.44v5.44M3.283 10.035v4.212M7.766 6.443v11.252M16.732 6.303v5.696M21.217 9.752v1.907M19.08 18.506l2.103 2.102m-2.103-2.102-2.103-2.104m2.103 2.104 2.103-2.104m-2.103 2.104-2.103 2.102"
    />
  </Svg>
);
export default IconlystSongsWaveCloseRemoveBroken;
