import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.999 14.246h-.003l-2.673.006a1 1 0 0 0 .002 2h.002l1.258-.003-2.292 2.291a.999.999 0 1 0 1.414 1.414l2.29-2.29-.003 1.254a1 1 0 0 0 .997 1.003h.003a1 1 0 0 0 1-.998l.007-2.673a1.99 1.99 0 0 0-.586-1.418 2 2 0 0 0-1.416-.586M15.999 10.25h.003l2.673-.007a1 1 0 0 0-.002-2h-.002l-1.253.003 2.289-2.289a.999.999 0 1 0-1.414-1.414l-2.292 2.292.003-1.259c.001-.554-.484-.995-1-1.002a1 1 0 0 0-1 .998l-.006 2.673a1.99 1.99 0 0 0 .586 1.418c.378.378.88.586 1.415.586M5.01 9.925h.002a1 1 0 0 0 .998-1.002L6.004 6.25l2.673.006h.002a1 1 0 0 0 .002-2L6.008 4.25h-.004c-.534 0-1.036.208-1.414.586a1.99 1.99 0 0 0-.586 1.418l.006 2.673a1 1 0 0 0 1 .998M18.991 14.57h-.002a1 1 0 0 0-.998 1.002l.006 2.673-2.673-.006h-.002a1 1 0 0 0-.002 2l2.673.006h.004c.534 0 1.036-.208 1.414-.586.38-.379.587-.882.586-1.418l-.006-2.673a1 1 0 0 0-1-.998"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize3Bold;
