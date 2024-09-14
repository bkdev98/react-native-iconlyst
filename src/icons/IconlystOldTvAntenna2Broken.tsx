import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntenna2Broken = ({
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
      d="M12.5 20.794H7.53a4.03 4.03 0 0 1-4.03-4.03v-5.456A4.03 4.03 0 0 1 7.53 7.28h9.942a4.03 4.03 0 0 1 4.028 4.03v5.456a4.03 4.03 0 0 1-4.028 4.029h-1.733M18.484 16.936v-.01M18.484 11.157v-.01M18.484 14.047v-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.501 10.094a1.984 1.984 0 0 0-1.983 1.984v3.917c0 1.096.888 1.985 1.983 1.985h5.268a1.984 1.984 0 0 0 1.984-1.985v-3.917a1.984 1.984 0 0 0-1.984-1.984h-2.056M16.996 3.207l-4.552 4.075-4.438-4.075"
    />
  </Svg>
);
export default IconlystOldTvAntenna2Broken;
