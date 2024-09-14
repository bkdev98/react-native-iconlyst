import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullRequestBold = ({
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
      d="M7.29 3.625a2.85 2.85 0 0 1 2.849 2.848c0 1.31-.893 2.404-2.098 2.736v5.582a2.845 2.845 0 0 1 2.098 2.735 2.85 2.85 0 0 1-2.848 2.849 2.85 2.85 0 0 1-2.848-2.849c0-1.309.893-2.403 2.098-2.735V9.209a2.845 2.845 0 0 1-2.098-2.736A2.85 2.85 0 0 1 7.29 3.625M17.501 11.24v3.564a2.844 2.844 0 0 1 2.056 2.722 2.853 2.853 0 0 1-2.848 2.849 2.853 2.853 0 0 1-2.849-2.85c0-1.324.914-2.43 2.141-2.747V11.24a3.17 3.17 0 0 0-.935-2.257L13.23 7.148v1.475a.75.75 0 1 1-1.5 0V5.339l.001-.001a.8.8 0 0 1 .058-.287.8.8 0 0 1 .118-.18l.02-.03a.2.2 0 0 1 .023-.034q.027-.024.058-.04.02-.011.04-.024l.033-.025a.5.5 0 0 1 .111-.071.7.7 0 0 1 .293-.058l3.28-.001a.75.75 0 1 1 0 1.5h-1.473l1.835 1.836a4.66 4.66 0 0 1 1.374 3.317"
    />
  </Svg>
);
export default IconlystGitPullRequestBold;
