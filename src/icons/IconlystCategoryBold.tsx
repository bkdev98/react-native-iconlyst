import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoryBold = ({
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
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M7.92 13.47c1.41 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.13 2.56-2.54 2.56H4.54C3.14 22 2 20.85 2 19.44v-3.41c0-1.42 1.14-2.56 2.54-2.56Zm11.54 0c1.4 0 2.54 1.14 2.54 2.56v3.41c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56v-3.41c0-1.42 1.13-2.56 2.54-2.56ZM7.92 2c1.41 0 2.54 1.15 2.54 2.561V7.97c0 1.42-1.13 2.56-2.54 2.56H4.54C3.14 10.53 2 9.39 2 7.97V4.561C2 3.15 3.14 2 4.54 2Zm11.54 0C20.86 2 22 3.15 22 4.561V7.97c0 1.42-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.14-2.54-2.56V4.561A2.55 2.55 0 0 1 16.08 2Z"
    />
  </Svg>
);
export default IconlystCategoryBold;
