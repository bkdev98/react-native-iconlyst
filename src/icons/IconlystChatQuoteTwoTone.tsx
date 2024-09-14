import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatQuoteTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.756 20.494-1.422-1.426a2.15 2.15 0 0 0-1.525-.634H7.74a3.947 3.947 0 0 1-3.94-3.953v-6.94A3.946 3.946 0 0 1 7.74 3.59h10.122a3.945 3.945 0 0 1 3.939 3.952v6.94a3.946 3.946 0 0 1-3.939 3.952h-1.068c-.572 0-1.121.227-1.526.634l-1.422 1.426c-.577.58-1.512.58-2.09 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.652 14.307a5.1 5.1 0 0 0 1.927-2.784c.21-.778.215-1.67-.25-2.33a1.93 1.93 0 0 0-2.043-.732c-1.355.375-1.796 2.104-.88 3.14.349.393.86.637 1.384.661M15.615 14.307a5.1 5.1 0 0 0 1.926-2.784c.212-.778.215-1.67-.249-2.33a1.93 1.93 0 0 0-2.043-.732c-1.355.375-1.796 2.104-.88 3.14.349.393.86.637 1.384.661"
    />
  </Svg>
);
export default IconlystChatQuoteTwoTone;
