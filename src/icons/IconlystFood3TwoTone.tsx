import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood3TwoTone = ({
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
      d="M19.676 20.954H5.324a1.87 1.87 0 0 1-1.772-1.277 1.002 1.002 0 0 1 .95-1.319h15.995c.684 0 1.167.67.95 1.32a1.87 1.87 0 0 1-1.77 1.276"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.822 9.465v-1.13a1.323 1.323 0 1 0-2.644 0v1.13"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.764 18.358-.041-.829C4.5 13.081 8.047 9.353 12.5 9.353s8 3.728 7.778 8.176l-.042.83"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.524 5.356a1.195 1.195 0 0 0 0 1.69M4.174 7.046a1.194 1.194 0 0 1 0 1.69M8.635 3.046a1.194 1.194 0 0 1 0 1.69 1.194 1.194 0 0 0 0 1.69"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFood3TwoTone;
