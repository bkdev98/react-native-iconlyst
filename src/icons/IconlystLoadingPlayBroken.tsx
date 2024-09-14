import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingPlayBroken = ({
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
      d="M8.799 20.398h.01c.62.258 1.277.44 1.954.544M6.358 18.91a8.3 8.3 0 0 1-1.182-1.191M3.736 15.24a8.8 8.8 0 0 1-.486-1.81M3.794 8.605a8.4 8.4 0 0 0-.544 1.965M6.473 4.973a9.5 9.5 0 0 0-1.202 1.182M10.763 3.059a8.5 8.5 0 0 0-1.812.486M13.623 3.059a8.5 8.5 0 0 1 1.955.543 8.7 8.7 0 0 1 2.45 1.477c.438.363.838.763 1.192 1.202a8.9 8.9 0 0 1 1.43 2.47c.228.58.39 1.191.485 1.82q.115.702.115 1.43 0 .73-.115 1.43M19.114 17.824a7.8 7.8 0 0 1-1.201 1.192 8.9 8.9 0 0 1-2.478 1.44 9 9 0 0 1-1.812.486M11.819 8.993c-.853-.362-1.724.052-1.85 1.027a18.6 18.6 0 0 0 0 3.944c.116.94.906 1.407 1.85 1.032a10 10 0 0 0 2.922-1.85c.745-.692.728-1.637 0-2.302"
    />
  </Svg>
);
export default IconlystLoadingPlayBroken;
