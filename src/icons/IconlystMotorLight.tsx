import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMotorLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.4 18.009a2.977 2.977 0 1 0 0-5.954 2.977 2.977 0 0 0 0 5.954M18.273 18.009a2.977 2.977 0 1 0 0-5.954 2.977 2.977 0 0 0 0 5.954"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m17.41 12.18-1.605-5.345a1.2 1.2 0 0 0-1.202-.843l-1.157.063"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.376 15.032h2.26c.772 0 1.48-.377 1.91-1.014l3.067-4.492"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.827 12.055H4.012a.76.76 0 0 1-.762-.763v-.143c0-.879.08-1.587.96-1.587h2.672c.359 0 .7.152.942.43l1.793 2.063"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.722 10.665s2.636-1.731 4.358-1.946c2.34-.287 3.524.807 3.524.807M18.156 7.454l.422 1.632"
    />
  </Svg>
);
export default IconlystMotorLight;
