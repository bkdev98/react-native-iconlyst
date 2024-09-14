import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiEmailOutline = ({
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
      d="M4.896 11.303a.75.75 0 0 1 1.036-.227l5.451 3.49c.376.24.858.24 1.235 0l5.451-3.49a.75.75 0 0 1 .81 1.263l-5.452 3.49a2.64 2.64 0 0 1-2.852 0l-5.452-3.49a.75.75 0 0 1-.227-1.036"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.828 3.809c-.893 0-1.617.723-1.617 1.617v6.59a.75.75 0 1 1-1.5 0v-6.59a3.117 3.117 0 0 1 3.117-3.117h6.337a3.12 3.12 0 0 1 3.117 3.103v.004l.01 6.598a.75.75 0 1 1-1.5.002l-.01-6.594V5.42a1.62 1.62 0 0 0-1.617-1.611z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.196 5.049a.75.75 0 0 1-.568.896C4.928 6.325 3.75 7.93 3.75 10v6.048c0 2.382 1.546 4.15 3.724 4.143h9.043c2.18.007 3.733-1.763 3.733-4.143V10c0-2.067-1.183-3.674-2.895-4.056a.75.75 0 1 1 .326-1.464c2.528.564 4.069 2.893 4.069 5.52v6.048c0 3.031-2.06 5.653-5.237 5.643l.002-.75v.75H7.478h.001l-.002-.75v.75c-3.178.01-5.227-2.614-5.227-5.643V10c0-2.624 1.53-4.955 4.05-5.52a.75.75 0 0 1 .896.568"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 11.716a.75.75 0 0 1-.703-.49l-.088-.237a2.51 2.51 0 0 0-1.482-1.484l-.237-.088a.75.75 0 0 1 0-1.407l.236-.087a2.51 2.51 0 0 0 1.483-1.485l.088-.237a.75.75 0 0 1 1.406 0l.088.237c.254.688.796 1.23 1.483 1.485l.236.087a.75.75 0 0 1 0 1.407l-.236.088a2.51 2.51 0 0 0-1.483 1.484l-.088.237a.75.75 0 0 1-.703.49m.658-3.002A4 4 0 0 1 12 8.056a4 4 0 0 1-.658.658q.367.29.658.658.29-.367.658-.658"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiEmailOutline;
