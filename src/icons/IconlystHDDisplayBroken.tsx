import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDDisplayBroken = ({
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
      d="M12.084 17.173H7.112a4.03 4.03 0 0 1-4.028-4.03V7.688a4.03 4.03 0 0 1 4.028-4.029h9.943a4.03 4.03 0 0 1 4.029 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029H15.57M7.588 20.344h8.991M7.868 8.035v4.99m0-2.495h3.327m0-2.495v4.99"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.521 13.026h-.832v-4.99h.832a2.495 2.495 0 0 1 0 4.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHDDisplayBroken;
