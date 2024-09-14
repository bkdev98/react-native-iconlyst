import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalBagBulk = ({
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
      d="M21.38 9.754a4.544 4.544 0 0 0-4.53-4.27h-9.7c-2.41 0-4.39 1.89-4.53 4.27-.01.09-.01.18-.01.27v7.06c0 2.5 2.04 4.54 4.54 4.54h9.7c2.5 0 4.54-2.04 4.54-4.54v-7.06c0-.09 0-.18-.01-.27"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.37 5.065c0-.66.53-1.19 1.19-1.19h2.89c.65 0 1.18.53 1.18 1.19v.42h1.5v-.42c0-1.48-1.2-2.69-2.68-2.69h-2.89a2.69 2.69 0 0 0-2.69 2.69v.42h1.5zM13.968 15.523H12.75v-1.22a.75.75 0 0 0-1.5 0v1.22h-1.215a.75.75 0 0 0 0 1.5h1.215v1.21a.75.75 0 0 0 1.5 0v-1.21h1.22a.75.75 0 0 0 0-1.5M21.38 9.755H2.62c-.01.09-.01.18-.01.27v1.23h18.78v-1.23c0-.09 0-.18-.01-.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMedicalBagBulk;
