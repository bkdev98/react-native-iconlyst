import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingPlayTwoTone = ({
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
      d="M9.049 20.398h.01c.62.258 1.277.44 1.954.544M6.608 18.91a8.3 8.3 0 0 1-1.182-1.191M3.986 15.24a8.8 8.8 0 0 1-.486-1.81M4.044 8.605A8.4 8.4 0 0 0 3.5 10.57M6.723 4.973a9.5 9.5 0 0 0-1.202 1.182M11.013 3.059a8.5 8.5 0 0 0-1.812.486M13.873 3.059a8.5 8.5 0 0 1 1.955.543 8.7 8.7 0 0 1 2.45 1.477c.438.363.838.763 1.192 1.202a8.9 8.9 0 0 1 1.43 2.47c.228.58.39 1.191.485 1.82q.115.702.115 1.43 0 .73-.115 1.43a8.3 8.3 0 0 1-.543 1.945v.009a8.6 8.6 0 0 1-1.478 2.441 7.8 7.8 0 0 1-1.201 1.192 8.9 8.9 0 0 1-2.478 1.44 9 9 0 0 1-1.812.486"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.991 13.145a10 10 0 0 1-2.922 1.85c-.944.376-1.734-.092-1.85-1.03a18.6 18.6 0 0 1 0-3.945c.127-.975.997-1.39 1.85-1.027a9.8 9.8 0 0 1 2.922 1.851c.728.665.745 1.61 0 2.301"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLoadingPlayTwoTone;
