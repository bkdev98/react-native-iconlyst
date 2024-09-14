import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLockLight = ({
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
      d="M10.42 3.959H9.142a3.617 3.617 0 0 0-3.617 3.618l.001 10.764a3.617 3.617 0 0 0 3.617 3.617h5.515a3.62 3.62 0 0 0 3.618-3.618v-4.464"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.934 11.452h-3.103a1.54 1.54 0 0 1-1.54-1.54V8.17c0-.851.69-1.54 1.54-1.54h3.103c.85 0 1.54.689 1.54 1.54v1.74c0 .852-.69 1.54-1.54 1.54"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.234 6.661v-.873a1.852 1.852 0 0 0-3.703-.008v.881M11.898 18.225v-.064zm-.26-.014a.26.26 0 1 1 .521 0 .26.26 0 0 1-.52 0"
    />
  </Svg>
);
export default IconlystPhoneLockLight;
