import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitMergeOutline = ({
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
      d="M6.857 4.75a1.843 1.843 0 1 0 0 3.686 1.843 1.843 0 0 0 0-3.686M3.515 6.592a3.343 3.343 0 1 1 6.685.001 3.343 3.343 0 0 1-6.685 0M17.643 15.465a1.843 1.843 0 1 0 .001 3.685 1.843 1.843 0 0 0 0-3.685m-3.342 1.842a3.343 3.343 0 1 1 6.685.001 3.343 3.343 0 0 1-6.685 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.676 8.434a.75.75 0 0 1 .75.75v10.815a.75.75 0 1 1-1.5 0V9.184a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.64 8.423a.75.75 0 0 1 .785.713 7.69 7.69 0 0 0 7.635 7.317.75.75 0 0 1-.01 1.5c-4.907-.029-8.89-3.896-9.123-8.745a.75.75 0 0 1 .713-.785"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitMergeOutline;
