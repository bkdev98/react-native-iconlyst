import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderTwoTone = ({
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
      <Path d="M21.945 15.758c0 3.578-2.109 5.687-5.687 5.687H8.472c-3.588 0-5.696-2.109-5.696-5.687V7.963c0-3.579 1.314-5.687 4.892-5.687h2c.718 0 1.394.338 1.825.913l.913 1.214a2.29 2.29 0 0 0 1.825.912h2.83c3.587 0 4.911 1.826 4.911 5.477z" />
      <Path d="M7.559 14.489h9.593" opacity={0.4} />
    </G>
  </Svg>
);
export default IconlystFolderTwoTone;
