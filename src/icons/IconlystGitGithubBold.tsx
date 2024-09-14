import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitGithubBold = ({
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
      d="M17.357 10.498a2.76 2.76 0 0 0-1.746.629l-3.78-2.701c.134-.324.21-.677.21-1.048a2.783 2.783 0 0 0-2.78-2.779c-.695 0-1.324.266-1.812.69l-2.4-1.712a.75.75 0 0 0-.87 1.22l2.445 1.746a2.8 2.8 0 0 0-.142.835c0 1.271.862 2.334 2.029 2.664v5.077a2.775 2.775 0 0 0-2.03 2.664 2.783 2.783 0 0 0 2.78 2.779 2.783 2.783 0 0 0 2.78-2.779 2.776 2.776 0 0 0-2.03-2.664v-5.077a2.7 2.7 0 0 0 .894-.434l3.838 2.743c-.104.29-.165.6-.165.926a2.78 2.78 0 0 0 2.779 2.779 2.78 2.78 0 0 0 2.779-2.779 2.78 2.78 0 0 0-2.78-2.779"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitGithubBold;
