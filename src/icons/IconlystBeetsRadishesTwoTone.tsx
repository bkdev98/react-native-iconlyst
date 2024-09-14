import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeetsRadishesTwoTone = ({
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
      d="M17.827 18.653c-2.333 2.333-5.846.156-7.445.676.524-1.473-1.657-5.112.677-7.445 1.495-1.496 4.222-1.193 6.092.676s2.172 4.597.676 6.092"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.787 10.732c-.149-.52.06-1.899-1.322-3.28-1.382-1.383-3.902-1.103-5.63.625s-2.007 4.247-.625 5.629c1.036 1.036 2.324 1.11 3.547.96"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M15.835 16.863c.408-.408.43-1.079.107-1.662M17.19 8.722c.206.704.493 2.438 0 3.74M21 12.576c-.704-.205-2.438-.492-3.74 0M17.235 12.462l3.388-3.3M6.81 4.245c-.206.703-.493 2.437 0 3.74M3 8.099c.704-.205 2.438-.493 3.74 0M6.766 7.985l-3.389-3.3" />
    </G>
  </Svg>
);
export default IconlystBeetsRadishesTwoTone;
