import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProfileOutline = ({
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
      fillRule="evenodd"
      d="M19.84 18.193c0 3.296-4.52 3.677-7.92 3.677h-.242C9.512 21.865 4 21.728 4 18.173c0-3.229 4.338-3.66 7.711-3.676h.453c2.166.005 7.676.141 7.676 3.696m-7.92-2.197c-4.26 0-6.42.732-6.42 2.177 0 1.458 2.16 2.197 6.42 2.197s6.42-.732 6.42-2.177c0-1.458-2.16-2.197-6.42-2.197M11.92 2a5.315 5.315 0 0 1 5.31 5.31 5.314 5.314 0 0 1-5.31 5.309h-.031a5.3 5.3 0 0 1-5.28-5.312A5.316 5.316 0 0 1 11.922 2m0 1.428A3.887 3.887 0 0 0 8.039 7.31a3.873 3.873 0 0 0 3.854 3.882l.029.714v-.714A3.886 3.886 0 0 0 15.8 7.31a3.886 3.886 0 0 0-3.88-3.882"
    />
  </Svg>
);
export default IconlystProfileOutline;
