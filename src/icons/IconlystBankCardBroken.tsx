import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardBroken = ({
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
      d="M12.249 19.46H7.214c-2.444 0-3.964-1.725-3.964-4.167V8.705c0-2.44 1.528-4.166 3.964-4.166h10.071c2.444 0 3.965 1.725 3.965 4.166v6.588c0 2.442-1.52 4.167-3.966 4.167h-1.453M3.25 9.833h15.142"
    />
  </Svg>
);
export default IconlystBankCardBroken;
