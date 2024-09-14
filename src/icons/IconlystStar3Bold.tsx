import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar3Bold = ({
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
      d="M10.533 2.892a2.94 2.94 0 0 1 2.934 0l5.686 3.283a2.94 2.94 0 0 1 1.468 2.543v6.565c0 1.048-.56 2.017-1.468 2.54l-5.686 3.284a2.93 2.93 0 0 1-2.934 0l-5.686-3.283a2.94 2.94 0 0 1-1.468-2.542V8.719c0-1.05.56-2.018 1.468-2.543zm2.217 6.06a.75.75 0 0 0-1.5 0v1.715l-1.465-.89a.75.75 0 0 0-.78 1.282l1.55.941-1.55.942a.75.75 0 0 0 .779 1.282l1.466-.89v1.714a.75.75 0 0 0 1.5 0v-1.714l1.465.89a.75.75 0 0 0 .78-1.282L13.443 12l1.55-.941a.75.75 0 1 0-.78-1.282l-1.464.89z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar3Bold;
