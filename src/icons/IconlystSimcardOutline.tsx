import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSimcardOutline = ({
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
      d="M4.185 6.72a4.47 4.47 0 0 1 4.47-4.47h5.068c.763 0 1.493.31 2.02.861l3.792 3.95c.5.52.78 1.215.78 1.938v8.28a4.47 4.47 0 0 1-4.47 4.471h-7.19a4.47 4.47 0 0 1-4.47-4.472zm4.47-2.97a2.97 2.97 0 0 0-2.97 2.97v10.558a2.97 2.97 0 0 0 2.97 2.972h7.19a2.97 2.97 0 0 0 2.97-2.97V9c0-.336-.13-.659-.362-.901l-3.792-3.95a1.3 1.3 0 0 0-.938-.399zm5.69 7.01a.75.75 0 0 1 0 1.06l-1.036 1.035 1.035 1.034a.75.75 0 0 1-1.061 1.061l-1.034-1.034-1.034 1.034a.75.75 0 1 1-1.06-1.061l1.033-1.033-1.034-1.035a.75.75 0 1 1 1.06-1.06l1.035 1.034 1.035-1.035a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSimcardOutline;
