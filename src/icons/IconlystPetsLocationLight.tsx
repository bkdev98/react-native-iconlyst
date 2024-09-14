import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetsLocationLight = ({
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
      d="M14.117 20.932v-.037c.009-3.648-1.075-6.35-3.355-4.411-1.939 1.635-3.409 2.197-4.374 2.334"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.001 16.868c1.267 2.643 4.08 4.244 7.188 4.244a8.812 8.812 0 0 0 0-17.622"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.576 3.825c-.165.477-.771 2.527.589 3.96 1.544 1.627 2.867 1.72 2.821 3.483-.037 1.775-2.224 1.747-1.039 4.56.488 1.157 1.066 2.076 1.397 2.774M7.064 5.116V5.06m-.008-.165a.244.244 0 1 0 .003.487.244.244 0 0 0-.003-.487M10.604 6.915v-.056m-.007-.166a.244.244 0 1 0 .003.487.244.244 0 0 0-.003-.487M3.538 6.915v-.056m-.007-.166a.244.244 0 1 0 .003.487.244.244 0 0 0-.003-.487"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M7.098 12.489c1.483 0 3.365 1.285 3.338-.694-.01-1.483-1.556-2.876-3.338-2.878-1.792 0-3.572 1.514-3.325 3.057.273 1.788 2.01.515 3.325.515Z"
    />
  </Svg>
);
export default IconlystPetsLocationLight;
