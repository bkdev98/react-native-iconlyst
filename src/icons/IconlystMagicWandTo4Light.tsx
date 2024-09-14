import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicWandTo4Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.455 3.55c2.466.445 4.593 1.955 5.59 4.262 1.153 2.666.497 5.7-1.432 7.933M8.196 12.653a1.692 1.692 0 1 1 2.773-1.941l1.213 1.733 4.126 5.892a1.693 1.693 0 0 1-2.773 1.941l-4.126-5.892zM9.41 14.386l2.772-1.941M5.108 7.427C3.75 9.168 3.132 11.331 3.48 13.415"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.167 3 .082.223c.31.839.971 1.5 1.81 1.811l.221.082-.222.083A3.06 3.06 0 0 0 10.25 7.01l-.082.223-.082-.223c-.31-.84-.97-1.5-1.809-1.811l-.222-.083.222-.082a3.06 3.06 0 0 0 1.809-1.811z"
    />
  </Svg>
);
export default IconlystMagicWandTo4Light;
