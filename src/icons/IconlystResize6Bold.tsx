import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize6Bold = ({
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
      d="M9.975 15.011v-.002l-.001-.002v-.002q-.02-.076-.05-.148a1 1 0 0 0-.179-.282h-.001a1.1 1.1 0 0 0-.352-.25h-.001a1 1 0 0 0-.364-.078h-.028999999999999998l-3.675.007a1 1 0 0 0 .002 2h.002l1.256-.002-2.29 2.29a.999.999 0 1 0 1.414 1.414l2.29-2.29-.003 1.255a1 1 0 0 0 .998 1.002h.002a1 1 0 0 0 1-.997l.009-3.675v-.026l-.001-.003a1 1 0 0 0-.027-.21M19.707 18.545l-2.29-2.29 1.254.003h.002a1 1 0 0 0 .002-2l-3.672-.008h-.013a1 1 0 0 0-.994 1.002l.008 3.677a1 1 0 0 0 1 .998h.002a1 1 0 0 0 .998-1.002L16 17.668l2.292 2.291a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414M8.996 4.575h-.002a1 1 0 0 0-.998 1.002l.002 1.257-2.291-2.29a.999.999 0 1 0-1.414 1.413l2.289 2.29-1.253-.003h-.002a1 1 0 0 0-.002 2l3.631.008.047.001a1 1 0 0 0 .703-.29l.005-.004c.188-.188.293-.444.293-.709l-.008-3.677a1 1 0 0 0-1-.998M14.024 9.488v.004q.002.001 0 .002.02.076.05.148a1 1 0 0 0 .18.282v.001a1.1 1.1 0 0 0 .354.25q.17.072.364.077c.005-.006.016.001.024.001H15l3.675-.008a1 1 0 0 0-.002-2h-.002l-1.256.002 2.29-2.29a.999.999 0 1 0-1.414-1.414l-2.29 2.29.003-1.255a1 1 0 0 0-.998-1.002h-.002a1 1 0 0 0-1 .997l-.01 3.675v.026q.003.002.002.003 0 .108.027.211"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize6Bold;
