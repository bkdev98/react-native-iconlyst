import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneStarLight = ({
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
      d="M3.572 12.93c1.203-.5 3.576-1.52 4.798-2.028l-2.242-5.43c.607-.216 1.163-.467 1.745-.607.68-.162 1.265.146 1.765.585a178 178 0 0 1 3.415 3.045c.284.262.507.286.846.138.976-.43 1.954-.859 2.956-1.22 1.158-.419 2.807-.463 3.217.998.323 1.153-.67 2.134-1.647 2.547a600 600 0 0 1-9.757 4.036c-2.327.933-4.168.118-5.154-2.197-.089-.208-.427-1.03-.514-1.238"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.25 14.934.725 1.457a.25.25 0 0 0 .187.137l1.622.234c.066.01.125.043.166.096a.24.24 0 0 1-.028.323l-1.175 1.137a.24.24 0 0 0-.07.22l.281 1.604a.246.246 0 0 1-.204.278.26.26 0 0 1-.162-.025l-1.444-.757a.24.24 0 0 0-.232 0l-1.456.762a.256.256 0 0 1-.337-.103.26.26 0 0 1-.025-.157l.282-1.605a.25.25 0 0 0-.071-.218l-1.182-1.137a.247.247 0 0 1 0-.348.3.3 0 0 1 .142-.07l1.621-.235a.26.26 0 0 0 .188-.137l.724-1.456q.047-.092.143-.125a.25.25 0 0 1 .192.014.26.26 0 0 1 .113.11"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.861 20.071h7.255"
    />
  </Svg>
);
export default IconlystPlaneStarLight;
