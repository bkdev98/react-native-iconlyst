import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudShieldBroken = ({
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
      d="M18.814 17.399a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.139-4.103-4.141 0-1.632-1.28-4.898-4.897-4.898M5.686 17.399a4.14 4.14 0 0 1-2.436-3.774c0-2.596 1.833-4.121 4.103-4.141 0-.85.347-2.143 1.19-3.187M15.28 16.613c0 2.53-3.03 3.448-3.03 3.448s-3.031-.918-3.031-3.448c0-2.531-.111-2.451.132-2.694.244-.245 2.5-1.032 2.898-1.032s2.898 1.032 2.898 1.032"
    />
  </Svg>
);
export default IconlystCloudShieldBroken;
