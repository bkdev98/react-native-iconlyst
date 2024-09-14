import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntenna2TwoTone = ({
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
      d="M17.472 20.794H7.529a4.03 4.03 0 0 1-4.029-4.03v-5.456A4.03 4.03 0 0 1 7.53 7.28h9.942a4.03 4.03 0 0 1 4.028 4.03v5.456a4.03 4.03 0 0 1-4.028 4.029"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.484 16.936v-.01M18.484 11.157v-.01M18.484 14.047v-.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.77 17.98H8.5a1.984 1.984 0 0 1-1.983-1.984v-3.917c0-1.097.888-1.985 1.983-1.985h5.268c1.096 0 1.984.888 1.984 1.985v3.917a1.984 1.984 0 0 1-1.984 1.984"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.996 3.207-4.552 4.075-4.438-4.075"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOldTvAntenna2TwoTone;
