import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarProgressBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.82 5.719.446-.9a.82.82 0 1 1 .734-.45M12.734 4.818l2.338 4.716 5.227.756c.672.1.94.918.454 1.386l-1.578 1.528M16.97 15.339l.893 5.175c.115.667-.588 1.17-1.187.855l-4.675-2.439-1.415.738M12 16.27V4.369M6.304 19.552l-.167.963c-.114.665.588 1.17 1.187.855l.763-.397M6.828 16.519l.202-1.18-.626-.603M4.529 12.919l-1.28-1.242c-.487-.468-.219-1.287.452-1.386l.999-.145M7.5 9.74l1.428-.206.724-1.458"
    />
  </Svg>
);
export default IconlystStarProgressBroken;
