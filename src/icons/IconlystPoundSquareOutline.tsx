import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoundSquareOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.467 21.813H8.033c-3.309 0-5.533-2.322-5.533-5.777V8.087c0-3.454 2.224-5.775 5.533-5.775h8.435c3.308 0 5.532 2.32 5.532 5.775v7.948c0 3.454-2.224 5.776-5.533 5.776m-8.434-18C5.583 3.813 4 5.49 4 8.088v7.948c0 2.6 1.583 4.276 4.033 4.276h8.434c2.45 0 4.033-1.678 4.033-4.277V8.09c0-2.6-1.583-4.276-4.032-4.276z"
    />
    <Path
      fill={props.color}
      d="M14.45 16.807H9.82a.75.75 0 0 1-.54-1.27q.659-.686 1.239-1.437a1.555 1.555 0 0 0-.122-1.813.75.75 0 1 1 1.164-.945 3.06 3.06 0 0 1 .176 3.63 19 19 0 0 1-.262.335h2.975a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M10.976 12.569a.75.75 0 0 1-.59-.285 3.065 3.065 0 0 1 4.756-3.865.75.75 0 0 1-1.151.96 1.565 1.565 0 0 0-2.427 1.976.75.75 0 0 1-.588 1.214"
    />
    <Path
      fill={props.color}
      d="M13.676 12.951H9.05a.75.75 0 1 1 0-1.5h4.628a.75.75 0 1 1 0 1.5z"
    />
  </Svg>
);
export default IconlystPoundSquareOutline;
