import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallWarningBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.967 17.447c-.011-.97-.736-1.661-1.74-2.62a38 38 0 0 1-.8-.777c-1.292-1.289-2.366-.87-3.313-.498-1.083.424-2.102.829-3.967-1.04-1.863-1.86-1.463-2.88-1.04-3.962.37-.948.79-2.022-.504-3.319-.285-.285-.542-.556-.78-.805-.951-1-1.638-1.725-2.605-1.737-.826.032-1.715.522-3.025 1.832-.014.014-.082.082-.094.097-.29.285-1.06 1.04-1.066 2.51-.01 2.297 1.845 5.323 5.513 8.99 3.654 3.656 6.67 5.509 8.965 5.509h.03c1.473-.011 2.225-.787 2.508-1.078l.092-.09c1.306-1.302 1.835-2.175 1.826-3.012M16.861 8.385a.75.75 0 0 0-.75.75v.061c0 .414.336.72.75.72s.75-.367.75-.78a.75.75 0 0 0-.75-.75M16.855 7.265a.75.75 0 0 0 .75-.75v-3.39a.75.75 0 0 0-1.5 0v3.39c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallWarningBold;
