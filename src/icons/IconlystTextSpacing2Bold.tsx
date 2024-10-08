import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextSpacing2Bold = ({
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
      d="M9.019 19.119a1 1 0 0 1-1-1V6.879h-5.02a1 1 0 0 1 0-2h12.157a1 1 0 1 1 0 2h-5.137v11.24a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.455 16.508a1 1 0 0 1-.707-.293l-1.871-1.87h-.001l-.001-.002h-.001l-.002-.002v-.001l-.001-.001-.001-.001-.001-.001-.002-.002c-.001-.001.002.006-.002-.003l-.002-.002-.002-.002h-.001c-.001-.002-.003 0-.002-.003q-.003-.001-.002-.002-.003-.002-.002-.002l-.002-.001-.002-.003-.002-.002-.003-.003-.002-.002-.002-.002-.002-.003-.002-.002-.002-.003-.003-.002-.002-.003-.001-.002a1 1 0 0 1-.131-.19l-.003-.006-.001-.002-.002-.003-.001-.003-.001-.003-.002-.003-.001-.002v-.001l-.002-.002-.001-.003-.001-.003-.001-.002q-.001 0-.002-.003l-.001-.002-.001-.003c-.001-.001.002-.003-.002-.003l-.001-.003-.001-.003-.001-.003-.002-.002v-.001l-.001-.002v-.001l-.001-.002s.001.008-.001-.003h-.001l-.001-.003-.001-.003-.001-.003-.001-.001-.001-.004-.001-.002-.001-.001a1 1 0 0 1 0-.768l.001-.001.001-.002s.004.008.001-.003l.001-.003.001-.003.001-.003.001-.002h.001l.001-.003.001-.002v-.001l.001-.002c.001 0 .004.007.001-.003h.001l.001-.003.001-.003.001-.003.002-.003.001-.002v-.001l.001-.002.002-.003.002-.006.001-.003.002-.002.001-.002.002-.003.001-.003.001-.003.002-.003.001-.002.003-.006a1 1 0 0 1 .131-.19l.001-.002.002-.003.003-.002.002-.003.002-.002.002-.002v-.001l.002-.002.002-.002s-.004.008.003-.003l.002-.002.001-.002.001-.001.002-.002q.001 0 .002-.002s-.005 0 .002-.002q0-.002.002-.003h.001l.002-.002.002-.001.002-.003q-.002 0 .002-.002l.001-.001s.004.007.002-.002v-.001l.002-.002h.001l.001-.002h.001l1.871-1.87a1 1 0 1 1 1.414 1.414l-.163.163h3.587l-.163-.163a.999.999 0 1 1 1.414-1.414l1.87 1.87.002.002.003.003.002.002.002.002a.99.99 0 0 1 .207 1.083 1 1 0 0 1-.207.313l-.003.002-.001.002-.003.003-.002.002-1.87 1.87a.999.999 0 1 1-1.414-1.414l.163-.163h-3.587l.163.163a1 1 0 0 1-.707 1.707"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextSpacing2Bold;
