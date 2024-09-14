import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperUploadBroken = ({
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
      d="M4.25 11V6.49a3.82 3.82 0 0 1 3.834-3.728h6.652l5.066 5.276v9.19a3.867 3.867 0 0 1-3.73 3.887H7.974a3.807 3.807 0 0 1-3.724-3.887v-2.685"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.475 2.75v2.91a2.575 2.575 0 0 0 2.569 2.574M11.64 9.909v6.04M13.986 12.264 11.641 9.91l-2.345 2.355"
    />
  </Svg>
);
export default IconlystPaperUploadBroken;
