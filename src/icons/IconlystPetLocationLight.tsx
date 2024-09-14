import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetLocationLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.474 10.828C4.474 16.183 10.795 21.3 12 21.3c1.204 0 7.526-5.118 7.526-10.473a7.526 7.526 0 1 0-15.052 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 7.258v-.05m-.006-.148a.218.218 0 1 0 .003.435.218.218 0 0 0-.003-.435M15.157 8.863v-.05m-.007-.148a.218.218 0 1 0 .003.435.218.218 0 0 0-.003-.435M8.853 8.863v-.05m-.007-.148a.218.218 0 1 0 .003.435.218.218 0 0 0-.003-.435"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.029 13.529c1.323 0 3.002 1.147 2.978-.618-.01-1.324-1.389-2.567-2.978-2.568-1.6 0-3.187 1.35-2.967 2.726.244 1.597 1.794.46 2.967.46Z"
    />
  </Svg>
);
export default IconlystPetLocationLight;
