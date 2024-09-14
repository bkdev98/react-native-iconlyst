import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetouchMagicWandBroken = ({
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
      d="m9.852 11.435 4.113-4.113a2.46 2.46 0 0 1 3.479 0l1.258 1.253c.96.96.96 2.517 0 3.478l-8.225 8.226c-.961.96-2.519.96-3.48 0L5.74 19.026a2.46 2.46 0 0 1 0-3.478l1.552-1.552M12.216 9.07l2.928 2.927M9.767 3.444v.057M5.05 8.18v.039M17.455 19.34v.038M8.877 7.461v-.057"
    />
  </Svg>
);
export default IconlystRetouchMagicWandBroken;
