import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSyringeBroken = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.169 10.96a4.86 4.86 0 0 0 6.872 6.872l4.753-4.753c1.125-1.125 1.218-2.62.093-3.745l-3.22-3.22c-1.123-1.123-2.62-1.032-3.745.093l-1.98 1.979M6.169 17.832 3 21M17.315 3l3.684 3.685M19.158 4.842l-2.88 2.88M12.176 14.815l1.942 1.941M13.566 11.522l2.893 2.892"
    />
  </Svg>
);
export default IconlystSyringeBroken;
