import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSizeBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.158 9.831a.75.75 0 0 1-1.5-.002l.002-1.011a.628.628 0 0 0-.629-.638h-1.023a.75.75 0 0 1 0-1.5h1.033c.553 0 1.081.217 1.483.614.41.406.637.948.636 1.526zm-.636 6.875c-.4.396-.928.613-1.49.613h-1.026a.75.75 0 0 1 0-1.5h1.006a.72.72 0 0 0 .456-.179.64.64 0 0 0 .19-.458l-.002-1.011a.75.75 0 0 1 .749-.751h.001a.75.75 0 0 1 .75.749l.002 1.01a2.13 2.13 0 0 1-.636 1.527m-6.86-8.526H9.655c-.177-.028-.336.061-.456.18a.64.64 0 0 0-.189.457l.002 1.012a.75.75 0 0 1-1.5.002L7.51 8.82a2.12 2.12 0 0 1 .634-1.525c.409-.404.952-.641 1.521-.615h.997a.75.75 0 0 1 0 1.5m-.002 9.139H9.625a2.1 2.1 0 0 1-1.481-.612 2.13 2.13 0 0 1-.636-1.528l.002-1.01a.75.75 0 0 1 1.5.002l-.002 1.01a.628.628 0 0 0 .635.638h1.017a.75.75 0 0 1 0 1.5M16.807 2.5H8.86c-3.306 0-5.526 2.122-5.526 5.28v8.44c0 3.158 2.22 5.28 5.526 5.28h7.947c3.306 0 5.527-2.122 5.527-5.28V7.78c0-3.158-2.221-5.28-5.527-5.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScreenSizeBold;
