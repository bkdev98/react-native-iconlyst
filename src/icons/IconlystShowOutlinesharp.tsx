import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.096 12.414a2.41 2.41 0 1 0 0 4.822 2.41 2.41 0 0 0 0-4.822m-3.911 2.412a3.91 3.91 0 1 1 7.823 0 3.912 3.912 0 0 1-7.823 0M2.17 14.504c2.054-4.326 5.766-7.032 9.925-7.033h.004v1.5h-.004m.002 0c3.454 0 6.706 2.248 8.572 6.176l.322.678 1.355-.644-.322-.677C19.97 10.178 16.258 7.472 12.1 7.47m-.002 1.5c-3.455 0-6.707 2.248-8.573 6.176l-.322.678-1.355-.644.322-.677"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShowOutlinesharp;
