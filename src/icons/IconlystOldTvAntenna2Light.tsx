import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntenna2Light = ({
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
      d="M16.972 20.794H7.029A4.03 4.03 0 0 1 3 16.764v-5.456A4.03 4.03 0 0 1 7.03 7.28h9.942A4.03 4.03 0 0 1 21 11.31v5.456a4.03 4.03 0 0 1-4.028 4.029M17.984 16.936v-.01M17.984 11.157v-.01M17.984 14.047v-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.27 17.98H8a1.984 1.984 0 0 1-1.983-1.984v-3.917c0-1.097.888-1.985 1.983-1.985h5.268c1.096 0 1.984.888 1.984 1.985v3.917a1.984 1.984 0 0 1-1.984 1.984M16.496 3.207l-4.552 4.075-4.438-4.075"
    />
  </Svg>
);
export default IconlystOldTvAntenna2Light;
