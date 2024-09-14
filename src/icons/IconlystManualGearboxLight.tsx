import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManualGearboxLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.05 8.385v9M20.723 5.312a1.8 1.8 0 1 1-2.546 2.546 1.8 1.8 0 0 1 2.546-2.546"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.45 8.385v2.7a1.8 1.8 0 0 1-1.8 1.8H5.05M13.523 5.312a1.8 1.8 0 1 1-2.546 2.546 1.8 1.8 0 0 1 2.546-2.546M6.323 5.312a1.8 1.8 0 1 1-2.546 2.546 1.8 1.8 0 0 1 2.546-2.546M13.523 17.912a1.8 1.8 0 1 1-2.546 2.546 1.8 1.8 0 0 1 2.546-2.546M20.723 17.912a1.8 1.8 0 1 1-2.546 2.546 1.8 1.8 0 0 1 2.546-2.546M6.323 17.912a1.8 1.8 0 1 1-2.546 2.546 1.8 1.8 0 0 1 2.546-2.546M12.25 8.385v9"
    />
  </Svg>
);
export default IconlystManualGearboxLight;
