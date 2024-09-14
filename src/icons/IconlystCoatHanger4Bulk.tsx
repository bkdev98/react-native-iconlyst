import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger4Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="m15.516 12.04 3.78 1.564.001.001a1.542 1.542 0 0 1-.592 2.968h-1.024l.003.114v1.386h1.021a3.042 3.042 0 0 0 1.173-5.851l-3.786-1.567a.75.75 0 0 1-.576 1.385M6.313 16.573l-.004.114v1.386H5.286a3.04 3.04 0 0 1-3.036-3.036v-.09a3.03 3.03 0 0 1 1.855-2.798l2.647-1.123a.75.75 0 0 0 .583 1.382l-2.652 1.126a1.53 1.53 0 0 0-.933 1.413v.09c0 .845.69 1.536 1.536 1.536z" />
    </G>
    <Path
      fill={props.color}
      d="M10.572 6.11c0-.92.866-1.65 1.857-1.39.455.121.846.507.973.961.224.8-.2 1.519-.854 1.772l-.005.002c-.74.293-1.275.995-1.275 1.84v.486a.75.75 0 0 0 .463.693l3.784 1.566a.75.75 0 0 0 .574-1.386L12.77 9.28a.49.49 0 0 1 .324-.43 2.944 2.944 0 0 0 1.754-3.572 2.93 2.93 0 0 0-2.032-2.008l-.003-.001a2.954 2.954 0 0 0-3.74 2.84.75.75 0 0 0 1.5 0M9.989 11.282A.75.75 0 0 0 9.403 9.9l-2.65 1.125a.75.75 0 1 0 .585 1.38zM6.309 16.687c0-.983.797-1.78 1.78-1.78h7.815c.983 0 1.78.797 1.78 1.78v2.368a1.78 1.78 0 0 1-1.78 1.78H8.089a1.78 1.78 0 0 1-1.78-1.78z"
    />
  </Svg>
);
export default IconlystCoatHanger4Bulk;
