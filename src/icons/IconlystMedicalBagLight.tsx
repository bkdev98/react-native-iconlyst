import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalBagLight = ({
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
      d="M16.846 21.002H7.154a4.04 4.04 0 0 1-4.04-4.04V9.903a4.04 4.04 0 0 1 4.04-4.04h9.692a4.04 4.04 0 0 1 4.04 4.04v7.059a4.04 4.04 0 0 1-4.04 4.04M13.969 15.398h-3.934M12 13.43v3.933M15.383 5.861v-.924c0-1.07-.867-1.937-1.937-1.937h-2.89c-1.07 0-1.937.867-1.937 1.937v.924M20.838 10.383H3.162"
    />
  </Svg>
);
export default IconlystMedicalBagLight;
