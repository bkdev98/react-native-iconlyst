import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceTickBroken = ({
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
      d="M20.5 15.43c.139 1.117.139 2.25 0 3.368a1.867 1.867 0 0 1-1.811 1.683 17 17 0 0 1-3.046 0 1.867 1.867 0 0 1-1.811-1.683 13.8 13.8 0 0 1 0-3.37 1.88 1.88 0 0 1 1.811-1.678q1.053-.094 2.108-.058"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.865 16.865 1.414 1.414 4.222-4.22M5.415 20.483A1.867 1.867 0 0 1 3.604 18.8a13.8 13.8 0 0 1 0-3.37 1.88 1.88 0 0 1 1.811-1.678 17 17 0 0 1 3.046-.004 1.86 1.86 0 0 1 1.812 1.683c.138 1.118.138 2.25 0 3.369a1.87 1.87 0 0 1-1.812 1.683M3.604 5.198c.099-.935.872-1.653 1.811-1.682a17 17 0 0 1 3.046 0c.943.02 1.723.742 1.812 1.682.137 1.119.137 2.25 0 3.37a1.87 1.87 0 0 1-1.812 1.678 17 17 0 0 1-3.046 0 1.87 1.87 0 0 1-1.811-1.678M15.644 3.516a1.88 1.88 0 0 0-1.812 1.682 13.8 13.8 0 0 0 0 3.37c.095.935.87 1.654 1.812 1.678 1.013.092 2.032.092 3.045 0a1.87 1.87 0 0 0 1.812-1.679c.138-1.119.138-2.25 0-3.37a1.86 1.86 0 0 0-1.812-1.681"
    />
  </Svg>
);
export default IconlystGridInterfaceTickBroken;
