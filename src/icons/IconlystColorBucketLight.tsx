import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorBucketLight = ({
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
      d="m10.112 3.238-6.575 8.61a2.66 2.66 0 0 0-.292 2.719 10 10 0 0 0 1.987 2.813 9.9 9.9 0 0 0 2.806 1.979c.895.407 1.939.312 2.718-.291l8.616-6.569"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.153 20.98c-1.563 0-2.267-1.79-1.592-2.878.628-.931 1.592-1.575 1.592-1.575s.963.643 1.592 1.575c.675 1.088-.03 2.878-1.592 2.878M19.372 12.5c-.8.8-3.52-.624-6.078-3.181-2.556-2.556-3.98-5.278-3.181-6.077.8-.8 3.52.624 6.077 3.181s3.981 5.278 3.182 6.078"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystColorBucketLight;
