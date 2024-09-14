import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack6Bold = ({
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
      d="M16.7 18.05h-3.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.6c.41 0 .75.34.75.75s-.34.75-.75.75m-8.8 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m9.4-4.95H6.7c-2.28 0-4.2 1.92-4.2 4.2s1.92 4.2 4.2 4.2h10.6c2.28 0 4.2-1.92 4.2-4.2s-1.92-4.2-4.2-4.2M16.7 7.45h-3.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.6c.41 0 .75.34.75.75s-.34.75-.75.75m-8.8 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m9.4-4.95H6.7c-2.28 0-4.2 1.92-4.2 4.2s1.92 4.2 4.2 4.2h10.6c2.28 0 4.2-1.92 4.2-4.2s-1.92-4.2-4.2-4.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRack6Bold;
