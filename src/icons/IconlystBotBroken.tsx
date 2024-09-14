import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBotBroken = ({
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
      d="M15.18 17.836c2.049 0 3.323-1.446 3.323-3.493v-3.26c0-2.045-1.274-3.491-3.323-3.491H9.32c-2.042 0-3.323 1.446-3.323 3.492v3.26c0 2.046 1.275 3.492 3.323 3.492h2.224M12.25 3a1.257 1.257 0 1 0 1.257 1.257M12.25 7.592V5.514M10.002 11.157v-.01M14.497 11.157v-.01M10.872 14.402h2.756M8.295 21c.94-.545 2.367-.896 3.957-.896s3.009.35 3.949.896M20.797 11.252v2.776M3.703 11.252v2.776"
    />
  </Svg>
);
export default IconlystBotBroken;
