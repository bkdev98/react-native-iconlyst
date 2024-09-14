import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogLight = ({
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
      d="M13.846 21.37h-5.1M11.427 9.809c-.247 1.164-1.416 1.916-2.763 3.298-2.294 2.357-2.346 6.25-2.111 8.444-3.15-.564-3.636-4.134-1.61-6.287M10.452 15.203c2.127 0 3.518 3.633 1.495 5.978"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.57 21.433h-1.956c-.126-1.557-.849-2.61 0-6.122.594-2.457.25-3.845-.205-6.266h1.675c1.615 0 2.11-1.778 2.189-2.716L17.81 5.106c-.146-.473-.284-1.655-1.807-1.848l-1.076-.166c-1.324-.194-2.754.243-3.466 2.347-1.165 3.445-.151 4.475.502 4.56 2.307.427 2.256-2.745 2.08-4.128M16.16 6.276v.01"
    />
  </Svg>
);
export default IconlystDogLight;
