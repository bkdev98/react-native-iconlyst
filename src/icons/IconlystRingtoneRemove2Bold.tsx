import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneRemove2Bold = ({
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
      d="m19.524 12.802.466.99a2.77 2.77 0 0 1-.167 2.675 2.77 2.77 0 0 1-2.351 1.292h-1.625l.001.008.002.008a3.855 3.855 0 0 1-3.851 3.85 3.853 3.853 0 0 1-3.848-3.85l.001-.008.002-.008H6.529a2.77 2.77 0 0 1-2.35-1.292 2.77 2.77 0 0 1-.168-2.675l.466-.99a4.84 4.84 0 0 0 .457-2.043V9.441c0-3.896 3.17-7.066 7.066-7.066s7.067 3.17 7.067 7.066v1.318c0 .702.159 1.409.457 2.043m-7.525 7.323a2.354 2.354 0 0 0 2.352-2.358l.002-.008H9.648l.001.008.002.008a2.35 2.35 0 0 0 2.348 2.35m-.955-11.386a.75.75 0 0 0-1.06 1.06l.956.957-.957.957a.75.75 0 0 0 1.061 1.06l.956-.956.956.955a.75.75 0 0 0 1.06-1.06l-.955-.956.955-.955a.75.75 0 1 0-1.06-1.06L12 9.695z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneRemove2Bold;
