import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockOutline = ({
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
      d="M12.375 2a5.305 5.305 0 0 1 5.009 3.567.75.75 0 1 1-1.418.49A3.805 3.805 0 0 0 12.372 3.5h-.014a3.806 3.806 0 0 0-3.805 3.784l-.001 1.342 7.632.001a4.55 4.55 0 0 1 4.542 4.543v4.288a4.55 4.55 0 0 1-4.542 4.543H8.542A4.547 4.547 0 0 1 4 17.458V13.17a4.55 4.55 0 0 1 3.052-4.292V7.3c.014-2.938 2.39-5.3 5.303-5.3zm3.809 8.127H8.542A3.045 3.045 0 0 0 5.5 13.17v4.288a3.045 3.045 0 0 0 3.042 3.043h7.642a3.046 3.046 0 0 0 3.042-3.043V13.17a3.046 3.046 0 0 0-3.042-3.043m-3.82 3.326a.75.75 0 0 1 .75.75v2.222a.75.75 0 0 1-1.5 0v-2.222a.75.75 0 0 1 .75-.75"
    />
  </Svg>
);
export default IconlystUnlockOutline;
