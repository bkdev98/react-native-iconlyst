import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAIPerformanceAltTwoTone = ({
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
      d="M9.58 3h-.01M12.017 3h-.01M14.454 3h-.01M3.025 16.914c.313 2.233 1.795 3.803 4.047 4.066M16.89 20.98c2.253-.264 3.725-1.833 4.037-4.066M3.025 7.095C3.338 4.862 4.82 3.283 7.072 3.02M16.89 3.02c2.253.263 3.725 1.842 4.037 4.075M9.58 21h-.01M12.017 21h-.01M14.454 21h-.01M21.012 9.569v-.01M21.012 12.006v-.01M21.012 14.444v-.01M3.012 9.569v-.01M3.012 12.006v-.01M3.012 14.444v-.01M10.054 13.979l-.1-.274A3.76 3.76 0 0 0 7.73 11.48l-.272-.101.272-.101a3.76 3.76 0 0 0 2.222-2.225l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM15.365 15.22a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystAIPerformanceAltTwoTone;
