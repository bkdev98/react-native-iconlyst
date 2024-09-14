import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireExtinguisherOutline = ({
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
      d="M6.266 18.348a.75.75 0 0 1 .75-.75h7.613a.75.75 0 0 1 0 1.5H7.016a.75.75 0 0 1-.75-.75M8.341 6.271a2.763 2.763 0 0 0-2.763 2.763.75.75 0 1 1-1.5 0 4.263 4.263 0 0 1 4.263-4.263h.96a.75.75 0 1 1 0 1.5zM11.629 5.521a.75.75 0 0 1 .75-.75h2.318a.75.75 0 0 1 0 1.5h-2.318a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.27 11.36a4.557 4.557 0 1 1 9.113 0v8.65a1.75 1.75 0 0 1-1.75 1.75H8.02a1.75 1.75 0 0 1-1.75-1.75zm4.556-3.057A3.057 3.057 0 0 0 7.77 11.36v8.65c0 .138.111.25.25.25h5.613a.25.25 0 0 0 .25-.25v-8.65a3.057 3.057 0 0 0-3.057-3.057"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.561 4c0-.967.784-1.75 1.75-1.75h1.031c.967 0 1.75.784 1.75 1.75v3.863a.75.75 0 0 1-1.5 0V4a.25.25 0 0 0-.25-.25h-1.03a.25.25 0 0 0-.25.25l-.002 3.863a.75.75 0 1 1-1.5 0zM18.428 4.427a.05.05 0 0 0-.058-.05l-2.882.45a.05.05 0 0 0-.043.05v1.302a.05.05 0 0 0 .043.05l2.883.436a.05.05 0 0 0 .057-.05zm-.289-1.531a1.55 1.55 0 0 1 1.79 1.531v2.188a1.55 1.55 0 0 1-1.783 1.533l-2.883-.436a1.55 1.55 0 0 1-1.318-1.533V4.876a1.55 1.55 0 0 1 1.312-1.531zM10.29 13.08c0-.967.783-1.75 1.75-1.75h2.589a.75.75 0 0 1 0 1.5h-2.59a.25.25 0 0 0-.25.25v1.623c0 .138.112.25.25.25h2.59a.75.75 0 0 1 0 1.5h-2.59a1.75 1.75 0 0 1-1.75-1.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFireExtinguisherOutline;
