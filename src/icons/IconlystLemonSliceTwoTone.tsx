import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLemonSliceTwoTone = ({
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
      d="M17.4 13.485c.636-1.709.678-3.594.044-5.318-.484-1.096.809-2.1-.36-3.269-1.168-1.169-2.173.125-3.268-.36-2.848-1.046-6.134-.25-8.341 2.02-2.278 2.213-3.071 5.511-2.012 8.364.486 1.056-.66 2.056.44 3.157s2.101-.046 3.158.44c1.535.57 3.2.604 4.755.158"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.603 14.69c-.1-.6.306-1.159.86-1.159l9.662.001c.553 0 .96.56.86 1.16-.496 2.97-2.856 5.222-5.69 5.224-2.838-.001-5.197-2.252-5.692-5.225"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.725 17.582-4.419-4.05-4.189 4.188M15.296 13.531l-.004 6.165"
    />
  </Svg>
);
export default IconlystLemonSliceTwoTone;
