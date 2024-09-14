import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPerviousBulk = ({
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
      fill={props.color}
      d="M5.82 18.467a1 1 0 0 1-1-1V6.532a1 1 0 0 1 2 0v10.935a1 1 0 0 1-1 1"
    />
    <Path
      fill={props.color}
      d="M15.815 18.31c.458.196.929.294 1.384.294a2.9 2.9 0 0 0 1.457-.378c.805-.461 1.322-1.282 1.457-2.322.276-2.465.276-5.088-.001-7.806-.128-1.031-.627-1.853-1.405-2.315-.81-.48-1.833-.515-2.886-.097a19.9 19.9 0 0 0-5.846 3.702l-.003.003c-.8.743-1.24 1.676-1.235 2.627.003.945.443 1.867 1.236 2.592 1.669 1.543 3.636 2.789 5.842 3.7"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPerviousBulk;
