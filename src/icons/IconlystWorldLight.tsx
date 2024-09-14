import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldLight = ({
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
      d="M11.783 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.73 3.21c.739 1.181 1.31 3.026 1.61 5.226.16 1.105.244 2.304.244 3.559 0 1.254-.085 2.463-.244 3.568-.3 2.2-.871 4.045-1.61 5.225M9.844 20.788c-.74-1.18-1.32-3.025-1.62-5.225a25 25 0 0 1-.244-3.568c0-1.255.084-2.454.244-3.56.3-2.2.88-4.044 1.62-5.224"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.998 10.046c1.18-.73 3.025-1.31 5.225-1.61a25 25 0 0 1 3.559-.245c1.254 0 2.453.085 3.558.245 2.201.3 4.036.87 5.225 1.6M20.565 13.941c-1.189.75-3.025 1.32-5.225 1.62-1.105.16-2.304.244-3.559.244-1.254 0-2.453-.084-3.558-.244-2.201-.3-4.046-.88-5.225-1.62"
    />
  </Svg>
);
export default IconlystWorldLight;
