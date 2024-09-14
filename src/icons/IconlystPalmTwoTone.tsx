import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPalmTwoTone = ({
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
      strokeWidth={1.5}
      d="m5.8 14.305.003-7.03c0-.912.765-1.674 1.676-1.673.912 0 1.673.762 1.674 1.673v3.683M15.837 11.796v.205m0-.205-.001.838m0-.838.001-.499a2.02 2.02 0 0 1 2.018-2.016 1.34 1.34 0 0 1 1.342 1.333c.004 1.158.004 2.738-.026 3.331"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.8 14.306a6.693 6.693 0 0 0 11.426 4.734c1.462-1.462 1.85-3.233 1.944-5.095"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.837 11.797V5.94a1.69 1.69 0 0 0-1.673-1.601 1.69 1.69 0 0 0-1.669 1.571v4.38M12.495 5.911v-1.31A1.69 1.69 0 0 0 10.823 3a1.69 1.69 0 0 0-1.67 1.603v2.673M15.835 12.633c-1.8-.002-3.345 1.525-3.34 3.344"
    />
  </Svg>
);
export default IconlystPalmTwoTone;
