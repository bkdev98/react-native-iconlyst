import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitGithubBulk = ({
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
      d="M16.218 2.5H7.783C4.623 2.5 2.5 4.72 2.5 8.026v7.947c0 3.306 2.123 5.527 5.283 5.527h8.434c3.16 0 5.283-2.221 5.283-5.527V8.026c0-3.306-2.123-5.526-5.282-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.14 12.747a2.397 2.397 0 0 0 2.395 2.393 2.397 2.397 0 0 0 2.394-2.393 2.397 2.397 0 0 0-2.394-2.394c-.531 0-1.014.184-1.411.478l-1.872-1.337a2.4 2.4 0 0 0 .142-.781A2.396 2.396 0 0 0 10 6.319c-.554 0-1.058.196-1.464.513l-1.279-.913a.75.75 0 1 0-.871 1.22l1.315.94a2.4 2.4 0 0 0-.096.634 2.39 2.39 0 0 0 1.645 2.262v2.59a2.39 2.39 0 0 0-1.645 2.26A2.397 2.397 0 0 0 10 18.22a2.397 2.397 0 0 0 2.394-2.394 2.39 2.39 0 0 0-1.644-2.261v-2.59c.212-.071.415-.161.597-.285l1.899 1.357a2.4 2.4 0 0 0-.106.7m-2.247-4.034a.894.894 0 0 1-.89.894h-.006a.895.895 0 0 1-.893-.894.894.894 0 0 1 1.789 0m-.896 6.22a.894.894 0 0 0-.892.892.895.895 0 0 0 1.79 0c0-.492-.4-.892-.893-.893zm4.852-2.76a.895.895 0 0 1 1.58.573.894.894 0 1 1-1.668-.448.7.7 0 0 0 .088-.125"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitGithubBulk;
