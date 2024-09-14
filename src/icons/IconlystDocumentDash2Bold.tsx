import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDash2Bold = ({
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
      d="M4.37 12.75c.42 0 .75-.34.75-.75V6.68a3.015 3.015 0 0 1 3-2.93h5.4v2.2a3.32 3.32 0 0 0 3.3 3.32h2.06V12a.749.749 0 1 0 1.5 0V9c0-.73-.28-1.42-.78-1.94l-3.79-3.95c-.35-.36-.78-.62-1.25-.74a.6.6 0 0 0-.14-.04 2.3 2.3 0 0 0-.63-.08H8.12c-2.42 0-4.44 1.97-4.5 4.41V12c0 .41.34.75.75.75M10.45 20.252H8.066a3.024 3.024 0 0 1-2.945-3.084v-1.894a.75.75 0 0 0-1.5 0v1.879c-.047 2.478 1.932 4.54 4.428 4.599h2.403a.75.75 0 0 0 0-1.5M19.631 14.523a.75.75 0 0 0-.75.75v1.897c.008 1.657-1.283 3.01-2.908 3.081h-2.378a.75.75 0 0 0 0 1.5h2.411a4.557 4.557 0 0 0 4.375-4.584v-1.894a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentDash2Bold;
