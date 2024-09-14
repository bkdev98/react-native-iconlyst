import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsLeftLight = ({
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
      d="M4.084 12c1.423.936 2.15 1.558 3.194 2.693M4.084 12c1.423-.936 2.15-1.558 3.194-2.692M4.084 12h15.831M19.916 15.57c-3.989 0-7.34 1.366-9.751 5.425m0 0-.003.005m.003-.005-.003.001c.102-1.54.05-2.404-.198-3.779m.2 3.778c1.453-.515 2.3-.7 3.689-.833M19.916 8.43c-3.989 0-7.34-1.366-9.751-5.425m0 0L10.162 3m.003.005h-.003c.102 1.538.05 2.403-.198 3.778m.2-3.778c1.453.515 2.3.7 3.689.833"
    />
  </Svg>
);
export default IconlystArrowsLeftLight;
