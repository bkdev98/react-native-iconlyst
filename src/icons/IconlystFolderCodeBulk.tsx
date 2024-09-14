import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderCodeBulk = ({
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
      d="M16.395 5.363h-2.652a1.66 1.66 0 0 1-1.314-.658l-.855-1.137a2.65 2.65 0 0 0-2.111-1.056H7.588C4.164 2.512 2.5 4.418 2.5 8.339v7.314c0 3.653 2.185 5.833 5.845 5.833h7.296c3.653 0 5.833-2.18 5.833-5.83l.026-4.66c0-3.843-1.622-5.633-5.105-5.633"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.591 13.664-2.176 2.176a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.06L15 13.134l-1.613-1.613a.75.75 0 1 1 1.061-1.061l2.143 2.143a.75.75 0 0 1 0 1.061m-5.944 2.176a.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22L7.41 13.664a.75.75 0 0 1 0-1.061l2.143-2.143a.75.75 0 1 1 1.061 1.061l-1.613 1.613 1.646 1.646a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderCodeBulk;
