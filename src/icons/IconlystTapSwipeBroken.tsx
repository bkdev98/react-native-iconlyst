import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapSwipeBroken = ({
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
      d="M3.716 8.311c.59-1.033 2.185-3.213 5.325-3.03M6.765 8.044c.41-.176 1.083-.227 1.713.256M13.02 20.99a10 10 0 0 1-.832-.115c-1.44-.266-2.833-.868-3.824-1.705-1.352-1.144-2.67-2.726-3.446-3.719a1.84 1.84 0 0 1-.167-1.98 1.93 1.93 0 0 1 3.073-.489l.996.985a.633.633 0 0 0 1.058-.289l2.475-9.436a1.654 1.654 0 0 1 3.206.815l-1.022 4.156c2.183.801 5.455 1.536 5.72 4.217.266 2.698-1.484 5.718-3.499 6.895"
    />
  </Svg>
);
export default IconlystTapSwipeBroken;
