import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarProgressTwoTone = ({
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
      d="m11.32 5.719.446-.9a.82.82 0 1 1 .734-.45M13.234 4.818l2.338 4.716 5.227.756c.672.1.939.918.454 1.386L17.47 15.34l.892 5.175c.115.666-.588 1.17-1.187.855l-4.675-2.439-1.415.738M12.5 18.93V4.368"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.804 19.552-.167.963c-.114.665.588 1.17 1.187.855l.763-.397M7.328 16.519l.202-1.18-.626-.603M5.029 12.919l-1.28-1.242c-.487-.468-.219-1.287.452-1.386l.999-.145M8 9.74l1.428-.206.724-1.458"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarProgressTwoTone;
