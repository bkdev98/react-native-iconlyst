import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAIPerformanceLight = ({
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
      d="M9.58 3h-.01M12.017 3h-.01M14.454 3h-.01M3.025 16.914c.313 2.233 1.795 3.803 4.047 4.066M16.89 20.98c2.253-.264 3.725-1.833 4.037-4.066M3.025 7.095C3.338 4.862 4.82 3.283 7.072 3.02M16.89 3.02c2.253.263 3.725 1.842 4.037 4.075M7.132 14.168c0 1.602 1.002 2.736 2.609 2.736h4.597c1.608 0 2.604-1.134 2.604-2.736V9.835c0-1.606-.997-2.741-2.604-2.741H9.741c-1.602 0-2.61 1.135-2.61 2.741zM9.58 21h-.01M12.017 21h-.01M14.454 21h-.01M21.012 9.569v-.01M21.012 12.006v-.01M21.012 14.444v-.01M3.012 9.569v-.01M3.012 12.006v-.01M3.012 14.444v-.01"
    />
  </Svg>
);
export default IconlystAIPerformanceLight;
