import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitMergeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.607 9.185a2.593 2.593 0 1 1 0-5.186 2.593 2.593 0 0 1 0 5.186M17.393 19.9a2.593 2.593 0 1 1 .001-5.186 2.593 2.593 0 0 1 0 5.186"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.426 9.184v10.815M6.426 9.172a8.44 8.44 0 0 0 8.38 8.031"
    />
  </Svg>
);
export default IconlystGitMergeLight;
