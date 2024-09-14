import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLockOutline = ({
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
      d="M14.908 22.722H9.393a4.37 4.37 0 0 1-4.367-4.367V7.59a4.37 4.37 0 0 1 4.367-4.368h1.278a.75.75 0 1 1 0 1.5H9.393A2.87 2.87 0 0 0 6.526 7.59v10.764a2.87 2.87 0 0 0 2.867 2.867h5.515a2.87 2.87 0 0 0 2.868-2.868V13.89a.75.75 0 0 1 1.5 0v4.464a4.373 4.373 0 0 1-4.368 4.368"
    />
    <Path
      fill={props.color}
      d="M17.184 12.216h-3.1a2.29 2.29 0 0 1-2.29-2.29V8.185a2.29 2.29 0 0 1 2.29-2.29h3.1a2.293 2.293 0 0 1 2.29 2.29v1.74a2.293 2.293 0 0 1-2.29 2.29m-3.1-4.821a.79.79 0 0 0-.79.79v1.74a.79.79 0 0 0 .79.79h3.1a.79.79 0 0 0 .79-.79v-1.74a.79.79 0 0 0-.79-.79z"
    />
    <Path
      fill={props.color}
      d="M17.485 7.426a.75.75 0 0 1-.75-.75v-.873a1.1 1.1 0 0 0-.333-.766 1 1 0 0 0-.78-.313 1.1 1.1 0 0 0-1.09 1.083v.87a.75.75 0 1 1-1.5 0v-.882a2.6 2.6 0 0 1 5.2 0v.882a.75.75 0 0 1-.747.75M12.152 19.235a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02"
    />
  </Svg>
);
export default IconlystPhoneLockOutline;
