import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceTickTwoTone = ({
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
      d="M18.69 13.75a17 17 0 0 0-3.046 0c-.938.03-1.71.745-1.812 1.679a13.8 13.8 0 0 0 0 3.369c.093.938.87 1.66 1.812 1.683 1.013.093 2.032.093 3.045 0a1.867 1.867 0 0 0 1.812-1.683c.138-1.119.138-2.25 0-3.368"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.865 16.865 1.414 1.414 4.222-4.22"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.415 13.752a1.88 1.88 0 0 0-1.811 1.678 13.8 13.8 0 0 0 0 3.37c.092.938.87 1.66 1.811 1.683 1.013.092 2.033.092 3.046 0a1.87 1.87 0 0 0 1.812-1.683c.138-1.12.138-2.25 0-3.369a1.86 1.86 0 0 0-1.812-1.683 17 17 0 0 0-3.046.004"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.415 3.516a1.88 1.88 0 0 0-1.811 1.682 13.8 13.8 0 0 0 0 3.37c.094.936.87 1.655 1.811 1.678 1.013.092 2.033.092 3.046 0a1.87 1.87 0 0 0 1.812-1.678c.138-1.12.138-2.25 0-3.37a1.86 1.86 0 0 0-1.812-1.682 17 17 0 0 0-3.046 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.644 3.516a1.88 1.88 0 0 0-1.812 1.682 13.8 13.8 0 0 0 0 3.37c.095.936.87 1.655 1.812 1.678 1.013.092 2.032.092 3.045 0a1.87 1.87 0 0 0 1.812-1.678c.138-1.12.138-2.25 0-3.37a1.86 1.86 0 0 0-1.812-1.682 17 17 0 0 0-3.045 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGridInterfaceTickTwoTone;
