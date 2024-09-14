import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScrollMouseBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.195 9.295C19.194 5.548 15.966 2.5 11.999 2.5c-1.917 0-3.72.703-5.077 1.98-1.367 1.285-2.119 2.996-2.118 4.817l.001 5.409c.001 3.746 3.229 6.794 7.196 6.794 1.916 0 3.719-.703 5.077-1.981 1.366-1.285 2.118-2.995 2.118-4.816z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.843 10.923a.75.75 0 0 0-1.061 0l-.032.031V8.28l.032.033a.75.75 0 1 0 1.06-1.062l-1.313-1.31a.75.75 0 0 0-1.06 0l-1.312 1.311a.75.75 0 0 0 1.061 1.06l.032-.032v2.674l-.032-.032a.75.75 0 0 0-1.061 0 .75.75 0 0 0 0 1.061l1.304 1.304a.742.742 0 0 0 1.081-.006l1.3-1.297a.75.75 0 0 0 .001-1.06"
    />
  </Svg>
);
export default IconlystScrollMouseBulk;
