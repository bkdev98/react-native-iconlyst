import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingAiAlt2TwoTone = ({
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
      d="M10.122 3.039a.505.505 0 0 1 .552.11l.968.972a.505.505 0 0 0 .716 0l.968-.972a.505.505 0 0 1 .552-.11l3.128 1.3a.505.505 0 0 1 .312.467v1.371c0 .28.226.505.505.505h1.371c.204 0 .389.123.467.312l1.3 3.128a.505.505 0 0 1-.11.552l-.972.968a.505.505 0 0 0 0 .716l.972.968a.505.505 0 0 1 .11.552l-1.3 3.128a.505.505 0 0 1-.467.312h-1.371a.505.505 0 0 0-.505.505v1.371a.505.505 0 0 1-.312.467l-3.128 1.3a.505.505 0 0 1-.552-.11l-.968-.972a.505.505 0 0 0-.716 0l-.968.972a.505.505 0 0 1-.552.11l-3.128-1.3a.505.505 0 0 1-.312-.467v-1.371a.505.505 0 0 0-.505-.505H4.806a.505.505 0 0 1-.467-.312l-1.3-3.128a.505.505 0 0 1 .11-.552l.972-.968a.505.505 0 0 0 0-.716l-.972-.968a.505.505 0 0 1-.11-.552l1.3-3.128a.505.505 0 0 1 .467-.312h1.371a.505.505 0 0 0 .505-.505V4.806c0-.204.123-.388.312-.467z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.054 13.979-.1-.274A3.76 3.76 0 0 0 7.73 11.48l-.272-.101.272-.101a3.76 3.76 0 0 0 2.222-2.225l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM15.365 15.22a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystSettingAiAlt2TwoTone;
