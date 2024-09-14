import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAIPerformanceTwoTone = ({
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
      d="M10.08 3h-.01M12.517 3h-.01M14.954 3h-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.525 16.914c.313 2.233 1.795 3.803 4.047 4.066M17.39 20.98c2.253-.264 3.725-1.833 4.037-4.066M3.525 7.095C3.838 4.862 5.32 3.283 7.572 3.02M17.39 3.02c2.253.263 3.725 1.842 4.037 4.075"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.632 14.168c0 1.602 1.002 2.736 2.609 2.736h4.597c1.608 0 2.604-1.134 2.604-2.736V9.835c0-1.606-.997-2.741-2.604-2.741h-4.597c-1.602 0-2.61 1.135-2.61 2.741zM10.08 21h-.01M12.517 21h-.01M14.954 21h-.01M21.512 9.569v-.01M21.512 12.006v-.01M21.512 14.444v-.01M3.512 9.569v-.01M3.512 12.006v-.01M3.512 14.444v-.01"
    />
  </Svg>
);
export default IconlystAIPerformanceTwoTone;
