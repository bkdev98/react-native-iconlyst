import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProblemSolvingTwoTone = ({
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
      d="M10.601 6.855a2.235 2.235 0 0 0-2.227-2.242M6.147 12.984c0-1.238.997-2.242 2.227-2.242.39 0 .758.101 1.077.28"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 15.006c0 .962-.774 1.742-1.73 1.742a1.735 1.735 0 0 1-1.726-1.625 2.2 2.2 0 0 1-.67.104 2.235 2.235 0 0 1-2.227-2.243c0-.562.205-1.075.545-1.468a1.67 1.67 0 0 1-1.143-1.588 1.67 1.67 0 0 1 1.154-1.592 2.24 2.24 0 0 1-.556-1.482c0-1.238.997-2.242 2.228-2.242q.348.002.665.102A1.736 1.736 0 0 1 10.77 3c.956 0 1.73.78 1.73 1.742z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.626 4.613c-.779 0-1.464.402-1.862 1.012M18.853 12.984a2.235 2.235 0 0 0-2.227-2.242c-.39 0-.758.101-1.077.28"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.23 16.748c.916 0 1.666-.717 1.726-1.625q.32.102.67.104a2.235 2.235 0 0 0 2.227-2.243c0-.562-.205-1.075-.544-1.468a1.67 1.67 0 0 0 1.143-1.588 1.67 1.67 0 0 0-1.155-1.592c.346-.395.556-.914.556-1.482a2.235 2.235 0 0 0-2.227-2.242q-.35.002-.666.102A1.736 1.736 0 0 0 14.23 3c-.955 0-1.73.78-1.73 1.742"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 19.02h6M11 21h3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystProblemSolvingTwoTone;
