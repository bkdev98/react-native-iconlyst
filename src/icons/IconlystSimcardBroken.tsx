import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardBroken = ({
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
      d="m8.378 3 1.514 1.48L8.41 5.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.865 4.457H8.368A3.744 3.744 0 0 0 4.625 8.2M16.455 21l-1.514-1.481 1.482-1.513"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.969 19.544h1.497A3.744 3.744 0 0 0 20.21 15.8M6.14 21a1.817 1.817 0 0 1-1.818-1.816v-5.157c0-1.003.814-1.816 1.818-1.816h2.475c.272 0 .533.11.722.307l1.852 1.929c.179.187.279.435.279.694v4.043a1.817 1.817 0 0 1-1.818 1.817M15.349 11.79a1.817 1.817 0 0 1-1.818-1.817V4.817c0-1.004.814-1.817 1.818-1.817h2.475c.272 0 .533.11.722.307l1.852 1.929c.179.187.279.435.279.694v4.043a1.817 1.817 0 0 1-1.818 1.817"
    />
  </Svg>
);
export default IconlystSimcardBroken;
