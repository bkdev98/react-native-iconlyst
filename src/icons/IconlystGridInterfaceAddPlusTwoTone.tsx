import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceAddPlusTwoTone = ({
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
      d="M19.302 21h-2.604a2.2 2.2 0 0 1-2.198-2.198v-2.604c0-1.214.984-2.198 2.198-2.198h2.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 19.302 21"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 3.23v6.53m3.267-3.264h-6.536"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.302 10H5.698A2.2 2.2 0 0 1 3.5 7.802V5.198C3.5 3.984 4.484 3 5.698 3h2.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 8.302 10"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.302 21H5.698A2.2 2.2 0 0 1 3.5 18.802v-2.604C3.5 14.984 4.484 14 5.698 14h2.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 8.302 21"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceAddPlusTwoTone;
