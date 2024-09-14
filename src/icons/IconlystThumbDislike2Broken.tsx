import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike2Broken = ({
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
      d="M4.116 6.489c.274-1.013.41-1.52.697-1.898a2.44 2.44 0 0 1 1.023-.783c.44-.18.965-.18 2.014-.18h4.27c.341 0 .512 0 .68.025q.232.031.454.108c.16.055.312.133.616.287L16.34 5.3M16.339 14.062c-1.178 0-3.236 3.759-4.105 5.454-.155.302-.232.453-.351.569-.103.1-.253.19-.388.236-.158.052-.297.05-.574.05a3 3 0 0 1-.561-.043c-1.304-.268-2.32-1.852-1.005-5.938.047-.147.07-.22.057-.276a.2.2 0 0 0-.09-.123c-.05-.031-.125-.031-.276-.031H7.99c-1.982 0-2.973 0-3.647-.405A2.84 2.84 0 0 1 3.076 11.9c-.172-.607-.041-1.342.284-2.596"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 9.367V5.884c0-.781 0-1.171-.15-1.471a1.42 1.42 0 0 0-.635-.635c-.3-.15-.69-.15-1.471-.15h-.15c-.781 0-1.171 0-1.471.15a1.43 1.43 0 0 0-.635.635c-.15.3-.15.69-.15 1.47v7.144c0 .78 0 1.17.15 1.47.138.276.36.498.635.636.3.149.69.149 1.47.149h.15c.782 0 1.173 0 1.472-.15.275-.137.498-.36.635-.634.15-.3.15-.69.15-1.471"
    />
  </Svg>
);
export default IconlystThumbDislike2Broken;
