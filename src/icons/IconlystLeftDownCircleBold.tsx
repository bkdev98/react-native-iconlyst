import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftDownCircleBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.429 15.026a.75.75 0 0 1-.692.462h-.006l-4.272-.009a.75.75 0 0 1 .001-1.5h.002l2.46.005-4.19-4.189a.75.75 0 1 1 1.061-1.061l4.19 4.19-.004-2.464a.75.75 0 0 1 1.5-.002l.007 4.279q0 .154-.057.289m3.288-9.743A9.44 9.44 0 0 0 12 2.5a9.43 9.43 0 0 0-6.717 2.783A9.44 9.44 0 0 0 2.5 12.001c0 2.537.988 4.922 2.783 6.716A9.43 9.43 0 0 0 12 21.5a9.44 9.44 0 0 0 6.717-2.783 9.43 9.43 0 0 0 2.783-6.716 9.44 9.44 0 0 0-2.783-6.718"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftDownCircleBold;
