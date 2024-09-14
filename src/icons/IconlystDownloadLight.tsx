import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownloadLight = ({
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
      <Path d="M12.122 15.436V3.396M15.038 12.508l-2.916 2.928-2.916-2.928" />
      <Path d="M16.755 8.128h.933a3.684 3.684 0 0 1 3.684 3.685v4.884a3.675 3.675 0 0 1-3.675 3.675H6.557a3.685 3.685 0 0 1-3.685-3.685v-4.885a3.675 3.675 0 0 1 3.675-3.674h.942" />
    </G>
  </Svg>
);
export default IconlystDownloadLight;
