import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalExpandLight = ({
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
      d="M7.527 9.273a1.8 1.8 0 0 0 2.546 0l.127-.128v5.71l-.127-.128a1.8 1.8 0 0 0-2.546 2.546l3.2 3.2a1.8 1.8 0 0 0 2.546 0l3.2-3.2a1.8 1.8 0 0 0-2.546-2.546l-.127.127V9.146l.127.127a1.8 1.8 0 0 0 2.546-2.546l-3.2-3.2A1.8 1.8 0 0 0 11.5 3.07c-.283.082-.55.234-.773.457l-3.2 3.2a1.8 1.8 0 0 0 0 2.546"
    />
  </Svg>
);
export default IconlystArrowsVerticalExpandLight;
