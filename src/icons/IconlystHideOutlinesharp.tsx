import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideOutlinesharp = ({
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
      d="M2.323 8.833c2.055 4.326 5.766 7.03 9.925 7.032h.004v-1.5h-.004m.002 0c3.455 0 6.707-2.248 8.573-6.176l.321-.677 1.355.643-.322.678c-2.055 4.326-5.766 7.03-9.925 7.032m-.002-1.5c-3.455 0-6.707-2.248-8.573-6.176l-.321-.677L2 8.155l.322.678"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.84 11.319 3.172 3.172-1.061 1.06-3.172-3.172zM5.581 11.319 2.41 14.49l1.061 1.06 3.172-3.172zM15.094 13.858l1.262 4.35-1.44.418-1.263-4.35zM9.327 13.858l-1.263 4.35 1.44.419 1.263-4.35z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHideOutlinesharp;
