import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroomBold = ({
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
      fillRule="evenodd"
      d="M12.184 7.016c-.41 0-.75-.33-.75-.74v-.01c0-.42.34-.75.75-.75.42 0 .75.33.75.75 0 .41-.33.75-.75.75m7.73 3.77a2.28 2.28 0 0 0-1.61-.67h-.01l-1.74.01c-.45 0-.89-.2-1.19-.54s-.44-.79-.39-1.25l.25-2.12c0-1.67-1.37-3.04-3.04-3.04-1.68 0-3.04 1.37-3.04 3.1l.25 2.05c.05.45-.09.91-.39 1.25-.31.35-.74.54-1.2.54h-1.73c-1.26 0-2.27 1.02-2.28 2.27 0 .61.24 1.19.67 1.62s1 .67 1.61.67h12.23c1.25 0 2.27-1.03 2.27-2.28 0-.61-.23-1.18-.66-1.61M19.416 16.735V15.8a.5.5 0 0 0-.5-.5H5.453a.5.5 0 0 0-.5.5v.956a6.04 6.04 0 0 1-.942 3.511 1.27 1.27 0 0 0-.102 1.156c.154.371.48.64.82.715.096.038.096.038 1.32.04h.008c.859 0 1.646-.432 2.106-1.156l.369-.58.035.476a1.366 1.366 0 0 0 1.355 1.261h1.17c8.408-.004 8.408-.004 8.476-.019.412-.097.738-.366.892-.738s.117-.793-.132-1.198c-.298-.457-.983-1.709-.912-3.488"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBroomBold;
