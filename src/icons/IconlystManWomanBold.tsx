import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManWomanBold = ({
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
      d="M7.633 4.185a1 1 0 0 0-1.416 0L3.749 6.66a1 1 0 0 0 1.417 1.412l.76-.763v3.052a4.926 4.926 0 1 0 2 0v-3.05l.757.76A1 1 0 0 0 10.1 6.661zm4.516 4.74a4.925 4.925 0 1 1 5.924 4.823v1.955h.963a1 1 0 1 1 0 2h-.963v1.166a1 1 0 1 1-2 0v-1.166h-.963a1 1 0 1 1 0-2h.963v-1.955a4.926 4.926 0 0 1-3.924-4.823m4.955 2.924h-.06a2.925 2.925 0 1 1 .06 0m-10.178.411a2.925 2.925 0 1 0-.002 5.85 2.925 2.925 0 0 0 .002-5.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystManWomanBold;
