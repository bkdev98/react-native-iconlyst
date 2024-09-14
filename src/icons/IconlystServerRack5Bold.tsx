import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack5Bold = ({
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
      d="M17.25 13.1h-.55a.3.3 0 0 0-.3.3v7.8a.3.3 0 0 0 .3.3h.55c2.28 0 4.2-1.92 4.2-4.2s-1.92-4.2-4.2-4.2m-8.3 4.95h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75m-2.2-4.95c-2.28 0-4.2 1.92-4.2 4.2s1.92 4.2 4.2 4.2h7.85a.3.3 0 0 0 .3-.3v-7.8a.3.3 0 0 0-.3-.3zM17.25 2.5h-.55a.3.3 0 0 0-.3.3v7.8a.3.3 0 0 0 .3.3h.55c2.28 0 4.2-1.92 4.2-4.2s-1.92-4.2-4.2-4.2m-8.3 4.95h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75M6.75 2.5c-2.28 0-4.2 1.92-4.2 4.2s1.92 4.2 4.2 4.2h7.85a.3.3 0 0 0 .3-.3V2.8a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRack5Bold;
