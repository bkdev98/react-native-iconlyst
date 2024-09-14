import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels2Broken = ({
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
      d="M3.586 12v4.464C3.586 19.122 5.242 21 7.903 21h8.696c2.653 0 4.315-1.878 4.315-4.536V7.536C20.914 4.878 19.26 3 16.6 3H7.904C5.242 3 3.586 4.878 3.586 7.536v1.228M7.942 20.977v-3.622m4.287 3.622v-3.622m4.287 3.622v-3.622M3.7 17.352h17.104M20.802 6.648H3.697M7.942 3v3.646M12.23 3v3.646M16.516 3v3.646"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.846 9.323c-.768-.324-1.551.046-1.665.916a16.4 16.4 0 0 0 0 3.519c.104.837.815 1.254 1.665.92a9 9 0 0 0 2.63-1.651c.672-.617.656-1.46 0-2.053"
    />
  </Svg>
);
export default IconlystReels2Broken;
