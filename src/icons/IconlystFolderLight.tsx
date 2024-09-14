import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M21.419 15.732c0 3.578-2.11 5.687-5.687 5.687H7.95c-3.587 0-5.7-2.109-5.7-5.687v-7.8c0-3.573 1.314-5.682 4.893-5.682h2a2.28 2.28 0 0 1 1.824.913l.913 1.214a2.29 2.29 0 0 0 1.826.913h2.83c3.587 0 4.91 1.826 4.91 5.477zM7.481 14.463h8.735" />
    </G>
  </Svg>
);
export default IconlystFolderLight;
