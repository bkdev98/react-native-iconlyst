import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconlyProLight = ({
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
      d="M6.83 5.636c3.601-3.515 9.44-3.515 13.042 0l-2.568 2.506c-2.183-2.131-5.723-2.131-7.907 0a5.364 5.364 0 0 0 0 7.717c2.184 2.13 5.724 2.13 7.907 0l2.568 2.505c-3.602 3.515-9.44 3.515-13.042 0a8.85 8.85 0 0 1 0-12.728"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconlyProLight;
