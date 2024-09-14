import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleTapTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.307 12.69c.904 2.44.014 5.669-1.57 7.252-2.02 2.021-7.668 2.175-9.517-.125-1.173-1.459-2.085-3.23-2.66-4.816-.308-.851.144-1.769.99-2.093a1.735 1.735 0 0 1 2.05.636l1.134 1.647V6.087a1.587 1.587 0 0 1 3.175-.024l.063 4.106c2.22.212 5.437.097 6.335 2.521"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.584 9.5c-1.087-.64-1.822-1.861-1.822-3.263 0-2.064 1.593-3.737 3.558-3.737s3.558 1.673 3.558 3.737c0 1.38-.712 2.584-1.77 3.232M5.823 8.363a4.74 4.74 0 0 1-.491-2.107c0-.757.177-1.472.491-2.108M16.729 8.363c.314-.636.49-1.35.49-2.107s-.176-1.472-.49-2.108"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDoubleTapTwoTone;
