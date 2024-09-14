import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdCheckBroken = ({
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
      d="M3.25 12.657v-3.95c0-2.443 1.52-4.168 3.965-4.168h4.907M12.873 19.46h4.413c2.444 0 3.964-1.725 3.964-4.167V8.706c0-2.442-1.527-4.167-3.965-4.167h-1.671M18.256 9.833H3.25M3.729 17.237l2.22 2.224 4.573-4.576"
    />
  </Svg>
);
export default IconlystBankCarrdCheckBroken;
