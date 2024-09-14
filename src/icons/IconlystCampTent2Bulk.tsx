import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTent2Bulk = ({
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
      d="M18.553 20.228c-.8-1.483-1.3-3.349-1.5-5.648l2.283 5.648zm-13.04 0H4.73l2.282-5.648c-.2 2.299-.699 4.165-1.499 5.648m15.487 0h-.12l-2.99-7.43q-.06-.165-.18-.27l-4.9-5.5v-.54l3.09-1.29c.28-.12.47-.39.47-.7 0-.3-.19-.57-.47-.69l-3.55-1.48a.758.758 0 0 0-1.04.69v4.01l-5.06 5.54c-.06.06-.11.14-.14.23l-2.99 7.43H3a.749.749 0 1 0 0 1.5h18a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.319 20.227h3.991v-5.862c-1.323 2.27-2.795 4.317-3.991 5.862"
    />
  </Svg>
);
export default IconlystCampTent2Bulk;
