import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldSearchOutline = ({
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
      d="M12.287 3.75c-4.56 0-8.254 3.702-8.254 8.254a8.26 8.26 0 0 0 7.584 8.238.75.75 0 1 1-.121 1.495 9.76 9.76 0 0 1-8.963-9.733c0-5.38 4.364-9.754 9.754-9.754 4.986 0 9.085 3.737 9.674 8.558a.75.75 0 0 1-1.49.182c-.498-4.08-3.968-7.24-8.184-7.24"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.691 4.302c.57-1.083 1.427-2.052 2.595-2.052 1.172 0 2.03.968 2.599 2.053.599 1.141 1.04 2.7 1.283 4.466.107.731.174 1.497.203 2.289a.75.75 0 1 1-1.499.055 20 20 0 0 0-.189-2.13l-.001-.007c-.227-1.662-.633-3.039-1.125-3.976-.523-.996-1-1.25-1.271-1.25-.266 0-.743.253-1.267 1.25-.494.938-.902 2.315-1.128 3.976l-.001.006a21 21 0 0 0-.208 3.022c0 1.072.072 2.095.208 3.03v.006c.314 2.274 1.28 4.414 2.22 5.443a.75.75 0 0 1-1.11 1.01c-1.195-1.31-2.252-3.76-2.595-6.246a23 23 0 0 1-.223-3.243c0-1.139.077-2.223.223-3.234.241-1.767.686-3.326 1.286-4.468"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.533 12.012a.75.75 0 0 1 .75-.75h8.598a.75.75 0 0 1 0 1.5H3.282a.75.75 0 0 1-.75-.75M18.978 15.432a2.368 2.368 0 1 0-3.348 3.35 2.368 2.368 0 0 0 3.348-3.35M14.57 14.37a3.868 3.868 0 1 1 5.47 5.47 3.868 3.868 0 0 1-5.47-5.47"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.979 18.782a.75.75 0 0 1 1.06 0l1.69 1.69a.75.75 0 1 1-1.061 1.06l-1.69-1.69a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldSearchOutline;
