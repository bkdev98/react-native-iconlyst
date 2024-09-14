import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperFailOutline = ({
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
      d="M13.974 2q.065 0 .126.011h.136c.204 0 .4.084.541.23l5.066 5.28a.75.75 0 0 1 .209.519v9.3a4.53 4.53 0 0 1-4.471 4.526H7.543c-1.2 0-2.336-.464-3.192-1.312a4.52 4.52 0 0 1-1.352-3.21V6.49a4.484 4.484 0 0 1 4.48-4.48h6.369a1 1 0 0 1 .126-.01m-.75 1.511H7.478a2.983 2.983 0 0 0-2.98 2.98V17.34c.006.81.328 1.575.907 2.148.577.57 1.375.899 2.16.879h.062l7.945-.001a3.027 3.027 0 0 0 2.979-3.025V8.983l-2.011.001a3.33 3.33 0 0 1-3.317-3.325zm-3.085 7.142 1.204 1.203 1.203-1.203a.749.749 0 1 1 1.06 1.06l-1.203 1.203 1.202 1.202a.749.749 0 1 1-1.06 1.06l-1.203-1.202-1.202 1.202a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l1.202-1.202-1.203-1.203a.749.749 0 1 1 1.06-1.06m4.585-6.3v1.306c0 1.004.816 1.822 1.819 1.825h1.186z"
    />
  </Svg>
);
export default IconlystPaperFailOutline;
