import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookBroken = ({
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
      d="M19.96 6.422a2.435 2.435 0 0 0-2.436-2.436H7.477A2.435 2.435 0 0 0 5.04 6.422v8.005l-1.427 3.102a1.847 1.847 0 0 0 1.735 2.483h14.302a1.847 1.847 0 0 0 1.735-2.483l-1.426-3.102v-4.003M11.193 17.254h2.616M19.943 14.428H8.036"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookBroken;
