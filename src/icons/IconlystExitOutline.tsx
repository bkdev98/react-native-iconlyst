import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExitOutline = ({
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
      d="M7.409 3.5c-.933 0-1.659.734-1.659 1.604v15.212a.75.75 0 0 1-1.5 0V5.104C4.25 3.374 5.68 2 7.409 2h9.182c1.729 0 3.159 1.374 3.159 3.104v12.333a.75.75 0 0 1-1.5 0V5.104c0-.87-.726-1.604-1.659-1.604z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.698 2.817c2.069-.42 4.052 1.12 4.052 3.239v12.636c0 2.118-1.983 3.658-4.052 3.239l-5.131-1.04.149-.735-.15.735c-1.553-.315-2.688-1.658-2.688-3.24V7.097c0-1.581 1.135-2.924 2.689-3.239zm2.552 3.239c0-1.125-1.07-2.009-2.254-1.769l-5.131 1.04c-.879.178-1.487.926-1.487 1.769v10.556c0 .843.608 1.59 1.487 1.768l5.131 1.04c1.184.24 2.254-.643 2.254-1.768z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 10.783a.75.75 0 0 1 .75.75v1.682a.75.75 0 0 1-1.5 0v-1.682a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExitOutline;
