import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitlabBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.1 14.074-4.658 3.41a.75.75 0 0 1-.887-.001l-4.652-3.41a.75.75 0 0 1-.268-.842l1.78-5.33a.75.75 0 0 1 1.423 0l.975 2.938h2.384l.967-2.935a.75.75 0 0 1 .71-.516c.301-.046.612.205.713.513l1.781 5.33a.75.75 0 0 1-.268.843m-.883-11.065H7.783c-3.16 0-5.283 2.222-5.283 5.53v7.939c0 3.308 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.452 11.823a.75.75 0 0 1-.713.516h-3.468a.75.75 0 0 1-.712-.514l-.435-1.313-.894 2.675 3.768 2.762 3.774-2.762-.89-2.667z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitlabBold;
