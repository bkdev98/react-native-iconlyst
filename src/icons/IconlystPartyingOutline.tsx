import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPartyingOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 5.013 14.803l.826-.644a.75.75 0 0 1 .922 1.182l-.833.65a9.7 9.7 0 0 1-5.928 2.009c-5.385 0-9.75-4.366-9.75-9.75a9.75 9.75 0 0 1 9.75-9.75c4.346 0 8.026 2.843 9.286 6.77a.75.75 0 0 1-1.429.457A8.25 8.25 0 0 0 12.25 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.456 13.718a2.155 2.155 0 1 1 4.31 0v.149a2.304 2.304 0 0 1-2.304 2.304h-3.917a.75.75 0 0 1 0-1.5h3.917c.444 0 .804-.36.804-.804v-.149a.655.655 0 1 0-1.31 0v.036a.75.75 0 0 1-1.5 0zM9.455 10a.63.63 0 0 0-.493.266.75.75 0 1 1-1.19-.914c.39-.506.99-.852 1.683-.852s1.293.346 1.682.852a.75.75 0 1 1-1.189.914.63.63 0 0 0-.493-.266M14.924 10a.63.63 0 0 0-.493.266.75.75 0 0 1-1.19-.914c.39-.506.99-.852 1.683-.852s1.293.346 1.682.852a.75.75 0 0 1-1.19.914.63.63 0 0 0-.492-.266M1.72 1.47a.75.75 0 0 1 .687-.203l7 1.5a.75.75 0 1 1-.314 1.466L3.226 2.976l1.257 5.867a.75.75 0 0 1-1.466.314l-1.5-7a.75.75 0 0 1 .203-.687"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.28 2.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.188 17.42a.75.75 0 0 1-.22-1.468q.226-.066.434-.175a2 2 0 0 0-.227-.15.75.75 0 0 1 .013-1.317q.053-.028.107-.063a3 3 0 0 0-.271-.089.75.75 0 1 1 .4-1.445c1.349.375 1.633 1.02 1.633 1.493-.01.288-.121.564-.316.777.195.22.307.5.316.794 0 .412-.215 1.167-1.65 1.61a.8.8 0 0 1-.22.032"
    />
  </Svg>
);
export default IconlystPartyingOutline;
